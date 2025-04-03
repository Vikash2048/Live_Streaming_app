import React from 'react'
import About_card from '../utils/About_card'

const About = () => {

    const items = [
        {
            img_url: '4k.png',
            title: 'High Quality',
            content: 'Stream in HD with adaptive bitrate for viewers on any connection.'
        },
        {
            img_url: 'easy-to-use.png',
            title: 'Easy to Use',
            content: 'Simple interface designed for both beginners and professionals.'
        },
        {
            img_url: 'cyber-security.png',
            title: 'Secure',
            content: 'End-to-end encryption and strong privacy controls for your content.'
        },
        {
            img_url: 'relationship.png',
            title: 'Community',
            content: 'Connect with like-minded creators and build your audience.'
        }
    ]

    return (
        <div className='bg-[#F8FAFC] flex flex-col text-center  items-center w-screen py-24'>
            <p className='text-4xl font-light mb-5'> Why Stream Fusion </p>
            <p className='text-lg text-gray-600 mb-6'> Our platform is designed to provide the best experience for both creators and viewers. </p>

            <div className='flex flex-wrap justify-center items-center w-full py-10 drop-shadow-sm'>
                {items.map((item) => (
                    <About_card img_url={item.img_url} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
    )
}

export default About