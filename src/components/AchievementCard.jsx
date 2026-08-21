function AchievementCard({ title, issuer, date, description, image }) {
  return (
    <div
      className="flex-shrink-0 w-[380px] md:w-[400px] bg-bg-secondary border border-card-border rounded-xl overflow-hidden
        hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(12,176,205,0.15)]"
    >
      <div className="relative h-48 md:h-[200px] overflow-hidden">
        <img
          src={image}
          alt={`${title} certificate`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          width={400}
          height={250}
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-accent-cyan font-semibold text-sm md:text-base">{issuer}</span>
          <span className="text-text-muted/50 text-xs md:text-sm">·</span>
          <span className="text-text-muted text-xs md:text-sm">{date}</span>
        </div>
        <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-3">{title}</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default AchievementCard