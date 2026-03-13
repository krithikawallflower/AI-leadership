import React from 'react';
import { Columns, ArrowLeftRight } from 'lucide-react';

const SplitViewToggle = ({ isActive, onToggle }) => {
  return (
    <button 
      className={`split-view-toggle ${isActive ? 'active' : ''}`}
      onClick={onToggle}
    >
      <div className="toggle-icon">
        <Columns size={16} />
      </div>
      <span>{isActive ? 'Exit Split View' : 'Orchestrate Split View'}</span>

      <style>{`
        .split-view-toggle {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-primary);
          font-weight: 400;
          font-size: 0.85rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--card-shadow);
        }
        .split-view-toggle:hover {
          transform: translateY(-2px);
          border-color: var(--accent-primary);
        }
        .split-view-toggle.active {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
        }
        .toggle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </button>
  );
};

export default SplitViewToggle;
