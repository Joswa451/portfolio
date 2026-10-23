import { certificates } from '../data'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Certificates({ onOpenImage }) {
  return (
    <section id="certificates" className="section" aria-labelledby="certificates-title">
      <div className="container">
        <SectionHeading
          id="certificates-title"
          eyebrow="Always learning"
          title="Certificates"
          description="Courses and certifications I have completed to strengthen my networking and security foundations."
        />

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.title}
              className="certificate-card reveal"
              style={{ '--reveal-delay': `${index * 60}ms` }}
            >
              <button
                type="button"
                className="certificate-preview"
                onClick={() => onOpenImage(certificate.image, certificate.alt)}
                aria-label={`Preview ${certificate.title}`}
              >
                <img
                  src={certificate.image}
                  alt={certificate.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="certificate-preview-badge" aria-hidden="true">
                  Preview
                </span>
              </button>

              <div className="certificate-content">
                <span className="certificate-label">{certificate.issuer}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>
                <a
                  href={certificate.image}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open full size
                  <Icon name="external" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
