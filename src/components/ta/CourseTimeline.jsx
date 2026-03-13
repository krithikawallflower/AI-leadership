import React, { useState } from 'react';
import { Lock, Check, Clock } from 'lucide-react';

const CourseTimeline = ({ days = [], activeDayIndex = 0, onDaySelect }) => {
  const [hoveredDay, setHoveredDay] = useState(null);

  const activeDay = days[activeDayIndex] || {};
  const fillPercent = (activeDayIndex / (days.length - 1)) * 100;

  return (
    <div className="course-timeline-wrapper">
      <div className="timeline-header">
        <span className="journey-label">Your Journey</span>
        <div className="active-day-info">
          <span className="active-day-label">{activeDay.dayLabel}</span>
          <span className="divider">·</span>
          <span className="active-theme">{activeDay.theme}</span>
        </div>
      </div>

      <div className="timeline-container">
        <div className="track-line">
          <div 
            className="track-fill" 
            style={{ width: `${fillPercent}%` }} 
          />
        </div>

        <div className="nodes-container">
          {days.map((day, index) => {
            const isCompleted = index < activeDayIndex;
            const isActive = index === activeDayIndex;
            const isLocked = index > activeDayIndex;
            const isHovered = hoveredDay === index;

            return (
              <div 
                key={day.dayId} 
                className={`timeline-node ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                onMouseEnter={() => setHoveredDay(index)}
                onMouseLeave={() => setHoveredDay(null)}
                onClick={() => !isLocked && onDaySelect && onDaySelect(index)}
              >
                <div className="node-marker-wrapper">
                  <div className="node-marker">
                    {isCompleted ? <Check size={14} /> : 
                     isLocked ? <Lock size={12} /> : 
                     <div className="active-inner" />}
                  </div>
                  {isActive && <div className="pulse-ring" />}
                </div>
                
                <span className="node-label">{day.nodeLabel}</span>

                {isHovered && (
                  <div className="node-tooltip glass">
                    <span className="tooltip-theme">{day.theme}</span>
                    <span className="tooltip-status">
                      {isCompleted ? 'Completed' : isActive ? 'Currently Active' : `Unlocks after ${days[index-1]?.theme}`}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .course-timeline-wrapper {
          max-width: 800px;
          margin: 0 auto 3rem auto;
          padding: 1.5rem 2rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          box-shadow: var(--card-shadow);
        }
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .journey-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
        }
        .active-day-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .active-day-label {
          color: var(--accent-primary);
        }
        .divider {
          color: var(--text-tertiary);
        }
        .active-theme {
          color: var(--text-primary);
        }
        .timeline-container {
          position: relative;
          height: 60px;
          display: flex;
          align-items: center;
        }
        .track-line {
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--bg-tertiary);
          border-radius: 2px;
          z-index: 1;
        }
        .track-fill {
          height: 100%;
          background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
          border-radius: 2px;
          transition: width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .nodes-container {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: space-between;
          z-index: 2;
        }
        .timeline-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          position: relative;
        }
        .timeline-node.locked {
          cursor: not-allowed;
        }
        .node-marker-wrapper {
          position: relative;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .node-marker {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tertiary);
          transition: all 0.3s ease;
          z-index: 2;
        }
        .timeline-node.completed .node-marker {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: white;
        }
        .timeline-node.active .node-marker {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          background: var(--bg-card);
          transform: scale(1.1);
        }
        .active-inner {
          width: 8px;
          height: 8px;
          background: var(--accent-primary);
          border-radius: 50%;
        }
        .timeline-node.locked .node-marker {
          color: var(--accent-locked);
          border-color: var(--border-color);
          background: var(--bg-tertiary);
        }
        .pulse-ring {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid var(--accent-primary);
          animation: pulse-ring 2s infinite;
          z-index: 1;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.7); opacity: 0.5; }
          70% { transform: scale(1.1); opacity: 0; }
          100% { transform: scale(0.7); opacity: 0; }
        }
        .node-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .timeline-node.active .node-label {
          color: var(--accent-primary);
        }
        .node-tooltip {
          position: absolute;
          bottom: 110%;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          padding: 0.75rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          text-align: center;
          z-index: 20;
          box-shadow: var(--card-shadow);
          animation: tooltip-fade 0.2s ease-out;
        }
        @keyframes tooltip-fade {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .tooltip-theme {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-primary);
        }
        .tooltip-status {
          font-size: 0.7rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default CourseTimeline;
