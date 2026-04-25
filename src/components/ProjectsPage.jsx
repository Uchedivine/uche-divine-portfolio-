import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const projects = [
  { title: 'Bank Aptitude Test', type: 'Full Stack', desc: 'Pixel-perfect aptitude test platform with real-time scoring and performance tracking.', tags: ['Next.js', 'Laravel', 'MySQL'], link: 'https://bank-aptitude-test-frontend.vercel.app/' },
  { title: 'Crypto Wallet App', type: 'Mobile', desc: 'Modern Web3 crypto wallet with real-time price tracking and trend charts.', tags: ['Flutter', 'Dart', 'API Integration'], link: 'https://appetize.io/embed/b_tjsg3n25kl2anr3schm3bc64fa' },
  { title: 'Chop Chop Delivery', type: 'Mobile', desc: 'Food delivery app with real-time order tracking, dynamic menus, and secure payment integration.', tags: ['Flutter', 'Dart', 'API Integration'], link: 'https://appetize.io/embed/b_syr2cowdxmfshowtcna3drvlky' },
  { title: 'Audiophile E-commerce', type: 'Frontend', desc: 'Pixel-perfect e-commerce platform with a fully functional checkout flow.', tags: ['React', 'Next.js', 'Convex'], link: 'https://audiophile-ecommerce1.netlify.app/' },
  { title: 'Country Currency API', type: 'Backend', desc: 'RESTful API fetching country data and live exchange rates.', tags: ['PHP', 'Laravel', 'MySQL'], link: null },
  { title: 'Framez Social App', type: 'Mobile', desc: 'Mobile social platform with Firebase authentication and real-time feeds.', tags: ['React Native', 'Firebase'], link: 'https://appetize.io/embed/b_o4fc7j2wpfb557k4hezlgsjlwy' },
  { title: 'Multi-Framework Tickets', type: 'Frontend', desc: 'Ticket management system built in three different frameworks simultaneously.', tags: ['React', 'Vue.js', 'Twig'], link: 'https://ticket-app-react.netlify.app/' },
  { title: 'Storekeeper Inventory', type: 'Mobile', desc: 'Local inventory management with offline-first Hive database.', tags: ['Flutter', 'Hive', 'CRUD'], link: 'https://appetize.io/embed/b_dyvs63gedhnjpwdh27xh6dniya' },
  { title: 'Todo App + Theme Switch', type: 'Frontend', desc: 'Pixel-perfect todo app with light/dark themes and real-time backend integration.', tags: ['React Native', 'Convex', 'Theming'], link: 'https://appetize.io/embed/b_szixceobpvrxapvfwcykgpfqbi' },
  { title: 'Tech Trivia Quiz', type: 'Mobile', desc: 'Interactive quiz with score tracking, countdown timer, and post-game answer review.', tags: ['Flutter', 'Dart', 'Interactive UI'], link: 'https://appetize.io/embed/b_qfsj4e7qy7vkhpmh2ntyluzegi' },
  { title: 'String Analyzer API', type: 'Backend', desc: 'API for palindrome validation, SHA-256 hashing, and character frequency analysis.', tags: ['PHP', 'Laravel', 'REST API'], link: null },
  { title: 'Black Friday Store', type: 'Frontend', desc: 'Promotional e-commerce landing page built for a Black Friday campaign.', tags: ['HTML', 'Tailwind', 'JavaScript'], link: 'https://black-friday1.netlify.app/' },
  { title: 'TicTacToe', type: 'Frontend', desc: 'TicTacToe game with multiple difficulty levels powered by a minimax algorithm.', tags: ['React'], link: 'https://uche-tictactoe.netlify.app/' },
];

const filters = ['All', 'Mobile', 'Frontend', 'Backend', 'Full Stack'];

const typeAccent = (type) => {
  if (type === 'Mobile') return { bg: 'var(--bg-card-cyan)', border: 'var(--border-cyan)', color: '#22d3ee', tagClass: 'tag-cyan' };
  if (type === 'Backend') return { bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.07)', color: 'var(--text-secondary)', tagClass: 'tag-neutral' };
  return { bg: 'var(--bg-card-purple)', border: 'var(--border-purple)', color: '#c084fc', tagClass: 'tag-purple' };
};

const ProjectsPage = () => {
  const [active, setActive] = useState('All');
  const gridRef = useReveal();

  const filtered = active === 'All' ? projects : projects.filter(p => p.type === active);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
      <h1 style={{
        fontSize: 'clamp(1.8rem,4vw,2.4rem)',
        fontWeight: '700',
        letterSpacing: '-0.02em',
        marginBottom: '0.5rem',
      }}>
        <span className="gradient-text">Projects</span>
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '2rem' }}>
        {projects.length} projects across mobile, frontend, and backend.
      </p>

      {/* Filter pills */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: '6px 16px',
              borderRadius: '20px',
              border: active === f ? '1px solid rgba(168,85,247,0.5)' : '1px solid rgba(255,255,255,0.08)',
              background: active === f ? 'rgba(168,85,247,0.15)' : 'rgba(255,255,255,0.03)',
              color: active === f ? '#c084fc' : 'var(--text-secondary)',
              fontSize: '13px',
              fontWeight: active === f ? '600' : '400',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="reveal-stagger"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px,1fr))',
          gap: '16px',
        }}
      >
        {filtered.map((project, idx) => {
          const a = typeAccent(project.type);
          return (
            <div
              key={idx}
              style={{
                background: a.bg,
                border: `1px solid ${a.border}`,
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.3)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Card header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <span className={`tag ${a.tagClass}`}>{project.type}</span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: a.color,
                      display: 'flex',
                      alignItems: 'center',
                      padding: '4px',
                      borderRadius: '6px',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#fff', marginBottom: '8px' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65', flex: 1, marginBottom: '16px' }}>
                {project.desc}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="tag tag-neutral">{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;