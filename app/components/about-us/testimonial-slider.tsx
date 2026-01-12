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
                            <div className='xl:h-[350px] bg-[#1A1B1E] rounded-br-xl relative mx-auto xl:max-w-[300px] lg:h-[400px] lg:max-w-[200px] md:h-[320px] md:max-w-[200px]  sm:h-[500px] sm:max-w-[200px] max-sm:h-[350px] max-sm:max-w-[100px]'>
                                {/* Background Image (Vector Card) */}
                                {/* <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                /> */}


                            

                                {/* Content Overlay */}
                                <div>
                                    <div >
                                        {/* Hash Image */}
                                        <div style={{
                                            position: 'relative',
                                            width: '48px',
                                            height: '48px',
                                            minWidth: '48px',
                                            maxWidth: '48px',
                                            minHeight: '48px',
                                            maxHeight: '48px',
                                            marginBottom: '16px',
                                            marginLeft: '16px',
                                            flexShrink: 0
                                        }}>
                                            <Image
                                                src="/images/hash.png"
                                                alt="hash"
                                                fill
                                                style={{
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-white leading-relaxed" >
                                            {testimonial.review}
                                        </p>
                                        <div className='absolute  md:left-[140px] md:bottom-[40px] xl:left-[140px] xl:bottom-[40px] lg:left-[150px] lg:bottom-[40px] sm:left-[180px] sm:bottom-[40px] max-sm:left-[100px] max-sm:bottom-[40px]'>
                                            <h4 className="font-medium text-white" style={{
                                                fontSize: '18px',
                                                marginBottom: '4px',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-white" style={{
                                                fontSize: '14px',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                {testimonial.type}
                                            </p>
                                        </div>

                                      



                                    </div>
                                </div>

                                    <div className='w-[100px] h-[100px]  rounded-tr-xl  border-t border-r border-b border-[#0E0F11] p-6 flex justify-center items-center absolute left-0 bottom-0 bg-[#0E0F11]'>
                                  
                                     <div 
                                        >
                                        <Image
                                            src={testimonial.imageTwo}
                                            alt="Ellipse"
                                            width={900}
                                            height={900}
                                           className='w-full h-full object-cover'
                                        />
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
