"use client"
import React from 'react'
import Image from 'next/image'

const Services = () => {
    const services = [
        {
            icon: '/images/Group 1160448096.png',
            title: 'Web Development',
            description: 'Building responsive and scalable web solutions for your business'
        },
        {
            icon: '/images/Group 1160448097.png',
            title: 'UI/UX Design',
            description: 'Creating stunning interfaces that enhance user experience'
        },
        {
            icon: '/images/Group 1160448098.png',
            title: 'Content Strategy',
            description: 'Crafting compelling content that drives engagement and results'
        },
        {
            icon: '/images/Group 1160448100 (1).png',
            title: 'Brand Identity',
            description: 'Developing unique brand identities that resonate with audiences'
        },
        {
            icon: '/images/Group 1160448105 (1).png',
            title: 'SEO & Marketing',
            description: 'Optimizing your digital presence for maximum visibility'
        }
    ]

    return (
        <section className="mx-auto max-w-[1180px] px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24 text-white">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 sm:mb-5 md:mb-6 px-4">
                    Transforming businesses into standout brands with{' '}
                    <span className="text-[#FF5900]">expert digital marketing.</span>
                </h2>
                <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
                    We deliver comprehensive digital solutions that elevate your brand and drive measurable growth through innovative strategies and cutting-edge technology.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-7 md:gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center text-center group ${index !== services.length - 1 ? 'lg:border-r border-[#FF5900]/40' : ''
                            }`}
                    >
                        {/* Icon Container */}
                        <div
                            className="
    mb-6 p-6 rounded-full border-2 border-gray-600
    transition-all duration-500
    group-hover:border-[#FF5900]
    group-hover:shadow-[0_0_0px_#FF5900,0_0_15px_#FF5900,0_0_5px_rgba(255,89,0,0.8),0_0_15px_rgba(255,89,0,0.6)]
  "
                        >

                            <div className="w-16 h-16 relative transition-transform duration-500" style={{ transformStyle: 'preserve-3d' }}>
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl max-sm:text-2xl font-semibold text-white mb-3">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white max-sm:px-12 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
            {/* 
            <style jsx>{`
                .group:hover .transition-transform {
                    transform: rotateY(360deg);
                }
            `}</style> */}
        </section>
    )
}

export default Services
