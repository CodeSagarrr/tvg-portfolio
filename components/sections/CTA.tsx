'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-section bg-dark-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-dark-950 to-primary-500/10" />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: ['-50%', '-45%', '-50%'],
            y: ['-50%', '-55%', '-50%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-sm p-12 lg:p-16"
          >
            {/* Heading */}
            <h2 className="text-display-2 font-display font-bold text-dark-50 mb-6">
              {/* CTA heading placeholder */}
            </h2>

            {/* Description */}
            <p className="text-dark-300 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
              {/* CTA description placeholder */}
            </p>

            {/* CTA Button */}
            <motion.button
              className="px-10 py-5 bg-primary-600 hover:bg-primary-500 text-dark-50 font-bold text-lg rounded-sm transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Primary CTA button placeholder */}
            </motion.button>

            {/* Secondary Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6"
            >
              <a
                href="#"
                className="text-dark-400 hover:text-primary-500 transition-colors duration-300 inline-flex items-center gap-2"
              >
                {/* Alternative action placeholder */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
