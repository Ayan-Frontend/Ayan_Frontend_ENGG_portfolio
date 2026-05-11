'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    // Only show custom cursor on devices that support hover
    const mediaQuery = window.matchMedia('(hover: hover)')
    if (!mediaQuery.matches) return

    setIsVisible(true)
    window.addEventListener('mousemove', handleMouseMove)

    // Track hover states
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
    
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [handleMouseMove])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary/50 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-40 h-40 rounded-full pointer-events-none z-[9997]"
        style={{
          background: 'radial-gradient(circle, oklch(0.7 0.25 280 / 0.1) 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
        }}
      />
    </>
  )
}
