import type { Project } from '../data'

type ProjectsSectionProps = {
  projects: Project[]
}

function getStatusClassName(status: string) {
  return `project-status project-status-${status.toLowerCase().replaceAll(' ', '-')}`
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="content-section" id="projects">
      <div className="section-heading">
        <p className="section-label">Projects</p>
        <h2>Project Work</h2>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-header">
              <div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
              </div>

              <span className={getStatusClassName(project.status)}>{project.status}</span>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-learning">
              <p className="project-learning-label">What I Practiced</p>
              <p>{project.learning}</p>
            </div>

            <ul className="project-tools" aria-label={`${project.title} technologies`}>
              {project.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>

            {project.links.length > 0 && (
              <div className="project-links">
                {project.links.map((link) => (
                  <a href={link.url} key={link.label} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
