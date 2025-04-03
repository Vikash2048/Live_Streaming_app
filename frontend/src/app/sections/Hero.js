"use client"
import React from 'react'
import { useState } from 'react'

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='bg-gradient-to-b from-[#ECF4FC] to-[#F7F9FC]'>
            {/* navbar  */}
            <nav className='flex justify-between md:justify-between w-screen h-20 px-6'>
                <div className='flex items-center '>
                    <img src='/video.png' width={30} alt='video_icon' />
                    <p className='sm:text-2xl font-light px-3'> StreamFusion </p>
                </div>

                <div className='hidden md:flex justify-center items-center '>
                    <a className='flex items-center cursor-pointer'>
                        <img className='w-5 ' src='/home.png' />
                        <p className='font-semibold px-3'> Home </p>
                    </a>
                    <a className='flex items-center cursor-pointer px-7'>
                        <img className='w-5' src='/compass.png' />
                        <p className='font-semibold px-3'> Discover </p>
                    </a>
                </div>

                <div className=' hidden md:flex justify-center items-center'>
                    <a className='flex items-center cursor-pointer' href='/login'>
                        <img className='w-5 ' src='/login.png' />
                        <p className='font-semibold px-3'> Log in </p>
                    </a>
                    <a className='flex items-center cursor-pointer px-4 py-2 rounded-full border bg-[#3e9fff] text-white' href='/signup '>
                        <img className='w-5' src='/add-user.png' />
                        <p className='font-semibold px-3'> Sign up </p>
                    </a>
                </div>

                <div className='flex md:hidden  items-center'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img className='w-5' src='/more.png' alt='Menu' />
                    </button>
                </div>
            </nav>
            {
                isMenuOpen && (
                    <div className='md-hidden flex-col p-3 bg-[#FCFDFE]'>
                        <a href='#' className='flex  my-2 p-1.5 hover:bg-[#F3F6FA] transition-all duration-200'>
                            <img className='w-5 mx-3' src='/home.png' />
                            Home
                        </a>
                        <a href='#' className='flex  my-2 p-1.5 hover:bg-[#F3F6FA] transition-all duration-200'>
                            <img className='w-5 mx-3' src='/compass.png' />
                            Discover
                        </a>
                        <a href='#' className='flex  my-2 p-1.5 hover:bg-[#F3F6FA] transition-all duration-200'>
                            <img className='w-5 mx-3' src='/login.png' />
                            Log in
                        </a>
                        <a href='#' className='flex items-center cursor-pointer px-4 py-2 rounded-md border bg-[#64aaf0] text-white my-2 p-1.5 hover:bg-[#5d82a7]'>
                            <img className='w-5 mr-3' src='/add-user.png' />
                            Sign up
                        </a>
                    </div>
                )
            }

            {/* main body  */}
            <div className='flex flex-col justify-center items-center'>
                <p className='px-3 py-1 mt-28 rounded-full bg-[#c5ddf7] text-[#0a41f3] font-semibold'>
                    Live Streaming Platform
                </p>

                <p className=' text-3xl md:text-6xl font-light mt-9'>
                    Share Your Moments <span className='text-[#0a41f3]'> Live </span>
                </p>

                <p className=' text-3xl md:text-6xl font-light mb-8'>
                    With the world
                </p>
                
                <p className='text-gray-400 text-sm md:text-lg items-center text-center'>
                    Create, stream, and connect with a global audience. High-quality streaming made simple and accessible.
                </p>

                <div className='mt-9 mb-28 flex-col md:flex md:flex-row'>
                    <a className='flex justify-between border rounded-full px-8 py-2 font-semibold bg-[#188BFF] text-white cursor-pointer mb-5 md:mr-7 md:mb-0'
                        href='/signup'>
                        Get Started
                        <img className='pl-3' src='/arrow.png' />
                    </a>
                    <a className='flex justify-between border rounded-full px-8 py-2 font-semibold
                    cursor-pointer border-gray-300'>
                        Expolore Content
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero