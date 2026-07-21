/**
 * GlowEffect — decorative blurred color blob.
 * Used in Hero (left side) and Footer (right side).
 * All colors and positioning are passed as props so
 * the same component serves both sections without duplication.
 */
function GlowEffect({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none select-none ${className}`}
    />
  )
}

export default GlowEffect
