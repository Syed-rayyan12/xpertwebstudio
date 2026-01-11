import React from 'react'

const aboutSection = () => {
    return (
        <>
            <div className='flex items-center gap-6 sm:gap-7 md:gap-8 justify-between max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14 lg:py-16 flex-col md:flex-row'>
                <div className="flex flex-col gap-3 sm:gap-4 w-full">
                    <div className='flex items-center gap-3 sm:gap-4'>
                        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-orange-500"></div>
                        <span className="text-white font-medium text-base sm:text-lg tracking-wider">
                            Who We Are
                        </span>
                    </div>
                    <h2 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-snug sm:leading-normal md:leading-14'>
                        Expert web designers and developers at XpertWebStudio delivering bespoke, professional, and trusted digital solutions.
                    </h2>
                </div>
                <div className='w-full'>
                    <ul className='flex flex-col gap-4 sm:gap-5 md:gap-6'>
                        <li className='text-white text-sm sm:text-base md:text-md leading-relaxed'>
                            We are an award-winning branding and web design agency based in Manchester, UK, Specialising in web design, web development, ECommerce, and Organic SEO.
                        </li>
                        <li className='text-white text-sm sm:text-base md:text-md leading-relaxed'>
                            With over a decade of experience, XpertWebStudio is a dynamic and creative team combining fresh ideas, deep industry knowledge, and exceptionally high standards to deliver outstanding digital solutions.
                        </li>
                        <li className='text-white text-sm sm:text-base md:text-md leading-relaxed'>
                            We work with ambitious start-ups as well as established global Organizations, allowing us to tailor our services to meet your unique business goals. Our preferred content management system is Craft CMS, enabling flexible, secure, and Scalable website solutions.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default aboutSection;
