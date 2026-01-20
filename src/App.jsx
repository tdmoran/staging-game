import { useState } from 'react';
import { Game } from './components/Game';
import { useGameState } from './hooks/useGameState';
import { challengeTypes, difficultySettings, stagingData } from './data/stagingData';

function MainMenu({ gameState }) {
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [selectedSite, setSelectedSite] = useState(null);

  const {
    startGame,
    timerEnabled,
    setTimerEnabled,
    explanationMode,
    setExplanationMode,
    progress,
    resetProgress
  } = gameState;

  const handleStartGame = () => {
    if (selectedMode) {
      startGame(selectedMode, selectedDifficulty, selectedSite);
    }
  };

  // Available sites based on mode
  const getSiteOptions = () => {
    if (selectedMode === 'stageGrouping') {
      return [
        { value: null, label: 'Non-Nasopharynx Sites' },
        { value: 'nasopharynx', label: 'Nasopharynx' }
      ];
    }

    return [
      { value: null, label: 'All Sites (Mixed)' },
      { value: 'oralCavity', label: 'Oral Cavity' },
      { value: 'larynx', label: 'Larynx (All Subsites)' },
      { value: 'oropharynx', label: 'Oropharynx (p16-)' },
      { value: 'hypopharynx', label: 'Hypopharynx' },
      { value: 'nasopharynx', label: 'Nasopharynx' }
    ];
  };

  return (
    <div className="main-menu">
      <header className="menu-header">
        <h1 className="app-title">
          Head & Neck Cancer
          <span className="title-accent">Staging Game</span>
        </h1>
        <p className="app-subtitle">
          AJCC 8th Edition Staging Practice
        </p>
      </header>

      <div className="menu-content">
        {/* Progress Card */}
        <section className="menu-section progress-section">
          <h2>Your Progress</h2>
          <div className="progress-grid">
            <div className="progress-item">
              <span className="progress-value">{progress.totalScore.toLocaleString()}</span>
              <span className="progress-label">Total Score</span>
            </div>
            <div className="progress-item">
              <span className="progress-value">{progress.gamesPlayed}</span>
              <span className="progress-label">Games Played</span>
            </div>
            <div className="progress-item">
              <span className="progress-value">{progress.correctMatches}</span>
              <span className="progress-label">Correct Matches</span>
            </div>
            <div className="progress-item">
              <span className="progress-value">{progress.bestStreak}</span>
              <span className="progress-label">Best Streak</span>
            </div>
          </div>
          {progress.gamesPlayed > 0 && (
            <button className="btn btn-text" onClick={resetProgress}>
              Reset Progress
            </button>
          )}
        </section>

        {/* Game Mode Selection */}
        <section className="menu-section">
          <h2>Select Challenge Type</h2>
          <div className="mode-grid">
            {Object.entries(challengeTypes).map(([key, mode]) => (
              <button
                key={key}
                className={`mode-card ${selectedMode === key ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedMode(key);
                  setSelectedSite(null);
                }}
              >
                <span className="mode-icon">
                  {key === 'tStaging' && '🎯'}
                  {key === 'nStaging' && '🔗'}
                  {key === 'siteIdentification' && '📍'}
                  {key === 'stageGrouping' && '📊'}
                </span>
                <span className="mode-name">{mode.name}</span>
                <span className="mode-description">{mode.description}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Site Selection (if mode selected) */}
        {selectedMode && (
          <section className="menu-section">
            <h2>Select Anatomic Site</h2>
            <div className="site-options">
              {getSiteOptions().map(option => (
                <button
                  key={option.value || 'mixed'}
                  className={`site-btn ${selectedSite === option.value ? 'selected' : ''}`}
                  onClick={() => setSelectedSite(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Difficulty Selection */}
        {selectedMode && (
          <section className="menu-section">
            <h2>Select Difficulty</h2>
            <div className="difficulty-options">
              {Object.entries(difficultySettings).map(([key, setting]) => (
                <button
                  key={key}
                  className={`difficulty-btn ${selectedDifficulty === key ? 'selected' : ''}`}
                  onClick={() => setSelectedDifficulty(key)}
                >
                  <span className="difficulty-name">{setting.name}</span>
                  <span className="difficulty-info">
                    {setting.itemCount} items
                    {setting.timeLimit && ` • ${setting.timeLimit}s`}
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Game Options */}
        {selectedMode && (
          <section className="menu-section options-section">
            <h2>Options</h2>
            <div className="options-grid">
              <label className="option-toggle">
                <input
                  type="checkbox"
                  checked={timerEnabled}
                  onChange={(e) => setTimerEnabled(e.target.checked)}
                />
                <span className="toggle-slider"></span>
                <span className="option-label">Timer Mode</span>
              </label>

              <label className="option-toggle">
                <input
                  type="checkbox"
                  checked={explanationMode}
                  onChange={(e) => setExplanationMode(e.target.checked)}
                />
                <span className="toggle-slider"></span>
                <span className="option-label">Show Explanations</span>
              </label>
            </div>
          </section>
        )}

        {/* Start Button */}
        {selectedMode && (
          <button
            className="btn btn-start"
            onClick={handleStartGame}
          >
            Start Game
          </button>
        )}
      </div>

      <footer className="menu-footer">
        <p>
          Based on AJCC Cancer Staging Manual, 8th Edition
        </p>
        <p className="disclaimer">
          For educational purposes only. Always refer to official guidelines for clinical practice.
        </p>
      </footer>
    </div>
  );
}

function App() {
  const gameState = useGameState();

  return (
    <div className="app">
      {gameState.gameStatus === 'menu' ? (
        <MainMenu gameState={gameState} />
      ) : (
        <Game gameState={gameState} />
      )}
    </div>
  );
}

export default App;
