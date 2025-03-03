import React from 'react'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <div className='flex flex-1 '>
        <div className=' flex flex-col w-1/2 items-center  py-8 px-9'>
            <p className='flex justify-center text-4xl text-center py-8 my-3'>Stream your idea your thought  seamless. Be the creator of your own thought</p>

            <Button className="px-8 my-5 mr-14 rounded-3xl w-max">SignUp</Button>

            <div className='flex justify-evenly my-4'>
                <p className='border w-max px-4 py-1 mx-4 rounded-full'>Live Streaming</p>
                <p className='border w-max px-4 py-1 mx-4 rounded-full'>Upload Video, Shorts</p>
                <p className='border w-max px-4 py-1 mx-4 rounded-full'>More Comming Soon</p>
            </div>
        </div>
        <div className='w-1/2 flex items-center justify-end overflow-hidden relative'>
            <img src="hero.png" alt="img" className='object-cover' />
            <img
    src="overlay.png"
    alt="Overlay"
    className=" rounded-xl absolute top-[52%] left-[30%] w-[70px] h-[67px] transform -translate-x-1/2 -translate-y-1/2"
  />
        </div>
    </div>
  )
}
