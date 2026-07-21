import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import SocialIcon from './SocialIcon'
import GlowEffect from './GlowEffect'
import social from '../data/social'
import profileImg from '../assets/images/Profile2.png'

const HERO_CONTENT = {
  greeting: "Hi – I'm Muhammad Thariq Akbar",
  roles: ['SOFTWARE ENGINEER', 'UI/UX DESIGNER', 'AI ENTHUSIAST'],
  description:
    'I am a Computer Engineering student with a strong passion for Software Development, UI/UX Design, and Artificial Intelligence. I enjoy transforming ideas into digital solutions by combining clean code, intuitive user experiences, and innovative technologies. I am always eager to learn, explore new tools, and continuously improve my skills through real-world projects and collaborative experiences.',
}

const roleVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit:  { opacity: 0, y: -20, transition: { duration: 0.35, ease: 'easeIn' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % HERO_CONTENT.roles.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen bg-bg-primary flex items-center
        pt-28 pb-20 px-6 md:px-16"
      aria-label="Hero section"
    >
      {/* ── Figma glow blobs — left cluster ── */}
      <GlowEffect className="w-72 h-36 bg-gradient-to-br from-[#FA00FF] to-[#00E0FF]
        opacity-60 glow-blob bottom-40 left-0 rotate-9" />
      <GlowEffect className="w-72 h-36 bg-gradient-to-br from-[#EEF202] to-[#BD230F]
        opacity-50 glow-blob bottom-24 left-16 mix-blend-color-dodge rotate-9" />
      <GlowEffect className="w-72 h-36 bg-gradient-to-br from-[#43B1E0] to-[#8A188E]
        opacity-50 glow-blob bottom-48 left-36 mix-blend-color-dodge rotate-9" />

      <div className="relative z-10 w-full max-w-content mx-auto
        flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

        {/* ── LEFT: text content ──
            min-w-0 + explicit min-width prevents heading from wrapping too early */}
        <motion.div
          className="w-full md:w-[55%] lg:w-[58%] min-w-0"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading — white, 43.51px, 700 — must stay on one line on desktop */}
          <motion.h1
            variants={fadeUp}
            className="text-white font-bold leading-[46.99px] tracking-[0.01em]
              text-2xl md:text-[38px] lg:text-[43.51px] whitespace-nowrap mb-3"
          >
            {HERO_CONTENT.greeting}
          </motion.h1>

          {/* Role — #0CB0CD, 40.73px, 700 — rotates every 2.5s */}
          <motion.div
            variants={fadeUp}
            className="overflow-hidden h-[44px] md:h-[44px] lg:h-[50px] mb-6 flex items-center"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                variants={roleVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-accent-cyan font-bold leading-[43.99px] tracking-[0.01em]
                  text-lg md:text-[36px] lg:text-[40.73px] uppercase whitespace-nowrap"
              >
                {HERO_CONTENT.roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Body — white, 20px, 700, justified */}
          <motion.p
            variants={fadeUp}
            className="text-white font-bold text-sm md:text-[18px] lg:text-[20px]
              leading-[25.20px] tracking-[0.01em] text-justify mb-10"
          >
            {HERO_CONTENT.description}
          </motion.p>

          {/* Social icons — bare PNGs, horizontal row, ~40px */}
          <motion.div variants={fadeUp} className="flex items-center gap-5">
            {social.map((item) => (
              <SocialIcon
                key={item.id}
                href={item.url}
                ariaLabel={item.ariaLabel}
                icon={item.icon}
                size={40}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: profile image with float animation ── */}
        <motion.div
          className="flex-shrink-0 order-first md:order-last
            flex justify-center md:justify-end
            w-full md:w-[40%] lg:w-[38%]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.img
            src={profileImg}
            alt="Muhammad Thariq Akbar — profile photo"
            className="w-80 md:w-[450px] lg:w-[550px] max-w-none object-cover"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            loading="eager"
            width={430}
            height={470}
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
