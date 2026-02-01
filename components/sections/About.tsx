'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-section bg-dark-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-600" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-display-2 font-display font-bold text-dark-50 mb-6">
              {/* Section title placeholder */}
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Content placeholder */}
              <div className="space-y-6 text-dark-200 text-lg leading-relaxed">
                {/* Paragraph placeholders */}
              </div>
            </motion.div>

            {/* Right Column - Visual/Stats Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-dark-800 rounded-sm border border-dark-700 flex items-center justify-center">
                {/* Visual content placeholder */}
              </div>
            </motion.div>
          </div>

          {/* Stats/Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 lg:mt-24"
          >
            {/* Stat items placeholder */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-bold text-primary-500 mb-2">
                  {/* Stat number placeholder */}
                </div>
                <div className="text-dark-400 text-sm lg:text-base">
                  {/* Stat label placeholder */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
