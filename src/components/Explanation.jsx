import { useEffect } from 'react';

export function Explanation({ item, isCorrect, correctCategory, onDismiss }) {
  // Auto-dismiss after 3 seconds
  useEffect(() => {
    const timer = setTimeout(onDismiss, 3000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div className={`explanation-overlay ${isCorrect ? 'correct' : 'incorrect'}`} onClick={onDismiss}>
      <div className="explanation-card" onClick={e => e.stopPropagation()}>
        <div className="explanation-header">
          <span className={`result-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </span>
          {!isCorrect && (
            <span className="correct-answer">
              Correct answer: <strong>{correctCategory}</strong>
            </span>
          )}
        </div>

        <div className="explanation-content">
          <p className="criteria-text">
            {item.criteria || item.tnm}
          </p>

          {item.explanation && (
            <div className="explanation-text">
              <strong>Explanation:</strong>
              <p>{item.explanation}</p>
            </div>
          )}

          {item.site && (
            <p className="site-info">
              <strong>Site:</strong> {item.site}
              {item.subsite && ` (${item.subsite})`}
            </p>
          )}
        </div>

        <button className="dismiss-btn" onClick={onDismiss}>
          Continue
        </button>
      </div>
    </div>
  );
}
