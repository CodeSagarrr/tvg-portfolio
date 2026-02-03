import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Portfolio from '@/components/sections/Portfolio'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'
import Navigation from '@/components/Navigation'
import ParallaxProvider from '@/components/ParallaxProvider'

export default function Home() {
  return (
    <ParallaxProvider>
      {/* <Navigation /> */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />

        {/* Testimonials Section */}
        <Testimonials />

         {/* Process Section */}
         <Process />
        
         {/* Portfolio Section */}
         <Portfolio />
        
        {/* Services Section */}
        <Services />
        
         {/* CTA Section */}
         <CTA />
        
        {/* Footer Section */}
        {/* <Footer /> */}
      </main>
    </ParallaxProvider>
  )
}
