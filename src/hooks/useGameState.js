import { useState, useCallback, useEffect } from 'react';
import { generateChallenge } from '../data/stagingData';

const STORAGE_KEY = 'staging-game-progress';

// Load progress from localStorage
function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Failed to load progress:', e);
  }
  return {
    totalScore: 0,
    gamesPlayed: 0,
    correctMatches: 0,
    incorrectMatches: 0,
    bestStreak: 0,
    completedChallenges: []
  };
}

// Save progress to localStorage
function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn('Failed to save progress:', e);
  }
}

export function useGameState() {
  // Game configuration
  const [gameMode, setGameMode] = useState(null); // 'tStaging', 'nStaging', 'stageGrouping', 'siteIdentification'
  const [difficulty, setDifficulty] = useState('easy');
  const [selectedSite, setSelectedSite] = useState(null);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [explanationMode, setExplanationMode] = useState(true);

  // Game state
  const [gameStatus, setGameStatus] = useState('menu'); // 'menu', 'playing', 'paused', 'finished'
  const [challenge, setChallenge] = useState(null);
  const [matches, setMatches] = useState({}); // { itemId: { category, correct, timestamp } }
  const [currentStreak, setCurrentStreak] = useState(0);
  const [showExplanation, setShowExplanation] = useState(null); // Item to show explanation for

  // Score state
  const [roundScore, setRoundScore] = useState(0);
  const [roundCorrect, setRoundCorrect] = useState(0);
  const [roundIncorrect, setRoundIncorrect] = useState(0);

  // Timer state
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [timerActive, setTimerActive] = useState(false);

  // Persistent progress
  const [progress, setProgress] = useState(loadProgress);

  // Save progress when it changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // Timer countdown
  useEffect(() => {
    let interval;
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setTimerActive(false);
            finishGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeRemaining]);

  // Start a new game
  const startGame = useCallback((mode, diff, site = null) => {
    setGameMode(mode);
    setDifficulty(diff);
    setSelectedSite(site);

    const newChallenge = generateChallenge(mode, diff, site);
    setChallenge(newChallenge);
    setMatches({});
    setCurrentStreak(0);
    setRoundScore(0);
    setRoundCorrect(0);
    setRoundIncorrect(0);
    setShowExplanation(null);
    setGameStatus('playing');

    if (timerEnabled && newChallenge.timeLimit) {
      setTimeRemaining(newChallenge.timeLimit);
      setTimerActive(true);
    } else {
      setTimeRemaining(null);
      setTimerActive(false);
    }
  }, [timerEnabled]);

  // Get the correct answer category for an item
  const getCorrectCategory = useCallback((item) => {
    if (!challenge) return null;

    switch (challenge.challengeType) {
      case 'tStaging':
      case 'nStaging':
        return item.category;
      case 'stageGrouping':
        return item.stage;
      case 'siteIdentification':
        return item.site || item.subsite;
      default:
        return item.category;
    }
  }, [challenge]);

  // Make a match attempt
  const makeMatch = useCallback((itemId, category) => {
    if (gameStatus !== 'playing' || matches[itemId]) return;

    const item = challenge.items.find(i => i.id === itemId);
    if (!item) return;

    const correctCategory = getCorrectCategory(item);
    const isCorrect = category === correctCategory;

    // Update matches
    setMatches(prev => ({
      ...prev,
      [itemId]: {
        category,
        correct: isCorrect,
        timestamp: Date.now()
      }
    }));

    // Update score
    if (isCorrect) {
      const streakBonus = Math.min(currentStreak * 10, 50);
      const timeBonus = timeRemaining ? Math.floor(timeRemaining / 10) * 5 : 0;
      const points = 100 + streakBonus + timeBonus;

      setRoundScore(prev => prev + points);
      setRoundCorrect(prev => prev + 1);
      setCurrentStreak(prev => prev + 1);

      // Play success sound
      playSound('correct');
    } else {
      setRoundIncorrect(prev => prev + 1);
      setCurrentStreak(0);

      // Play error sound
      playSound('incorrect');
    }

    // Show explanation if enabled
    if (explanationMode) {
      setShowExplanation({ item, isCorrect, correctCategory });
    }

    // Check if round is complete
    const totalMatched = Object.keys(matches).length + 1;
    if (totalMatched >= challenge.items.length) {
      setTimeout(() => finishGame(), explanationMode ? 2000 : 500);
    }
  }, [gameStatus, matches, challenge, getCorrectCategory, currentStreak, timeRemaining, explanationMode]);

  // Dismiss explanation
  const dismissExplanation = useCallback(() => {
    setShowExplanation(null);
  }, []);

  // Finish the game
  const finishGame = useCallback(() => {
    setTimerActive(false);
    setGameStatus('finished');

    // Update progress
    setProgress(prev => {
      const newProgress = {
        ...prev,
        totalScore: prev.totalScore + roundScore,
        gamesPlayed: prev.gamesPlayed + 1,
        correctMatches: prev.correctMatches + roundCorrect,
        incorrectMatches: prev.incorrectMatches + roundIncorrect,
        bestStreak: Math.max(prev.bestStreak, currentStreak)
      };

      // Track completed challenges
      const challengeKey = `${gameMode}-${difficulty}-${selectedSite || 'mixed'}`;
      if (!prev.completedChallenges.includes(challengeKey)) {
        newProgress.completedChallenges = [...prev.completedChallenges, challengeKey];
      }

      return newProgress;
    });
  }, [roundScore, roundCorrect, roundIncorrect, currentStreak, gameMode, difficulty, selectedSite]);

  // Pause/resume game
  const pauseGame = useCallback(() => {
    if (gameStatus === 'playing') {
      setGameStatus('paused');
      setTimerActive(false);
    }
  }, [gameStatus]);

  const resumeGame = useCallback(() => {
    if (gameStatus === 'paused') {
      setGameStatus('playing');
      if (timerEnabled && timeRemaining > 0) {
        setTimerActive(true);
      }
    }
  }, [gameStatus, timerEnabled, timeRemaining]);

  // Return to menu
  const returnToMenu = useCallback(() => {
    setGameStatus('menu');
    setChallenge(null);
    setMatches({});
    setTimerActive(false);
    setShowExplanation(null);
  }, []);

  // Play next round (same settings)
  const playNextRound = useCallback(() => {
    if (gameMode && difficulty) {
      startGame(gameMode, difficulty, selectedSite);
    }
  }, [gameMode, difficulty, selectedSite, startGame]);

  // Reset all progress
  const resetProgress = useCallback(() => {
    const fresh = {
      totalScore: 0,
      gamesPlayed: 0,
      correctMatches: 0,
      incorrectMatches: 0,
      bestStreak: 0,
      completedChallenges: []
    };
    setProgress(fresh);
    saveProgress(fresh);
  }, []);

  // Simple sound effects
  const playSound = useCallback((type) => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      if (type === 'correct') {
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
      } else {
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
      }
    } catch (e) {
      // Audio not supported, fail silently
    }
  }, []);

  // Calculate accuracy
  const accuracy = roundCorrect + roundIncorrect > 0
    ? Math.round((roundCorrect / (roundCorrect + roundIncorrect)) * 100)
    : 0;

  // Get remaining unmatched items
  const unmatchedItems = challenge?.items.filter(item => !matches[item.id]) || [];
  const matchedItems = challenge?.items.filter(item => matches[item.id]) || [];

  return {
    // Configuration
    gameMode,
    difficulty,
    selectedSite,
    timerEnabled,
    setTimerEnabled,
    explanationMode,
    setExplanationMode,

    // Game state
    gameStatus,
    challenge,
    matches,
    currentStreak,
    showExplanation,
    unmatchedItems,
    matchedItems,

    // Score
    roundScore,
    roundCorrect,
    roundIncorrect,
    accuracy,

    // Timer
    timeRemaining,
    timerActive,

    // Progress
    progress,

    // Actions
    startGame,
    makeMatch,
    dismissExplanation,
    pauseGame,
    resumeGame,
    returnToMenu,
    playNextRound,
    resetProgress,
    getCorrectCategory
  };
}
