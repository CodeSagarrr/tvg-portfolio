'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const projects = [1, 2, 3, 4, 5, 6] // Placeholder array

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      ref={ref}
      id="portfolio"
      className="relative py-section bg-dark-950 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-primary-500/20" />
      </motion.div>

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
            <p className="text-dark-300 text-lg lg:text-xl max-w-2xl mx-auto mb-6">
              {/* Section description placeholder */}
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-sm bg-dark-900 border border-dark-800"
              >
                {/* Image/Visual Placeholder */}
                <div className="aspect-[4/3] bg-dark-800 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-dark-800"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-primary-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={false}
                  >
                    <motion.button
                      className="px-6 py-3 bg-dark-950 text-dark-50 font-semibold rounded-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* View project button placeholder */}
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-dark-50 mb-2">
                    {/* Project title placeholder */}
                  </h3>
                  <p className="text-dark-400 text-sm">
                    {/* Project category placeholder */}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-dark-700 hover:border-primary-600 text-dark-200 hover:text-dark-50 font-semibold rounded-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* View all projects button placeholder */}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
