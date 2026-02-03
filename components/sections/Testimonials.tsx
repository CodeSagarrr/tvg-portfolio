'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const audiences = [
    {
      title: 'Clinics',
      description: 'For practices that want more booked appointments from local traffic.',
      icon: '🏥',
    },
    {
      title: 'Salons & spas',
      description: 'For businesses that rely on repeat bookings and fast decisions.',
      icon: '✂️',
    },
    {
      title: 'Local services',
      description: 'For service businesses that need calls, quotes, and scheduled visits.',
      icon: '🛠️',
    },
  ]

  const deliverables = [
    'Appointment-focused page structure',
    'Premium, minimal styling and clean spacing',
    'Mobile-first responsive layout',
    'Smooth scroll-based animations and subtle parallax',
    'Clear CTA buttons (including WhatsApp option)',
    'Fast, readable content hierarchy',
  ]

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
              Who Is This For
            </h2>
            <p className="text-dark-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Built for service businesses that want a clean, focused page that turns visits into bookings.
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
          </motion.div>

          {/* Audience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-dark-950/40 backdrop-blur-sm border border-dark-800/80 rounded-2xl p-7 lg:p-8 hover:border-primary-600/60 transition-all duration-300 group shadow-premium"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-600/15 border border-primary-600/20 flex items-center justify-center text-xl">
                    {audience.icon}
                  </div>
                  <div>
                    <div className="text-xl font-display font-semibold text-dark-50 mb-2">
                      {audience.title}
                    </div>
                    <p className="text-dark-300 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-14 lg:mt-20"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-dark-50 mb-3">
                  What You Get
                </h3>
                <p className="text-dark-300 text-lg">
                  Everything designed to keep the page focused, clean, and conversion ready.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deliverables.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.5 + idx * 0.06 }}
                    className="flex items-start gap-3 rounded-2xl border border-dark-800/80 bg-dark-950/30 p-5"
                  >
                    <span className="mt-0.5 h-8 w-8 rounded-xl bg-primary-600/15 border border-primary-600/20 flex items-center justify-center text-primary-300">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="text-dark-200 leading-relaxed">{item}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
