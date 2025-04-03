import React from 'react'

const Ready_section = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center bg-[#E7F1FC] w-screen py-20'>
                <div className=' flex flex-col sm:w-screen  justify-center md:w-1/2 px-12 py-24'>
                    <p className='text-4xl font-light py-4'>
                        Ready to start streaming?
                    </p>
                    <p className='text-lg text-gray-600 py-4 md:pr-40'>
                        Join thousands of creators already sharing their moments with the world. It takes less than a minute to get started.
                    </p>

                    <a className='flex items-center cursor-pointer border bg-[#178BFF] text-white px-4 py-2 rounded-full mt-4 text-md font-semibold w-60'
                        href='/signup'>
                        Create Account
                        <img className='pl-4' src='arrow.png' />
                    </a>
                </div>
                <div className=" flex flex-col items-center justify-center w-1/2 relative">
                    {/* Outer Glow Effect */}
                    <div className="absolute w-40 h-40 bg-[#0e7ef7] rounded-full blur-2xl opacity-100"></div>

                    {/* Icon Container */}
                    <div className=" w-50 h-50 flex justify-center items-center rounded-full bg-white relative shadow-xl">
                        <img className="w-20" src="/video_big.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ready_section