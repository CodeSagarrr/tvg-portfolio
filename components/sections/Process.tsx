'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TiltCard from '@/components/TiltCard'

export default function Process() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      title: 'Focused message',
      description: 'We align the headline, sub-headline, and offer around one clear outcome.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4v16m8-8H4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Simple structure',
      description: 'Short sections, clean hierarchy, and scanning-friendly layout.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 7h12M6 12h12M6 17h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Strong CTA',
      description: 'Clear buttons placed where people naturally decide to book.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8 12h8m0 0l-3-3m3 3l-3 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 6h16v12H4V6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Conversion-ready feel',
      description: 'Premium visuals, responsive spacing, and subtle motion that builds trust.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 10.5l1.8 1.8 3.8-3.8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section
      ref={ref}
      id="process"
      className="relative py-section overflow-hidden bg-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-display-2 font-display font-bold text-dark-900 mb-6">
              How a Landing Page Fixes This
            </h2>
            <p className="text-dark-700 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              A landing page removes friction and guides visitors with clarity, structure, and a single call-to-action.
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-dark-300 transform -translate-y-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex flex-col items-center">
                    <TiltCard
                      className="w-20 h-20 lg:w-24 lg:h-24 bg-white border border-dark-300 rounded-2xl flex items-center justify-center mb-6 text-primary-500 group-hover:border-primary-500 group-hover:bg-primary-200 transition-colors duration-300 shadow-sm"
                      tiltMax={10}
                      lift={8}
                    >
                      {step.icon}
                    </TiltCard>

                    {/* Step Content */}
                    <div className="text-center">
                      <h3 className="text-xl lg:text-2xl font-display font-semibold text-dark-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-dark-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connection Line Dot (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-4 h-4 bg-primary-500 rounded-full transform -translate-y-1/2 translate-x-1/2 z-20" />
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
