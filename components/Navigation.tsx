'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-0 right-0 z-50"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          className={`mx-auto max-w-5xl rounded-2xl transition-all duration-300 border ${
            isScrolled
              ? 'bg-dark-950/65 backdrop-blur-xl border-dark-800/70 shadow-premium'
              : 'bg-dark-950/35 backdrop-blur-lg border-dark-800/45 shadow-[0_18px_60px_rgba(2,6,23,0.45)]'
          }`}
        >
          <div className="flex items-center justify-center h-14 lg:h-16 px-4 lg:px-6">
            {/* Centered Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center gap-8 w-full">
              {navItems.slice(0, -1).map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="group relative font-display text-dark-200 hover:text-dark-50 transition-colors duration-300 text-sm font-semibold tracking-[0.06em] uppercase"
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 + 0.25 }}
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-primary-500/80 transition-all duration-300 group-hover:w-10" />
                </motion.a>
              ))}

              {/* Primary Button (last item) */}
              <motion.a
                href={navItems[navItems.length - 1].href}
                className="ml-2 inline-flex items-center justify-center rounded-xl bg-primary-600 px-5 py-2.5 text-dark-50 text-sm font-display font-semibold tracking-[0.06em] uppercase shadow-lg shadow-primary-600/20 transition-all duration-200 hover:bg-primary-500"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + navItems.length * 0.08 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 18px 40px rgba(14, 165, 233, 0.25)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {navItems[navItems.length - 1].label}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden w-full flex items-center justify-between">
              <div className="font-display text-sm font-semibold tracking-[0.08em] uppercase text-dark-200">
                Premium Agency
              </div>
              <button
                className="text-dark-50 p-2 rounded-xl hover:bg-dark-900/30 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <motion.span
                    className="block h-0.5 w-full bg-dark-50"
                    animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : {}}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="block h-0.5 w-full bg-dark-50"
                    animate={isMobileMenuOpen ? { opacity: 0 } : {}}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="block h-0.5 w-full bg-dark-50"
                    animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : {}}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden px-4 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-5xl mt-3 rounded-2xl glass-surface shadow-premium overflow-hidden">
              <div className="px-5 py-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-dark-200 hover:text-dark-50 transition-colors py-3 text-center font-display font-semibold tracking-[0.06em] uppercase text-sm rounded-xl hover:bg-dark-900/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
