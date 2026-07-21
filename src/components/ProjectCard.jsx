/**
 * ProjectCard — pixel-perfect from Figma spec
 *
 * Figma measurements (card starts at left:196 / left:888, top:189):
 *
 * Card:
 *   size:        630×349px
 *   bg:          #110E1D
 *   border:      0.97px solid #5D5656
 *   radius:      13.57px
 *
 * Title:
 *   position:    top:213 → 24px from card top, left:223 → 27px from card left
 *   color:       #6E68C4, 29.66px, 700, lh 32.03px, ls 0.30px
 *
 * Badge (bg box):
 *   position:    top:262 → 73px from card top (49px below title top)
 *   size:        171×24px
 *   bg:          rgba(217,217,217,0.20), radius 5px
 *   text:        white, 20.07px, 700, lh 21.68px, ls 0.20px
 *
 * Thumbnail:
 *   size:        177×86.65px, radius 8px
 *   position:    left:610 → 414px from card left → right-aligned inside card
 *   top:262 → same row as badge
 *
 * Description box:
 *   position:    top:368 → 179px from card top
 *   size:        567×147px
 *   bg:          rgba(28.54, 20.22, 42.91, 0.67), radius 15px
 *   text inner:  541×92px, #D8B7B7, 13.45px, 500, lh 14.53px, ls 1.61px, justified
 *
 * Tech Stack line:
 *   position:    top:477 → 288px from card top
 *   color:       #D8B7B7, 20.07px, 700, lh 21.68px, ls 0.20px
 *   (entire line is the same style — no split label/value)
 */
import { motion } from 'framer-motion'
import Badge from './Badge'

function ProjectCard({ title, category, image, imageAlt, description, techStack }) {
  return (
    <motion.article
      /* Exact Figma: bg #110E1D, border 0.97px #5D5656, radius 13.57px */
      className="bg-bg-card rounded-[13.57px] flex flex-col gap-0 overflow-hidden"
      style={{ border: '0.97px solid #5D5656' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* ── TOP SECTION: title + badge (left) / thumbnail (right) ── */}
      {/*
        Figma layout:
          title  top-left  (24px padding-top, 27px padding-left)
          badge  below title (~49px from card top)
          thumb  top-right, same vertical band as badge (73px from top)
      */}
      <div className="flex items-start justify-between gap-3 px-[27px] pt-[24px] pb-4">

        {/* Left: title + badge stacked */}
        <div className="flex flex-col gap-[15px] flex-1 min-w-0">
          {/* Title — #6E68C4, 29.66px, 700, ls 0.30px */}
          <h3
            className="text-accent-purple font-bold leading-[32.03px]
              text-sm md:text-[29.66px]"
            style={{ letterSpacing: '0.30px' }}
          >
            {title}
          </h3>

          {/* Badge — 171×24px, rgba(217,217,217,0.20), radius 5px */}
          <Badge label={category} />
        </div>

        {/* Right: thumbnail — 177×86.65px, radius 8px */}
        <div className="flex-shrink-0 w-[120px] md:w-[177px]">
          <img
            src={image}
            alt={imageAlt}
            className="w-full object-cover rounded-[8px]"
            style={{ height: '86.65px' }}
            loading="lazy"
            width={177}
            height={87}
          />
        </div>
      </div>

      {/* ── DESCRIPTION BOX — rgba(28.54,20.22,42.91,0.67), radius 15px ── */}
      <div
        className="mx-[27px] rounded-[15px] px-[13px] py-[8px]"
        style={{ background: 'rgba(28, 20, 43, 0.67)' }}
      >
        {/* Desc text — #D8B7B7, 13.45px, 500, lh 14.53px, ls 1.61px, justified */}
        <p
          className="text-text-muted font-medium text-[10px] md:text-[13.45px]
            leading-[14.53px] text-justify"
          style={{ letterSpacing: '1.61px' }}
        >
          {description}
        </p>
      </div>

      {/* ── TECH STACK — #D8B7B7, 20.07px, 700, ls 0.20px ── */}
      <p
        className="text-text-muted font-bold text-[11px] md:text-[20.07px]
          leading-[21.68px] px-[27px] pt-3 pb-[27px]"
        style={{ letterSpacing: '0.20px' }}
      >
        Tech Stack : {techStack}
      </p>
    </motion.article>
  )
}

export default ProjectCard
