import React from 'react';
import { ArrowLeft, ZoomIn, ZoomOut, Maximize, Download } from 'lucide-react';
import { useTheme } from '../../App';

const TopBar = ({ onZoomIn, onZoomOut, onResetZoom, onJumpToFrame, activeDay }) => {
  const { setCurrentPage } = useTheme();

  return (
    <div className="think-top-bar glass">
      <div className="top-bar-left">
        <button className="back-btn" onClick={() => setCurrentPage('dashboard')}>
          <ArrowLeft size={18} />
          <span>Dashboard</span>
        </button>
        <div className="v-divider" />
        <h2 className="top-bar-title">Think <span className="text-secondary">Explore & Map</span></h2>
      </div>

      <div className="top-bar-center">
        <div className="frame-navigator">
          {[1, 2, 3, 4, 5, 6].map((day) => (
            <button
              key={day}
              className={`nav-pill ${activeDay === day ? 'active' : ''}`}
              onClick={() => onJumpToFrame(day)}
            >
              Day {day}
              {day > 4 && <span className="lock-dot" />}
            </button>
          ))}
        </div>
      </div>

      <div className="top-bar-right">
        <div className="zoom-controls">
          <button onClick={onZoomOut} title="Zoom Out"><ZoomOut size={18} /></button>
          <button onClick={onResetZoom} title="Reset Zoom" className="zoom-value">100%</button>
          <button onClick={onZoomIn} title="Zoom In"><ZoomIn size={18} /></button>
        </div>
        <div className="v-divider" />
        <button className="export-btn">
          <Download size={18} />
          <span>Export</span>
        </button>
      </div>

      <style>{`
        .think-top-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          z-index: 1000;
          border-bottom: 1px solid var(--border-color);
        }
        .top-bar-left, .top-bar-right {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .back-btn:hover {
          color: var(--accent-primary);
        }
        .v-divider {
          width: 1px;
          height: 24px;
          background: var(--border-color);
        }
        .top-bar-title {
          font-size: 1rem;
          font-weight: 500;
        }
        .text-secondary {
          color: var(--text-tertiary);
          font-weight: 300;
          margin-left: 0.5rem;
        }
        .frame-navigator {
          display: flex;
          background: var(--bg-tertiary);
          padding: 4px;
          border-radius: 12px;
          gap: 4px;
        }
        .nav-pill {
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
        }
        .nav-pill.active {
          background: var(--bg-primary);
          color: var(--accent-primary);
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .lock-dot {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 4px;
          height: 4px;
          background: var(--text-tertiary);
          border-radius: 50%;
        }
        .zoom-controls {
          display: flex;
          align-items: center;
          background: var(--bg-tertiary);
          border-radius: 10px;
          padding: 2px;
        }
        .zoom-controls button {
          padding: 6px;
          color: var(--text-secondary);
        }
        .zoom-value {
          font-size: 0.75rem;
          min-width: 50px;
          font-weight: 600;
        }
        .export-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent-primary);
          color: white;
          padding: 6px 14px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default TopBar;
