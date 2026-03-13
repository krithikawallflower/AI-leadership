import React from 'react';
import { FileText, Presentation } from 'lucide-react';

const ArtifactTile = ({ type, title, subtitle }) => {
  const isPPT = type === 'ppt';

  return (
    <div className="artifact-tile-container">
      <div className={`artifact-tile ${isPPT ? 'ppt' : 'doc'}`}>
        <div className="artifact-preview">
          {isPPT ? (
            <div className="ppt-layout">
              <div className="ppt-header" />
              <div className="ppt-body">
                <div className="ppt-line short" />
                <div className="ppt-line" />
                <div className="ppt-charts">
                  <div className="ppt-bar" style={{ height: '60%' }} />
                  <div className="ppt-bar" style={{ height: '80%' }} />
                  <div className="ppt-bar" style={{ height: '40%' }} />
                </div>
              </div>
            </div>
          ) : (
            <div className="doc-layout">
              <div className="doc-icon"><FileText size={24} /></div>
              <div className="doc-lines">
                <div className="doc-line bold" />
                <div className="doc-line" />
                <div className="doc-line" />
                <div className="doc-line short" />
                <div className="doc-line" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="artifact-info">
        <span className="artifact-title">{title}</span>
        <span className="artifact-subtitle">{subtitle}</span>
      </div>

      <style>{`
        .artifact-tile-container {
          width: 240px;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .artifact-tile {
          height: 160px;
          background: white;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: var(--card-shadow);
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
        }
        .artifact-tile:hover {
          transform: translateY(-4px);
          box-shadow: var(--card-shadow-hover);
          border-color: var(--accent-secondary);
        }
        .artifact-preview {
          width: 100%;
          height: 100%;
          padding: 1rem;
        }
        
        /* Doc Styles */
        .doc-layout {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .doc-icon {
          color: var(--accent-primary);
        }
        .doc-lines {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .doc-line {
          height: 6px;
          background: #f1f5f9;
          border-radius: 2px;
          width: 100%;
        }
        .doc-line.bold {
          height: 8px;
          background: #e2e8f0;
          width: 60%;
        }
        .doc-line.short {
          width: 40%;
        }

        /* PPT Styles */
        .ppt-layout {
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid #f1f5f9;
        }
        .ppt-header {
          height: 30px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
        }
        .ppt-body {
          flex-grow: 1;
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .ppt-line {
          height: 4px;
          background: #f1f5f9;
          width: 100%;
        }
        .ppt-line.short { width: 50%; }
        .ppt-charts {
          margin-top: auto;
          display: flex;
          align-items: flex-end;
          gap: 6px;
          height: 40px;
        }
        .ppt-bar {
          flex: 1;
          background: var(--accent-secondary);
          opacity: 0.5;
          border-radius: 2px 2px 0 0;
        }

        .artifact-info {
          display: flex;
          flex-direction: column;
        }
        .artifact-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .artifact-subtitle {
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }
      `}</style>
    </div>
  );
};

export default ArtifactTile;
