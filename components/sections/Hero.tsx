'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24"
    >
      {/* Parallax Background Layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"
      >
        {/* Soft Gradient Depth */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        </div>
      </motion.div>

      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 noise-texture z-[1]" />

      {/* Main Content - Centered */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-headline font-semibold text-dark-50 mb-5 lg:mb-6 leading-[1.15] tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
            }}
          >
            Get More Appointments in 7 Days with a High-Converting Landing Page
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg lg:text-xl text-dark-300 mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We build appointment focused landing pages for clinics, salons and service businesses designed to turn visitors into booked customers.
          </motion.p>

          {/* CTA Buttons - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3.5 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.button
              className="px-7 py-3 lg:px-8 lg:py-3.5 bg-primary-600 hover:bg-primary-500 text-dark-50 font-medium rounded-md transition-all duration-200 text-base shadow-lg shadow-primary-600/25"
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 12px 32px rgba(14, 165, 233, 0.35)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Demo
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              className="px-7 py-3 lg:px-8 lg:py-3.5 bg-dark-900/40 backdrop-blur-sm border border-dark-700 hover:border-primary-600/50 text-dark-200 hover:text-dark-50 font-medium rounded-md transition-all duration-200 text-base"
              whileHover={{ 
                scale: 1.03,
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Book Appointment
            </motion.button>

            {/* WhatsApp CTA - Icon Button */}
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="px-7 py-3 lg:px-8 lg:py-3.5 bg-dark-900/30 backdrop-blur-sm border border-dark-700/50 hover:border-primary-600/40 text-dark-300 hover:text-primary-400 font-medium rounded-md transition-all duration-200 text-base inline-flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                className="w-5 h-5 text-primary-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp Us</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
