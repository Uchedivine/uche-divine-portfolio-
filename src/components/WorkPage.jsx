import React from 'react';
import { useReveal } from '../hooks/useReveal';

const jobs = [
  {
    company: 'Whitehat Innovative',
    role: 'Software Development Intern',
    period: 'Mar 2025 – Present',
    accent: '#a855f7',
    tag: 'Current',
    duties: [
      'Build and maintain dynamic websites and web applications with Laravel & PHP',
      'Collaborate with developers, contribute to code reviews and system planning',
      'Write clean, testable, and well-documented code',
    ],
  },
  {
    company: 'Ugofly Travels & Tours',
    role: 'Travel Advisor Intern',
    period: 'Jul 2024 – Jan 2025',
    accent: '#06b6d4',
    tag: null,
    duties: [
      'Processed and secured Qatar visas for 200+ corporate and leisure clients',
      'Managed documentation from passport collection through final embassy approval',
      'Ensured 100% compliance with Qatar embassy requirements',
    ],
  },
  {
    company: 'Whitehat Innovative',
    role: 'Software Development Intern',
    period: 'Jun 2022 – Dec 2022',
    accent: '#a855f7',
    tag: null,
    duties: [
      'Participated in design and implementation of mobile applications using Flutter',
      'Wrote clean, efficient Dart code and assisted in debugging',
      'Contributed to improving app performance and system architecture',
    ],
  },
];

const WorkPage = () => {
  const listRef = useReveal();

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
      <h1 style={{
        fontSize: 'clamp(1.8rem,4vw,2.4rem)',
        fontWeight: '700',
        letterSpacing: '-0.02em',
        marginBottom: '0.5rem',
      }}>
        <span className="gradient-text">Work Experience</span>
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '3rem' }}>
        Where I've been and what I built there.
      </p>

      <div ref={listRef} className="reveal-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {jobs.map((job, idx) => (
          <div
            key={idx}
            style={{
              background: job.accent === '#a855f7' ? 'var(--bg-card-purple)' : 'var(--bg-card-cyan)',
              border: `1px solid ${job.accent === '#a855f7' ? 'var(--border-purple)' : 'var(--border-cyan)'}`,
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = `0 12px 32px ${job.accent}22`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#fff' }}>{job.company}</h2>
                  {job.tag && (
                    <span style={{
                      fontSize: '11px',
                      padding: '2px 8px',
                      background: 'rgba(34,197,94,0.12)',
                      border: '1px solid rgba(34,197,94,0.25)',
                      borderRadius: '10px',
                      color: '#22c55e',
                      fontWeight: '500',
                    }}>{job.tag}</span>
                  )}
                </div>
                <p style={{ fontSize: '13px', color: job.accent }}>{job.role}</p>
              </div>
              <span style={{
                fontSize: '12px',
                color: 'var(--text-tertiary)',
                background: 'rgba(255,255,255,0.04)',
                padding: '4px 10px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.07)',
                whiteSpace: 'nowrap',
              }}>{job.period}</span>
            </div>

            <ul style={{ paddingLeft: '0', margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {job.duties.map((duty, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: job.accent, marginTop: '2px', flexShrink: 0, fontSize: '14px' }}>▸</span>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>{duty}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;