'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [1, 2, 3] // Placeholder array

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-section bg-dark-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(14, 165, 233, 0.1) 50%, transparent 70%)`,
            backgroundSize: '100px 100px',
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
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-dark-950 border border-dark-800 rounded-sm p-8 lg:p-10 hover:border-primary-600 transition-all duration-300 group"
              >
                {/* Quote Icon */}
                <div className="text-primary-600 text-4xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Testimonial Content */}
                <p className="text-dark-200 text-lg leading-relaxed mb-6 italic">
                  {/* Testimonial text placeholder */}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center">
                    {/* Avatar placeholder */}
                  </div>
                  <div>
                    <div className="font-semibold text-dark-50">
                      {/* Author name placeholder */}
                    </div>
                    <div className="text-sm text-dark-400">
                      {/* Author title/company placeholder */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
