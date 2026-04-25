import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const WHATSAPP_NUMBER = '2348076624068';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Divine, I came across your portfolio and I'd love to connect!")}`;

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const formRef = useReveal();
  const linksRef = useReveal();

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xqewjavp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const links = [
    {
      label: 'GitHub',
      value: 'github.com/Uchedivine',
      href: 'https://github.com/Uchedivine',
      accent: '#a855f7',
      variant: 'purple',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'uchedivine65@gmail.com',
      href: 'mailto:uchedivine65@gmail.com',
      accent: '#06b6d4',
      variant: 'cyan',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      value: '+234 807 662 4068',
      href: WHATSAPP_LINK,
      accent: '#22c55e',
      variant: 'green',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '+234 807 662 4068',
      href: 'tel:+2348076624068',
      accent: '#a855f7',
      variant: 'purple',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
  ];

  const cardBg = {
    purple: { bg: 'bg-bg-card-purple', border: 'border-border-purple' },
    cyan: { bg: 'bg-bg-card-cyan', border: 'border-border-cyan' },
    green: { bg: 'bg-[rgba(34,197,94,0.06)]', border: 'border-[rgba(34,197,94,0.2)]' },
  };

  return (
    <div className="max-w-[720px] mx-auto px-8 pt-16 pb-24">

      <h1 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-[-0.02em] mb-2">
        <span className="gradient-text">Get in Touch</span>
      </h1>
      <p className="text-text-secondary text-sm mb-12">
        Have a project in mind or want to work together? I'd love to hear from you.
      </p>

      {/* Contact link cards */}
      <div
        ref={linksRef}
        className="reveal-stagger grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 mb-10"
      >
        {links.map(link => {
          const style = cardBg[link.variant];
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex flex-col gap-2.5 p-5 ${style.bg} border ${style.border} rounded-md
                no-underline transition-all duration-200
                hover:translate-y-[-3px]
              `}
              style={{
                color: link.accent,
                boxShadow: '0 0 0 rgba(0,0,0,0)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 8px 24px ${link.accent}25`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
              }}
            >
              <span style={{ color: link.accent }}>{link.icon}</span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-1" style={{ color: link.accent }}>
                  {link.label}
                </p>
                <p className="text-xs text-text-secondary break-all leading-[1.4]">
                  {link.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Form */}
      <div
        ref={formRef}
        className="reveal bg-bg-card-purple border border-border-purple rounded-lg p-8"
      >
        {status === 'sent' ? (
          <div className="text-center py-10">
            <div className="w-[52px] h-[52px] rounded-full bg-[rgba(34,197,94,0.12)] border border-[rgba(34,197,94,0.25)] flex items-center justify-center mx-auto mb-4 text-[22px]">
              ✓
            </div>
            <p className="text-base font-semibold text-white mb-1.5">Message received!</p>
            <p className="text-[13px] text-text-secondary">Thanks for reaching out — I'll get back to you shortly.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-5 px-5 py-2 bg-[rgba(168,85,247,0.15)] border border-[rgba(168,85,247,0.3)] rounded-[20px] text-purple-300 text-[13px] cursor-pointer"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-text-tertiary block mb-1.5 font-medium">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-3.5 py-3 bg-white/[0.04] border border-white/10 rounded-md text-white text-sm outline-none transition-colors duration-200 font-sans focus:border-[rgba(168,85,247,0.5)]"
                />
              </div>
              <div>
                <label className="text-xs text-text-tertiary block mb-1.5 font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-3 bg-white/[0.04] border border-white/10 rounded-md text-white text-sm outline-none transition-colors duration-200 font-sans focus:border-[rgba(168,85,247,0.5)]"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-text-tertiary block mb-1.5 font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-3.5 py-3 bg-white/[0.04] border border-white/10 rounded-md text-white text-sm outline-none transition-colors duration-200 font-sans resize-y leading-[1.6] focus:border-[rgba(168,85,247,0.5)]"
              />
            </div>

            {status === 'error' && (
              <p className="text-[13px] text-[#f87171] bg-[rgba(248,113,113,0.08)] border border-[rgba(248,113,113,0.2)] px-3.5 py-2.5 rounded-lg">
                Something went wrong. Try emailing me directly at uchedivine65@gmail.com
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`
                px-7 py-3 border-none rounded-[28px] text-white text-sm font-semibold
                transition-all duration-200 self-start shadow-[0_4px_20px_rgba(168,85,247,0.3)]
                ${status === 'sending'
                  ? 'bg-[rgba(168,85,247,0.4)] cursor-not-allowed'
                  : 'bg-gradient-to-br from-accent to-purple-700 cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_8px_28px_rgba(168,85,247,0.5)]'
                }
              `}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        )}
      </div>

      <p className="text-xs text-text-tertiary mt-4 text-center">
        Or jump straight to WhatsApp —{' '}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-green no-underline">
          open chat ↗
        </a>
      </p>
    </div>
  );
};

export default ContactPage;
