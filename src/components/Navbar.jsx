import { useEffect, useState } from 'react'
import { navItems, socials } from '../data'
import Icon from './Icon'

const navSocials = [
  { name: 'github', ...socials.github },
  { name: 'instagram', ...socials.instagram },
  { name: 'facebook', ...socials.facebook },
]

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <nav className="nav-container" aria-label="Main navigation">
        <a className="logo" href="#home" onClick={closeMenu}>
          Joshua<span className="logo-accent">-dev</span>
        </a>

        <ul id="nav-menu" className={`nav-menu${menuOpen ? ' is-open' : ''}`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link${isActive ? ' active' : ''}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="nav-social" aria-label="Social profiles">
          {navSocials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="social-icon"
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name={social.name} size={18} />
            </a>
          ))}
        </div>

        <button
          type="button"
          className={`hamburger${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
