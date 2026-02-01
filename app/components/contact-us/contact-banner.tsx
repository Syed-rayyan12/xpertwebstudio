import React from 'react'
import Image from 'next/image'

const contactBanner = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto py-8 sm:py-12 mt-20">
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:pr-8">
            {/* Tag with Orange Dot */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-orange-500"></div>
              <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Contact Us
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              We'd Love to Hear From You
            </h1>

            {/* Paragraph */}
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using making it look like readable English.
            </p>
          </div>

          {/* Right Image with Circular Spin Icon */}
          <div className="relative w-full max-w-[1000px] flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Main Image Container */}
            <div className="relative w-full h-[500px] max-sm:h-[300px] rounded-bl-xl sm:rounded-bl-2xl overflow-hidden">
              <Image
                src="/images/about-banner.png"
                alt="Contact Us"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              
              {/* Inverted Shape Container with SVG Curves - Bottom Left */}
              <div className="absolute bottom-0 bg-[#0e0f11] left-0 z-20 rounded-tr-2xl flex transition-transform duration-400 transform pt-2 pr-2 lg:pr-3 lg:pt-3 lg:rounded-tr-3xl">
                {/* TOP LEFT CURVE */}
                <svg
                  className="w-10 h-10 lg:w-12 lg:h-12 text-[#0e0f11] fill-current absolute top-px left-0 transform -translate-y-full rotate-180"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                >
                  <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                </svg>
                {/* BOTTOM RIGHT CURVE */}
                <svg
                  className="w-10 h-10 lg:w-12 lg:h-12 text-[#0e0f11] fill-current absolute -bottom-px right-px transform translate-x-full rotate-180"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                >
                  <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                </svg>
                {/* Circular Spin Icon inside inverted shape */}
                <div className="rounded-full transform-gpu overflow-hidden relative w-32 h-32  max-sm:w-20 max-sm:h-20 animate-spin-slow">
                  <Image
                    src="/images/group.png"
                    alt="Spinning Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
   
    </section>
  )
}

export default contactBanner;
