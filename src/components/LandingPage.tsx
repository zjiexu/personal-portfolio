type LandingPageProps = {
  onViewPortfolio: () => void
}

function LandingPage({ onViewPortfolio }: LandingPageProps) {
  return (
    <section className="landing-page">
      <div className="landing-content">
        <p className="landing-label">Software Developer</p>

        <h1>Zhijie Xu</h1>

        <p className="landing-location">United States / Remote</p>

        <h2>Personal Portfolio</h2>

        <p className="landing-description">
          Building practical software projects while developing a stronger foundation in frontend development, software engineering, and technical problem solving.
        </p>

        <button className="button primary" type="button" onClick={onViewPortfolio}>
          View Portfolio
        </button>
      </div>

      <footer className="landing-footer">
        <a href="https://github.com/zjiexu" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <p>© 2026, Zhijie Xu</p>
      </footer>
    </section>
  )
}

export default LandingPage
