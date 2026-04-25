import React from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'work', icon: Briefcase, label: 'Work' },
  { id: 'projects', icon: Code, label: 'Projects' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      {/* ── Desktop nav ── */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 bg-bg/70 border border-border rounded-[32px] p-[5px] flex gap-[2px] z-[1000] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] desktop-nav">
        {navItems.map(item => {
          const active = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`
                ${active
                  ? 'bg-gradient-to-br from-accent to-purple-700 text-white font-semibold tracking-tight'
                  : 'bg-transparent text-white/55 font-normal hover:text-white hover:bg-white/[0.06]'
                }
                border-none px-[18px] py-[7px] rounded-[24px] cursor-pointer text-[13px]
                flex items-center gap-1.5 transition-all duration-200
              `}
            >
              <item.icon size={14} />
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* ── Mobile bottom nav ── */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-bg/85 border border-border rounded-[32px] px-3 py-2 hidden gap-1 z-[1000] backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.5)] justify-around mobile-nav">
        {navItems.map(item => {
          const active = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`
                ${active
                  ? 'bg-gradient-to-br from-accent to-purple-700 text-white font-semibold'
                  : 'bg-transparent text-white/45 font-normal'
                }
                border-none px-3.5 py-2.5 rounded-[20px] cursor-pointer
                flex flex-col items-center gap-[3px] transition-all duration-200 min-w-[52px]
              `}
            >
              <item.icon size={18} />
              <span className={`text-[9px] ${active ? 'font-semibold' : 'font-normal'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav  { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-label { display: inline; }
        }
        @media (max-width: 768px) {
          .nav-label { display: none; }
        }
      `}</style>
    </>
  );
};

export default Navigation;
