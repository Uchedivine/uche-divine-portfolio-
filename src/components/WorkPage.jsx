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
    <div className="max-w-[860px] mx-auto px-8 pt-16 pb-24">
      <h1 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-[-0.02em] mb-2">
        <span className="gradient-text">Work Experience</span>
      </h1>
      <p className="text-text-secondary text-sm mb-12">
        Where I've been and what I built there.
      </p>

      <div ref={listRef} className="reveal-stagger flex flex-col gap-4">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className={`
              ${job.accent === '#a855f7' ? 'bg-bg-card-purple border-border-purple' : 'bg-bg-card-cyan border-border-cyan'}
              border rounded-lg p-7 transition-all duration-200
              hover:translate-y-[-3px]
            `}
            style={{
              boxShadow: '0 0 0 rgba(0,0,0,0)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 12px 32px ${job.accent}22`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
            }}
          >
            <div className="flex justify-between items-start mb-4 flex-wrap gap-2.5">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <h2 className="text-lg font-semibold text-white">{job.company}</h2>
                  {job.tag && (
                    <span className="text-[11px] px-2 py-0.5 bg-[rgba(34,197,94,0.12)] border border-[rgba(34,197,94,0.25)] rounded-[10px] text-green font-medium">
                      {job.tag}
                    </span>
                  )}
                </div>
                <p className="text-[13px]" style={{ color: job.accent }}>{job.role}</p>
              </div>
              <span className="text-xs text-text-tertiary bg-white/[0.04] px-2.5 py-1 rounded-[20px] border border-white/[0.07] whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <ul className="pl-0 m-0 list-none flex flex-col gap-2">
              {job.duties.map((duty, i) => (
                <li key={i} className="flex gap-2.5 items-start">
                  <span className="mt-0.5 flex-shrink-0 text-sm" style={{ color: job.accent }}>▸</span>
                  <span className="text-sm text-text-secondary leading-[1.65]">{duty}</span>
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
