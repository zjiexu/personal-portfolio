const projects = [
  {
    title: '+ Personal Portfolio +',
    description: [
      'A responsive developer portfolio built with React, TypeScript, React Router, and custom CSS',
      'This project introduces who I am, presents my technical background, and gives me a place to document my software development progress',
      'Through this project, I practiced routed page structure, reusable components, responsive layout, Git workflow, accessibility basics, and deployment with GitHub Pages',
    ],
    tools: ['React', 'TypeScript', 'React Router', 'CSS', 'GitHub Pages'],
    links: [
      {
        label: 'View Source',
        url: 'https://github.com/zjiexu/personal-portfolio',
      },
    ],
  },
]

function ProjectsPage() {
  return (
    <article className="portfolio-page">
      <header className="portfolio-hero">
        <h1>Personal Projects</h1>
        <p>Projects I have built through software development practice</p>
      </header>

      <div className="portfolio-page-body">
        <section className="project-intro">
          <p>
            I use this space to document completed software projects and the skills I practiced while building them.
          </p>
        </section>

        <section className="project-list" aria-label="Personal project list">
          {projects.map((project) => (
            <article className="project-entry" key={project.title}>
              <div className="project-header">
                <h2>{project.title}</h2>

                {project.links.length > 0 && (
                  <div className="project-actions">
                    {project.links.map((link) => (
                      <a href={link.url} key={link.label} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="project-description">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="project-tools" aria-label={`${project.title} technologies`}>
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </article>
  )
}

export default ProjectsPage
