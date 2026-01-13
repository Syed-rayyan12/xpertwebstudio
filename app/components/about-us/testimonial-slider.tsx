"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const TestimonialSlider = () => {
    const testimonials = [
        {
            id: 1,
            name: 'SARAH WILLIAMS',
            type: 'Customer',
            image: '/images/vector.png',
            imageTwo: '/images/Ellipse 1.png',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 2,
            name: 'MICHAEL BROWN',
            type: 'Customer',
            image: '/images/vector.png',
            imageTwo: '/images/Ellipse 2.png',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 3,
            name: 'OLIVIA SMITH',
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
            imageTwo: '/images/Ellipse 3.png',
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
    ]

    return (
        <section className="py-16   max-sm:pt-30">
            <div className="sm:px-6 md:px-8 lg:px-12 xl:px-16 max-sm:px-6 mx-auto mx-auto">
                {/* Header Section - Centered */}
                <div className="text-center mb-16">
                    {/* Testimonial Tag with Orange Dot */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <span className="text-white text-lg font-medium">Testimonial</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold text-gray-900">
                        People love us, and we love them
                    </h2>
                </div>

                {/* Testimonial Slider */}
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={32}
                    slidesPerView={3}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet !bg-gray-300',
                        bulletActiveClass: 'swiper-pagination-bullet-active !bg-orange-500',
                    }}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 32,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 32,
                        },
                    }}
                    className="pb-20 pt-20"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="group">
                                {/* CARD WITH SHAPE EFFECT */}
                                <div className="w-full relative overflow-hidden rounded-bl-xl mb-3 pl-px lg:rounded-bl-2xl">
                                    {/* MINI IMAGE CONTAINER WITH SVG CURVES */}
                                    <div className="absolute bottom-0 bg-[#0e0f11] left-0 z-20  rounded-tr-2xl flex transition-transform duration-400 transform pt-2 pr-2 lg:pr-3 lg:pt-3 lg:rounded-tr-3xl xl:translate-x-0 xl:translate-y-0 dark:bg-grayDark-600">
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
                                        <div className="rounded-full transform-gpu overflow-hidden relative w-12 h-12 bg-gray-50 dark:bg-grayDark-400 lg:w-16 lg:h-16 ">
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

                                    {/* MAIN IMAGE */}
                                    <div className="w-full relative z-10 h-[350px] rounded-2xl overflow-hidden dark:bg-grayDark-400 lg:rounded-3xl">
                                      
                                            <div
                                                className="relative overflow-hidden bg-[#1A1B1E] w-full  p-6 h-full "
                                               
                                            >
                                                {/* Top: Two orange hash icons and paragraph */}
                                                <div className="flex flex-col  gap-30 mb-4">
                      
                                                    <div className="flex flex-col items-start gap-8 mt-2">
                                                        <img src="/images/hash.png" alt="hash" className="w-12 h-12 object-contain" />
                                                        <p className="text-white text-base leading-relaxed line-clamp-4 m-0">
                                                            {testimonial.review}
                                                        </p>
                                                        <span className="text-white font-bold px-20 pt-10 max-sm:pt-6 max-sm:px-14 uppercase tracking-wide text-lg">{testimonial.name}</span>
                                                    </div>
                                                  
                                                   
                                                </div>
                                                {/* Bottom: Name in uppercase at the end */}
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .swiper-pagination {
                    position: relative !important;
                    bottom: auto !important;
                    margin-top: 40px !important;
                }
                .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                   
                    opacity: 1;
                }
            `}</style>
        </section>
    )
}

export default TestimonialSlider
