/**
 * useScrollActive — returns the id of the section currently in view.
 * Used by Navbar to highlight the active nav link.
 *
 * @param {string[]} sectionIds — ordered list of section id strings
 * @returns {string} activeId
 */
import { useState, useEffect } from 'react'

function useScrollActive(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id)
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [sectionIds])

  return activeId
}

export default useScrollActive
