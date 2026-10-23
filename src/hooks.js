import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useTypewriter(phrases) {
  const [text, setText] = useState(phrases[0])

  useEffect(() => {
    if (prefersReducedMotion()) return undefined

    let phraseIndex = 0
    let characterIndex = phrases[0].length
    let deleting = true
    let timer

    const tick = () => {
      const phrase = phrases[phraseIndex]
      let delay

      if (deleting) {
        characterIndex -= 1
        setText(phrase.slice(0, Math.max(characterIndex, 0)))

        if (characterIndex <= 0) {
          deleting = false
          phraseIndex = (phraseIndex + 1) % phrases.length
          delay = 500
        } else {
          delay = 35
        }
      } else {
        characterIndex += 1
        setText(phrase.slice(0, characterIndex))

        if (characterIndex >= phrase.length) {
          deleting = true
          delay = 2000
        } else {
          delay = 85
        }
      }

      timer = window.setTimeout(tick, delay)
    }

    timer = window.setTimeout(tick, 2400)

    return () => window.clearTimeout(timer)
  }, [phrases])

  return text
}

export function useActiveSection(ids) {
  const [activeSection, setActiveSection] = useState(ids[0])

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length || typeof IntersectionObserver === 'undefined') {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [ids])

  return activeSection
}

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    if (!elements.length) return undefined

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}
