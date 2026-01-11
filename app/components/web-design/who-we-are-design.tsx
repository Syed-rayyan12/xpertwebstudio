import React from 'react'

const WhoWeAreDesign = () => {
    return (
        <>
            <div className='flex items-center gap-4 sm:gap-6 md:gap-8 justify-between max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 flex-col md:flex-row'>
                <div className="flex flex-col gap-4 w-full">
                    <div className='flex items-center gap-4'>
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span className="text-white font-medium text-lg  tracking-wider">
                            Who We Are
                        </span>
                    </div>
                    <h2 className='text-white text-4xl leading-14'>E-Commerce Web Solutions in Manchester</h2>
                    <ul className='flex flex-col gap-6' >
                        <li className='text-white text-md'>From user-focused UX/UI design and wireframing to secure development and scalable e-commerce platforms, we cover every aspect of modern online selling. Whether you’re launching your first online store, upgrading an existing e-commerce website, or scaling a successful brand, we tailor our solutions to drive sales and growth.</li>
                        <li className='text-white text-md'>Our experienced in-house e-commerce team in Manchester works closely with you throughout the process, ensuring your online store reflects your brand, engages customers, and delivers a seamless shopping experience across all devices.</li>

                    </ul>
                </div>

            </div>
        </>
    )
}

export default WhoWeAreDesign;
