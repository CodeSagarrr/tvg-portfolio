import type { Metadata } from 'next'
import { Oswald, Ubuntu } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Premium Agency | Transform Your Business',
  description: 'Premium service-based agency delivering exceptional results',
  keywords: 'agency, services, premium, business transformation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${oswald.variable} ${ubuntu.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
