import React from 'react';
import HexNode from './HexNode';
import HexHub from './HexHub';
import FlowLines from './FlowLines';

const HexCanvas = ({ pillars, selectedPillar, onSelect, isSystemViewActive, systemViewStep }) => {
  // Calculate hexagonal positions
  const radius = 38; // Percentage from center
  const nodesWithPos = pillars.map((p, i) => {
    const angle = (i * 60 - 90) * (Math.PI / 180);
    return {
      ...p,
      pos: {
        x: 50 + radius * Math.cos(angle),
        y: 50 + radius * Math.sin(angle)
      }
    };
  });

  return (
    <div className="hex-canvas-container">
      <div className="canvas-elements">
        <FlowLines 
          nodes={nodesWithPos} 
          selectedId={selectedPillar?.id} 
          systemViewStep={systemViewStep}
        />

        <HexHub 
          title={selectedPillar ? selectedPillar.title : "Digital Twin Core"}
          description={selectedPillar ? selectedPillar.description : "Select a pillar to explore the Intelligent Orchestration Framework."}
          accentColor={selectedPillar?.color}
          isSystemViewActive={isSystemViewActive}
        />

        {nodesWithPos.map((node) => (
          <HexNode
            key={node.id}
            pillar={node}
            position={node.pos}
            isSelected={selectedPillar?.id === node.id}
            isDimmed={selectedPillar && selectedPillar.id !== node.id && !isSystemViewActive}
            onSelect={onSelect}
          />
        ))}
      </div>

      <style>{`
        .hex-canvas-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .canvas-elements {
          position: relative;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .hex-canvas-container {
            display: none; /* Hide for mobile layout as per plan */
          }
        }
      `}</style>
    </div>
  );
};

export default HexCanvas;
