'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Process() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [1, 2, 3, 4] // Placeholder array

  return (
    <section
      ref={ref}
      id="process"
      className="relative py-section bg-dark-900 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-900" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
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

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-dark-800 transform -translate-y-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      className="w-20 h-20 lg:w-24 lg:h-24 bg-dark-800 border-2 border-primary-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-3xl lg:text-4xl font-display font-bold text-primary-600 group-hover:text-dark-950 transition-colors duration-300">
                        {/* Step number placeholder */}
                      </span>
                    </motion.div>

                    {/* Step Content */}
                    <div className="text-center">
                      <h3 className="text-xl lg:text-2xl font-display font-semibold text-dark-50 mb-4">
                        {/* Step title placeholder */}
                      </h3>
                      <p className="text-dark-300 leading-relaxed">
                        {/* Step description placeholder */}
                      </p>
                    </div>
                  </div>

                  {/* Connection Line Dot (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-4 h-4 bg-primary-600 rounded-full transform -translate-y-1/2 translate-x-1/2 z-20" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
