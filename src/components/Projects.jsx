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
          subtitle="This is a project that I have worked on"
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
