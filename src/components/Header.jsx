import React from 'react';
import { Sun, Moon, Compass, Menu, X, Book, Bot, ChevronRight, BarChart2 } from 'lucide-react';
import { useTheme } from '../App';

const Header = () => {
  const { theme, toggleTheme, setCurrentPage, currentPage } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="glass header">
      <div className="container header-content">
        <div className="header-left">
          <button className="menu-trigger" onClick={toggleMenu} aria-label="Open Menu">
            <Menu size={24} />
          </button>
          
          <div className="logo" onClick={() => navigateTo('dashboard')}>
            <div className="logo-icon">
              <Compass size={24} color="var(--accent-primary)" />
            </div>
            <span className="logo-text">Student<span className="gradient-text">Companion</span></span>
          </div>
        </div>

        <nav className="nav-links">
          {['dashboard', 'learn', 'think', 'build'].map((page) => (
            <button
              key={page}
              onClick={() => navigateTo(page)}
              className={`nav-link ${currentPage === page ? 'active' : ''}`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </nav>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      {/* Hamburger Menu Drawer */}
      <div className={`menu-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <span className="drawer-title">Course Explorer</span>
          <button className="close-btn" onClick={toggleMenu}><X size={20} /></button>
        </div>
        
        <div className="drawer-sections">
          <div className="drawer-section">
            <h4 className="section-label">Main Views</h4>
            <div className="menu-items">
              <button 
                className={`menu-item ${currentPage === 'dashboard' ? 'active' : ''}`}
                onClick={() => navigateTo('dashboard')}
              >
                <div className="item-icon"><Book size={20} /></div>
                <div className="item-content">
                  <span className="item-title">Textbook</span>
                  <span className="item-desc">Course materials & landing</span>
                </div>
                <ChevronRight size={16} className="arrow" />
              </button>
              
              <button 
                className={`menu-item ${currentPage === 'teaching-assistant' ? 'active' : ''}`}
                onClick={() => navigateTo('teaching-assistant')}
              >
                <div className="item-icon"><Bot size={20} /></div>
                <div className="item-content">
                  <span className="item-title">Teaching Assistant</span>
                  <span className="item-desc">Strategic Orchestration guide</span>
                </div>
                <ChevronRight size={16} className="arrow" />
              </button>

              <button
                className={`menu-item ${currentPage === 'visualisation' ? 'active' : ''}`}
                onClick={() => navigateTo('visualisation')}
              >
                <div className="item-icon"><BarChart2 size={20} /></div>
                <div className="item-content">
                  <span className="item-title">Visualisation</span>
                  <span className="item-desc">Operating model journey</span>
                </div>
                <ChevronRight size={16} className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu} />}
      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 72px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .menu-trigger {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: var(--text-secondary);
        }
        .menu-trigger:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }
        .logo-text {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: -0.02em;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.5rem 0;
          position: relative;
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .nav-link.active {
          color: var(--accent-primary);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent-primary);
          border-radius: 2px;
        }
        .theme-toggle {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }
        .theme-toggle:hover {
          background: var(--bg-secondary);
          transform: translateY(-2px);
          box-shadow: var(--card-shadow);
        }
        
        /* Drawer Styles */
        .menu-drawer {
          position: fixed;
          top: 0;
          left: -320px;
          width: 320px;
          height: 100vh;
          background: var(--bg-primary);
          z-index: 1000;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-right: 1px solid var(--border-color);
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .menu-drawer.open {
          transform: translateX(320px);
        }
        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }
        .drawer-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 500;
        }
        .close-btn {
          color: var(--text-secondary);
          padding: 0.5rem;
          border-radius: 50%;
        }
        .close-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        .section-label {
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
          margin-bottom: 1.25rem;
        }
        .menu-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .menu-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 15px;
          text-align: left;
          width: 100%;
          border: 1px solid transparent;
        }
        .menu-item:hover {
          background: var(--bg-secondary);
          border-color: var(--border-color);
        }
        .menu-item.active {
          background: var(--accent-primary-20);
          border-color: var(--accent-primary);
        }
        .item-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          color: var(--accent-primary);
        }
        .item-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .item-title {
          font-weight: 400;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .item-desc {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.4);
          z-index: 999;
          backdrop-filter: blur(4px);
        }
        .arrow {
          color: var(--text-tertiary);
          opacity: 0;
          transition: all 0.2s;
        }
        .menu-item:hover .arrow {
          opacity: 1;
          transform: translateX(4px);
        }
      `}</style>
    </header>
  );
};

export default Header;
