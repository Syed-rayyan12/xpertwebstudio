import React from 'react'
import PlayVideo from '../customComponents/play-video'
import ViewMoreVideo from '../customComponents/view-more-video'
import Image from 'next/image'
const banner = () => {
  return (
    <>
      <div className=' mt-16 relative xl:px-16  lg:px-12  max-sm:px-4 md:px-10 sm:px-6  mx-auto mt-10 mx-auto'>
        <Image src="/images/bann.png" alt='video banner' width={800} height={800} className='object-cover w-full relative h-[500px] max-sm:h-[300px]' />
        <div className='absolute top-0 left-18 w-1/2 p-6 max-sm:hidden sm:hidden xl:block'>
          <Image src="/images/shape-2.png" alt='shape' width={600} height={600} className='object-contain' />
            <div className="absolute top-12 left-10  text-white text-sm font-medium w-3 h-3 rounded-full bg-orange-500"></div>
          <h2 className='absolute top-14 left-16 -translate-x-6 -translate-y-1/2 text-white text-2xl font-medium px-8 leading-tight'>
            Behind the scenes
          </h2>
          <h2 className='absolute top-35 left-16 -translate-x-6 -translate-y-1/2 text-white text-5xl font-semibold px-8 leading-tight'>
            our team workation watch now
          </h2>
        </div>
        <div className='absolute  max-sm:right-4 max-sm:-bottom-16 xl:right-6 xl:-bottom-2 lg:right-12 lg:-bottom-6 md:right-8 md:-bottom-8 flex  gap-2 max-sm:gap-3 '>
          <div className='max-sm:hidden sm:hidden xl:block'>
          <PlayVideo label="Play Video" />
          </div>
          <ViewMoreVideo />
        </div>
      </div>
    </>
  )
}

export default banner
