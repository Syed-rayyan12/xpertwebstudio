import React from 'react'

const WhoWeAreLogo = () => {
    return (
        <>
            <div className='flex items-center gap-4 sm:gap-6 md:gap-8 justify-between max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 flex-col md:flex-row'>
                <div className="flex flex-col gap-3 sm:gap-4 w-full">
                    <div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
                        <div className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full bg-orange-500"></div>
                        <span className="text-white font-medium text-base sm:text-lg tracking-wider">
                            Who We Are
                        </span>
                    </div>
                    <h2 className='text-white text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-snug md:leading-14'>Logo Design Solutions in Manchester</h2>
                    <ul className='flex flex-col gap-4 sm:gap-5 md:gap-6' >
                        <li className='text-white text-sm sm:text-base md:text-md'>From concept development and brand research to creative design and final logo delivery, we cover every aspect of modern logo design. Whether you're launching a new brand, refreshing an existing identity, or scaling your visual presence, we tailor our solutions to create memorable and impactful logos.</li>
                        <li className='text-white text-sm sm:text-base md:text-md'>Our experienced in-house design team in Manchester works closely with you throughout the process, ensuring your logo reflects your brand, resonates with your audience, and delivers a cohesive identity across all mediums.</li>

                    </ul>
                </div>

            </div>
        </>
    )
}

export default WhoWeAreLogo;
