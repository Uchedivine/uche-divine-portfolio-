import React from 'react';

const LoadingAnimation = ({ colors }) => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: colors.bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      backdropFilter: 'blur(10px)',
      animation: 'fadeOut 0.5s ease-out 1s forwards'
    }}>
      <style>{`
        @keyframes fadeOut {
          to { opacity: 0; pointer-events: none; }
        }
        @keyframes blur {
          0% { filter: blur(20px); opacity: 0; }
          50% { filter: blur(5px); opacity: 0.5; }
          100% { filter: blur(0); opacity: 1; }
        }
      `}</style>
      <div style={{
        fontSize: '2rem',
        fontWeight: '700',
        color: colors.text,
        animation: 'blur 1s ease-out'
      }}>
        Uchechukwu Divine
      </div>
    </div>
  );
};

export default LoadingAnimation;