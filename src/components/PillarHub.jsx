import React from 'react';
import { ArrowRight } from 'lucide-react';

const PillarHub = ({ pillars, onSelect, selectedId }) => {
  return (
    <div className={`pillar-hub ${selectedId ? 'is-collapsed' : ''}`}>
      <div className="pillars-grid">
        {pillars.map((pillar) => (
          <div 
            key={pillar.id}
            className={`pillar-hub-card glass ${selectedId === pillar.id ? 'active' : ''} ${selectedId && selectedId !== pillar.id ? 'dimmed' : ''}`}
            onClick={() => onSelect(pillar)}
          >
            <div className="pillar-header">
              <span className="pillar-number" style={{ background: `${pillar.color}20`, color: pillar.color }}>
                {pillar.number}
              </span>
              <div className="pillar-accent" style={{ background: pillar.color }}></div>
            </div>
            
            <div className="pillar-content">
              <h3>{pillar.title}</h3>
              <p>{pillar.teaser}</p>
            </div>
            
            <div className="pillar-footer">
              <span className="explore-text" style={{ color: pillar.color }}>
                Explore <ArrowRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .pillar-hub {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
        }
        
        .pillar-hub.is-collapsed {
          width: 380px;
          flex-shrink: 0;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          transition: all 0.5s ease;
        }

        .pillar-hub.is-collapsed .pillars-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .pillar-hub-card {
          position: relative;
          padding: 1.5rem;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-left: 0 solid transparent;
        }

        .pillar-hub-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
        }

        .pillar-hub-card.active {
          border-left-width: 4px;
          background: var(--bg-secondary);
        }

        .pillar-hub-card.dimmed {
          opacity: 0.5;
          filter: grayscale(0.5);
          transform: scale(0.98);
        }

        .pillar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pillar-number {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .pillar-accent {
          width: 40px;
          height: 3px;
          border-radius: 2px;
        }

        .pillar-content h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .pillar-hub.is-collapsed .pillar-content h3 {
          font-size: 1rem;
        }

        .pillar-content p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .pillar-hub.is-collapsed .pillar-content p {
          display: none;
        }

        .pillar-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateX(-5px);
          transition: all 0.3s ease;
        }

        .pillar-hub-card:hover .pillar-footer {
          opacity: 1;
          transform: translateX(0);
        }

        .pillar-hub.is-collapsed .pillar-footer {
          display: none;
        }

        .explore-text {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .pillar-hub.is-collapsed {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default PillarHub;
