import React from 'react'
import Image from 'next/image'

const PackagesBanner = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto py-8 sm:py-12 mt-20">
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:pr-8">
            {/* Tag with Orange Dot */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-orange-500"></div>
              <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Our Packages
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Choose the Right Package for Your Brand
            </h1>

            {/* Paragraph */}
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using making it look like readable English.
            </p>
          </div>

          {/* Right Image with Circular Spin Icon */}
          <div className="relative w-full max-w-[1000px] flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Main Image Container */}
            <div className="relative w-full max-w-[320px] h-[320px] max-sm:max-w-[400px] sm:max-w-[400px] sm:h-[400px] md:max-w-[600px] md:h-[500px] lg:max-w-[480px] lg:h-[450px] xl:max-w-[580px] xl:h-[500px] rounded-xl sm:rounded-2xl overflow-visible">
              <Image
                src="/images/packages-banner.png"
                alt="Packages"
                fill
                className="object-cover rounded-xl sm:rounded-2xl"
                priority
              />
              
              {/* Circular Spin Icon - Cutout positioned at bottom-left */}
              <div className="absolute bottom-0 left-0 w-16 h-16 max-sm:w-16 max-sm:h-16 sm:w-20 sm:h-20 md:w-32 md:h-26 lg:w-26 lg:h-24 xl:w-24 xl:h-28 animate-spin-slow">
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
   
    </section>
  )
}

export default PackagesBanner
