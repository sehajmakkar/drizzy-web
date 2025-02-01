import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Why from './components/Why'
import How from './components/How'
import Testimonials from './components/Testimonial'
import FAQ from './components/Faq'
import Footer from './components/Footer'
import Driver from './components/Driver'  
import DownloadSection from './components/Dowload'

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
      <Driver />
      <DownloadSection />
      <Footer />
    </div>
  )
}

export default App