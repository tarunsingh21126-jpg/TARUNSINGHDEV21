import React, { useEffect, useState } from 'react';
import { fetchExperience } from '../../services/api';

export default function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetchExperience().then(setExperience).catch(console.error);
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <p className="type-eyebrow mb-4">Timeline</p>
        <h2 className="type-section mb-12">Experience</h2>

        <div className="space-y-10 max-w-2xl">
          {experience.map(exp => (
            <div
              key={exp.id}
              className="pl-6 relative"
              style={{ borderLeft: '1px solid var(--color-border)' }}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-1 w-2 h-2 rounded-full -translate-x-[4.5px]"
                style={{ background: 'var(--color-primary)' }}
              />

              <p className="type-eyebrow mb-1">{exp.start_date} — {exp.end_date || 'Present'}</p>
              <h3 className="type-card mb-0.5">{exp.role}</h3>
              <p className="type-body mb-4" style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                {exp.company}
              </p>
              <p className="type-body mb-4">{exp.description}</p>
              <div
                className="type-meta inline-block px-2.5 py-1 rounded"
                style={{
                  background: 'rgba(0,160,122,0.08)',
                  color: 'var(--color-primary)',
                  fontSize: '12px',
                }}
              >
                {exp.technologies}
              </div>
            </div>
          ))}

          {experience.length === 0 && (
            <p className="type-meta">Experience loads from the Django API — add entries in admin.</p>
          )}
        </div>
      </div>
    </section>
  );
}
