import React, { useEffect, useState } from 'react';
import { fetchSkills } from '../../services/api';

export default function Skills() {
  const [skillCategories, setSkillCategories] = useState([]);

  useEffect(() => {
    fetchSkills().then(setSkillCategories).catch(console.error);
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <p className="type-eyebrow mb-4">Technologies</p>
        <h2 className="type-section mb-12">Skills &amp; Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-surface border border-subtle rounded-card p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <h3 className="type-card mb-5" style={{ color: 'var(--color-primary)' }}>
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="type-meta px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(249,247,243,0.05)',
                      color: 'var(--color-text-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {skillCategories.length === 0 && (
            <p className="type-meta">Skills load from the Django API — add them in admin.</p>
          )}
        </div>
      </div>
    </section>
  );
}
