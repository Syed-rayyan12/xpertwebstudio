import React from 'react'
import Image from 'next/image'
const videoBanner = () => {
  return (
    <>
         <section className="pt-34 px-4 md:px-8 lg:px-16">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-6">
                    {/* About Us Tag with Orange Dot */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                     Client Testimonials 
                      </span>
                    </div>
        
                    {/* Heading */}
                    <h1 className="text-5xl font-bold text-white leading-tight">
                      What our happy clients say about us
                    </h1>
        
                    {/* Paragraph */}
                    <p className="text-white text-lg leading-relaxed">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using making it look like readable English.
                    </p>
        
                   
                  </div>
        
                  {/* Right Image with Circular Spin Icon */}
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                      <Image
                        src="/images/reviews-banner.png"
                        alt="About Us"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
        
                    {/* Circular Spin Icon Cutout */}
                    <div className="absolute -bottom-3 left-0 w-32 h-32 animate-spin-slow">
                      <Image
                        src="/images/group.png"
                        alt="Spinning Icon"
                        width={128}
                        height={128}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </>
  )
}

export default videoBanner;
