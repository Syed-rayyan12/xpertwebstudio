import { Check } from 'lucide-react';
import React from 'react'
import Image from 'next/image';
const AppSection = () => {
    return (
        <>
            <div className='flex items-center gap-4 sm:gap-6 md:gap-8 justify-between max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 flex-col md:flex-row'>
                <div className='w-full relative'>
                    <Image src="/images/app-image.png" alt="About us image" width={600} height={300} className='w-full h-full object-cover rounded-lg' />
                    <div className='absolute right-2 top-28 sm:top-36 md:top-40'>
                        <span className="[writing-mode:vertical-rl] rotate-180 uppercase text-xs sm:text-sm tracking-[0.20em] sm:tracking-[0.25em] uppercase text-[#FF5900] leading-none">
                      Mobile App
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-3 sm:gap-4 w-full">
                    <div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
                        <div className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full bg-orange-500"></div>
                        <span className="text-white font-medium text-base sm:text-lg tracking-wider">
                           Mobile App Development
                        </span>
                    </div>
                    <h2 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug md:leading-16'>Mobile applications built for global businesses.</h2>
                    <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <ul className='space-y-3 sm:space-y-4'>
                        <div className='flex items-center gap-3 sm:gap-4'>
                            <div className='bg-[#1A1B1E] w-7 sm:w-8 h-7 sm:h-8 flex justify-center items-center rounded-lg flex-shrink-0'>
                                <Check className='text-[#FF5900] w-4 sm:w-5 h-4 sm:h-5' />
                            </div>
                            <li className='text-white text-sm sm:text-base md:text-md'>Cross-Platform App Development</li>
                        </div>
                        <div className='flex items-center gap-3 sm:gap-4'>
                            <div className='bg-[#1A1B1E] w-7 sm:w-8 h-7 sm:h-8 flex justify-center items-center rounded-lg flex-shrink-0'>
                                <Check className='text-[#FF5900] w-4 sm:w-5 h-4 sm:h-5' />
                            </div>
                            <li className='text-white text-sm sm:text-base md:text-md'>API & Backend Integration</li>
                        </div>
                        <div className='flex items-center gap-3 sm:gap-4'>
                            <div className='bg-[#1A1B1E] w-7 sm:w-8 h-7 sm:h-8 flex justify-center items-center rounded-lg flex-shrink-0'>
                                <Check className='text-[#FF5900] w-4 sm:w-5 h-4 sm:h-5' />
                            </div>
                            <li className='text-white text-sm sm:text-base md:text-md'>App Performance Optimization</li>
                        </div>
                        <div className='flex items-center gap-3 sm:gap-4'>
                            <div className='bg-[#1A1B1E] w-7 sm:w-8 h-7 sm:h-8 flex justify-center items-center rounded-lg flex-shrink-0'>
                                <Check className='text-[#FF5900] w-4 sm:w-5 h-4 sm:h-5' />
                            </div>
                            <li className='text-white text-sm sm:text-base md:text-md'>Security & Data Protection</li>
                        </div>
                        <div className='flex items-center gap-3 sm:gap-4'>
                            <div className='bg-[#1A1B1E] w-7 sm:w-8 h-7 sm:h-8 flex justify-center items-center rounded-lg flex-shrink-0'>
                                <Check className='text-[#FF5900] w-4 sm:w-5 h-4 sm:h-5' />
                            </div>
                            <li className='text-white text-sm sm:text-base md:text-md'>Scalable App Architecture</li>
                        </div>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default AppSection;
