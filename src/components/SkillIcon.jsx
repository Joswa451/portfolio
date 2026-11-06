const glyphs = {
  frontend: (
    <>
      <rect x="2.5" y="3.5" width="19" height="13" rx="2.5" />
      <path d="M8.5 21h7M12 16.5V21" />
      <path d="m9.5 8-2 2.5 2 2.5M14.5 8l2 2.5-2 2.5" />
    </>
  ),
  backend: (
    <>
      <rect x="2.5" y="4" width="19" height="6" rx="2" />
      <rect x="2.5" y="14" width="19" height="6" rx="2" />
      <path d="M6.5 7h.01M6.5 17h.01" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </>
  ),
  tools: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  api: (
    <>
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" />
      <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1" />
    </>
  ),
}

export default function SkillIcon({ icon, size = 20, className = '' }) {
  const glyph = glyphs[icon]

  if (glyph) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        className={className}
      >
        {glyph}
      </svg>
    )
  }

  return (
    <img
      src={icon}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      aria-hidden="true"
      className={className}
    />
  )
}
