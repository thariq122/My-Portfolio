function GlowEffect({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none select-none ${className}`}
    />
  )
}

export default GlowEffect
