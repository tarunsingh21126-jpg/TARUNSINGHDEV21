import React, { useState } from 'react';
import { submitContact } from '../../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.message.length < 20) {
      setStatus('error-length');
      return;
    }
    setLoading(true);
    submitContact(formData)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => setStatus('error'))
      .finally(() => setLoading(false));
  };

  const inputStyle = {
    background: 'var(--color-bg-input)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text-primary)',
    borderRadius: '10px',
    width: '100%',
    padding: '14px 16px',
    fontSize: '15px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = 'var(--color-primary)';
    e.target.style.boxShadow = '0 0 0 3px rgba(0,160,122,0.12)';
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = 'var(--color-border)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <p className="type-eyebrow mb-4">Contact</p>
        <h2 className="type-section mb-3">Let's build something useful.</h2>
        <p className="type-body mb-10 max-w-md">
          Have a project in mind? Drop me a message — I read every one.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg space-y-5" noValidate>
          <div>
            <label className="type-meta block mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
              Name <span style={{ color: 'var(--color-secondary)' }}>*</span>
            </label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Your name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>

          <div>
            <label className="type-meta block mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
              Email <span style={{ color: 'var(--color-secondary)' }}>*</span>
            </label>
            <input
              type="email"
              style={inputStyle}
              placeholder="you@example.com"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>

          <div>
            <label className="type-meta block mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
              Subject <span style={{ color: 'var(--color-secondary)' }}>*</span>
            </label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Project inquiry, collaboration…"
              value={formData.subject}
              onChange={e => setFormData({ ...formData, subject: e.target.value })}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>

          <div>
            <label className="type-meta block mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
              Message <span style={{ color: 'var(--color-secondary)' }}>*</span>
              <span className="ml-2" style={{ color: 'var(--color-text-placeholder)' }}>(min. 20 characters)</span>
            </label>
            <textarea
              style={{ ...inputStyle, minHeight: '140px', resize: 'vertical' }}
              placeholder="Tell me about your project or idea…"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="type-btn w-full md:w-auto px-8 py-4 rounded-btn transition-all duration-300 hover:opacity-85 hover:scale-[1.02] disabled:opacity-40"
            style={{
              background: 'var(--color-primary)',
              color: 'var(--color-bg-primary)',
              fontWeight: 500,
            }}
          >
            {loading ? 'Sending…' : 'Send Message'}
          </button>

          {/* Inline status messages */}
          {status === 'success' && (
            <p className="type-meta" style={{ color: 'var(--color-primary)' }}>
              Thanks! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="type-meta" style={{ color: 'var(--color-secondary)' }}>
              Something went wrong. Please try again.
            </p>
          )}
          {status === 'error-length' && (
            <p className="type-meta" style={{ color: 'var(--color-secondary)' }}>
              Message must be at least 20 characters.
            </p>
          )}
        </form>

        {/* Direct links */}
        <div className="mt-12 flex flex-wrap gap-6">
          <a
            href="mailto:tarun@example.com"
            className="type-meta transition-colors duration-200"
            style={{ color: 'var(--color-text-secondary)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
          >
            Email →
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="type-meta transition-colors duration-200"
            style={{ color: 'var(--color-text-secondary)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
          >
            LinkedIn →
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="type-meta transition-colors duration-200"
            style={{ color: 'var(--color-text-secondary)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
          >
            GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
