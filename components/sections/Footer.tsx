'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
    ],
    legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  }

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.a
                href="#"
                className="inline-block text-2xl lg:text-3xl font-luxury font-bold text-dark-50 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                {/* Logo placeholder */}
              </motion.a>
              <p className="text-dark-400 max-w-md leading-relaxed">
                {/* Company description placeholder */}
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-dark-50 font-semibold mb-4">
                {/* Column title placeholder */}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-dark-400 hover:text-primary-500 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-dark-50 font-semibold mb-4">
                {/* Column title placeholder */}
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-dark-400 hover:text-primary-500 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-dark-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-dark-500 text-sm">
                © {currentYear} {/* Company name placeholder */}. All rights reserved.
              </p>
              
              {/* Social Links Placeholder */}
              <div className="flex items-center gap-4">
                {/* Social media links placeholder */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
