function ProjectCard({ title, category, image, imageAlt, description, techStack, demo = '#', repo = '#' }) {
  const primaryUrl = demo && demo !== '#' ? demo : repo
  const techs = techStack.split(',').map(t => t.trim()).filter(Boolean)

  return (
    <a
      href={primaryUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (!primaryUrl || primaryUrl === '#') e.preventDefault()
      }}
      className="group relative block overflow-hidden bg-[#e7e3da] text-[#171717] outline-none focus-visible:ring-2 focus-visible:ring-[#174fff] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f6f2]"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="h-auto w-full transition-transform duration-700 ease-out md:group-hover:scale-[1.04] md:group-focus-visible:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />

        <div className="relative flex flex-col justify-end bg-[#171717]/50 p-5 transition-all duration-500 ease-out md:absolute md:inset-0 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
          <span className="text-sm uppercase tracking-[0.16em] text-white/70">{category}</span>
          <h3 className="mt-2 text-[clamp(2rem,9vw,2.5rem)] font-semibold leading-none tracking-[-0.04em] text-white md:text-4xl md:tracking-[-0.05em]">{title}</h3>
          <p className="mt-4 max-w-[34rem] text-sm leading-[1.65] text-white/85">{description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {techs.map((tech, i) => (
              <li key={i} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white/90">{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard