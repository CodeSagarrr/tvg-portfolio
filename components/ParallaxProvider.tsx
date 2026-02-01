'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface ParallaxContextType {
  scrollY: number
  windowHeight: number
  windowWidth: number
}

const ParallaxContext = createContext<ParallaxContextType>({
  scrollY: 0,
  windowHeight: 0,
  windowWidth: 0,
})

export const useParallax = () => useContext(ParallaxContext)

export default function ParallaxProvider({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight)
      setWindowWidth(window.innerWidth)
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    updateDimensions()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateDimensions, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  return (
    <ParallaxContext.Provider value={{ scrollY, windowHeight, windowWidth }}>
      {children}
    </ParallaxContext.Provider>
  )
}
