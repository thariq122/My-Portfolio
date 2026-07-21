/**
 * Badge — from Figma spec
 *
 * Figma:
 *   bg:           rgba(217, 217, 217, 0.20)
 *   borderRadius: 5px
 *   size:         171×24px
 *   text:         white, 20.07px / 700 / lh 21.68px / ls 0.20px
 *
 * Height is fixed at 24px to match Figma exactly.
 */
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
