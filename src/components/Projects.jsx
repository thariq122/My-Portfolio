import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

function Projects() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card')

      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 100,
          opacity: 0,
          duration: 1.4,
          ease: 'power3.out',
          delay: i * 0.12,
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
      id="projects"
      className="bg-bg-primary py-16 md:py-20 px-6 md:px-16"
      aria-label="Projects"
    >
      <div className="max-w-content mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="This is a project that I have worked on"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[62px]">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
                imageAlt={project.imageAlt}
                description={project.description}
                techStack={project.techStack}
                demo={project.demo}
                repo={project.repo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects