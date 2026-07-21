import ExperienceCard from './ExperienceCard'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import experience from '../data/experience'

const entryVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function TimelineNode() {
  return (
    <div className="hidden md:flex flex-col items-center flex-shrink-0 w-24">
      <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full bg-[#AA9A9A]" />
    </div>
  )
}

function MobileNode() {
  return (
    <div className="flex flex-col items-center flex-shrink-0 w-6 md:hidden">
      <div className="w-3 h-3 rounded-full bg-[#AA9A9A] mt-1" />
    </div>
  )
}

function DateLabel({ period, align }) {
  return (
    <div className={`hidden md:flex flex-1 items-center
      ${align === 'right' ? 'justify-start pl-4' : 'justify-end pr-4'}`}>
      <p className="text-white font-medium text-base lg:text-[30.24px] whitespace-nowrap">
        {period}
      </p>
    </div>
  )
}

function Experience() {
  return (
    <section
      id="experience"
      className="bg-bg-primary py-16 md:py-20 px-6 md:px-16"
      aria-label="Work experience"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Experience" />

        <div className="relative">
          {/* Desktop center line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0
              w-px bg-white/20 -translate-x-1/2"
            aria-hidden="true"
          />
          {/* Mobile left line */}
          <div
            className="md:hidden absolute left-[11px] top-0 bottom-0 w-px bg-white/20"
            aria-hidden="true"
          />

          <ul className="space-y-12 md:space-y-16" role="list">
            {experience.map((entry) => (
              <motion.li
                key={entry.id}
                variants={entryVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Mobile layout */}
                <div className="flex items-start gap-4 md:hidden">
                  <MobileNode />
                  <div className="flex-1">
                    <p className="text-white/60 text-xs font-medium mb-2">
                      {entry.period}
                    </p>
                    <ExperienceCard
                      title={entry.title}
                      organization={entry.organization}
                      description={entry.description}
                    />
                  </div>
                </div>

                {/* Desktop alternating layout */}
                <div className="hidden md:flex items-center">
                  {entry.side === 'left' ? (
                    <>
                      <div className="flex-1 pr-4">
                        <ExperienceCard
                          title={entry.title}
                          organization={entry.organization}
                          description={entry.description}
                        />
                      </div>
                      <TimelineNode />
                      <DateLabel period={entry.period} align="right" />
                    </>
                  ) : (
                    <>
                      <DateLabel period={entry.period} align="left" />
                      <TimelineNode />
                      <div className="flex-1 pl-4">
                        <ExperienceCard
                          title={entry.title}
                          organization={entry.organization}
                          description={entry.description}
                        />
                      </div>
                    </>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
