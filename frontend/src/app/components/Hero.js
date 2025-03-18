import React from 'react'

const Hero = () => {
  return (
    <div>
        <nav className='flex justify-between md:justify-evenly w-screen h-20'>
            <div className='flex justify-center items-center w-60'>
                <img src='/video.png' width={30} alt='video_icon'/>
                <p className='text-2xl font-light px-3'>StreamFusion</p>
            </div>

            <div className='hidden md:flex justify-center items-center '>
                <a className='flex items-center cursor-pointer'>
                    <img className='w-5 ' src='/home.png'/>
                    <p className='font-semibold px-3'>Home</p>
                </a>
                <a className='flex items-center cursor-pointer px-7'>
                    <img className='w-5' src='/compass.png'/>
                    <p className='font-semibold px-3'>Discover</p>
                </a> 
            </div>

            <div className=' hidden md:flex justify-center items-center'>
                <a className='flex items-center cursor-pointer'>
                    <img className='w-5 ' src='/login.png'/>
                    <p className='font-semibold px-3'>Log in</p>
                </a>
                <a className='flex items-center cursor-pointer px-4 py-2 rounded-full border bg-[#3e9fff] text-white'>
                    <img className='w-5' src='/add-user.png'/>
                    <p className='font-semibold px-3'>Sign up</p>
                </a>
            </div>

            <div className='flex md:hidden items-center px-8'>
                <img src='/more.png'/>
            </div>
        </nav>

        

    </div>
  )
}

export default Hero