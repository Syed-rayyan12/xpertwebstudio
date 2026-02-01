"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import AboutXpert from '../customComponents/aboutxpert'
import { PlayVideo } from '../customComponents/play-video'
import ViewMoreVideo from '../customComponents/view-more-video'
import Image from 'next/image'

const onemore = () => {

    const videoRef = useRef(null);

    // const playVideo = () => {
    //     videoRef.current?.play();
    // }
    return (
        <>
            <div className='w-full xl:px-16  lg:px-12  max-sm:px-4 md:px-10 sm:px-6 mx-auto  left-0 right-0  '>
                <div className='mx-auto mt-20 max-sm:-mt-40 relative'>
                    <div className=''>
                       
                        <div className="relative w-full h-[600px] rounded-xl ">

                            <video
                                src="/images/video/client.mp4"
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
                    <div className='absolute top-0 left-0 w-full sm:w-3/4 w f p-3 sm:p-4 lg:p-6 max-sm:hidden max-xl:hidden'>
                        <Image src="/images/shape.png" alt='shape' width={600} height={600} className='object-contain ' />
                        <h2 className='absolute top-8 sm:top-16 lg:top-28 left-6 sm:left-8 lg:left-10 -translate-x-2 sm:-translate-x-4 lg:-translate-x-6 -translate-y-1/2 text-white text-sm sm:text-2xl lg:text-[37px] font-semibold px-2 sm:px-4 lg:px-8 leading-tight'>
                            Shape created<br /> something better than I ever<br /> could have imagined
                        </h2>
                        <div className='flex items-center '>
                            <Image src="/images/circle.png" alt='circle' width={800} height={600} className='object-cover absolute w-8 sm:w-10 lg:w-14 bottom-4 sm:bottom-8 lg:bottom-10 left-2 sm:left-4 lg:left-8' />
                            <div className='flex flex-col ml-12 sm:ml-16 lg:ml-24 text-white absolute bottom-4 sm:bottom-8 lg:bottom-10 left-0'>
                                <span className='text-xs sm:text-sm lg:text-base'>Hear from Alex</span>
                                <span className='text-xs sm:text-sm lg:text-base'>Co-founder of XpertWebStudio</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='flex items-center justify-center mt-12 sm:mt-20 lg:mt-20'>
                    <div className='flex flex-col lg:flex-row gap-6 lg:gap-12 w-full max-sm:mt-10'>
                        <h2 className='text-lg max-sm:text-3xl text-white lg:text-4xl w-full lg:w-1/2'>
                            A web design agency in Newcastle that truly cares about you and your brand—no matter your business size, industry, or goals.
                        </h2>
                        <div className='w-full lg:w-1/2'>
                            <h2 className='text-sm sm:text-base text-white lg:text-lg'>
                                Born in 2010, XpertWebStudio is an award-winning web design and branding agency based in Manchester, specialising in Web Design, Branding, eCommerce, Digital Marketing, and Organic SEO.<br /><br />
                                Our preferred content management system is Craft CMS, giving you full control over your website pages, content, and SEO with ease. We are proud to be verified Craft CMS and Craft Commerce professional partners. Additionally, we deliver Shopify projects regularly, providing an intuitive eCommerce platform that helps businesses grow.<br />
                                If you’re looking for a professional Manchester web design agency to elevate your brand or build your website, get in touch with XpertWebStudio today.
                            </h2>
                            <Link href="/about-us">
                                <div className='mt-4 sm:mt-6 lg:mt-8'>
                                    <AboutXpert />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default onemore
