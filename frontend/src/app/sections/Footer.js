import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start my-10">

                {/* Left Section (Logo & Description) */}
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center space-x-2">
                        <img src="/video.png" alt="Logo" className="w-6 h-6" />
                        <h2 className="text-lg font-semibold">StreamFusion</h2>
                    </div>
                    <p className="text-sm mt-2 text-gray-500">Live streaming made simple and beautiful.</p>
                </div>

                {/* Center Sections - Product, Resources, Legal */}
                <div className="flex flex-wrap gap-12">

                    <div>
                        <h3 className="text-md font-semibold mb-2">Product</h3>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li><a href="#" className="hover:text-blue-500">Discover</a></li>
                            <li><a href="#" className="hover:text-blue-500">Go Live</a></li>
                            <li><a href="#" className="hover:text-blue-500">Upload Video</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-md font-semibold mb-2">Resources</h3>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
                            <li><a href="#" className="hover:text-blue-500">Creator Guidelines</a></li>
                            <li><a href="#" className="hover:text-blue-500">Community</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-md font-semibold mb-2">Legal</h3>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-500">Cookie Policy</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t mt-6 pt-4 text-center text-sm text-gray-500">
                © 2025 <span className="text-blue-500">StreamFusion</span>. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer