import React from 'react';
import ContextBadge from './ContextBadge';
import NextBestActions from './NextBestActions';
import AskTAInput from './AskTAInput';

const TAPulseSidebar = ({ dayLabel, theme, progress, actions, onActionToggle, onAskSubmit }) => {
  return (
    <aside className="ta-pulse-sidebar">
      <div className="sidebar-scroll-container">
        <ContextBadge 
          dayLabel={dayLabel} 
          theme={theme} 
          progress={progress} 
        />
        
        <div className="sidebar-divider" />
        
        <NextBestActions 
          items={actions} 
          onToggle={onActionToggle} 
        />
      </div>

      <AskTAInput onSubmit={onAskSubmit} />

      <style>{`
        .ta-pulse-sidebar {
          width: 320px;
          height: calc(100vh - 72px);
          position: sticky;
          top: 72px;
          background: var(--bg-sidebar);
          border-left: 1px solid var(--border-color);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }
        .sidebar-scroll-container {
          flex: 1;
          overflow-y: auto;
          scrollbar-width: none; /* Hide scrollbar Firefox */
        }
        .sidebar-scroll-container::-webkit-scrollbar {
          display: none; /* Hide scrollbar Chrome/Safari */
        }
        .sidebar-divider {
          height: 1px;
          background: var(--border-color);
          margin: 2.5rem 0;
        }
        @media (max-width: 1024px) {
          .ta-pulse-sidebar {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
};

export default TAPulseSidebar;
