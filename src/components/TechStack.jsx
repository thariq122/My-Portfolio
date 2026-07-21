/**
 * TechStack — from Figma spec
 * Background:  #1D2733 (bg-secondary), h≈123px
 * Items:       Laravel | HTML5 | PHP | Photoshop | Figma | JavaScript
 * Label style: white, 21.94px, 400
 */
import { motion } from 'framer-motion'
import TechStackItem from './TechStackItem'
import skills from '../data/skills'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

function TechStack() {
  return (
    <section
      id="techstack"
      className="bg-bg-secondary py-6 px-6 md:px-16 overflow-x-auto"
      aria-label="Tech stack"
    >
      <motion.div
        className="max-w-content mx-auto
          flex items-center justify-start md:justify-center
          gap-8 md:gap-14 lg:gap-20 min-w-max md:min-w-0"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {skills.map((skill) => (
          <TechStackItem key={skill.id} name={skill.name} icon={skill.icon} />
        ))}
      </motion.div>
    </section>
  )
}

export default TechStack
