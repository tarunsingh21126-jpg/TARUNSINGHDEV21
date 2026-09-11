import React from 'react';

const socials = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Email', href: 'mailto:tarun@example.com' },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-12 px-6"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Identity */}
        <div className="text-center md:text-left">
          <div
            className="text-lg font-semibold mb-1"
            style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary)' }}
          >
            Tarun<span style={{ color: 'var(--color-primary)' }}>.</span>
          </div>
          <div className="type-meta">Python Stack Web Developer</div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="type-meta transition-colors duration-200 focus-visible:outline-2 focus-visible:rounded"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="type-meta">© 2026 Tarun Singh</div>
      </div>
    </footer>
  );
}
