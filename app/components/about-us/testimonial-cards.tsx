"use client"
import React from 'react'
import Image from 'next/image'

const TestimonialCards = () => {
    const testimonials = [
        {
            id: 1,
            name: 'JOHN ANDERSON',
            type: 'Customer',
            image: '/images/vector.png',
            imageTwo: '/images/Ellipse 1.png',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 2,
            name: 'SARAH WILLIAMS',
            type: 'Customer',
            image: '/images/vector.png',
            imageTwo: '/images/Ellipse 2.png',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 3,
            name: 'MICHAEL BROWN',
            type: 'Customer',
            image: '/images/vector.png',
            imageTwo: '/images/Ellipse 3.png',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 4,
            name: 'EMILY DAVIS',
            type: 'Customer',
            image: '/images/vector.png',
            imageTwo: '/images/Ellipse 1.png',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 5,
            name: 'DAVID WILSON',
            type: 'Customer',
            image: '/images/vector.png',
            imageTwo: '/images/Ellipse 2.png',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 6,
            name: 'JESSICA MARTIN',
            type: 'Customer',
            image: '/images/vector.png',
            imageTwo: '/images/Ellipse 3.png',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 7,
            name: 'ROBERT JOHNSON',
            type: 'Customer',
            image: '/images/vector.png',
            imageTwo: '/images/Ellipse 1.png',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 8,
            name: 'LINDA GARCIA',
            type: 'Customer',
            image: '/images/vector.png',
            imageTwo: '/images/Ellipse 2.png',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 9,
            name: 'JAMES MARTINEZ',
            type: 'Customer',
            image: '/images/vector.png',
            imageTwo: '/images/Ellipse 3.png',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 10,
            name: 'PATRICIA LOPEZ',
            type: 'Customer',
            image: '/images/vector.png',
            imageTwo: '/images/Ellipse 1.png',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
    ]

    return (
        <section className="py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="relative xl:h-[370px] xl:max-w-[400px] lg:h-[400px] lg:max-w-[100%] md:h-[400px] md:max-w-[100%]  sm:h-[500px] sm:max-w-[100%] max-sm:h-[400px] max-sm:max-w-[100%] rounded-lg">
                            {/* Background Image (Vector Card) */}
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                            />
                            
                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8">
                                {/* Hash Image */}
                                <div className="relative w-12 h-12 mb-4 ml-4">
                                    <Image
                                        src="/images/hash.png"
                                        alt="hash"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                
                                {/* Review Text */}
                                <p className="text-white leading-relaxed px-4">
                                    {testimonial.review}
                                </p>

                                {/* Ellipse Image - Bottom Left */}
                                <div className="absolute bottom-6 left-0">
                                    <div className="relative w-16 h-16 md:left-0 md:-bottom-6 max-sm:bottom-0 max-sm:-left-3  rounded-full overflow-hidden border-2 border-white">
                                        <Image
                                            src={testimonial.imageTwo}
                                            alt="Ellipse"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Reviewer Info */}
                                <div className="absolute md:left-[140px] md:bottom-[40px] xl:left-[140px] xl:bottom-[40px]  sm:left-[180px] sm:bottom-[40px] max-sm:left-[140px] max-sm:bottom-[40px]">
                                    <h4 className="font-bold text-white text-lg mb-1">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-white text-sm">
                                        {testimonial.type}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialCards
