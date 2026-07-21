function Badge({ label, className = '' }) {
  return (
    <span
      className={`inline-flex items-center self-start h-[24px] px-2 rounded-[5px]
        text-white font-bold text-[11px] md:text-[20.07px]
        leading-none tracking-[0.20px] bg-white/20 w-fit ${className}`}
    >
      {label}
    </span>
  )
}

export default Badge
