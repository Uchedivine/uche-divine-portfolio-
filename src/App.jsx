import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import LoadingAnimation from './components/LoadingAnimation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import WorkPage from './components/WorkPage';
import ProjectsPage from './components/ProjectsPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading animation when navigating to home page
  useEffect(() => {
    if (currentPage === 'home') {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

 const theme = {
  dark: {
    bg: '#000000',              
    cardBg: '#0a0a0a',          
    text: '#ffffff',            
    textSecondary: '#a0a0a0',   
    accent: '#c084fc',          // Brighter neon purple
    accentGlow: '#a855f7',      // For glow effects
    border: '#1a1a1a',          
    navBg: '#0a0a0a'            
  },
  light: {
    bg: '#ffffff',
    cardBg: '#f9fafb',
    text: '#0a0a0a',
    textSecondary: '#6b7280',
    accent: '#a855f7',          
    accentGlow: '#a855f7',
    border: '#e5e7eb',
    navBg: '#ffffff'
  }
};

  const colors = isDark ? theme.dark : theme.light;

  return (
    <div style={{
      minHeight: '100vh',
      background: colors.bg,
      color: colors.text,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      paddingBottom: '80px',
      position: 'relative',
      transition: 'background 0.3s, color 0.3s'
    }}>
      {isLoading && currentPage === 'home' && <LoadingAnimation colors={colors} />}

      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDark={isDark}
        setIsDark={setIsDark}
        colors={colors}
      />

      <main style={{ paddingTop: '80px' }}>
        {currentPage === 'home' && <HomePage colors={colors} setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage colors={colors} />}
        {currentPage === 'work' && <WorkPage colors={colors} />}
        {currentPage === 'projects' && <ProjectsPage colors={colors} isDark={isDark} />}
      </main>
    </div>
  );
};

export default App;