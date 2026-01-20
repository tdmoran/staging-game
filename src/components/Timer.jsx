export function Timer({ timeRemaining, isActive }) {
  if (timeRemaining === null) return null;

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const isLow = timeRemaining <= 30;
  const isCritical = timeRemaining <= 10;

  return (
    <div className={`timer ${isLow ? 'low' : ''} ${isCritical ? 'critical' : ''} ${!isActive ? 'paused' : ''}`}>
      <svg className="timer-icon" viewBox="0 0 24 24" width="20" height="20">
        <path
          fill="currentColor"
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"
        />
      </svg>
      <span className="timer-value">
        {minutes}:{seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
}
