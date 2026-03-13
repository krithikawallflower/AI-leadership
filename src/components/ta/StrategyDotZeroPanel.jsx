import React from 'react';
import { ExternalLink } from 'lucide-react';

const StrategyDotZeroPanel = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="sdz-panel">
      <div className="sdz-header">
        <div className="sdz-brand">
          <div className="brand-dot" />
          <span>StrategyDotZero / Orchestrator</span>
        </div>
        <div className="sdz-external">
          <ExternalLink size={14} />
        </div>
      </div>
      
      <div className="sdz-iframe-placeholder">
        <div className="placeholder-content">
          <div className="pulse-circle" />
          <h3>Secure Connection Active</h3>
          <p>The orchestration tool is ready for live mapping.</p>
          <div className="simulated-ui">
            <div className="ui-line long" />
            <div className="ui-line med" />
            <div className="ui-grid">
              <div className="grid-cell" />
              <div className="grid-cell" />
              <div className="grid-cell" />
              <div className="grid-cell" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sdz-panel {
          flex: 1;
          height: calc(100vh - 72px);
          background: #090b10;
          color: white;
          display: flex;
          flex-direction: column;
          animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .sdz-header {
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .sdz-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.7);
        }
        .brand-dot {
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 10px #3b82f6;
        }
        .sdz-iframe-placeholder {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
        }
        .placeholder-content {
          text-align: center;
          max-width: 400px;
        }
        .pulse-circle {
          width: 64px;
          height: 64px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid #3b82f6;
          border-radius: 50%;
          margin: 0 auto 2rem;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
        .simulated-ui {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          opacity: 0.3;
        }
        .ui-line {
          height: 8px;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .ui-line.long { width: 100%; }
        .ui-line.med { width: 60%; }
        .ui-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }
        .grid-cell {
          height: 60px;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
          border: 1px dashed rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  );
};

export default StrategyDotZeroPanel;
