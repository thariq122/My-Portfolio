/**
 * Projects — from Figma spec
 *
 * Background:  #001924 (bg-primary)
 * Heading:     white, 43.51px, 700, lh 46.99px, ls 0.44px
 * Subtitle:    #D8B7B7, 28.90px, 700, lh 31.21px, ls 0.29px
 *              positioned 76px below heading top in Figma
 * Cards:       630×349px each, 2-col grid, gap derived from
 *              card positions: left:196 and left:888 → gap = 888-196-630 = 62px
 */
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

function Projects() {
  return (
    <section
      id="projects"
      className="bg-bg-primary py-16 md:py-20 px-6 md:px-16"
      aria-label="Projects"
    >
      <div className="max-w-content mx-auto">
        {/* Heading + subtitle via SectionHeading */}
        <SectionHeading
          title="Projects"
          subtitle="This is some project i've been working on"
        />

        {/*
          Figma gap between cards:
          card1 left: 196, width: 630 → right edge: 826
          card2 left: 888 → gap = 888 - 826 = 62px
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[62px]">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              imageAlt={project.imageAlt}
              description={project.description}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
