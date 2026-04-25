/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        'bg-card': 'rgba(255, 255, 255, 0.03)',
        'bg-card-purple': 'rgba(168, 85, 247, 0.06)',
        'bg-card-cyan': 'rgba(6, 182, 212, 0.05)',
        accent: '#a855f7',
        'accent-cyan': '#06b6d4',
        'accent-glow': 'rgba(168, 85, 247, 0.25)',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-purple': 'rgba(168, 85, 247, 0.2)',
        'border-cyan': 'rgba(6, 182, 212, 0.18)',
        text: '#ffffff',
        'text-secondary': '#a0a0a0',
        'text-tertiary': '#555555',
        green: '#22c55e',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      spacing: {
        nav: '72px',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backdropBlur: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.5)' },
          '70%': { boxShadow: '0 0 0 8px rgba(34,197,94,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0)' },
        },
        loadBar: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease both',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'pulse-ring': 'pulseRing 2s infinite',
        'load-bar': 'loadBar 1.4s ease forwards',
      },
    },
  },
  plugins: [],
}
