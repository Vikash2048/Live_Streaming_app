import React from 'react'

const Card = () => {

    
    return (

        <div className="max-w-80 rounded-2xl overflow-hidden shadow-lg bg-white my-9 mx-3">
            {/* Thumbnail with overlay */}
            <div className="relative">
                <img
                    src="https://as1.ftcdn.net/jpg/04/70/37/00/1000_F_470370030_TxVCOsONUxh659YzwP2wCkX0ijAetDh9.jpg" 
                    alt="Thumbnail"
                    className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md">
                    8:05
                </span>
            </div>

            {/* Content */}
            <div className="p-4">
                <div className="flex items-center">
                    <img
                        src="/display-pic.png" 
                        alt="Author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                        <h3 className="text-lg font-semibold">Getting Started with Live Streaming</h3>
                        <p className="text-sm text-gray-500">Sarah Johnson</p>
                        <p className="text-xs text-gray-400">12.5K views • 2 days ago</p>
                    </div>
                </div>

                {/* Engagement Icons */}
                <div className="mt-3 flex justify-between text-gray-500 text-sm border-t pt-2">
                    <span>👍 12.5K</span>
                    <span>💬 1.2K</span>
                    <span>📌 85</span>
                </div>
            </div>
        </div>
    )
}

export default Card