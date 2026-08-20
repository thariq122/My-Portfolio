import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import useScrollActive from '../hooks/useScrollActive'

const NAV_LINKS = [
  { label: 'Home',       href: '#home'       },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
]

const SECTION_IDS = ['home', 'experience', 'projects', 'contact']

const EASING = [0.16, 1, 0.3, 1]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [reduced, setReduced]   = useState(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const activeId = useScrollActive(SECTION_IDS)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)

    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMqChange = (e) => setReduced(e.matches)
    mq.addEventListener?.('change', onMqChange)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
      mq.removeEventListener?.('change', onMqChange)
    }
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  const isActive = (href) => activeId === href.replace('#', '')

  /* ── Motion variants ── */

  const headerVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: EASING,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.35,
        ease: EASING,
        delayChildren: 0.08,
        staggerChildren: 0.04,
      },
    },
  }

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50
        ${scrolled
          ? 'bg-bg-secondary/90 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.25)]'
          : 'bg-bg-secondary/60 backdrop-blur-md'
        }
        transition-all duration-500 ease-out`}
      initial={reduced ? undefined : 'hidden'}
      animate={reduced ? undefined : 'visible'}
      variants={reduced ? undefined : headerVariants}
      transition={reduced ? undefined : { duration: 0.6, ease: EASING }}
    >
      {/* Thin top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]
          bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent"
        aria-hidden="true"
      />

      <nav
        className="relative flex items-center w-full px-6 md:px-10 lg:px-16 py-3.5 md:py-4"
        aria-label="Main navigation"
      >
        {/* ── Brand ── */}
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-text-nav font-semibold text-[15px] md:text-[22px]
            leading-tight tracking-[-0.01em] hover:text-text-primary
            transition-colors duration-300 shrink-0 relative group"
          aria-label="Muhammad Thariq Akbar — back to top"
          initial={reduced ? undefined : { opacity: 0, y: -10 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={
            reduced ? undefined : { duration: 0.5, ease: EASING, delay: 0.1 }
          }
        >
          Muhammad Thariq Akbar
          <span
            className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-accent-cyan/70
              group-hover:w-full transition-all duration-300"
          />
        </motion.a>

        {/* ── Desktop nav ── */}
        <ul
          className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
          role="list"
        >
          {NAV_LINKS.map((link, i) => {
            const active = isActive(link.href)
            return (
              <motion.li key={link.label}>
                <motion.a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-[15px] font-medium
                    tracking-wide rounded-lg transition-all duration-300
                    ${active
                      ? 'text-accent-cyan'
                      : 'text-text-nav/70 hover:text-text-primary hover:bg-white/[0.04]'
                    }`}
                  aria-current={active ? 'page' : undefined}
                  initial={reduced ? undefined : { opacity: 0, y: -10 }}
                  animate={reduced ? undefined : { opacity: 1, y: 0 }}
                  transition={
                    reduced
                      ? undefined
                      : {
                          duration: 0.5,
                          ease: EASING,
                          delay: 0.15 + i * 0.07,
                        }
                  }
                  whileHover={reduced ? undefined : { y: -1 }}
                  whileTap={reduced ? undefined : { scale: 0.97 }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px]
                        w-4 rounded-full bg-accent-cyan/80"
                    />
                  )}
                </motion.a>
              </motion.li>
            )
          })}
        </ul>

        {/* ── Contact button (desktop) ── */}
        <motion.a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden md:inline-flex items-center justify-center
            text-text-nav font-medium ml-auto text-[14px]
            tracking-wide border border-white/10 hover:border-accent-cyan/50
            hover:text-accent-cyan transition-all duration-300 shrink-0
            px-5 py-2 rounded-lg
            hover:bg-accent-cyan/[0.06]"
          aria-label="Go to contact section"
          initial={reduced ? undefined : { opacity: 0, y: -10 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={
            reduced ? undefined : { duration: 0.5, ease: EASING, delay: 0.35 }
          }
          whileHover={reduced ? undefined : { scale: 1.03 }}
          whileTap={reduced ? undefined : { scale: 0.97 }}
        >
          Contact Me
        </motion.a>

        {/* ── Mobile hamburger ── */}
        <motion.button
          className="md:hidden text-text-nav p-1.5 ml-auto rounded-lg
            hover:bg-white/[0.06] transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/50"
          onClick={() => setMenuOpen((p) => !p)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          whileTap={reduced ? undefined : { scale: 0.92 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={reduced ? undefined : { rotate: 90, opacity: 0 }}
                animate={reduced ? undefined : { rotate: 0, opacity: 1 }}
                exit={reduced ? undefined : { rotate: -90, opacity: 0 }}
                transition={reduced ? undefined : { duration: 0.2, ease: EASING }}
              >
                <HiX size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={reduced ? undefined : { rotate: -90, opacity: 0 }}
                animate={reduced ? undefined : { rotate: 0, opacity: 1 }}
                exit={reduced ? undefined : { rotate: 90, opacity: 0 }}
                transition={reduced ? undefined : { duration: 0.2, ease: EASING }}
              >
                <HiMenu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden bg-bg-secondary/95 backdrop-blur-xl
              border-t border-white/[0.06] px-6 pb-5 flex flex-col overflow-hidden"
            role="menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={reduced ? undefined : mobileMenuVariants}
          >
            <div className="flex flex-col pt-2">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href)
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    role="menuitem"
                    className={`relative text-[15px] font-medium py-3 px-1
                      transition-colors duration-200
                      ${active
                        ? 'text-accent-cyan'
                        : 'text-text-nav/70 hover:text-text-primary'
                      }`}
                    aria-current={active ? 'page' : undefined}
                    variants={reduced ? undefined : mobileLinkVariants}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute bottom-3 left-0 h-[1.5px] w-4 rounded-full
                          bg-accent-cyan/80"
                      />
                    )}
                  </motion.a>
                )
              })}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                role="menuitem"
                className="relative text-[15px] font-medium text-text-nav/70
                  border border-white/10 hover:border-accent-cyan/50 hover:text-accent-cyan
                  transition-all duration-300 py-2.5 px-4 rounded-lg text-center mt-3
                  hover:bg-accent-cyan/[0.06]"
                variants={reduced ? undefined : mobileLinkVariants}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
