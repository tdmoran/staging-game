import { GameBoard } from './GameBoard';
import { Timer } from './Timer';
import { ScoreBoard } from './ScoreBoard';
import { Explanation } from './Explanation';
import { ResultsScreen } from './ResultsScreen';
import { challengeTypes } from '../data/stagingData';

export function Game({ gameState }) {
  const {
    gameStatus,
    challenge,
    matches,
    unmatchedItems,
    showExplanation,
    roundScore,
    roundCorrect,
    roundIncorrect,
    accuracy,
    currentStreak,
    timeRemaining,
    timerActive,
    progress,
    makeMatch,
    dismissExplanation,
    pauseGame,
    resumeGame,
    returnToMenu,
    playNextRound,
    getCorrectCategory
  } = gameState;

  // Get challenge type info
  const challengeInfo = challenge
    ? challengeTypes[challenge.challengeType]
    : null;

  if (gameStatus === 'finished') {
    return (
      <ResultsScreen
        score={roundScore}
        correct={roundCorrect}
        incorrect={roundIncorrect}
        accuracy={accuracy}
        challenge={challenge}
        matches={matches}
        progress={progress}
        onPlayAgain={playNextRound}
        onReturnToMenu={returnToMenu}
        getCorrectCategory={getCorrectCategory}
      />
    );
  }

  return (
    <div className="game-container">
      {/* Game header */}
      <header className="game-header">
        <div className="header-left">
          <button className="btn btn-icon" onClick={returnToMenu} title="Back to menu">
            ← Menu
          </button>
          <div className="challenge-info">
            <h2 className="challenge-title">{challengeInfo?.name}</h2>
            <span className="challenge-description">{challengeInfo?.description}</span>
          </div>
        </div>

        <div className="header-center">
          <Timer
            timeRemaining={timeRemaining}
            isActive={timerActive}
          />
        </div>

        <div className="header-right">
          <ScoreBoard
            score={roundScore}
            correct={roundCorrect}
            incorrect={roundIncorrect}
            streak={currentStreak}
            accuracy={accuracy}
          />
          {gameStatus === 'playing' && (
            <button className="btn btn-icon" onClick={pauseGame} title="Pause">
              ⏸
            </button>
          )}
        </div>
      </header>

      {/* Main game area */}
      <main className="game-main">
        {challenge && (
          <GameBoard
            challenge={challenge}
            matches={matches}
            unmatchedItems={unmatchedItems}
            onMatch={makeMatch}
            getCorrectCategory={getCorrectCategory}
          />
        )}
      </main>

      {/* Explanation modal */}
      {showExplanation && (
        <Explanation
          item={showExplanation.item}
          isCorrect={showExplanation.isCorrect}
          correctCategory={showExplanation.correctCategory}
          onDismiss={dismissExplanation}
        />
      )}

      {/* Pause overlay */}
      {gameStatus === 'paused' && (
        <div className="pause-overlay">
          <div className="pause-card">
            <h2>Game Paused</h2>
            <div className="pause-actions">
              <button className="btn btn-primary" onClick={resumeGame}>
                Resume
              </button>
              <button className="btn btn-secondary" onClick={returnToMenu}>
                Quit to Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
