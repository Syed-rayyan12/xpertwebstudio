import React from 'react'
import StartYourProject from '../customComponents/start-your-project';

const AppBanner = () => {
    return (
        <>
            <div className='mx-auto max-w-[1280px] pt-20 sm:pt-24 md:pt-32 lg:pt-40 px-4 sm:px-6 md:px-8'>
                <div className='relative'>
                    <img src="/images/app.png" alt="Service Banner One" className='w-full h-full max-sm:h-[400px] max-sm:object-cover rounded-lg sm:rounded-xl right-2 sm:right-4 md:right-6 bottom-2 sm:bottom-4 md:bottom-6' />
                    <div className='absolute flex flex-col right-2 sm:right-3 md:right-4 bottom-2 sm:bottom-3 md:bottom-4 rounded-lg sm:rounded-xl bg-[#1A1B1E] w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] p-3 sm:p-4 md:p-5 lg:p-6'>
                        <div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
                            <div className='w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-[#FF5900] rounded-full'></div>
                            <h2 className='text-sm sm:text-base md:text-xl lg:text-2xl text-white font-normal mt-1'>Mobile App Development Service</h2>
                        </div>
                        <h2 className='text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-3 sm:mt-4 md:mt-5 lg:mt-6'>
                            Professional Mobile App Development <span className='text-[#FF5900]'>Service</span>
                        </h2>
                        <p className='text-white text-xs sm:text-sm md:text-base mt-2 sm:mt-3 md:mt-4 leading-5 sm:leading-6 md:leading-7 lg:leading-8'>
                            At XpertWebStudio, we create custom websites that combine clean design, strong performance, and seamless user experience.
                        </p>
                        <div className='mt-3 sm:mt-4 md:mt-5 lg:mt-6'>
                            <StartYourProject />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AppBanner;
