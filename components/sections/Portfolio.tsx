'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import TiltCard from '@/components/TiltCard'

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const templates = [
    {
      title: 'Appointment-focused layout',
      benefit: 'Designed to guide visitors toward booking with clarity.',
    },
    {
      title: 'Service offer layout',
      benefit: 'A simple structure that explains value fast and clean.',
    },
    {
      title: 'Lead capture layout',
      benefit: 'Built around one action with minimal distraction.',
    },
    {
      title: 'Clinic-style layout',
      benefit: 'Trust-first design with calm hierarchy and clear CTA.',
    },
    {
      title: 'Salon-style layout',
      benefit: 'Premium visuals and booking flow that feels effortless.',
    },
    {
      title: 'Local service layout',
      benefit: 'Fast scanning sections and strong next-step buttons.',
    },
  ]

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      ref={ref}
      id="portfolio"
      className="relative py-section overflow-hidden bg-dark-50"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-primary-500/20" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-display-2 font-display font-bold text-dark-900 mb-6">
              Landing Page Templates
            </h2>
            <p className="text-dark-700 text-lg lg:text-xl max-w-2xl mx-auto mb-6">
              Clean, conversion focused layouts you can use as a starting point kept minimal and premium.
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {templates.map((template, index) => (
              <TiltCard
                key={template.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-dark-300 hover:border-primary-500 transition-colors shadow-sm"
                tiltMax={9}
                lift={10}
              >
                {/* Image/Visual Placeholder */}
                <div className="aspect-[4/3] bg-dark-50 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-200/30 via-transparent to-primary-200/20"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />

                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                  </motion.div>
                  
                  <div className="absolute inset-0 p-6 flex items-end">
                    <div className="inline-flex items-center gap-2 rounded-full border border-dark-300 bg-white px-3 py-1.5 text-xs text-dark-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                      Preview
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-dark-900 mb-2">
                    {template.title}
                  </h3>
                  <p className="text-dark-700 text-sm leading-relaxed">
                    {template.benefit}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              className="px-8 py-4 bg-transparent border border-dark-300 hover:border-primary-500 text-dark-700 hover:text-primary-500 font-semibold rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See more layouts
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
