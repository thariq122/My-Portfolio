/**
 * Shared Framer Motion variants used across multiple components.
 * Kept in src/data/ so component files export only React components
 * (required for Vite fast-refresh).
 */

export const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}
