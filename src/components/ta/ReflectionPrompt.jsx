import React from 'react';
import { Sparkles } from 'lucide-react';

const ReflectionPrompt = ({ text }) => {
  return (
    <div className="reflection-prompt">
      <div className="prompt-header">
        <Sparkles size={16} />
        <span>TA REFLECTION</span>
      </div>
      <p className="prompt-text">"{text}"</p>

      <style>{`
        .reflection-prompt {
          background: var(--accent-ta-glow);
          border-left: 4px solid var(--accent-ta);
          padding: 1.25rem 1.5rem;
          border-radius: 12px;
          margin: -1rem 1rem 2rem 2.5rem;
          animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .prompt-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--accent-ta);
          margin-bottom: 0.5rem;
        }
        .prompt-text {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.5;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default ReflectionPrompt;
