import React from 'react'
import Hero from './sections/Hero'
import Featured from './sections/Featured'
import About from './sections/About'
import Ready_section from './sections/Ready_section'
import Footer from './sections/Footer'

const home = () => {
  return (
    <div className='p-0 m-0'>
      <Hero />
      <Featured/>
      <About />
      <Ready_section /> 
      <Footer />
    </div>

  )
}

export default home