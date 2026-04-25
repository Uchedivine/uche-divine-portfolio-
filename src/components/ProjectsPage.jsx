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
  if (type === 'Mobile') return { bg: 'bg-bg-card-cyan', border: 'border-border-cyan', color: 'text-cyan-300', tagClass: 'tag-cyan' };
  if (type === 'Backend') return { bg: 'bg-white/[0.03]', border: 'border-white/[0.07]', color: 'text-text-secondary', tagClass: 'tag-neutral' };
  return { bg: 'bg-bg-card-purple', border: 'border-border-purple', color: 'text-purple-300', tagClass: 'tag-purple' };
};

const ProjectsPage = () => {
  const [active, setActive] = useState('All');
  const gridRef = useReveal();

  const filtered = active === 'All' ? projects : projects.filter(p => p.type === active);

  return (
    <div className="max-w-[1100px] mx-auto px-8 pt-16 pb-24">
      <h1 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-[-0.02em] mb-2">
        <span className="gradient-text">Projects</span>
      </h1>
      <p className="text-text-secondary text-sm mb-8">
        {projects.length} projects across mobile, frontend, and backend.
      </p>

      {/* Filter pills */}
      <div className="flex gap-2 flex-wrap mb-10">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`
              px-4 py-1.5 rounded-[20px] text-[13px] cursor-pointer transition-all duration-200
              ${active === f
                ? 'border border-[rgba(168,85,247,0.5)] bg-[rgba(168,85,247,0.15)] text-purple-300 font-semibold'
                : 'border border-white/[0.08] bg-white/[0.03] text-text-secondary font-normal'
              }
            `}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="reveal-stagger grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-4"
      >
        {filtered.map((project, idx) => {
          const a = typeAccent(project.type);
          return (
            <div
              key={idx}
              className={`
                ${a.bg} border ${a.border} rounded-lg p-6 flex flex-col
                transition-all duration-200 cursor-default
                hover:translate-y-[-4px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]
              `}
            >
              {/* Card header */}
              <div className="flex justify-between items-start mb-2.5">
                <span className={`tag ${a.tagClass}`}>{project.type}</span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${a.color} flex items-center p-1 rounded-md transition-colors duration-200 hover:bg-white/[0.08]`}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              <h3 className="text-[15px] font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-[13px] text-text-secondary leading-[1.65] flex-1 mb-4">
                {project.desc}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-[5px]">
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
