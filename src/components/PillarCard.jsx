import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PillarCard = ({ title, description, icon: Icon, color, onClick, status }) => {
  return (
    <div className="pillar-card glass" onClick={onClick}>
      <div className="card-accent" style={{ background: color }}></div>
      <div className="card-header">
        <div className="icon-container" style={{ background: `${color}15`, color: color }}>
          <Icon size={24} />
        </div>
        <ArrowUpRight className="arrow-icon" size={20} />
      </div>
      
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>

      <div className="card-footer">
        <span className="card-status">{status}</span>
      </div>

      <style>{`
        .pillar-card {
          position: relative;
          padding: 2rem;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
          box-shadow: var(--card-shadow);
          border: 1px solid var(--border-color);
        }
        .pillar-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--card-shadow-hover);
        }
        .card-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .icon-container {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .arrow-icon {
          color: var(--text-tertiary);
          transition: all 0.3s ease;
        }
        .pillar-card:hover .arrow-icon {
          color: var(--text-primary);
          transform: translate(2px, -2px);
        }
        .card-title {
          font-size: 1.4rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        .card-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .card-footer {
          margin-top: auto;
        }
        .card-status {
          font-size: 0.75rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
        }
      `}</style>
    </div>
  );
};

export default PillarCard;
