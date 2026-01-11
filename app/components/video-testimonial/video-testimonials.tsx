import React from 'react'
import Image from 'next/image'

const VideoTestimonials = () => {
    return (
        <section className="py-16 px-6 bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-12 text-black">Video Testimonials</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="relative rounded-lg shadow-xl h-[400px] bg-gray-300">
                        <img src="/images/project-1.png" alt="Video 1"  className="object-cover rounded-lg" />
                        <div className="absolute bottom-4 left-4 bg-white border-4 border-black w-[100px] h-[100px] z-50 shadow-2xl"></div>
                    </div>
                    <div className="relative rounded-lg shadow-xl h-[400px] bg-gray-300">
                        <img src="/images/project-2.png" alt="Video 2"  className="object-cover rounded-lg" />
                        <div className="absolute bottom-4 left-4 bg-white border-4 border-black w-[100px] h-[100px] z-50 shadow-2xl"></div>
                    </div>
                    <div className="relative rounded-lg shadow-xl h-[400px] bg-gray-300">
                        <img src="/images/project-3.png" alt="Video 3" className="object-cover rounded-lg" />
                        <div className="absolute bottom-4 left-4 bg-white border-4 border-black w-[100px] h-[100px] z-50 shadow-2xl"></div>
                    </div>
                    <div className="relative rounded-lg shadow-xl h-[400px] bg-gray-300">
                        <img src="/images/project-4.png" alt="Video 4" className="object-cover rounded-lg" />
                        <div className="absolute bottom-4 left-4 bg-white border-4 border-black w-[100px] h-[100px] z-50 shadow-2xl"></div>
                    </div>
                    <div className="relative rounded-lg shadow-xl h-[400px] bg-gray-300">
                        <img src="/images/project-5.png" alt="Video 5" className="object-cover rounded-lg" />
                        <div className="absolute bottom-4 left-4 bg-white border-4 border-black w-[100px] h-[100px] z-50 shadow-2xl"></div>
                    </div>
                    <div className="relative rounded-lg shadow-xl h-[400px] bg-gray-300">
                        <img src="/images/project-6.png" alt="Video 6" className="object-cover rounded-lg" />
                        <div className="absolute bottom-4 left-4 bg-white border-4 border-black w-[100px] h-[100px] z-50 shadow-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoTestimonials
