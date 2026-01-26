"use client"
import React from 'react'

const AboutMarquee = () => {
    const topLineItems = [
        'Creative Design',
        'Web Development',
        'Branding',
        'Digital Marketing',
        'UI/UX Design',
        'SEO Optimization',
    ]

    const bottomLineItems = [
        'Innovative Solutions',
        'Brand Strategy',
        'Content Creation',
        'Social Media',
        'Graphic Design',
        'E-Commerce',
    ]

    return (
        <section className="relative overflow-hidden pb-6 sm:pb-10 lg:pb-16 max-sm:pt-[0px] sm:pt-10 lg:pt-16 max-sm:mt-[0px] md:mt-[60px] lg:mt-[60px]">
            {/* Top Line - Scrolls Left */
            <div className="relative flex overflow-hidden whitespace-nowrap border-b-2 border-white/20 py-3 sm:py-4 lg:py-6">
                <div className="flex animate-marquee-left gap-4 sm:gap-8 lg:gap-12">
                    {[...topLineItems, ...topLineItems].map((item, index) => (
                        <span
                            key={index}
                            className="text-2xl sm:text-4xl lg:text-7xl font-bold text-white tracking-wider"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <div className="flex animate-marquee-left gap-4 sm:gap-8 lg:gap-12" aria-hidden="true">
                    {[...topLineItems, ...topLineItems].map((item, index) => (
                        <span
                            key={index}
                            className="text-2xl sm:text-4xl lg:text-7xl font-bold text-white tracking-wider"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Line - Scrolls Right */}
            <div className="relative flex overflow-hidden whitespace-nowrap py-3 sm:py-4 lg:py-6">
                <div className="flex animate-marquee-right gap-4 sm:gap-8 lg:gap-12">
                    {[...bottomLineItems, ...bottomLineItems].map((item, index) => (
                        <span
                            key={index}
                            className="text-2xl sm:text-4xl lg:text-7xl font-bold text-white tracking-wider"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <div className="flex animate-marquee-right gap-4 sm:gap-8 lg:gap-12" aria-hidden="true">
                    {[...bottomLineItems, ...bottomLineItems].map((item, index) => (
                        <span
                            key={index}
                            className="text-2xl sm:text-4xl lg:text-7xl font-bold text-white tracking-wider"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes marquee-right {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-marquee-left {
                    animation: marquee-left 100s linear infinite;
                }

                .animate-marquee-right {
                    animation: marquee-right 100s linear infinite;
                }
            `}</style>
        </section>
    )
}

export default AboutMarquee
