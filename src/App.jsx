import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Think from './pages/Think';
import Build from './pages/Build';
import TeachingAssistant from './pages/TeachingAssistant';
import KeyPillars from './pages/KeyPillars';
import KeyPillarsHex from './pages/KeyPillarsHex';
import Visualisation from './pages/Visualisation';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [currentPage, setCurrentPage] = useState('dashboard');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'theme'));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'learn': return <Learn />;
      case 'think': return <Think />;
      case 'build': return <Build />;
      case 'teaching-assistant': return <TeachingAssistant />;
      case 'pillars': return <KeyPillars />;
      case 'pillars-hex': return <KeyPillarsHex />;
      case 'visualisation': return <Visualisation />;
      default: return <Dashboard />;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setCurrentPage, currentPage }}>
      <div className="app-container">
        <Header />
        <main>
          {renderPage()}
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
