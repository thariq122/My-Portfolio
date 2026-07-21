import { motion } from 'framer-motion'

function SectionHeading({ title, subtitle = '', className = '' }) {
  return (
    <motion.div
      className={`mb-10 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* white, 43.51px, 700 */}
      <h2 className="text-white font-bold text-2xl md:text-[43.51px]
        leading-[46.99px] tracking-[0.01em]">
        {'// '}{title}
      </h2>
      {subtitle && (
        /* #D8B7B7, ~28.90px, 700 */
        <p className="mt-2 text-text-muted font-bold text-base
          md:text-[28.90px] md:leading-[31.21px] tracking-[0.01em]">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
