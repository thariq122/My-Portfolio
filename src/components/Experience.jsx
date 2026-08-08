import ExperienceCard from './ExperienceCard'
import SectionHeading from './SectionHeading'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.experience-item')
      items.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        })
      })

      gsap.delayedCall(0, () => ScrollTrigger.refresh())
    })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

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
              <li key={entry.id} className="experience-item">
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
                  </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
