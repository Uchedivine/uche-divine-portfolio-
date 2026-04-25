import React, { useEffect, useState } from 'react';

const LoadingAnimation = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => setOpacity(0), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-bg flex flex-col items-center justify-center z-[9999] transition-opacity duration-500"
      style={{
        opacity,
        pointerEvents: opacity === 0 ? 'none' : 'all',
      }}
    >
      <div className="text-[28px] font-bold bg-gradient-to-br from-accent to-accent-cyan bg-clip-text text-transparent mb-6 tracking-[-0.02em]">
        UD
      </div>
      <div className="w-[120px] h-0.5 bg-white/[0.08] rounded-sm overflow-hidden">
        <div className="h-full bg-gradient-to-r from-accent to-accent-cyan rounded-sm animate-load-bar" />
      </div>
    </div>
  );
};

export default LoadingAnimation;
