'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
              Why Normal Websites Don’t Work
            </h2>
            <p className="text-dark-300 text-lg lg:text-xl max-w-2xl mx-auto">
              When the goal is appointments, a multi-page website often adds friction instead of clarity.
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-6" />
          </motion.div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-dark-900/60 backdrop-blur-sm border border-dark-800/80 rounded-2xl p-7 lg:p-8 hover:border-primary-600/60 transition-all duration-300"
              >
                {/* Soft Hover Wash */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                />

                {/* Icon */}
                <div className="w-12 h-12 bg-primary-600/15 text-primary-300 rounded-2xl mb-6 flex items-center justify-center border border-primary-600/20 group-hover:bg-primary-600/20 transition-colors duration-300">
                  {point.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-semibold text-dark-50 mb-4">
                  {point.title}
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
