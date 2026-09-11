import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../../services/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error);
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <p className="type-eyebrow mb-4">Work</p>
        <h2 className="type-section mb-12">Things I've built.</h2>

        <div className="space-y-6">
          {projects.map(project => (
            <article
              key={project.id}
              className="rounded-card p-6 md:p-8 transition-all duration-300 hover:-translate-y-[3px]"
              style={{
                background: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-primary)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              <h3 className="type-card mb-3">{project.title}</h3>
              <p className="type-body mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="type-eyebrow"
                    style={{ fontSize: '11px', letterSpacing: '0.1em' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-5">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="type-btn inline-flex items-center gap-1.5 transition-colors duration-200"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                  >
                    View GitHub →
                  </a>
                )}
                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noreferrer"
                    className="type-btn inline-flex items-center gap-1.5 transition-colors duration-200"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}

          {projects.length === 0 && (
            <p className="type-meta">Projects load from the Django API — add them in admin.</p>
          )}
        </div>
      </div>
    </section>
  );
}
