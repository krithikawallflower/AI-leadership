import React from 'react';
import ArtifactTile from './ArtifactTile';
import PostIt from './PostIt';
import LockedOverlay from './LockedOverlay';

const CanvasFrame = ({ day, title, artifacts, postIts, isLocked }) => {
  return (
    <div className={`canvas-frame ${isLocked ? 'locked' : ''}`} id={`frame-day-${day}`}>
      <div className="frame-header">
        <div className="day-badge">DAY {day}</div>
        <h3 className="frame-title">{title}</h3>
      </div>

      <div className="frame-content">
        <div className="artifacts-row">
          {artifacts.map((art, idx) => (
            <ArtifactTile key={idx} {...art} />
          ))}
        </div>

        <div className="drop-zone">
          <div className="drop-zone-label">POST-IT WORKSPACE</div>
          {postIts.map((note, idx) => (
            <PostIt key={idx} {...note} />
          ))}
        </div>
      </div>

      {isLocked && <LockedOverlay day={day} />}

      <style>{`
        .canvas-frame {
          width: 1100px;
          height: 780px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          position: relative;
          display: flex;
          flex-direction: column;
          box-shadow: var(--card-shadow);
          flex-shrink: 0;
        }
        .frame-header {
          padding: 1.5rem 2.5rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .day-badge {
          padding: 4px 12px;
          background: var(--accent-primary-20);
          color: var(--accent-primary);
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .frame-title {
          font-size: 1.5rem;
          font-weight: 300;
          color: var(--text-primary);
        }
        .frame-content {
          flex-grow: 1;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .artifacts-row {
          display: flex;
          gap: 1.5rem;
        }
        .drop-zone {
          flex-grow: 1;
          border: 2px dashed var(--border-color);
          border-radius: 16px;
          position: relative;
          background: var(--bg-tertiary);
          opacity: 0.6;
          overflow: hidden;
        }
        .drop-zone-label {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-tertiary);
          letter-spacing: 0.2em;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default CanvasFrame;
