'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [1, 2, 3, 4, 5, 6] // Placeholder array

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-section bg-dark-950 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
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
            <p className="text-dark-300 text-lg lg:text-xl max-w-2xl mx-auto">
              {/* Section description placeholder */}
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-6" />
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-dark-900 border border-dark-800 rounded-sm p-8 hover:border-primary-600 transition-all duration-300"
              >
                {/* 3D Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"
                  whileHover={{ scale: 1.02 }}
                />

                {/* Icon Placeholder */}
                <div className="w-16 h-16 bg-primary-600/20 rounded-sm mb-6 flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-300">
                  {/* Icon placeholder */}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-semibold text-dark-50 mb-4">
                  {/* Service title placeholder */}
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  {/* Service description placeholder */}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-8 right-8 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
