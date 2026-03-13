import React from 'react';

const ContextBadge = ({ dayLabel, theme, progress }) => {
  return (
    <div className="context-badge">
      <div className="day-pill">{dayLabel}</div>
      <h2 className="theme-title">{theme}</h2>
      
      <div className="progress-container">
        <div className="progress-labels">
          <span>Daily Progress</span>
          <span>{Math.round(progress * 100)}%</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>

      <style>{`
        .context-badge {
          margin-bottom: 2.5rem;
        }
        .day-pill {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-primary);
          background: var(--accent-primary-20);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          margin-bottom: 1rem;
        }
        .theme-title {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }
        .progress-container {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .progress-bar-bg {
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: 3px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: var(--accent-primary);
          border-radius: 3px;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default ContextBadge;
