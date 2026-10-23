import { useCallback, useState } from 'react'
import About from './components/About'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Lightbox from './components/Lightbox'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { sectionIds } from './data'
import { useActiveSection, useScrollReveal } from './hooks'

export default function App() {
  const [lightbox, setLightbox] = useState(null)
  const activeSection = useActiveSection(sectionIds)

  useScrollReveal()

  const openImage = useCallback((src, alt) => {
    setLightbox({ src, alt })
  }, [])

  const closeImage = useCallback(() => {
    setLightbox(null)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar activeSection={activeSection} />

      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Certificates onOpenImage={openImage} />
        <Contact />
      </main>

      <Footer />
      <Lightbox image={lightbox} onClose={closeImage} />
    </>
  )
}
