const projects = [
  {
    title: 'Personal Portfolio',
    description: [
      'A responsive developer portfolio built with React, TypeScript, React Router, and custom CSS.',
      'The goal of this project is to create a professional portfolio site that introduces who I am, presents my projects, and documents my growth as a software developer.',
      'Through this project, I practiced routed page structure, reusable components, responsive layout, Git workflow, and deployment with GitHub Pages.',
    ],
    tools: ['React', 'TypeScript', 'React Router', 'CSS', 'GitHub Pages'],
    links: [
      {
        label: 'Live Site',
        url: 'https://zjiexu.github.io/personal-portfolio/',
      },
      {
        label: 'View Source',
        url: 'https://github.com/zjiexu/personal-portfolio',
      },
    ],
  },
  {
    title: 'Markdown Blog Engine',
    description: [
      'A planned static blog project that will turn Markdown files into web pages with tags, SEO metadata, and RSS support.',
      'This project will help me practice file-based content structure, static site generation concepts, build tooling, and publishing a fast static website.',
    ],
    tools: ['Markdown', 'Static Site', 'SEO', 'RSS'],
    links: [],
  },
]

function ProjectsPage() {
  return (
    <article className="portfolio-page">
      <header className="portfolio-hero">
        <h1>Personal Projects</h1>
        <p>
          A glimpse into the software projects I am building to improve my skills and document my learning progress.
        </p>
      </header>

      <div className="portfolio-page-body">
        <section className="project-intro">
          <p>
            I spend part of my personal time working on practical software projects. These projects help me learn new skills, practice different technologies, and build a clearer understanding of software development.
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
