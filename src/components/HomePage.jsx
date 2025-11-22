import React from 'react';
import profileImg from '../assets/images/profile.jpg'; // Change extension if your image is .png or .jpeg

const HomePage = ({ colors, setCurrentPage }) => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: 'clamp(2rem, 6vw, 3.5rem)',
        fontWeight: '700',
        color: colors.text,
        marginBottom: '1.5rem',
        lineHeight: '1.2'
      }}>
        Welcome To My<br />Personal Archive.
      </h1>
      
      <p style={{
        fontSize: '1.125rem',
        color: colors.textSecondary,
        maxWidth: '600px',
        marginBottom: '2rem'
      }}>
        Web & Mobile Developer specializing in Flutter,<br />
        Laravel, React, and Modern Web Technologies.
      </p>

      <button
        onClick={() => setCurrentPage('about')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.75rem 1.5rem',
          background: colors.cardBg,
          border: `1px solid ${colors.border}`,
          borderRadius: '30px',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <img 
          src={profileImg}
          alt="Avatar"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
        <span style={{ color: colors.text, fontSize: '0.875rem' }}>
          About — Uchechukwu Divine
        </span>
      </button>
    </div>
  );
};

export default HomePage;