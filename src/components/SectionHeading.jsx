export default function SectionHeading({ id, eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}
