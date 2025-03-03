import React from 'react'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

const page = () => {
  return (
    <div className='flex flex-col w-screen h-screen bg-custom-gradient py-5 '>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default page