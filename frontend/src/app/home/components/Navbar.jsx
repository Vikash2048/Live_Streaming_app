import React from 'react'
import { Button } from '@/components/ui/button'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-screen h-20 px-10'>
        <h1 className='text-4xl font-bold'>LSA</h1>
        <div className='flex justify-around w-96 h-max '>
            <a className='text-xl font-medium' href="#">Home</a>
            <a className='text-xl font-medium' href="#">About</a>
            <a className='text-xl font-medium' href="#">Services</a>
            <Button className="px-8 rounded-3xl">SignUp</Button>
        </div>
    </div>
  )
}
