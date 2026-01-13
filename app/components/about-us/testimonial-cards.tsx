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
                        <div key={testimonial.id} className="group w-full relative overflow-hidden rounded-bl-xl mb-3 pl-px lg:rounded-bl-2xl bg-[#1A1B1E] min-h-[320px] flex flex-col justify-between p-6">
                            {/* MINI IMAGE CONTAINER WITH SVG CURVES */}
                            <div className="absolute bottom-0 bg-[#0e0f11] left-0 z-20 rounded-tr-2xl flex transition-transform duration-400 transform pt-2 pr-2 lg:pr-3 lg:pt-3 lg:rounded-tr-3xl xl:translate-x-0 xl:translate-y-0 dark:bg-grayDark-600">
                                {/* TOP LEFT CURVE */}
                                <svg
                                    className="w-10 h-10 lg:w-12 lg:h-12 text-[#0e0f11] fill-current absolute top-px left-0 transform -translate-y-full rotate-180 dark:text-grayDark-600"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 100 100"
                                >
                                    <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                                </svg>
                                {/* BOTTOM RIGHT CURVE */}
                                <svg
                                    className="w-10 h-10 lg:w-12 lg:h-12 text-[#0e0f11] fill-current absolute -bottom-px right-px transform translate-x-full rotate-180 dark:text-grayDark-600"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 100 100"
                                >
                                    <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                                </svg>
                                {/* MINI IMAGE */}
                                <div className="rounded-full transform-gpu overflow-hidden relative w-12 h-12 bg-gray-50 dark:bg-grayDark-400 lg:w-16 lg:h-16">
                                    <div
                                        className="relative overflow-hidden w-full"
                                        style={{ paddingTop: "100%" }}
                                    >
                                        <img
                                            src={testimonial.imageTwo}
                                            alt=""
                                            className="w-full h-full object-cover absolute top-0 left-0"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* MAIN CONTENT */}
                            <div className='w-full relative z-10 h-[350px] rounded-2xl overflow-hidden dark:bg-grayDark-400 lg:rounded-3xl'>
                                <div className='relative overflow-hidden bg-[#1A1B1E] w-full  p-6 h-full'>


                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-col items-start gap-8 mt-2">
                                            <img src="/images/hash.png" alt="hash" className="w-12 h-12 object-contain" />
                                            <p className="text-white text-base leading-relaxed line-clamp-4 m-0">
                                                {testimonial.review}
                                            </p>
                                        </div>
                                        <span className="text-white font-bold xl:px-16 xl:pt-24 max-sm:pt-14 max-sm:px-12 uppercase tracking-wide text-lg">{testimonial.name}</span>
                                    </div>
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
