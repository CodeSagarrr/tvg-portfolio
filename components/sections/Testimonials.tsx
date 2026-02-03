'use client'

import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useId, useRef, useState } from 'react'
import TiltCard from '@/components/TiltCard'

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
      className="relative py-section overflow-hidden bg-white"
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
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-display-2 font-display font-bold text-dark-900 mb-4">
              Who Is This For
            </h2>
            <p className="text-dark-700 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
              Built for service businesses that want a clean, focused page that turns visits into bookings.
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
          </motion.div>

          {/* Audience List - Clean and Readable */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-4 lg:space-y-5">
              {audiences.map((audience, index) => (
                <TiltCard
                  key={audience.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="rounded-2xl bg-white border border-dark-300 hover:border-primary-500 transition-colors shadow-sm"
                  tiltMax={5}
                  lift={6}
                >
                  {(() => {
                    const isOpen = openIndex === index
                    const panelId = `${baseId}-audience-${index}`

                    return (
                      <div>
                        <button
                          type="button"
                          className="w-full flex items-center gap-4 lg:gap-5 px-5 lg:px-6 py-4 lg:py-5 text-left"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                        >
                          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary-200 border border-primary-300 flex items-center justify-center text-xl lg:text-2xl flex-shrink-0">
                            {audience.icon}
                          </div>

                          <div className="flex-1">
                            <h3 className="text-xl lg:text-2xl font-display font-semibold text-dark-900">
                              {audience.title}
                            </h3>
                            <p className="text-dark-600 text-sm lg:text-base mt-1">
                              Click to {isOpen ? 'hide' : 'read'} details
                            </p>
                          </div>

                          <motion.span
                            className="flex-shrink-0 w-10 h-10 rounded-xl border border-dark-300 bg-dark-50 flex items-center justify-center text-dark-700"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            aria-hidden="true"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M7 10l5 5 5-5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={panelId}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 lg:px-6 pb-5 lg:pb-6 -mt-1">
                                <p className="text-dark-700 text-base lg:text-lg leading-relaxed">
                                  {audience.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })()}
                </TiltCard>
              ))}
            </div>
          </motion.div>

          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-14 lg:mt-20"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-dark-900 mb-3">
                  What You Get
                </h3>
                <p className="text-dark-700 text-lg">
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
                    className="flex items-start gap-3 rounded-2xl border border-dark-300 bg-white p-5 shadow-sm"
                  >
                    <span className="mt-0.5 h-8 w-8 rounded-xl bg-primary-200 border border-primary-300 flex items-center justify-center text-primary-500">
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
                    <div className="text-dark-700 leading-relaxed">{item}</div>
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
