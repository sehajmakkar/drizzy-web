import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Why from './components/Why'
import How from './components/How'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-white">
        <Navbar />
        <Hero />
        <Why />
      </div>
      <How />
    </div>
  )
}

export default App