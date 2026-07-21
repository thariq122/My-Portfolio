/**
 * Navbar — from Figma spec
 *
 * Background:  #1D2733 (bg-secondary)
 * Font:        Plus Jakarta Sans
 * Brand/links: #D2C6C6 (text-nav), 28.29px, 700
 * Layout:      brand left | Home | Experience | Projects | Contact Me right
 * Dividers:    thin white/30 vertical lines between items
 */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import useScrollActive from '../hooks/useScrollActive'

const NAV_LINKS = [
  { label: 'Home',       href: '#home'       },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
]

const SECTION_IDS = ['home', 'experience', 'projects', 'contact']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId                = useScrollActive(SECTION_IDS)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      /* Figma: #1D2733, full-width bar */
      className="fixed top-0 left-0 right-0 z-50 bg-bg-secondary shadow-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav
        className="relative flex items-center w-full px-6 md:px-10 lg:px-16 py-4 md:py-5"
        aria-label="Main navigation"
      >
        {/* Brand — left */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-text-nav font-bold text-base md:text-[28.29px] leading-[30.55px]
            tracking-[0.01em] hover:opacity-80 transition-opacity duration-200 shrink-0"
          aria-label="Muhammad Thariq Akbar — back to top"
        >
          Muhammad Thariq Akbar
        </a>

        {/* ── DESKTOP nav — absolutely centered in the full navbar width ── */}
        <ul
          className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2"
          role="list"
        >
          {/* Leading divider */}
          <span className="w-px h-5 bg-white/30" aria-hidden="true" />
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace('#', '')
            return (
              <li key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-5 text-[28.29px] leading-[30.55px] tracking-[0.01em]
                    font-bold transition-opacity duration-200 hover:opacity-100
                    ${isActive ? 'text-text-nav opacity-100' : 'text-text-nav opacity-60'}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
                {/* Trailing divider after every item */}
                <span className="w-px h-5 bg-white/30" aria-hidden="true" />
              </li>
            )
          })}
        </ul>

        {/* Contact Me — pushed to the far right */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden md:block text-text-nav font-bold ml-auto
            text-[28.29px] leading-[30.55px] tracking-[0.01em]
            hover:opacity-80 transition-opacity duration-200 shrink-0"
          aria-label="Go to contact section"
        >
          Contact Me
        </a>

        {/* ── MOBILE hamburger ── */}
        <button
          className="md:hidden text-text-nav p-1 ml-auto
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          onClick={() => setMenuOpen((p) => !p)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* ── MOBILE dropdown ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-bg-secondary border-t border-white/10
            px-6 pb-6 flex flex-col gap-4"
          role="menu"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace('#', '')
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                role="menuitem"
                className={`text-base font-bold py-2 border-b border-white/10
                  text-text-nav transition-opacity duration-200
                  ${isActive ? 'opacity-100' : 'opacity-60'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            )
          })}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            role="menuitem"
            className="text-base font-bold text-text-nav py-2"
          >
            Contact Me
          </a>
        </div>
      )}
    </motion.header>
  )
}

export default Navbar
