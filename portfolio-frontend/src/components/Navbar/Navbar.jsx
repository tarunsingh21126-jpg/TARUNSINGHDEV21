import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

const links = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

/* ── Inline SVG icons — no extra dependency needed ── */
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"  y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="relative flex items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        width: '36px',
        height: '36px',
        background: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        color: 'var(--color-text-secondary)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--color-primary)';
        e.currentTarget.style.color = 'var(--color-primary)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.color = 'var(--color-text-secondary)';
      }}
    >
      {/* Animate icon swap */}
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0.5)',
        }}
      >
        <MoonIcon />
      </span>
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'rotate(-90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
        }}
      >
        <SunIcon />
      </span>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navBg = scrolled
    ? theme === 'dark'
      ? 'rgba(22,22,23,0.92)'
      : 'rgba(244,242,238,0.92)'
    : 'transparent';

  return (
    <nav
      id="navbar"
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: navBg,
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="focus:outline-none"
          aria-label="Back to top"
        >
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary)' }}
          >
            Tarun<span style={{ color: 'var(--color-primary)' }}>.</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(link => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="relative type-meta transition-colors duration-200 focus:outline-none focus-visible:outline-2"
                style={{
                  color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  fontSize: '14px',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--color-text-primary)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
              >
                {link}
                {/* 2px teal active underline */}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full transition-all duration-300"
                  style={{
                    background: 'var(--color-primary)',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                  }}
                />
              </button>
            );
          })}

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Let's Connect CTA */}
          <button
            onClick={() => scrollTo('Contact')}
            className="type-btn px-5 py-2 rounded-btn transition-all duration-300 hover:opacity-85"
            style={{
              background: 'var(--color-primary)',
              color: theme === 'dark' ? 'var(--color-bg-primary)' : '#fff',
              fontSize: '13px',
              fontWeight: 500,
            }}
          >
            Let's Connect
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            className="flex flex-col gap-1.5 p-1 focus:outline-none focus-visible:outline-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block w-6 h-px transition-all duration-300"
                style={{
                  background: 'var(--color-text-primary)',
                  transform: i === 0 && menuOpen ? 'rotate(45deg) translate(3px, 3px)'
                    : i === 2 && menuOpen ? 'rotate(-45deg) translate(3px, -3px)'
                    : 'none',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-6 flex flex-col gap-5"
          style={{
            background: 'var(--color-bg-surface)',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left type-card transition-colors duration-200"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => { scrollTo('Contact'); setMenuOpen(false); }}
            className="type-btn w-full py-3 rounded-btn text-center mt-2"
            style={{
              background: 'var(--color-primary)',
              color: theme === 'dark' ? 'var(--color-bg-primary)' : '#fff',
            }}
          >
            Let's Connect
          </button>
        </div>
      )}
    </nav>
  );
}
