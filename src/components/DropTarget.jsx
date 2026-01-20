import { useDroppable } from '@dnd-kit/core';

// Category colors for visual distinction
const categoryColors = {
  // T-staging colors
  'T1': { bg: '#e8f5e9', border: '#4caf50', text: '#2e7d32' },
  'T1a': { bg: '#e8f5e9', border: '#4caf50', text: '#2e7d32' },
  'T1b': { bg: '#c8e6c9', border: '#43a047', text: '#2e7d32' },
  'T2': { bg: '#fff3e0', border: '#ff9800', text: '#e65100' },
  'T3': { bg: '#fff8e1', border: '#ffc107', text: '#ff6f00' },
  'T4a': { bg: '#ffebee', border: '#f44336', text: '#c62828' },
  'T4b': { bg: '#fce4ec', border: '#e91e63', text: '#880e4f' },
  'T4': { bg: '#ffebee', border: '#f44336', text: '#c62828' },

  // N-staging colors
  'N0': { bg: '#e8f5e9', border: '#4caf50', text: '#2e7d32' },
  'N1': { bg: '#e3f2fd', border: '#2196f3', text: '#1565c0' },
  'N2a': { bg: '#fff3e0', border: '#ff9800', text: '#e65100' },
  'N2b': { bg: '#fff8e1', border: '#ffc107', text: '#ff6f00' },
  'N2c': { bg: '#ffe0b2', border: '#ff9800', text: '#e65100' },
  'N3a': { bg: '#ffebee', border: '#f44336', text: '#c62828' },
  'N3b': { bg: '#fce4ec', border: '#e91e63', text: '#880e4f' },

  // Stage grouping colors
  'I': { bg: '#e8f5e9', border: '#4caf50', text: '#2e7d32' },
  'II': { bg: '#e3f2fd', border: '#2196f3', text: '#1565c0' },
  'III': { bg: '#fff3e0', border: '#ff9800', text: '#e65100' },
  'IVA': { bg: '#ffebee', border: '#f44336', text: '#c62828' },
  'IVB': { bg: '#fce4ec', border: '#e91e63', text: '#880e4f' },
  'IVC': { bg: '#f3e5f5', border: '#9c27b0', text: '#6a1b9a' },

  // Site colors
  'Oral Cavity': { bg: '#e8f5e9', border: '#4caf50', text: '#2e7d32' },
  'Supraglottic': { bg: '#e3f2fd', border: '#2196f3', text: '#1565c0' },
  'Glottic': { bg: '#e1f5fe', border: '#03a9f4', text: '#0277bd' },
  'Subglottic': { bg: '#e0f7fa', border: '#00bcd4', text: '#00838f' },
  'Oropharynx': { bg: '#fff3e0', border: '#ff9800', text: '#e65100' },
  'Hypopharynx': { bg: '#fce4ec', border: '#e91e63', text: '#880e4f' },
  'Nasopharynx': { bg: '#f3e5f5', border: '#9c27b0', text: '#6a1b9a' }
};

const defaultColors = { bg: '#f5f5f5', border: '#9e9e9e', text: '#424242' };

export function DropTarget({ category, isOver, matchedItems = [] }) {
  const { setNodeRef, isOver: droppableIsOver } = useDroppable({
    id: category
  });

  const colors = categoryColors[category] || defaultColors;
  const activeOver = isOver || droppableIsOver;

  return (
    <div
      ref={setNodeRef}
      className={`drop-target ${activeOver ? 'drag-over' : ''} ${matchedItems.length > 0 ? 'has-matches' : ''}`}
      style={{
        '--target-bg': colors.bg,
        '--target-border': colors.border,
        '--target-text': colors.text
      }}
    >
      <div className="target-header">
        <span className="target-category">{category}</span>
        {matchedItems.length > 0 && (
          <span className="match-count">{matchedItems.length}</span>
        )}
      </div>

      <div className="target-drop-zone">
        {matchedItems.length === 0 && (
          <span className="drop-hint">Drop here</span>
        )}
        {matchedItems.map(item => (
          <div
            key={item.id}
            className={`matched-item ${item.correct ? 'correct' : 'incorrect'}`}
          >
            <span className="matched-indicator">{item.correct ? '✓' : '✗'}</span>
            <span className="matched-text">
              {item.item.criteria?.substring(0, 30) || item.item.tnm}
              {(item.item.criteria?.length > 30) && '...'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
