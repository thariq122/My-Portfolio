import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import AchievementCard from './AchievementCard'
import achievements from '../data/achievements'

const ROW_1_ITEMS = [...achievements, ...achievements, ...achievements, ...achievements]
const ROW_2_ITEMS = [...achievements, ...achievements, ...achievements, ...achievements].reverse()

function Achievements() {
  const [reduced, setReduced] = useState(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])

  const marqueeDuration = reduced ? 0 : 60

  return (
    <section
      id="achievements"
      className="bg-bg-primary py-16 md:py-20 overflow-hidden"
      aria-label="Achievements"
    >
      <div className="max-w-content mx-auto px-6 md:px-16">
        <SectionHeading
          title="Achievements"
          subtitle="Here are some certifications and milestones I have earned"
        />
      </div>

      {/* ── Row 1: scroll right → left ── */}
      <div className="relative mt-8 mb-4 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-6"
          animate={reduced ? undefined : { x: ['0%', '-50%'] }}
          transition={
            reduced
              ? undefined
              : {
                  x: {
                    duration: marqueeDuration,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }
          }
        >
          {ROW_1_ITEMS.map((item, index) => (
            <div key={`row1-${item.id}-${index}`} className="flex-shrink-0">
              <AchievementCard {...item} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Row 2: scroll left → right ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-6"
          animate={reduced ? undefined : { x: ['-50%', '0%'] }}
          transition={
            reduced
              ? undefined
              : {
                  x: {
                    duration: marqueeDuration,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }
          }
        >
          {ROW_2_ITEMS.map((item, index) => (
            <div key={`row2-${item.id}-${index}`} className="flex-shrink-0">
              <AchievementCard {...item} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements