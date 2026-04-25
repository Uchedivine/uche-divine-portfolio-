import React from 'react';
import profileImg from '../assets/images/profile.jpg';
import { useReveal } from '../hooks/useReveal';

const skills = [
  { category: 'Mobile', items: ['Flutter', 'Dart', 'React Native'], variant: 'purple' },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'HTML/CSS'], variant: 'purple' },
  { category: 'Backend', items: ['Laravel', 'PHP', 'REST APIs'], variant: 'cyan' },
  { category: 'Database', items: ['MySQL', 'Convex', 'Hive'], variant: 'cyan' },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma'], variant: 'neutral' },
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Dart', 'PHP'], variant: 'neutral' },
];

const education = [
  {
    school: 'University of Port Harcourt',
    degree: 'MSc Computer Science',
    period: '2024 – Present',
    accent: '#a855f7',
  },
  {
    school: 'Enugu State University of Science & Technology',
    degree: 'B.Sc. Computer Science',
    period: 'Sep 2019 – Sep 2023',
    accent: '#06b6d4',
  },
];

const AboutPage = () => {
  const bioRef = useReveal();
  const skillsRef = useReveal();
  const eduRef = useReveal();

  return (
    <div className="max-w-[860px] mx-auto px-8 pt-16 pb-24">

      {/* Profile header */}
      <div className="flex items-center gap-8 mb-12 flex-wrap">
        <div className="relative">
          <img
            src={profileImg}
            alt="Uchechukwu Divine"
            className="w-[100px] h-[100px] rounded-full object-cover border-2 border-[rgba(168,85,247,0.4)] shadow-[0_0_24px_rgba(168,85,247,0.25)]"
          />
        </div>
        <div>
          <h1 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-[-0.02em] mb-1">
            <span className="gradient-text">Uchechukwu Divine</span>
          </h1>
          <p className="text-[15px] text-text-secondary mb-3">
            Full-Stack Developer &nbsp;·&nbsp; MSc Computer Science In-view
          </p>
          <div className="flex gap-3 flex-wrap">
            {[
              { label: 'GitHub', href: 'https://github.com/Uchedivine' },
              { label: 'Email', href: 'mailto:uchedivine65@gmail.com' },
            ].map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-[13px] text-accent no-underline transition-opacity duration-200 hover:opacity-70"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div ref={bioRef} className="reveal bg-bg-card-purple border border-border-purple rounded-lg p-7 mb-10">
        <p className="text-text-secondary leading-[1.8] mb-4">
          A highly motivated full-stack developer with hands-on experience building mobile and web
          applications. My preferred stack includes Flutter, Laravel, React, and modern web
          technologies. I thrive in problem-solving and creating seamless user experiences.
        </p>
        <p className="text-text-secondary leading-[1.8]">
          Recently completed the HNG Internship Program across 14 projects spanning mobile,
          frontend, and backend tracks. Currently deepening my academic foundations through an MSc
          in Computer Science, where I enjoy bridging theory with practical engineering.
        </p>
      </div>

      {/* Skills */}
      <h2 className="text-xl font-semibold mb-5 text-white">
        Technical Skills
      </h2>
      <div ref={skillsRef} className="reveal-stagger grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 mb-10">
        {skills.map(skill => (
          <div
            key={skill.category}
            className={`
              ${skill.variant === 'purple' ? 'bg-bg-card-purple border-border-purple' : ''}
              ${skill.variant === 'cyan' ? 'bg-bg-card-cyan border-border-cyan' : ''}
              ${skill.variant === 'neutral' ? 'bg-white/[0.03] border-white/[0.07]' : ''}
              border rounded-md p-5
            `}
          >
            <h3 className={`
              text-xs font-semibold uppercase tracking-[0.08em] mb-2.5
              ${skill.variant === 'purple' ? 'text-accent' : ''}
              ${skill.variant === 'cyan' ? 'text-accent-cyan' : ''}
              ${skill.variant === 'neutral' ? 'text-text-secondary' : ''}
            `}>
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skill.items.map(item => (
                <span key={item} className={`tag tag-${skill.variant === 'neutral' ? 'neutral' : skill.variant}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <h2 className="text-xl font-semibold mb-5 text-white">
        Education
      </h2>
      <div ref={eduRef} className="reveal-stagger flex flex-col gap-3">
        {education.map(edu => (
          <div
            key={edu.school}
            className="bg-white/[0.03] border border-white/[0.07] rounded-r-md p-5 px-6 flex justify-between items-center flex-wrap gap-2"
            style={{ borderLeft: `3px solid ${edu.accent}` }}
          >
            <div>
              <h3 className="text-[15px] font-semibold text-white mb-1">
                {edu.school}
              </h3>
              <p className="text-[13px]" style={{ color: edu.accent }}>{edu.degree}</p>
            </div>
            <span className="text-xs text-text-tertiary bg-white/[0.04] px-2.5 py-1 rounded-[20px] border border-white/[0.07] whitespace-nowrap">
              {edu.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
