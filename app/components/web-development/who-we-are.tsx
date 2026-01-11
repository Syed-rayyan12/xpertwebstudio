import React from 'react'

const whoWeAre = () => {
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
                    <h2 className='text-white text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-snug md:leading-14'>A Web Design Studio in Manchester</h2>
                    <ul className='flex flex-col gap-4 sm:gap-5 md:gap-6' >
                        <li className='text-white text-sm sm:text-base md:text-md'>From UI/UX design and wireframing to research and full-scale development, we cover every aspect of modern web design. Whether you're a start-up building your brand from scratch, a growing business needing a website refresh, or an established company ready to scale, we tailor our solutions to your goals.</li>
                        <li className='text-white text-sm sm:text-base md:text-md'>Our creative in-house web design team in Manchester works closely with you throughout the process, ensuring your website truly reflects your brand, connects with your audience, and delivers a seamless experience across all modern devices.</li>

                    </ul>
                </div>

            </div>
        </>
    )
}

export default whoWeAre;
