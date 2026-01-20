export function ScoreBoard({
  score,
  correct,
  incorrect,
  streak,
  accuracy
}) {
  return (
    <div className="scoreboard">
      <div className="score-item score-main">
        <span className="score-label">Score</span>
        <span className="score-value">{score.toLocaleString()}</span>
      </div>

      <div className="score-item">
        <span className="score-label">Correct</span>
        <span className="score-value correct">{correct}</span>
      </div>

      <div className="score-item">
        <span className="score-label">Incorrect</span>
        <span className="score-value incorrect">{incorrect}</span>
      </div>

      <div className="score-item">
        <span className="score-label">Streak</span>
        <span className="score-value streak">
          {streak > 0 && '🔥'} {streak}
        </span>
      </div>

      {accuracy > 0 && (
        <div className="score-item">
          <span className="score-label">Accuracy</span>
          <span className="score-value">{accuracy}%</span>
        </div>
      )}
    </div>
  );
}
