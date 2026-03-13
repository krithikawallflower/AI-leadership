import React from 'react';
import { X, Info, ShieldCheck, Zap } from 'lucide-react';

const PillarDetailPanel = ({ pillar, onClose }) => {
  if (!pillar) return null;

  return (
    <div className="pillar-detail-panel glass">
      <div className="detail-header">
        <div className="title-group">
          <div className="detail-number" style={{ background: `${pillar.color}20`, color: pillar.color }}>
            {pillar.number}
          </div>
          <h2>{pillar.title}</h2>
        </div>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <div className="detail-body">
        <div className="detail-accent-bar" style={{ background: pillar.color }}></div>
        
        <p className="full-description">{pillar.description}</p>

        <div className="detail-sections">
          <div className="detail-section">
            <div className="section-icon" style={{ color: pillar.color }}><Info size={18} /></div>
            <div className="section-content">
              <h4>Key Objective</h4>
              <p>Establish a robust framework for {pillar.title.toLowerCase()} that scales with the organization.</p>
            </div>
          </div>

          <div className="detail-section">
            <div className="section-icon" style={{ color: pillar.color }}><ShieldCheck size={18} /></div>
            <div className="section-content">
              <h4>Governance</h4>
              <p>Ensuring compliance and ethical alignment while driving rapid innovation and adoption.</p>
            </div>
          </div>

          <div className="detail-section">
            <div className="section-icon" style={{ color: pillar.color }}><Zap size={18} /></div>
            <div className="section-content">
              <h4>Impact</h4>
              <p>Accelerated decision making and improved strategic alignment across all business units.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pillar-detail-panel {
          flex: 1;
          height: fit-content;
          min-height: 500px;
          border-radius: 24px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--border-color);
          position: sticky;
          top: 2rem;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .title-group {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .title-group h2 {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .detail-number {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .close-btn {
          color: var(--text-tertiary);
          padding: 0.5rem;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          transform: rotate(90deg);
        }

        .detail-body {
          position: relative;
          padding-left: 1.5rem;
        }

        .detail-accent-bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          border-radius: 2px;
          opacity: 0.5;
        }

        .full-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
        }

        .detail-sections {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail-section {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .section-icon {
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .section-content h4 {
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .section-content p {
          font-size: 0.85rem;
          color: var(--text-tertiary);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .pillar-detail-panel {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            top: auto;
            border-radius: 32px 32px 0 0;
            height: 80vh;
            z-index: 1000;
            animation: slideUp 0.5s ease;
          }

          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        }
      `}</style>
    </div>
  );
};

export default PillarDetailPanel;
