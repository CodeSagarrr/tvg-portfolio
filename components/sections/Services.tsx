'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TiltCard from '@/components/TiltCard'

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const painPoints = [
    {
      title: 'Too many options',
      description: 'Visitors get overwhelmed when they have to choose where to click next.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 6h10M4 12h16M4 18h13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'No clear next step',
      description: 'If the call-to-action is not obvious, people leave—even when they are interested.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3v10m0 0l-3-3m3 3l3-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 21h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Looks fine, doesn’t convert',
      description: 'A “good-looking” site can still fail when the message and layout are not focused.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 7h16v10H4V7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7 10h7M7 13h10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Slow decision path',
      description: 'People do not want to read multiple pages to understand what you do and how to book.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 8v5l3 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: 'Traffic leaks away',
      description: 'Visitors get distracted by menus, extra links, and unrelated pages.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 7h10v10H7V7Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M21 3l-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M17 3h4v4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Hard to measure',
      description: 'Without a single goal, it is difficult to know what is working and what needs fixing.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 19V5m0 14h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7 16l4-4 3 3 5-7"
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
      id="services"
      className="relative py-section overflow-hidden bg-dark-50"
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
            <p className="text-dark-700 text-lg lg:text-xl max-w-2xl mx-auto mb-8">
              When the goal is appointments, a multi-page website often adds friction instead of clarity.
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
          </motion.div>

          {/* Microchip Card Design */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 bg-white border-2 border-primary-500/30 rounded-3xl p-8 lg:p-12 shadow-sm mb-12 lg:mb-16"
            >
              <h2 className="text-display-2 font-display font-bold text-dark-900 text-center mb-4">
                Why Normal Websites Don't Work
              </h2>
              <div className="w-32 h-1 bg-primary-600 mx-auto" />
            </motion.div>

            {/* Pain Points arranged around central card */}
            <div className="relative">
              {/* Top Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6">
                {painPoints.slice(0, 3).map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Connection line (visual) */}
                    <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-primary-500/40 to-transparent" />
                    
                    <TiltCard className="bg-white border border-dark-300 rounded-xl p-5 lg:p-6 hover:border-primary-500/50 transition-all duration-300 shadow-sm">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary-200 text-primary-500 rounded-lg flex items-center justify-center border border-primary-300 flex-shrink-0">
                          {point.icon}
                        </div>
                        <h3 className="text-lg font-display font-semibold text-dark-900">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-dark-700 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {painPoints.slice(3, 6).map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Connection line (visual) */}
                    <div className="hidden lg:block absolute -top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-t from-primary-500/40 to-transparent" />
                    
                    <TiltCard className="bg-white border border-dark-300 rounded-xl p-5 lg:p-6 hover:border-primary-500/50 transition-all duration-300 shadow-sm">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary-200 text-primary-500 rounded-lg flex items-center justify-center border border-primary-300 flex-shrink-0">
                          {point.icon}
                        </div>
                        <h3 className="text-lg font-display font-semibold text-dark-900">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-dark-700 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
