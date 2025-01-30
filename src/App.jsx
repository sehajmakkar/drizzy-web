import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Why from './components/Why'
import How from './components/How'
import Testimonials from './components/Testimonial'
import FAQ from './components/Faq'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-white">
        <Navbar />
        <Hero />
        <Why />
      </div>
      <How />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App