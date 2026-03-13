import React, { useState } from 'react';

const Timeline = ({ currentDay = 3 }) => {
  const days = [
    { id: 1, title: 'Day 1', date: 'Weekend 1, Sat', status: 'completed' },
    { id: 2, title: 'Day 2', date: 'Weekend 1, Sun', status: 'completed' },
    { id: 3, title: 'Day 3', date: 'Weekend 2, Sat', status: 'active' },
    { id: 4, title: 'Day 4', date: 'Weekend 2, Sun', status: 'upcoming' },
    { id: 5, title: 'Day 5', date: 'Weekend 3, Sat', status: 'upcoming' },
    { id: 6, title: 'Day 6', date: 'Weekend 3, Sun', status: 'upcoming' },
  ];

  const [hoveredDay, setHoveredDay] = useState(null);

  return (
    <div className="timeline-container glass">
      <div className="timeline-header">
        <h3 className="timeline-title">Course Journey</h3>
        <div className="timeline-badge">
          <span>Day {currentDay} of 6</span>
        </div>
      </div>

      <div className="timeline-track">
        <div className="timeline-line">
          <div
            className="timeline-progress"
            style={{ width: `${((currentDay - 1) / (days.length - 1)) * 100}%` }}
          />
        </div>

        <div className="timeline-nodes">
          {days.map((day) => (
            <div
              key={day.id}
              className={`timeline-node ${day.status} ${hoveredDay === day.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredDay(day.id)}
              onMouseLeave={() => setHoveredDay(null)}
            >
              {/* Dot marker */}
              <div className="node-dot-wrapper">
                <div className="node-dot" />
                {day.status === 'active' && <div className="dot-pulse" />}
              </div>

              <span className="node-day">{day.title}</span>

              {hoveredDay === day.id && (
                <div className="node-tooltip glass">
                  <p>{day.date}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-container {
          padding: 1.25rem 2rem;
          border-radius: 16px;
          box-shadow: var(--card-shadow);
        }
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .timeline-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .timeline-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--accent-glow);
          color: var(--accent-primary);
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 600;
        }
        .timeline-track {
          position: relative;
          padding: 0.5rem 0;
        }
        .timeline-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--bg-tertiary);
          transform: translateY(-50%);
          border-radius: 2px;
        }
        .timeline-progress {
          height: 100%;
          background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
          border-radius: 2px;
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .timeline-nodes {
          position: relative;
          display: flex;
          justify-content: space-between;
          z-index: 10;
        }
        .timeline-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.45rem;
          cursor: pointer;
          position: relative;
        }
        .node-dot-wrapper {
          position: relative;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .node-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 2px solid var(--border-color);
          transition: all 0.3s ease;
          z-index: 2;
          position: relative;
        }
        .timeline-node.completed .node-dot {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
        }
        .timeline-node.active .node-dot {
          width: 13px;
          height: 13px;
          background: var(--accent-primary);
          border-color: var(--accent-primary);
        }
        .dot-pulse {
          position: absolute;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid var(--accent-primary);
          animation: dot-pulse 2s infinite;
          z-index: 1;
        }
        @keyframes dot-pulse {
          0%   { transform: scale(0.6); opacity: 0.6; }
          70%  { transform: scale(1.3); opacity: 0; }
          100% { transform: scale(0.6); opacity: 0; }
        }
        .node-day {
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--text-tertiary);
          white-space: nowrap;
        }
        .timeline-node.active .node-day {
          color: var(--accent-primary);
          font-weight: 600;
        }
        .timeline-node.completed .node-day {
          color: var(--text-secondary);
        }
        .node-tooltip {
          position: absolute;
          bottom: 130%;
          left: 50%;
          transform: translateX(-50%);
          width: 130px;
          padding: 0.5rem 0.75rem;
          border-radius: 10px;
          font-size: 0.68rem;
          text-align: center;
          font-weight: 500;
          color: var(--text-secondary);
          animation: fadeIn 0.2s ease-out;
          white-space: nowrap;
          z-index: 20;
          box-shadow: var(--card-shadow);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Timeline;
