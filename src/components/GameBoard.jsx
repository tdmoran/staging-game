import { useState } from 'react';
import { DndContext, DragOverlay, closestCenter, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { DraggableCard } from './DraggableCard';
import { DropTarget } from './DropTarget';

export function GameBoard({
  challenge,
  matches,
  unmatchedItems,
  onMatch,
  getCorrectCategory
}) {
  const [activeId, setActiveId] = useState(null);
  const [overId, setOverId] = useState(null);

  // Configure sensors for better touch and mouse handling
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    })
  );

  const activeItem = activeId
    ? challenge.items.find(item => item.id === activeId)
    : null;

  // Group matched items by category
  const matchedByCategory = {};
  challenge.categories.forEach(cat => {
    matchedByCategory[cat] = [];
  });

  Object.entries(matches).forEach(([itemId, match]) => {
    const item = challenge.items.find(i => i.id === itemId);
    if (item && matchedByCategory[match.category]) {
      matchedByCategory[match.category].push({
        item,
        ...match
      });
    }
  });

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragOver(event) {
    setOverId(event.over?.id || null);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (over && challenge.categories.includes(over.id)) {
      onMatch(active.id, over.id);
    }

    setActiveId(null);
    setOverId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
    setOverId(null);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="game-board">
        {/* Cards area */}
        <div className="cards-section">
          <h3 className="section-title">
            Match these criteria
            <span className="item-count">
              {unmatchedItems.length} remaining
            </span>
          </h3>
          <div className="cards-container">
            {unmatchedItems.map(item => (
              <DraggableCard
                key={item.id}
                item={item}
                challengeType={challenge.challengeType}
                isMatched={false}
              />
            ))}
            {unmatchedItems.length === 0 && (
              <div className="all-matched">
                All items matched!
              </div>
            )}
          </div>
        </div>

        {/* Drop targets area */}
        <div className="targets-section">
          <h3 className="section-title">
            Categories
          </h3>
          <div className="targets-container">
            {challenge.categories.map(category => (
              <DropTarget
                key={category}
                category={category}
                isOver={overId === category}
                matchedItems={matchedByCategory[category]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Drag overlay for smooth dragging visual */}
      <DragOverlay>
        {activeItem ? (
          <DraggableCard
            item={activeItem}
            challengeType={challenge.challengeType}
            isMatched={false}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
