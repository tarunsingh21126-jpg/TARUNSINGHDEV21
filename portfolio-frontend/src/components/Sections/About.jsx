import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <p className="type-eyebrow mb-4">About</p>
        <h2 className="type-section mb-8 max-w-xl">
          I build beyond the interface.
        </h2>
        <div className="max-w-2xl space-y-5">
          <p className="type-body">
            I'm a Python-stack web developer focused on building reliable backend systems
            and modern web applications.
          </p>
          <p className="type-body">
            My primary tools are Python, Django and Django REST Framework, with PostgreSQL
            for data and React for frontend experiences. I care about API design, database
            architecture, and writing systems that hold up under real-world use.
          </p>
          <p className="type-body">
            Beyond the stack — I'm drawn to problems that sit at the intersection of
            engineering clarity and human usability.
          </p>
        </div>
      </div>
    </section>
  );
}
