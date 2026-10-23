import { useState } from 'react'
import { contactDetails, socials } from '../data'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

const contactSocials = [
  { name: 'github', ...socials.github },
  { name: 'whatsapp', ...socials.whatsapp },
  { name: 'instagram', ...socials.instagram },
]

const initialStatus = { state: 'idle', message: '' }

export default function Contact() {
  const [status, setStatus] = useState(initialStatus)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (status.state === 'sending') return

    const form = event.currentTarget
    const formData = new FormData(form)
    const senderName = formData.get('user_name') || 'Portfolio visitor'
    const senderEmail = formData.get('user_email')

    formData.set('_subject', `New portfolio message from ${senderName}`)
    formData.set('_replyto', senderEmail)
    formData.set('_captcha', 'false')
    formData.set('_template', 'table')

    setStatus({ state: 'sending', message: 'Sending your message…' })

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/joshuabayuranmansueto@gmail.com',
        {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        },
      )

      if (!response.ok) {
        throw new Error('Your message could not be sent. Please try again.')
      }

      setStatus({
        state: 'success',
        message: 'Thanks for reaching out! I will get back to you soon.',
      })
      form.reset()
    } catch (error) {
      setStatus({
        state: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
      })
    }
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="Let's work together"
          title="Get In Touch"
          description="Have a project in mind, an opportunity to share, or just want to say hello? Send me a message."
        />

        <div className="contact-content">
          <div className="contact-info reveal">
            <p>
              I&apos;m always open to discussing exciting projects, internships, and new
              opportunities. The fastest way to reach me is by email or WhatsApp.
            </p>

            <div className="contact-details">
              <a className="contact-item" href={`mailto:${contactDetails.email}`}>
                <Icon name="email" size={20} />
                <span>{contactDetails.email}</span>
              </a>

              <a className="contact-item" href={contactDetails.phoneHref}>
                <Icon name="phone" size={20} />
                <span>{contactDetails.phone}</span>
              </a>

              <div className="contact-item">
                <Icon name="pin" size={20} />
                <span>{contactDetails.location}</span>
              </div>
            </div>

            <div className="social-links" aria-label="Social links">
              {contactSocials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name={social.name} size={22} />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form reveal">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Your Email"
                  name="user_email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                />
              </div>

              <input
                type="text"
                name="_honey"
                className="honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <button
                type="submit"
                className="button button-primary form-submit"
                disabled={status.state === 'sending'}
              >
                {status.state === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {status.state !== 'idle' ? (
                <p
                  className={`form-status ${status.state}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
