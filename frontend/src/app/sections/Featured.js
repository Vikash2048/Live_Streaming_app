import React from 'react'
import Card from '../utils/Card'

const Featured = () => {
    return (
        <div className=' flex flex-col bg-[#F5F8FB] w-screen  px-12'>
            {/* Heading */}
            <div className='flex w-full justify-between items-center '>
                <p className=' text-xl md:text-3xl font-extralight'>
                    Featured Content
                </p>
                <a className='flex cursor-pointer'>
                    View All
                    <img className='md:pl-6' src="/arrow_black.png" />
                </a>
            </div>

            <div className='flex flex-wrap  items-center justify-center w-full'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Featured