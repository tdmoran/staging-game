import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export function DraggableCard({ item, challengeType, isMatched, matchResult }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging
  } = useDraggable({
    id: item.id,
    disabled: isMatched
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.8 : 1,
    cursor: isMatched ? 'default' : 'grab',
    touchAction: 'none'
  };

  // Get display text based on challenge type
  const getDisplayText = () => {
    switch (challengeType) {
      case 'stageGrouping':
        return item.tnm;
      case 'siteIdentification':
        return item.criteria;
      default:
        return item.criteria;
    }
  };

  // Get badge text (site/subsite info)
  const getBadge = () => {
    if (challengeType === 'siteIdentification') {
      return item.category; // Show T-stage as badge
    }
    if (item.site && challengeType !== 'siteIdentification') {
      return item.subsite ? `${item.site} - ${item.subsite}` : item.site;
    }
    return null;
  };

  const badge = getBadge();

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`draggable-card ${isDragging ? 'dragging' : ''} ${isMatched ? 'matched' : ''} ${matchResult?.correct ? 'correct' : ''} ${matchResult && !matchResult.correct ? 'incorrect' : ''}`}
      role="button"
      aria-pressed={isDragging}
      tabIndex={isMatched ? -1 : 0}
    >
      {badge && (
        <span className="card-badge">{badge}</span>
      )}
      <p className="card-text">{getDisplayText()}</p>
      {isMatched && matchResult && (
        <div className={`match-indicator ${matchResult.correct ? 'correct' : 'incorrect'}`}>
          {matchResult.correct ? '✓' : '✗'}
        </div>
      )}
    </div>
  );
}
