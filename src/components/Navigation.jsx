import React from 'react';
import { Home, User, Briefcase, Code } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, isDark, setIsDark, colors }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'work', icon: Briefcase, label: 'Work' },
    { id: 'projects', icon: Code, label: 'Projects' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav style={{
        position: 'fixed',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        background: colors.navBg,
        border: `1px solid ${colors.border}`,
        borderRadius: '30px',
        padding: '0.5rem',
        display: 'flex',
        gap: '0.5rem',
        zIndex: 1000,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
      className="desktop-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            style={{
              background: currentPage === item.id ? colors.accent : 'transparent',
              color: currentPage === item.id ? '#fff' : colors.text,
              border: 'none',
              padding: '0.5rem 1.25rem',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <item.icon size={16} />
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            background: 'transparent',
            color: colors.text,
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <nav style={{
        position: 'fixed',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        background: colors.navBg,
        border: `1px solid ${colors.border}`,
        borderRadius: '30px',
        padding: '0.75rem 1rem',
        display: 'none',
        gap: '0.5rem',
        zIndex: 1000,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        width: 'calc(100% - 2rem)',
        maxWidth: '400px',
        justifyContent: 'space-around'
      }}
      className="mobile-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            style={{
              background: currentPage === item.id ? colors.accent : 'transparent',
              color: currentPage === item.id ? '#fff' : colors.text,
              border: 'none',
              padding: '0.75rem',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
          >
            <item.icon size={20} />
          </button>
        ))}
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            background: 'transparent',
            color: colors.text,
            border: 'none',
            padding: '0.75rem',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .nav-label {
            display: inline;
          }
        }
        @media (max-width: 768px) {
          .nav-label {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;