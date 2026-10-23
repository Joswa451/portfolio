import { orbitIcons, profile, socials } from '../data'
import { useTypewriter } from '../hooks'
import Icon from './Icon'

const heroSocials = [
  { name: 'github', ...socials.github },
  { name: 'instagram', ...socials.instagram },
  { name: 'whatsapp', ...socials.whatsapp },
  { name: 'email', ...socials.email },
]

export default function Hero() {
  const typedText = useTypewriter(profile.phrases)

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-content">
        <div className="hero-text reveal is-visible">
          <p className="availability">
            <span className="status-dot" aria-hidden="true" />
            Open to opportunities
          </p>

          <p className="greeting">{profile.greeting}</p>

          <h1 id="hero-title" className="hero-title">
            <span>{typedText}</span>
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </h1>

          <p className="hero-quote">{profile.quote}</p>

          <div className="hero-buttons">
            <a className="button button-primary" href="#projects">
              View Projects
              <Icon name="arrow" size={18} />
            </a>
            <a className="button button-ghost" href="#contact">
              Get in Touch
            </a>
          </div>

          <div className="hero-social" aria-label="Social links">
            {heroSocials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="social-link"
                aria-label={social.label}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                <Icon name={social.name} size={22} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal is-visible">
          <div className="avatar-container">
            <span className="orbit-ring" aria-hidden="true" />

            <div className="sun-core">
              <img
                src={profile.image}
                alt={profile.alt}
                width="433"
                height="578"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            {orbitIcons.map((icon) => (
              <div
                key={icon.name}
                className="orbit"
                style={{
                  '--start': `${icon.start}deg`,
                  '--radius': `${icon.radius}px`,
                  animationDuration: `${icon.duration}s`,
                }}
                aria-hidden="true"
              >
                <div
                  className="orbit-item"
                  style={{ animationDuration: `${icon.duration}s` }}
                >
                  <img src={icon.src} alt="" width="48" height="48" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
