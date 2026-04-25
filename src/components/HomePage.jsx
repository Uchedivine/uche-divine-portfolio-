import React, { useEffect, useRef } from 'react';
import profileImg from '../assets/images/profile.jpg';

const HomePage = ({ setCurrentPage }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(24px)';
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (heroRef.current) {
            heroRef.current.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
            heroRef.current.style.opacity = '1';
            heroRef.current.style.transform = 'translateY(0)';
          }
        }, 100);
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative">
      <div ref={heroRef} className="text-center max-w-[680px] w-full">

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.2)] rounded-[20px] mb-8">
          <span className="w-[7px] h-[7px] bg-green rounded-full pulse-dot" />
          <span className="text-xs text-green font-medium">
            Available for work
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.4rem,6vw,3.8rem)] font-bold leading-[1.1] mb-5 tracking-[-0.03em]">
          <span className="gradient-text-animated">I build things</span>
          <br />
          <span className="text-white">people actually use.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[clamp(1rem,2.5vw,1.15rem)] text-text-secondary leading-[1.7] mb-9 max-w-[480px] mx-auto">
          Full-stack developer specializing in Flutter, React &amp; Laravel.
          Currently pursuing an MSc in Computer Science.
        </p>

        {/* CTAs */}
        <div className="flex gap-3 justify-center flex-wrap mb-12">
          <button
            onClick={() => setCurrentPage('projects')}
            className="px-[26px] py-[11px] bg-gradient-to-br from-accent to-purple-700 border-none rounded-[28px] text-white text-sm font-semibold cursor-pointer transition-all duration-200 shadow-[0_4px_20px_rgba(168,85,247,0.35)] hover:translate-y-[-2px] hover:shadow-[0_8px_28px_rgba(168,85,247,0.5)]"
          >
            View Projects
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-[26px] py-[11px] bg-white/5 border border-white/[0.12] rounded-[28px] text-[#e0e0e0] text-sm font-medium cursor-pointer transition-all duration-200 backdrop-blur-xs hover:bg-white/10 hover:border-white/[0.22]"
          >
            Get in Touch
          </button>
        </div>

        {/* Profile chip */}
        <button
          onClick={() => setCurrentPage('about')}
          className="inline-flex items-center gap-2.5 px-[18px] py-2 pl-2 bg-white/[0.04] border border-white/10 rounded-[32px] cursor-pointer transition-all duration-200 backdrop-blur-xs hover:bg-[rgba(168,85,247,0.1)] hover:border-[rgba(168,85,247,0.3)]"
        >
          <img
            src={profileImg}
            alt="Uchechukwu Divine"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-[13px] text-white/70 font-normal">
            About — Uchechukwu Divine
          </span>
          <span className="text-[13px] text-accent">→</span>
        </button>

        {/* Social links */}
        <div className="flex gap-4 justify-center mt-8">
          {[
            { label: 'GitHub', href: 'https://github.com/Uchedivine' },
            { label: 'Email', href: 'mailto:uchedivine65@gmail.com' },
            { label: 'Phone', href: 'tel:+2349133261236' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-[13px] text-text-tertiary no-underline transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
