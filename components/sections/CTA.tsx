'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TiltCard from '@/components/TiltCard'

export default function CTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-section overflow-hidden bg-dark-50"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 via-transparent to-primary-200/10" />
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
          <TiltCard
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white border border-dark-300 rounded-2xl p-10 sm:p-12 lg:p-16 shadow-sm"
            tiltMax={7}
            lift={10}
          >
            {/* Heading */}
            <h2 className="text-display-2 font-display font-bold text-dark-900 mb-6">
              Ready to Turn Visits Into Bookings?
            </h2>

            {/* Description */}
            <p className="text-dark-700 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
              Get a premium, conversion-focused landing page with clean hierarchy, clear CTAs, and subtle motion built for service businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.button
                className="w-full sm:w-auto px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-display font-bold tracking-[0.04em] text-base rounded-xl transition-all duration-200 shadow-sm"
                whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(124, 108, 255, 0.25)' }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Demo
              </motion.button>

              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-primary-200/30 border border-primary-500 hover:border-primary-600 text-primary-500 hover:text-primary-600 font-display font-bold tracking-[0.04em] text-base rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  className="w-5 h-5 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </motion.a>
            </div>

            <p className="text-dark-600 text-sm mt-6">
              Limited availability book early.
            </p>

            {/* Secondary Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6"
            >
              <a
                href="#portfolio"
                className="text-dark-600 hover:text-primary-500 transition-colors duration-300 inline-flex items-center gap-2 font-medium"
              >
                See template previews
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}
