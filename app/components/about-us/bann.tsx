import React from 'react'
import PlayVideo from '../customComponents/play-video'
import ViewMoreVideo from '../customComponents/view-more-video'
import Image from 'next/image'
import Link from 'next/link'
import { AboutXpert } from '../customComponents/aboutxpert'
const banner = () => {
  return (
    <>
      <div className='w-full xl:px-16  lg:px-12  max-sm:px-4 md:px-10 sm:px-6 mx-auto  left-0 right-0  '>
        <div className='mx-auto mt-20  relative'>
          <div className=''>

            <div className="relative w-full h-[600px] max-sm:h-[300px] rounded-xl ">

              <video
                src="/images/video/about.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover rounded-xl"
              />

              <div className="absolute right-0 bottom-0 w-[35%] h-20 bg-[#0E0F11] rounded-tl-2xl flex items-center justify-center text-white font-semibold">

                <span className="absolute -left-6 bottom-0 inverted-corner"></span>

                <span className="absolute right-0 -top-6 inverted-corner"></span>

                <div className='flex justify-end  gap-4'>
                  <div className='max-sm:hidden max-xl:hidden'>
                    <PlayVideo label="Play Video" />
                  </div>
                  <Link href="/video-testimonial" className='max-sm:hidden'>
                    <div>
                      <ViewMoreVideo />
                    </div>
                  </Link>
                </div>
              </div>
            </div>


          </div>
          <div className='absolute top-0 left-6 w-1/2 p-6 max-sm:hidden sm:hidden xl:block'>
            <Image src="/images/shape-2.png" alt='shape' width={600} height={600} className='object-contain' />
            <div className="absolute top-12 left-10  text-white text-sm font-medium w-3 h-3 rounded-full bg-orange-500"></div>
            <h2 className='absolute top-14 left-16 -translate-x-6 -translate-y-1/2 text-white text-2xl font-medium px-8 leading-tight'>
              Behind the scenes
            </h2>
            <h2 className='absolute top-35 left-16 -translate-x-6 -translate-y-1/2 text-white text-5xl font-semibold px-8 leading-tight'>
              our team workation watch now
            </h2>
          </div>

        </div>


      </div>

    </>
  )
}

export default banner
