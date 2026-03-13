import React from 'react';

const HexNode = ({ pillar, isSelected, isDimmed, onSelect, position }) => {
  return (
    <div 
      className={`hex-node-container ${isSelected ? 'selected' : ''} ${isDimmed ? 'dimmed' : ''}`}
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        '--accent-color': pillar.color
      }}
      onClick={() => onSelect(pillar)}
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(pillar)}
    >
      <div className="hex-shape glass">
        <div className="hex-inner">
          <span className="node-number">{pillar.number}</span>
          <h3 className="node-title">{pillar.title}</h3>
        </div>
      </div>

      <style>{`
        .hex-node-container {
          position: absolute;
          transform: translate(-50%, -50%);
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
          width: 160px;
          height: 180px;
        }

        .hex-shape {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
          transition: all 0.3s ease;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
        }

        .hex-node-container:hover .hex-shape,
        .hex-node-container.selected .hex-shape {
          background: color-mix(in srgb, var(--accent-color) 15%, var(--glass-bg));
          transform: scale(1.08);
          box-shadow: 0 0 30px color-mix(in srgb, var(--accent-color) 30%, transparent);
        }

        .hex-inner {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.5rem;
          gap: 0.5rem;
        }

        .node-number {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--accent-color);
          opacity: 0.8;
          text-transform: uppercase;
        }

        .node-title {
          font-size: 0.85rem;
          font-weight: 700;
          line-height: 1.2;
          color: var(--text-primary);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .hex-node-container.dimmed {
          opacity: 0.3;
          filter: grayscale(0.6) blur(1px);
          pointer-events: none;
        }

        .hex-node-container.selected {
          z-index: 20;
          opacity: 1 !important;
          filter: none !important;
        }

        @media (max-width: 1024px) {
          .hex-node-container {
            width: 130px;
            height: 150px;
          }
          .node-title {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HexNode;
