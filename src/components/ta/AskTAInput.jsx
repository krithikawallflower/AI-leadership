import React, { useState } from 'react';
import { Send } from 'lucide-react';

const AskTAInput = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <div className="ask-ta-container">
      <div className="input-wrapper">
        <textarea
          placeholder="Ask a clarifying question..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyPress}
          className="ask-input"
        />
        <button 
          className="send-btn" 
          onClick={handleSend}
          disabled={!value.trim()}
        >
          <Send size={18} />
        </button>
      </div>

      <style>{`
        .ask-ta-container {
          position: sticky;
          bottom: 0;
          padding-top: 1.5rem;
          margin-top: auto;
        }
        .input-wrapper {
          position: relative;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 0.75rem;
          box-shadow: var(--card-shadow);
        }
        .ask-input {
          width: 100%;
          border: none;
          background: transparent;
          color: var(--text-primary);
          font-family: var(--font-main);
          font-size: 0.85rem;
          resize: none;
          min-height: 24px;
          max-height: 120px;
          padding-right: 2.5rem;
          outline: none;
        }
        .send-btn {
          position: absolute;
          right: 0.75rem;
          bottom: 0.75rem;
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
          transition: opacity 0.2s;
        }
        .send-btn:not(:disabled) {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default AskTAInput;
