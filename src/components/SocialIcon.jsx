function SocialIcon({ href, ariaLabel, icon, label = '', size, bordered = false }) {
  /* Size defaults differ by variant */
  const imgSize = size ?? (bordered ? 22 : 40)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`
        inline-flex items-center
        hover:opacity-75 transition-opacity duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan
        ${bordered ? 'w-11 h-11 border border-white justify-center' : ''}
      `}
    >
      <img
        src={icon}
        alt={label || ariaLabel}
        width={imgSize}
        height={imgSize}
        className="object-contain"
        loading="lazy"
      />
    </a>
  )
}

export default SocialIcon
