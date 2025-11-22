import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsPage = ({ colors, isDark }) => {
  const c = colors || {
    text: isDark ? '#f8fafc' : '#1e293b',
    textSecondary: isDark ? '#94a3b8' : '#64748b',
    accent: '#3b82f6',
    cardBg: isDark ? '#1e293b' : '#ffffff',
    border: isDark ? '#334155' : '#e2e8f0',
    bg: isDark ? '#0f172a' : '#f8fafc'
  };
  const dark = isDark ?? false;

  const projects = [
    {
      title: 'Crypto Wallet App',
      subtitle: 'Mobile',
      desc: 'Built modern Web3 crypto wallet with real-time price tracking and trend charts',
      tags: ['Flutter', 'Dart', 'API Integration'],
      link: 'https://appetize.io/embed/b_tjsg3n25kl2anr3schm3bc64fa'
    },
    {
      title: 'Audiophile E-commerce',
      subtitle: 'Frontend',
      desc: 'Created pixel-perfect e-commerce platform with functional checkout flow',
      tags: ['React', 'Next.js', 'Convex'],
      link: 'https://audiophile-ecommerce1.netlify.app/'
    },
    {
      title: 'Country Currency API',
      subtitle: 'Backend',
      desc: 'Built RESTful API fetching country data and exchange rates',
      tags: ['PHP', 'Laravel', 'MySQL'],
      link: null
    },
    {
      title: 'Framez Social App',
      subtitle: 'Mobile',
      desc: 'Developed mobile social platform with Firebase authentication',
      tags: ['React Native', 'Firebase'],
      link: 'https://appetize.io/embed/b_o4fc7j2wpfb557k4hezlgsjlwy'
    },
    {
      title: 'Multi-Framework Tickets',
      subtitle: 'Frontend',
      desc: 'Built ticket management system in three frameworks',
      tags: ['React', 'Vue.js', 'Twig'],
      link: 'https://ticket-app-react.netlify.app/', 
    },
    {
      title: 'Storekeeper Inventory',
      subtitle: 'Mobile',
      desc: 'Developed local inventory management with Hive database',
      tags: ['Flutter', 'Hive', 'CRUD'],
      link: 'https://appetize.io/embed/b_dyvs63gedhnjpwdh27xh6dniya'
    },
    {
      title: 'Todo App with Theme Switching',
      subtitle: 'Frontend',
      desc: 'Built pixel-perfect todo application with light/dark themes and real-time backend integration',
      tags: ['React Native', 'Convex', 'Theme Management'],
      link: 'https://appetize.io/embed/b_szixceobpvrxapvfwcykgpfqbi'
    },
    {
      title: 'Tech Trivia Quiz App',
      subtitle: 'Mobile',
      desc: 'Created interactive quiz with score tracking, timer functionality, and answer review',
      tags: ['Flutter', 'Dart', 'Interactive UI'],
      link: 'https://appetize.io/embed/b_qfsj4e7qy7vkhpmh2ntyluzegi'
    },
    {
      title: 'String Analyzer Service',
      subtitle: 'Backend',
      desc: 'Developed API analyzing strings with palindrome validation, SHA-256 hashing, and character frequency',
      tags: ['PHP', 'Laravel', 'REST API'],
      link: null
    },
    {
        title: 'Black Friday Store',
      subtitle: 'Frontend',
      desc: 'Basic Black Friday Webpage',
      tags: ['Html', 'CSS/Tailwind', 'JavaScript'],
      link: 'https://black-friday1.netlify.app/'
    },
     {
        title: 'TicTacToe',
      subtitle: 'Frontend',
      desc: 'TicTacToe Game With Multiple level difficulty',
      tags: ['React'],
      link: 'https://uche-tictactoe.netlify.app/'
    },
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem',
      background: c.bg,
      minHeight: '100vh'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: c.text,
        marginBottom: '3rem'
      }}>
        Projects
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {projects.map((project, idx) => (
          <div key={idx} style={{
            background: c.cardBg,
            border: `1px solid ${c.border}`,
            borderRadius: '12px',
            padding: '1.5rem',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: c.text
              }}>
                {project.title}
              </h3>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    color: c.accent,
                    padding: '0.25rem',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = dark ? '#334155' : '#e2e8f0'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            <p style={{
              color: c.accent,
              fontSize: '0.75rem',
              marginBottom: '1rem',
              fontWeight: '500'
            }}>
              {project.subtitle}
            </p>
            <p style={{
              color: c.textSecondary,
              fontSize: '0.875rem',
              lineHeight: '1.6',
              marginBottom: '1rem',
              flex: 1
            }}>
              {project.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{
                  background: dark ? '#1e293b' : '#f1f5f9',
                  color: c.textSecondary,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;