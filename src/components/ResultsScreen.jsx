import { useEffect, useState } from 'react';

// Simple confetti effect
function Confetti() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96e6a1', '#dda0dd', '#ffd93d'];
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
      size: 8 + Math.random() * 8
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="confetti-container">
      {particles.map(p => (
        <div
          key={p.id}
          className="confetti-particle"
          style={{
            left: `${p.x}%`,
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`
          }}
        />
      ))}
    </div>
  );
}

export function ResultsScreen({
  score,
  correct,
  incorrect,
  accuracy,
  challenge,
  matches,
  progress,
  onPlayAgain,
  onReturnToMenu,
  getCorrectCategory
}) {
  const isPerfect = incorrect === 0 && correct > 0;
  const isGood = accuracy >= 70;

  // Build review list
  const reviewItems = challenge.items.map(item => {
    const match = matches[item.id];
    return {
      item,
      userAnswer: match?.category || null,
      correctAnswer: getCorrectCategory(item),
      isCorrect: match?.correct || false
    };
  });

  return (
    <div className="results-screen">
      {isPerfect && <Confetti />}

      <div className="results-card">
        <div className="results-header">
          <h2 className="results-title">
            {isPerfect ? '🎉 Perfect!' : isGood ? '👏 Great Job!' : '📚 Keep Learning!'}
          </h2>
          <p className="results-subtitle">
            Round Complete
          </p>
        </div>

        <div className="results-stats">
          <div className="stat-card primary">
            <span className="stat-value">{score.toLocaleString()}</span>
            <span className="stat-label">Points</span>
          </div>

          <div className="stat-row">
            <div className="stat-card">
              <span className="stat-value correct">{correct}</span>
              <span className="stat-label">Correct</span>
            </div>

            <div className="stat-card">
              <span className="stat-value incorrect">{incorrect}</span>
              <span className="stat-label">Incorrect</span>
            </div>

            <div className="stat-card">
              <span className="stat-value">{accuracy}%</span>
              <span className="stat-label">Accuracy</span>
            </div>
          </div>
        </div>

        <div className="progress-summary">
          <h3>Overall Progress</h3>
          <div className="progress-stats">
            <span>Total Score: <strong>{progress.totalScore.toLocaleString()}</strong></span>
            <span>Games Played: <strong>{progress.gamesPlayed}</strong></span>
            <span>Best Streak: <strong>{progress.bestStreak}</strong></span>
          </div>
        </div>

        <div className="review-section">
          <h3>Review Answers</h3>
          <div className="review-list">
            {reviewItems.map(({ item, userAnswer, correctAnswer, isCorrect }) => (
              <div key={item.id} className={`review-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                <div className="review-indicator">{isCorrect ? '✓' : '✗'}</div>
                <div className="review-content">
                  <p className="review-criteria">{item.criteria || item.tnm}</p>
                  <div className="review-answers">
                    {!isCorrect && userAnswer && (
                      <span className="your-answer">Your answer: {userAnswer}</span>
                    )}
                    <span className="correct-answer-review">
                      {isCorrect ? correctAnswer : `Correct: ${correctAnswer}`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="results-actions">
          <button className="btn btn-primary" onClick={onPlayAgain}>
            Play Again
          </button>
          <button className="btn btn-secondary" onClick={onReturnToMenu}>
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
}
