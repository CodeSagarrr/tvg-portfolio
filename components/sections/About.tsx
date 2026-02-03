'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const visualY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  const highlights = [
    {
      title: 'Single goal',
      description: 'One focused page designed to move a visitor to one action.',
    },
    {
      title: 'Clear message',
      description: 'Simple structure that matches your offer to what people need now.',
    },
    {
      title: 'Trust signals',
      description: 'Proof, clarity, and reassurance placed where decisions happen.',
    },
    {
      title: 'Mobile-first',
      description: 'Built to read fast, feel premium, and convert on small screens.',
    },
  ]

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-section overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-200/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left Column - Text Content with Heading */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6">
                <h2 className="text-display-2 font-display font-bold text-dark-900 mb-2">
                  What is a Landing Page?
                </h2>
                <p className="text-dark-700 text-lg lg:text-xl leading-relaxed mb-6">
                  A landing page is a single, focused page built to guide visitors toward one clear next step like booking an appointment.
                </p>
                <div className="w-24 h-1 bg-primary-500 mb-6" />
                <div className="space-y-6 text-dark-700 text-lg leading-relaxed">
                  <p>
                    <span className="font-semibold text-dark-900">Unlike a normal website</span> with multiple pages and menus, a landing page removes distractions and keeps attention on one message.
                  </p>
                  <p>
                    <span className="font-semibold text-dark-900">It explains the offer</span>, answers common doubts, and places a clear call-to-action right where people are ready to decide.
                  </p>
                  <p className="text-dark-600">
                    <span className="font-semibold text-dark-900">The result</span> is a calm, premium experience that feels simple yet highly intentional.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual/Stats Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex items-center"
            >
              <motion.div style={{ y: visualY }} className="relative w-full">
                <div className="w-full rounded-2xl border border-dark-300 bg-white shadow-sm overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
                  <div className="absolute inset-0 opacity-70">
                    <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary-600/35 blur-3xl" />
                    <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary-500/25 blur-3xl" />
                  </div>
                  <div className="absolute inset-0">
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 2px 2px, rgba(226, 232, 240, 0.35) 1px, transparent 0)',
                        backgroundSize: '28px 28px',
                      }}
                    />
                  </div>

                  <div className="relative h-full w-full p-8 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="h-3 w-24 rounded-full bg-dark-300" />
                      <div className="h-3 w-44 rounded-full bg-dark-300" />
                      <div className="h-3 w-32 rounded-full bg-dark-300" />
                    </div>
                    <div className="rounded-2xl border border-dark-300 bg-dark-50 p-6">
                      <div className="h-4 w-40 rounded-full bg-dark-300 mb-3" />
                      <div className="h-3 w-full rounded-full bg-dark-300 mb-2" />
                      <div className="h-3 w-5/6 rounded-full bg-dark-300 mb-5" />
                      <div className="h-10 w-44 rounded-xl bg-primary-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats/Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 lg:mt-24"
          >
            {highlights.map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-xl lg:text-2xl font-display font-bold text-dark-900 mb-2">
                  {item.title}
                </div>
                <div className="text-dark-600 text-sm lg:text-base leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
