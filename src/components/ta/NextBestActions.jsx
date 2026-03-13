import React from 'react';
import { CheckCircle2, Circle, ExternalLink } from 'lucide-react';

const NextBestActions = ({ items = [], onToggle }) => {
  return (
    <div className="next-actions">
      <h4 className="sidebar-label">Next Best Actions</h4>
      <div className="action-list">
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`action-item ${item.completed ? 'completed' : ''}`}
            onClick={() => onToggle(item.id)}
          >
            <div className="action-checkbox">
              {item.completed ? (
                <CheckCircle2 size={18} color="var(--accent-primary)" />
              ) : (
                <Circle size={18} color="var(--text-tertiary)" />
              )}
            </div>
            <div className="action-content">
              <span className="action-text">{item.text}</span>
              {item.tag && (
                <div className="action-tag">
                  <ExternalLink size={10} />
                  <span>{item.tag}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .sidebar-label {
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
          margin-bottom: 1.25rem;
        }
        .action-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .action-item {
          display: flex;
          gap: 1rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .action-item:hover {
          background: var(--bg-tertiary);
        }
        .action-item.completed .action-text {
          text-decoration: line-through;
          color: var(--text-tertiary);
        }
        .action-checkbox {
          padding-top: 2px;
        }
        .action-content {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .action-text {
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1.4;
          color: var(--text-primary);
        }
        .action-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--accent-primary);
          background: var(--accent-primary-20);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default NextBestActions;
