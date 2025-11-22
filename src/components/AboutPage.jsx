import React from 'react';
import profileImg from '../assets/images/profile.jpg'; // Change extension if your image is .png or .jpeg

const AboutPage = ({ colors }) => {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '4rem 2rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        <img 
          src={profileImg}
          alt="Profile"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: `3px solid ${colors.border}`,
            objectFit: 'cover'
          }}
        />
        <div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: colors.text,
            marginBottom: '0.5rem'
          }}>
            Uchechukwu Divine
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: colors.accent,
            marginBottom: '1rem'
          }}>
            Full-Stack Developer
          </p>
         <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
  <a 
    href="https://github.com/Uchedivine" 
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: colors.accent,
      textDecoration: 'none',
      fontSize: '0.875rem',
      transition: 'all 0.3s',
      textShadow: 'none'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.textShadow = `0 0 10px ${colors.accentGlow}`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.textShadow = 'none';
    }}
  >
    GitHub
  </a>
  <a 
    href="mailto:uchedivine65@gmail.com"
    style={{
      color: colors.accent,
      textDecoration: 'none',
      fontSize: '0.875rem',
      transition: 'all 0.3s',
      textShadow: 'none'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.textShadow = `0 0 10px ${colors.accentGlow}`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.textShadow = 'none';
    }}
  >
    Email
  </a>
  <span style={{
    color: colors.textSecondary,
    fontSize: '0.875rem'
  }}>+234 913 326 1236</span>
</div>
        </div>
      </div>

      <div style={{
        background: colors.cardBg,
        border: `1px solid ${colors.border}`,
        borderRadius: '12px',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <p style={{
          color: colors.text,
          lineHeight: '1.8',
          fontSize: '1rem',
          marginBottom: '1rem'
        }}>
          A highly motivated  developer with hands-on experience building mobile and web applications. 
          My prefered frameworks include Flutter, Laravel, React, and modern web technologies. 
          I thrive in problem solving and creating seamless user experiences.
        </p>
        <p style={{
          color: colors.text,
          lineHeight: '1.8',
          fontSize: '1rem'
        }}>
          Recently completed the HNG Internship Program with 14 projects across mobile, frontend, and backend tracks, 
          demonstrating proficiency in full-stack development. I excel at rapidly learning new technologies and 
          translating concepts into practical, effective solutions.
        </p>
      </div>

      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        color: colors.text,
        marginBottom: '1.5rem'
      }}>
        Technical Skills
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {[
          { title: 'Mobile', items: 'Flutter, Dart' },
          { title: 'Frontend', items: 'React, Next.js, HTML/CSS, Tailwind' },
          { title: 'Backend', items: 'Laravel, PHP, REST APIs' },
          { title: 'Database', items: 'MySQL, Convex, Hive' }
        ].map((skill, idx) => (
          <div key={idx} style={{
            background: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h3 style={{
              color: colors.text,
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              {skill.title}
            </h3>
            <p style={{
              color: colors.textSecondary,
              fontSize: '0.875rem'
            }}>
              {skill.items}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: colors.text,
          marginBottom: '1.5rem'
        }}>
          Education
        </h2>
        <div style={{
          background: colors.cardBg,
          border: `1px solid ${colors.border}`,
          borderRadius: '8px',
          padding: '1.5rem'
        }}>
          <h3 style={{ color: colors.text, fontWeight: '600', marginBottom: '0.25rem' }}>
            Enugu State University of Science & Technology
          </h3>
          <p style={{ color: colors.accent, fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            B.Sc. Computer Science
          </p>
          <p style={{ color: colors.textSecondary, fontSize: '0.875rem' }}>
            Sep 2019 - Sep 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;