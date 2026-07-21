/**
 * TechStackItem — from Figma spec
 * Label: white, 21.94px, 400, Plus Jakarta Sans
 * Icon:  PNG asset, various sizes (84–130px in Figma, normalised to ~48px)
 */
import { motion } from 'framer-motion'
import { itemVariant } from '../data/variants'

function TechStackItem({ name, icon }) {
  return (
    <motion.div
      variants={itemVariant}
      className="flex items-center gap-3 flex-shrink-0"
    >
      <img
        src={icon}
        alt={`${name} icon`}
        className="w-12 h-12 object-contain"
        loading="lazy"
        width={48}
        height={48}
      />
      {/* white, 21.94px, 400 */}
      <span className="text-white font-normal text-[21.94px] leading-[27.65px]
        tracking-[0.01em] whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  )
}

export default TechStackItem
