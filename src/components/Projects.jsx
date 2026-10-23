import { projects } from '../data'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Selected work"
          title="My Projects"
          description="A few of the systems and websites I have designed and built while learning."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card reveal"
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="project-tech" aria-label="Technologies used">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                {project.links.length > 0 ? (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                        <Icon name="external" size={16} />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
