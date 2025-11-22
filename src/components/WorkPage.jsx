import React from 'react';

const WorkPage = ({ colors }) => {
  const jobs = [
    {
      company: 'Whitehat Innovative',
      role: 'Software Development Intern',
      period: 'Mar 2025 - Present',
      color: '#3b82f6',
      duties: [
        'Build and maintain dynamic websites and web applications with Laravel & PHP',
        'Collaborate with developers, contribute to code reviews and system planning',
        'Write clean, testable, and well-documented code'
      ]
    },
    {
      company: 'Ugofly Travels & Tours',
      role: 'Travel Advisor Intern',
      period: 'Jul 2024 - Jan 2025',
      color: '#8b5cf6',
      duties: [
        'Processed and secured Qatar visas for 200+ corporate and leisure clients',
        'Managed documentation from passport collection through final embassy approval',
        'Ensured 100% compliance with Qatar embassy requirements'
      ]
    },
    {
      company: 'Whitehat Innovative',
      role: 'Software Development Intern',
      period: 'Jun 2022 - Dec 2022',
      color: '#3b82f6',
      duties: [
        'Participated in design and implementation of mobile applications using Flutter',
        'Wrote clean, efficient Dart code and assisted in debugging',
        'Contributed to improving app performance and system architecture'
      ]
    }
  ];

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '4rem 2rem'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: colors.text,
        marginBottom: '3rem'
      }}>
        Work Experience
      </h1>

      {jobs.map((job, idx) => (
        <div key={idx} style={{
          background: colors.cardBg,
          border: `1px solid ${colors.border}`,
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'start', 
            marginBottom: '1rem', 
            flexWrap: 'wrap', 
            gap: '1rem' 
          }}>
            <div>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: colors.text,
                marginBottom: '0.25rem'
              }}>
                {job.company}
              </h2>
              <p style={{
                color: job.color,
                fontSize: '0.875rem'
              }}>
                {job.role}
              </p>
            </div>
            <span style={{
              color: colors.textSecondary,
              fontSize: '0.875rem'
            }}>
              {job.period}
            </span>
          </div>
          
          <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
            {job.duties.map((duty, i) => (
              <li key={i} style={{
                color: colors.textSecondary,
                marginBottom: '0.5rem',
                lineHeight: '1.6'
              }}>
                {duty}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkPage;