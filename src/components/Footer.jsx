import { motion } from 'framer-motion'
import SocialIcon from './SocialIcon'
import GlowEffect from './GlowEffect'
import social from '../data/social'

const FOOTER_NAV = [
  { label: 'About Me.',     href: '#home'         },
  { label: 'Experience.',   href: '#experience'  },
  { label: 'Projects.',     href: '#projects'    },
  { label: 'Achievements.', href: '#achievements' },
  { label: 'Contact.',      href: '#contact'     },
]

const CONTACT  = { email: 'mthariq2024@gmail.com', phone: '+62 812 9987 2365' }
const LOCATION = 'Depok, West Java'

const handleNavClick = (e, href) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

const colVariant = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay } },
})

function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-bg-footer overflow-hidden pt-12 md:pt-16 pb-10 px-6 md:px-16"
      aria-label="Footer"
    >
      {/* ── Figma glow blobs — right side ── */}
      <GlowEffect className="w-80 h-40 bg-gradient-to-br from-[#FA00FF] to-[#00E0FF]
        opacity-50 glow-blob top-0 right-0 rotate-[147deg]" />
      <GlowEffect className="w-80 h-40 bg-gradient-to-br from-[#EEF202] to-[#BD230F]
        opacity-40 glow-blob top-12 right-16 mix-blend-color-dodge rotate-[147deg]" />
      <GlowEffect className="w-80 h-40 bg-gradient-to-br from-[#43B1E0] to-[#8A188E]
        opacity-40 glow-blob top-8 right-36 mix-blend-color-dodge rotate-[147deg]" />
      <GlowEffect className="w-96 h-72 bg-gradient-to-br from-[#FA00FF] to-[#00E0FF]
        opacity-40 glow-blob top-24 right-20 -rotate-19" />
      <GlowEffect className="w-96 h-72 bg-gradient-to-br from-[#EEF202] to-[#BD230F]
        opacity-35 glow-blob top-8 right-8 mix-blend-color-dodge -rotate-19" />
      <GlowEffect className="w-96 h-72 bg-gradient-to-br from-[#43B1E0] to-[#8A188E]
        opacity-30 glow-blob top-2 right-44 mix-blend-color-dodge -rotate-19" />

      <div className="relative z-10 max-w-content mx-auto
        flex flex-col md:flex-row justify-between gap-10 md:gap-16">

        {/* ── LEFT ── */}
        <motion.div
          className="flex flex-col gap-6 md:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={colVariant(0)}
        >
          <div>
            {/* Brand — white, 27.30px, 700 */}
            <p className="text-white font-bold text-base md:text-[27.30px]
              leading-[29.49px] tracking-[0.01em] mb-6">
              Muhammad Thariq Akbar
            </p>

            {/* Social icons — bare PNGs, stacked vertically, left-aligned */}
            <div className="flex flex-col items-start gap-3">
              {social.map((item) => (
                <SocialIcon
                  key={item.id}
                  href={item.url}
                  ariaLabel={item.ariaLabel}
                  icon={item.icon}
                  size={40}
                />
              ))}
            </div>
          </div>

          {/* Copyright — #D8B7B7, 18.42px, 400 */}
          <p className="text-text-muted font-normal text-xs md:text-[18.42px]
            leading-[19.89px] tracking-[0.01em]">
            @ 2026 Build By Thariq
          </p>
        </motion.div>

        {/* ── RIGHT ── */}
        <motion.div
          className="flex flex-col gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={colVariant(0.15)}
        >
          {/* Nav links — #D8B7B7, 20.34px, 700 */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 md:gap-x-8 gap-y-2" role="list">
              {FOOTER_NAV.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-text-muted font-bold text-sm md:text-[20.34px]
                      leading-[21.97px] tracking-[0.01em]
                      hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact block */}
          <div>
            {/* Label — #D8B7B7, 26.04px, 700 */}
            <h3 className="text-text-muted font-bold text-sm md:text-[26.04px]
              leading-[28.12px] tracking-[0.01em] mb-2">
              Contact Me
            </h3>
            {/* email — #D8B7B7, 26.04px, 400 */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="block text-text-muted font-normal text-xs md:text-[26.04px]
                leading-[28.12px] tracking-[0.01em]
                hover:text-white transition-colors duration-200 break-all"
              aria-label={`Email ${CONTACT.email}`}
            >
              {CONTACT.email}
            </a>
            {/* phone — #D8B7B7, 26.04px, 400 */}
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="block text-text-muted font-normal text-xs md:text-[26.04px]
                leading-[28.12px] tracking-[0.01em] mt-1
                hover:text-white transition-colors duration-200"
              aria-label={`Call ${CONTACT.phone}`}
            >
              {CONTACT.phone}
            </a>
          </div>

          {/* Location block */}
          <div>
            {/* Label — #D8B7B7, 26.04px, 700 */}
            <h3 className="text-text-muted font-bold text-sm md:text-[26.04px]
              leading-[28.12px] tracking-[0.01em] mb-1">
              Location
            </h3>
            {/* Value — #D8B7B7, 26.04px, 400, italic */}
            <p className="text-text-muted font-normal italic text-xs md:text-[26.04px]
              leading-[28.12px] tracking-[0.01em]">
              {LOCATION}
            </p>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer
