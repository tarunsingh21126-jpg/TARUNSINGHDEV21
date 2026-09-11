import React from 'react'
import GeometricBackground from './components/3d/GeometricBackground'
import Navbar from './components/Navbar/Navbar'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
import Experience from './components/Sections/Experience'
import Contact from './components/Sections/Contact'
import Footer from './components/Footer/Footer'

const techPills = ['Python', 'Django', 'DRF', 'PostgreSQL', 'REST APIs', 'Docker', 'AWS']

function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col justify-center px-6 pt-28 pb-20"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Eyebrow */}
        <p className="type-eyebrow mb-6">
          Python Stack Web Developer
        </p>

        {/* Headline — Cormorant Garamond display */}
        <h1 className="type-hero mb-8 max-w-3xl">
          I build backend systems<br />
          <span style={{ color: 'var(--color-primary)' }}>that power</span> real products.
        </h1>

        {/* Supporting text */}
        <p className="type-body max-w-lg mb-12">
          I build web applications, REST APIs and backend systems using Python, Django and PostgreSQL.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-14">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="type-btn bg-primary hover:opacity-85 text-charcoal-900 font-medium px-8 py-4 rounded-btn transition-all duration-300 hover:scale-[1.02]"
            style={{ color: 'var(--color-bg-primary)' }}
          >
            View My Work
          </button>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="type-btn border border-border hover:border-text-secondary text-cream font-medium px-8 py-4 rounded-btn transition-all duration-300 hover:scale-[1.02]"
          >
            GitHub
          </a>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-3">
          {techPills.map(tech => (
            <span
              key={tech}
              className="type-meta border border-border px-3 py-1 rounded-full"
              style={{ color: 'var(--color-text-secondary)', letterSpacing: '0.08em' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-muted animate-pulse" />
        <span className="type-meta tracking-widest uppercase" style={{ fontSize: '11px' }}>Scroll</span>
      </div>
    </section>
  )
}

function ResumeCTA() {
  return (
    <section className="py-24 px-6 relative z-10 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="type-section mb-6">Want the complete picture?</h2>
        <p className="type-body mx-auto max-w-md mb-10">
          View or download my resume to see the full breakdown of my experience and skills.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#"
            className="type-btn bg-primary hover:opacity-85 font-medium px-8 py-4 rounded-btn transition-all duration-300 hover:scale-[1.02]"
            style={{ color: 'var(--color-bg-primary)' }}
          >
            View Resume
          </a>
          <a
            href="#"
            className="type-btn border border-border hover:border-text-secondary text-cream font-medium px-8 py-4 rounded-btn transition-all duration-300 hover:scale-[1.02]"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

function SectionDivider() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6">
      <div className="border-t border-border" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <GeometricBackground />
      <Navbar />

      <main>
        <HeroSection />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <ResumeCTA />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
