import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react';

const aboutSection = () => {
    return (
        <>
            <div className='flex items-center gap-8 justify-between max-w-[1280px] mx-auto px-4 py-16 gap-8 flex-col md:flex-row'>
                <div className='w-full'>
                    <Image src="/images/about.png" alt="About us image" width={500} height={300} className='w-full' />
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className='flex items-center gap-3 mb-5'>
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                         <span className="text-white font-medium text-lg  tracking-wider">
                            Agency benefits
                        </span>
                    </div>
                    <h2 className='text-3xl max-sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight'>We're more than a digital agency</h2>
                    <p className="text-white text-lg leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using making it look like readable English.
                    </p>
                    <ul className='space-y-4'>
                        <div className='flex items-center gap-4 '>
                            <div className='bg-[#1A1B1E] w-8 h-8 flex justify-center items-center rounded-lg'>
                            <Check className='text-[#FF5900]' />
                            </div>
                            <li className='text-white text-md'>We’re going above and beyond</li>
                        </div>
                        <div className='flex items-center gap-4 '>
                            <div className='bg-[#1A1B1E] w-8 h-8 flex justify-center items-center rounded-lg'>
                            <Check className='text-[#FF5900]' />
                            </div>
                            <li className='text-white text-md'>We’re committed to people first</li>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default aboutSection;
