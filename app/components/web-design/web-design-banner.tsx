import React from 'react'
import Image from 'next/image'
import StartYourProject from '../customComponents/start-your-project';

const WebDesignBanner = () => {
    return (
        <>
            <div className='mx-auto max-w-[1280px] pt-30 sm:pt-24 md:pt-32 lg:pt-40 px-4 sm:px-6 md:px-8'>
                <div className='relative'>
                    <div className='relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-bl-xl sm:rounded-bl-2xl overflow-hidden'>
                        <img src="/images/dek.png" alt="Service Banner One" className='w-full h-full object-cover' />
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
                            <div className="rounded-full transform-gpu overflow-hidden relative w-32 h-32 max-sm:w-20 max-sm:h-20 animate-spin-slow">
                                <Image
                                    src="/images/group.png"
                                    alt="Spinning Icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='absolute flex flex-col right-2 sm:right-3 md:right-4 bottom-2 sm:bottom-3 md:bottom-4 rounded-lg sm:rounded-xl bg-[#1A1B1E] w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] p-3 sm:p-4 md:p-5 lg:p-6'>
                        <div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
                            <div className='w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-[#FF5900] rounded-full'></div>
                            <h2 className='text-sm sm:text-base md:text-xl lg:text-2xl text-white font-normal mt-1'>ECommerce Website Service</h2>
                        </div>
                        <h2 className='text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-3 sm:mt-4 md:mt-5 lg:mt-6'>Professional ECommerce Web Solutions <span className='text-[#FF5900]'>Service</span></h2>
                        <p className='text-white text-xs sm:text-sm md:text-base mt-2 sm:mt-3 md:mt-4 leading-5 sm:leading-6 md:leading-7 lg:leading-8'>At XpertWebStudio, we build powerful eCommerce solutions that combineintuitive design, high performance, and seamless shopping experiences.</p>
                        <div className='mt-3 sm:mt-4 md:mt-5 lg:mt-6'>
                            <StartYourProject />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WebDesignBanner;
