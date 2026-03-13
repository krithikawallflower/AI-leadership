import React from 'react';
import { Flag } from 'lucide-react';

const TAAnnouncement = ({ content }) => {
  return (
    <div className="ta-announcement">
      <div className="ann-icon">
        <Flag size={20} />
      </div>
      <p className="ann-text">{content}</p>

      <style>{`
        .ta-announcement {
          background: linear-gradient(135deg, var(--bg-card), var(--bg-secondary));
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          box-shadow: var(--card-shadow);
        }
        .ann-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--accent-primary-20);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ann-text {
          font-weight: 500;
          font-size: 1.1rem;
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
};

export default TAAnnouncement;
