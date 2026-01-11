"use client"
import React from 'react'
import Image from 'next/image'

const LogoMarquee = () => {
    const logos = [
        { id: 1, name: 'logo-1', src: '/images/logo-1.png' },
        { id: 2, name: 'logo-2', src: '/images/logo-2.png' },
        { id: 3, name: 'logo-3', src: '/images/logo-3.png' },
        { id: 4, name: 'logo-4', src: '/images/logo-4.png' },
        { id: 5, name: 'logo-5', src: '/images/logo-5.png' },
      
     
    ]

    return (
        <section className="relative overflow-hidden py-12">
            <div className="relative flex overflow-hidden whitespace-nowrap">
                <div className="flex animate-marquee gap-24 items-center">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={`${logo.id}-${index}`}
                            className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 px-8"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={150}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    )
}

export default LogoMarquee
