import React from 'react'

const About_card = ({img_url, title, content}) => {
    return (
        <div className='flex flex-col justify-center items-center m-8 w-4xl md:w-60 h-70 bg-[#FEFEFE] rounded-lg p-10'>
            <img className=' p-2 rounded-full bg-[#E4F1FE]' src={`/${img_url}`} width={60} />

            <p className='font-semibold text-xl my-4'> {title}
            </p>

            <p className='text-gray-500'> {content} </p>
        </div>
    )
}

export default About_card