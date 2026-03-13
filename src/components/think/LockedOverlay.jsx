import React from 'react';
import { Lock } from 'lucide-react';

const LockedOverlay = ({ day }) => {
  return (
    <div className="locked-overlay">
      <div className="lock-content glass">
        <div className="lock-icon">
          <Lock size={32} />
        </div>
        <div className="lock-text">
          <h3>Day {day} Locked</h3>
          <p>Unlocks on Day {day}</p>
        </div>
      </div>

      <style>{`
        .locked-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(var(--bg-secondary-rgb), 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
        }
        .lock-content {
          padding: 2.5rem;
          border-radius: 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .lock-icon {
          width: 70px;
          height: 70px;
          background: var(--bg-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tertiary);
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .lock-text h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        .lock-text p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default LockedOverlay;
