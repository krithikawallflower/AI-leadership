import React from 'react';

const FlowLines = ({ nodes, selectedId, systemViewStep }) => {
  // Center of the canvas (50, 50)
  const cx = 50;
  const cy = 50;

  return (
    <svg className="flow-lines-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {nodes.map((node, i) => {
        const isSelected = selectedId === node.id;
        const isNextNode = selectedId === 'sensing' && node.id === 'articulation';
        const isInSystemPulse = systemViewStep === node.number;
        const isActive = isSelected || isInSystemPulse || isNextNode;

        return (
          <g key={node.id}>
            {/* Hub to Node Path */}
            <path
              d={`M ${cx} ${cy} L ${node.pos.x} ${node.pos.y}`}
              className={`flow-path ${isActive ? 'active' : ''}`}
              style={{ stroke: isActive ? node.color : 'var(--text-tertiary)' }}
            />
            
            {/* Animated Data Dots */}
            <circle r="0.6" className={`data-dot ${isActive ? 'fast' : ''}`}>
              <animateMotion
                dur={isActive ? "1.5s" : "4s"}
                repeatCount="indefinite"
                path={`M ${cx} ${cy} L ${node.pos.x} ${node.pos.y}`}
              />
            </circle>

            {/* Perimeter Connections (Arcs to adjacent nodes) */}
            {i < nodes.length && (
              <path
                d={`M ${node.pos.x} ${node.pos.y} Q ${cx + (node.pos.x - cx + nodes[(i + 1) % nodes.length].pos.x - cx) / 1.5} ${cy + (node.pos.y - cy + nodes[(i + 1) % nodes.length].pos.y - cy) / 1.5} ${nodes[(i + 1) % nodes.length].pos.x} ${nodes[(i + 1) % nodes.length].pos.y}`}
                className={`flow-path-arc ${isActive ? 'active' : ''}`}
                style={{ stroke: isActive ? node.color : 'var(--text-tertiary)' }}
              />
            )}
          </g>
        );
      })}

      <style>{`
        .flow-lines-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .flow-path, .flow-path-arc {
          fill: none;
          stroke-width: 0.15;
          opacity: 0.15;
          transition: all 0.5s ease;
        }

        .flow-path.active, .flow-path-arc.active {
          opacity: 0.8;
          stroke-width: 0.3;
          filter: url(#glow);
        }

        .data-dot {
          fill: white;
          opacity: 0.6;
          filter: url(#glow);
        }

        .data-dot.fast {
          opacity: 1;
          fill: var(--accent-color);
        }
      `}</style>
    </svg>
  );
};

export default FlowLines;
