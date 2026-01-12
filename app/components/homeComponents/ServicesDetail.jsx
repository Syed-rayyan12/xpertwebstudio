"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ViewWorkButton from '../header/ViewWorkButton';
import PlayVideo from '../customComponents/play-video';
import ViewMoreVideo from '../customComponents/view-more-video';
import AboutXpert from '../customComponents/aboutxpert';
import Link from 'next/link';

const ServicesDetail = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [hoveredService, setHoveredService] = useState(null);

    const services = [
        { id: 1, number: '01', title: 'Web Development', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80' },
        { id: 2, number: '02', title: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80' },
        { id: 3, number: '03', title: 'Digital Marketing', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
        { id: 4, number: '04', title: 'Brand Strategy', image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&q=80' },
        { id: 5, number: '05', title: 'SEO Optimization', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % services.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [services.length]);

    const handleServiceHover = (index) => setHoveredService(index);
    const handleServiceLeave = () => setHoveredService(null);
    // ...existing code...
    return (
        <section className='relative xl:mx-6  lg:mx-6  max-sm:mx-4 max-sm:mx-4 md:mx-4 sm:mx-4 bg-[#1A1B1E] rounded-xl'>
            <div className=" w-full xl:px-16  lg:px-12  max-sm:px-4 max-sm:px-4 md:px-10 sm:px-6   mx-auto mt-10 min-h-[1100px] md:min-h-[1180px]  pb-12 text-white">
                <div className="flex flex-col lg:flex-row max-sm:pt-4 sm:pt-4 md:pt-4 max-sm:text-xl items-start lg:items-center justify-between mb-8 lg:mb-16 gap-4 lg:gap-8">
                    <div className="w-full lg:w-[20%]">
                        <span className="text-[#FF5900]  text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                            Our Experties
                        </span>
                    </div>
                    <div className="w-full lg:w-[60%] flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-12 mt-4 ">
                        <h2 className="text-xl sm:text-2xl lg:text-[30px] text-left lg:text-right font-semibold leading-tight mb-2 lg:mb-4">
                            How we take your business to the next level
                        </h2>
                        <p className="text-white/70 text-sm sm:text-base lg:text-[18px] leading-relaxed">
                            We are a digital marketing agency with expertise, and we’re on a mission to help you take the next step in your business.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
                    <div className="relative h-[250px] sm:h-[350px] lg:h-[650px] rounded-xl overflow-hidden bg-[#0c0d12]">
                        <Image
                            key={activeImage}
                            src={services[activeImage].image}
                            alt={services[activeImage].title}
                            fill
                            unoptimized
                            className="object-cover rounded-xl animate-slideInLeft"
                        />
                    </div>
                    <div className="space-y-4 lg:space-y-8">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                onMouseEnter={() => handleServiceHover(index)}
                                onMouseLeave={handleServiceLeave}
                                className={`flex items-center justify-between px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 rounded-4xl border-1 transition-all duration-300 cursor-pointer ${hoveredService === index ? 'border-[#FF5900] bg-[#FF5900] text-white' : 'border-white'}`}
                            >
                                <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
                                    <div className={`relative rounded-lg overflow-hidden transition-all duration-500 ease-out ${hoveredService === index ? 'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 opacity-100' : 'w-0 h-12 sm:h-14 lg:h-16 opacity-0'}`}>
                                        <div className={`absolute inset-0 w-12 sm:w-14 lg:w-16 transition-transform duration-500 ease-out ${hoveredService === index ? 'translate-x-0' : '-translate-x-full'}`}>
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                unoptimized
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-base sm:text-lg lg:text-2xl font-medium text-white transition-all duration-500">
                                        {service.title}
                                    </h3>
                                </div>
                                <div className={`transition-transform duration-300 text-white ${hoveredService === index ? 'translate-x-1' : ''}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full xl:px-16  lg:px-12  max-sm:px-4 md:px-10 sm:px-6 mx-auto absolute left-0 right-0  max-sm:top-230 md:top-260 lg:top-230  '>


                <div className='mx-auto mt-20 relative'>
                    <Image src="/images/video-banner.png" alt='video banner' width={600} height={600} className='object-cover w-full max-sm:h-[150px] relative' />
                    <div className='absolute top-0 left-0 w-full sm:w-3/4 lg:w-1/2 p-3 sm:p-4 lg:p-6 max-sm:hidden max-xl:hidden'>
                        <Image src="/images/shape.png" alt='shape' width={600} height={600} className='object-contain ' />
                        <h2 className='absolute top-8 sm:top-16 lg:top-25 left-4 sm:left-8 lg:left-10 -translate-x-2 sm:-translate-x-4 lg:-translate-x-6 -translate-y-1/2 text-white text-sm sm:text-2xl lg:text-4xl font-semibold px-2 sm:px-4 lg:px-8 leading-tight'>
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
                    <div className='absolute  max-sm:right-0 max-sm:-bottom-16   xl:-bottom-1  xl:-right-10   lg:right-0 lg:-bottom-2 md:right-0 md:-bottom-2 flex  gap-2 max-sm:gap-3 '>
                        <div className='max-sm:hidden max-xl:hidden'>
                            <PlayVideo label="Play Video" />
                        </div>
                        <Link href="/video-testimonial">
                            <div>

                                <ViewMoreVideo />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-12 sm:mt-20 lg:mt-20'>
                    <div className='flex flex-col lg:flex-row gap-6 lg:gap-12 w-full max-sm:mt-10'>
                        <h2 className='text-lg sm:text-2xl text-white lg:text-4xl w-full lg:w-1/2'>
                            A web design agency in Newcastle that truly cares about you and your brand—no matter your business size, industry, or goals.
                        </h2>
                        <div className='w-full lg:w-1/2'>
                            <h2 className='text-sm sm:text-base text-white lg:text-lg'>
                                Born in 2010, XpertWebStudio is an award-winning web design and branding agency based in Manchester, specialising in Web Design, Branding, eCommerce, Digital Marketing, and Organic SEO.<br /><br />
                                Our preferred content management system is Craft CMS, giving you full control over your website pages, content, and SEO with ease. We are proud to be verified Craft CMS and Craft Commerce professional partners. Additionally, we deliver Shopify projects regularly, providing an intuitive eCommerce platform that helps businesses grow.<br />
                                If you’re looking for a professional Manchester web design agency to elevate your brand or build your website, get in touch with XpertWebStudio today.
                            </h2>
                            <div className='mt-4 sm:mt-6 lg:mt-8'>
                                <AboutXpert />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <style jsx>{`
                        @keyframes slideInLeft {
                            from {
                                transform: translateX(-100%);
                                opacity: 0;
                            }
                            to {
                                transform: translateX(0);
                                opacity: 1;
                            }
                        }
                        @keyframes slideInLeftSmall {
                            0% {
                                transform: translateX(-120%);
                                opacity: 0;
                            }
                            100% {
                                transform: translateX(0);
                                opacity: 1;
                            }
                        }
                        .animate-slideInLeft {
                            animation: slideInLeft 0.8s ease-in-out forwards;
                        }
                        .animate-slideInLeftSmall {
                            animation: slideInLeftSmall 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                        }
                        `}</style>
        </section>
    );
}

export default ServicesDetail;
