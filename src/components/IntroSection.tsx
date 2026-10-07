type IntroSectionProps = {
  onNavigate: (title: string) => void
}

function IntroSection({ onNavigate }: IntroSectionProps) {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <p className="section-label">Software Developer</p>

        <h1>Hi, I am Zhijie.</h1>

        <p className="intro-text">
          I'm building my foundation in software development through practical projects, clean code, and continuous learning.
        </p>

        <div className="intro-actions">
          <a
            className="button primary"
            href="#projects"
            onClick={() => onNavigate('Projects')}
          >
            View Projects
          </a>
          <a
            className="button secondary"
            href="#contact"
            onClick={() => onNavigate('Contact')}
          >
            Contact Me
          </a>
        </div>
      </div>

      <aside className="summary-panel" aria-label="Portfolio summary">
        <p className="panel-label">Current Direction</p>

        <h2>Software Engineering</h2>

        <p>
          Learning core development skills while building projects that focus on usability, structure, and maintainable code.
        </p>
      </aside>
    </section>
  )
}

export default IntroSection
