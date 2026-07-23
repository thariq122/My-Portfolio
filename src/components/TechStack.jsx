import { motion } from 'framer-motion'
import TechStackItem from './TechStackItem'
import skills from '../data/skills'

function TechStack() {
  // Duplicate skills array untuk seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills]

  return (
    <section
      id="techstack"
      className="bg-bg-secondary py-6 px-6 md:px-16 overflow-hidden"
      aria-label="Tech stack"
    >
      <div className="max-w-content mx-auto relative">
        <motion.div
          className="flex items-center gap-8 md:gap-14 lg:gap-20"
          animate={{ x: [-1000, -3000] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <TechStackItem 
              key={`${skill.id}-${index}`} 
              name={skill.name} 
              icon={skill.icon} 
              isMarquee={true}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
