function PortfolioHome() {
  return (
    <article className="portfolio-page">
      <header className="portfolio-hero">
        <h1>Portfolio</h1>
        <p>
          A growing collection of my software development projects, learning progress, and technical practice.
        </p>
      </header>

      <div className="portfolio-page-body">
        <section className="portfolio-section">
          <h2>About Me</h2>

          <p>
            Hi, I am Zhijie. I am focused on growing as a software developer by building practical projects, studying core programming concepts, and improving how I structure frontend applications.
          </p>

          <p>
            This portfolio is part of that process. It gives me a place to present my work, document what I learn, and show my progress clearly as I continue developing stronger software engineering skills.
          </p>
        </section>

        <section className="portfolio-section">
          <h2>Current Focus</h2>

          <p>
            I am currently learning React, TypeScript, responsive design, routing, component structure, Git workflow, and deployment with GitHub Pages.
          </p>

          <p>
            My goal is to build projects that are not only functional, but also organized, readable, and easy to keep improving over time.
          </p>
        </section>

        <section className="portfolio-section">
          <h2>A Bit More About Me</h2>

          <p>
            I enjoy building step by step and learning through real implementation. I am especially interested in software engineering, frontend development, and creating clean user experiences.
          </p>

          <p>
            Outside of coding, I like games with strong atmosphere and design, especially Dark Souls. That influence is part of the visual direction for this portfolio: dark, minimal, focused, and deliberate.
          </p>
        </section>
      </div>
    </article>
  )
}

export default PortfolioHome
