import React from 'react';
import { Lock, CheckCircle2 } from 'lucide-react';

const ActivityCard = ({ 
  children, 
  title, 
  type, 
  isLocked, 
  isCompleted, 
  icon: Icon,
  accentColor = 'var(--accent-primary)'
}) => {
  return (
    <div className={`activity-card ${type} ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`}>
      <div className="card-header">
        <div className="header-left">
          <div className="type-badge" style={{ backgroundColor: isLocked ? 'var(--bg-tertiary)' : `${accentColor}15`, color: isLocked ? 'var(--text-tertiary)' : accentColor }}>
            {Icon && <Icon size={14} />}
            <span>{type.toUpperCase()}</span>
          </div>
          <h3 className="card-title">{title}</h3>
        </div>
        <div className="header-right">
          {isCompleted && <CheckCircle2 size={18} color="var(--accent-ta)" />}
          {isLocked && <Lock size={16} color="var(--text-tertiary)" />}
        </div>
      </div>
      
      <div className="card-body">
        {children}
      </div>

      {isLocked && (
        <div className="locked-overlay">
          <div className="lock-message">
            <Lock size={20} />
            <span>Complete previous activity to unlock</span>
          </div>
        </div>
      )}

      <style>{`
        .activity-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--card-shadow);
        }
        .activity-card.locked {
          opacity: 0.6;
          filter: grayscale(0.5);
          pointer-events: none;
        }
        .activity-card.completed {
          border-color: var(--accent-ta);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .type-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.05em;
        }
        .card-title {
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        .card-body {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .locked-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.02);
          backdrop-filter: blur(2px);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .lock-message {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-primary);
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          box-shadow: var(--card-shadow);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }
      `}</style>
    </div>
  );
};

export default ActivityCard;
