import { fullName, socials } from '../data'
import Icon from './Icon'

const footerSocials = [
  { name: 'github', ...socials.github },
  { name: 'instagram', ...socials.instagram },
  { name: 'facebook', ...socials.facebook },
  { name: 'email', ...socials.email },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <a className="logo" href="#home">
            Joshua<span className="logo-accent">-dev</span>
          </a>
          <p>Designed and built with React, CSS, and a lot of curiosity.</p>
        </div>

        <div className="footer-social" aria-label="Social profiles">
          {footerSocials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.label}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            >
              <Icon name={social.name} size={20} />
            </a>
          ))}
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} {fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
