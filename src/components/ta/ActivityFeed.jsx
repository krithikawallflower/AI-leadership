import React from 'react';
import TheorySnippet from './TheorySnippet';
import InteractiveWorkspace from './InteractiveWorkspace';
import ReflectionPrompt from './ReflectionPrompt';
import TAAnnouncement from './TAAnnouncement';

const ActivityFeed = ({ 
  cards = [], 
  workspaceEntries = {}, 
  onWorkspaceSave,
  completedCardIds = new Set() 
}) => {
  return (
    <div className="activity-feed">
      {cards.map((card, index) => {
        const isPreviousCompleted = index === 0 || completedCardIds.has(cards[index - 1].id);
        const isLocked = !card.isUnlocked && !isPreviousCompleted;
        const isCompleted = completedCardIds.has(card.id);

        return (
          <React.Fragment key={card.id}>
            {card.type === 'announcement' && (
              <TAAnnouncement content={card.content} />
            )}
            
            {card.type === 'theory' && (
              <TheorySnippet 
                {...card} 
                isLocked={isLocked} 
                isCompleted={isCompleted} 
              />
            )}
            
            {card.type === 'workspace' && (
              <>
                <InteractiveWorkspace 
                  {...card} 
                  isLocked={isLocked} 
                  isCompleted={isCompleted}
                  initialData={workspaceEntries[card.id] || {}}
                  onSave={onWorkspaceSave}
                />
                
                {/* Render reflection if threshold met */}
                {card.reflectionPrompt && workspaceEntries[card.id] && 
                 Object.values(workspaceEntries[card.id]).filter(v => v.trim().length > 0).length >= (card.triggerThreshold || 1) && (
                  <ReflectionPrompt text={card.reflectionPrompt} />
                )}
              </>
            )}
          </React.Fragment>
        );
      })}

      <style>{`
        .activity-feed {
          padding-bottom: 5rem;
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default ActivityFeed;
