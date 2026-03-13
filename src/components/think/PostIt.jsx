import React, { useState, useRef, useEffect } from 'react';

const PostIt = ({ color = '#fef08a', content, initialX = 0, initialY = 0, rotation = 0 }) => {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPos({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className={`post-it ${isDragging ? 'dragging' : ''}`}
      onMouseDown={handleMouseDown}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${rotation}deg)`,
        backgroundColor: color
      }}
    >
      <div className="post-it-content">
        {content}
      </div>

      <style>{`
        .post-it {
          position: absolute;
          width: 140px;
          height: 140px;
          padding: 1.25rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          cursor: grab;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: transform 0.05s linear;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #1e293b;
          z-index: 10;
        }
        .post-it.dragging {
          cursor: grabbing;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          z-index: 100;
        }
        .post-it::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.05) 50%);
        }
        .post-it-content {
          width: 100%;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </div>
  );
};

export default PostIt;
