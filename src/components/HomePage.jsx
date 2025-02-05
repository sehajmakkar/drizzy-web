import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Why from './Why'
import How from './How'
import Testimonials from './Testimonial'
import FAQ from './Faq'
import Driver from './Driver'
import DownloadSection from './Dowload'
import Footer from './Footer'

const HomePage = () => {
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

export default HomePage