import { useEffect, useRef } from 'react'
import Icon from './Icon'

export default function Lightbox({ image, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!image) return undefined

    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key === 'Tab') {
        event.preventDefault()
        closeButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      }
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      className="lightbox"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="lightbox-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={image.alt}
        tabIndex={-1}
      >
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close preview"
          ref={closeButtonRef}
        >
          <Icon name="close" size={22} />
        </button>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  )
}
