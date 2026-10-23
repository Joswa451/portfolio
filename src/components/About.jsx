import { certificates, projects, skills } from '../data'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          eyebrow="Who I am"
          title="About Me"
          description="A curious IT student who enjoys turning ideas into useful, well-crafted digital experiences."
        />

        <div className="about-content">
          <div className="about-text reveal">
            <p>
              I&apos;m Josh, an Information Technology student exploring diverse fields of
              technology — from software and web development to artificial intelligence
              solutions. My goal is to keep growing my skills and expand my horizons.
            </p>

            <ul className="about-highlights">
              <li>
                <strong>{projects.length}</strong>
                <span>Projects built</span>
              </li>
              <li>
                <strong>{certificates.length}</strong>
                <span>Certificates earned</span>
              </li>
              <li>
                <strong>IT</strong>
                <span>Student &amp; learner</span>
              </li>
            </ul>

            <div className="skills">
              <h3>Skills &amp; Technologies</h3>
              <ul className="skills-grid">
                {skills.map((skill) => (
                  <li key={skill} className="skill-tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-visual reveal">
            <div className="code-card" aria-label="Developer profile code snippet">
              <div className="code-card-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <pre className="code-block">
                <code>
                  <span className="code-line">
                    <span className="token-keyword">const</span>{' '}
                    <span className="token-variable">developer</span> = {'{'}
                  </span>
                  <span className="code-line indent">
                    <span className="token-property">name</span>:{' '}
                    <span className="token-string">&apos;Josh&apos;</span>,
                  </span>
                  <span className="code-line indent">
                    <span className="token-property">role</span>:{' '}
                    <span className="token-string">&apos;IT Student&apos;</span>,
                  </span>
                  <span className="code-line indent">
                    <span className="token-property">passion</span>:{' '}
                    <span className="token-string">&apos;Building things that help people&apos;</span>,
                  </span>
                  <span className="code-line indent">
                    <span className="token-property">learning</span>:{' '}
                    <span className="token-boolean">true</span>,
                  </span>
                  <span className="code-line">{'};'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
