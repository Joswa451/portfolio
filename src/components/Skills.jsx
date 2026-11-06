import { skillCategories } from '../data'
import SectionHeading from './SectionHeading'
import SkillIcon from './SkillIcon'

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="My toolkit"
          title="Technical Skills"
          description="Technologies and tools I use to build modern, responsive, and functional web applications."
        />

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <article
              key={category.id}
              className="skill-category reveal"
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <div className="skill-category-head">
                <span className="skill-category-icon" aria-hidden="true">
                  <SkillIcon icon={category.icon} size={22} />
                </span>
                <h3>{category.title}</h3>
              </div>

              <p className="skill-category-description">{category.description}</p>

              <ul className="skill-list" aria-label={`${category.title} technologies`}>
                {category.technologies.map((technology) => (
                  <li key={technology.name} className="skill-chip" title={technology.name}>
                    <span className="skill-chip-icon" aria-hidden="true">
                      <SkillIcon icon={technology.icon} size={16} />
                    </span>
                    <span className="skill-chip-name">{technology.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
