"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import type { Swiper as SwiperType } from 'swiper'

const TeamSlider = () => {
    const swiperRef = useRef<SwiperType | null>(null)

    const teamMembers = [
        { id: 1, name: 'JOHN DOE', role: 'designer', image: '/images/person.png' },
        { id: 2, name: 'JANE SMITH', role: 'designer', image: '/images/person.png' },
        { id: 3, name: 'MIKE JOHNSON', role: 'designer', image: '/images/person.png' },
        { id: 4, name: 'SARAH WILSON', role: 'designer', image: '/images/person.png' },
        { id: 5, name: 'DAVID BROWN', role: 'designer', image: '/images/person.png' },
        { id: 6, name: 'EMMA DAVIS', role: 'designer', image: '/images/person.png' },
    ]

    const handlePrev = () => {
        swiperRef.current?.slidePrev()
    }

    const handleNext = () => {
        swiperRef.current?.slideNext()
    }

    return (
        <section className="py-8 sm:py-12 md:py-14 xl:py-20">
            <div className=" xl:pl-16 lg:pl-16 md:px-16 sm:px-36  max-sm:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                    {/* Left Side - Heading and Description */}
                    <div className="lg:col-span-4 space-y-4 md:space-y-5">
                        <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg">
                            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 text-white rounded-full"></span>
                            <span className="text-white">Seniors</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                            Our Team
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed text-white max-w-lg">
                            Agency quisque sodales miss in the variustion vestibulum drana miss in the turpis tellus elite sorttiton the in the fermen.
                        </p>

                        {/* Navigation Buttons */}

                    </div>

                    {/* Right Side - Slider */}
                    <div className="lg:col-span-8 mt-6 lg:mt-0">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 32,
                                },
                                1280: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 40,
                                },
                            }}
                        >
                            {teamMembers.map((member) => (
                                <SwiperSlide key={member.id}>
                                    <div className="flex items-center gap-4">
                                        {/* Vertical Name on Left Side */}
                                        <div className="flex-shrink-0 w-10 flex justify-center">
                                            <div className="flex flex-col items-center text-white select-none">
                                                <span className="[writing-mode:vertical-rl] rotate-180 text-sm tracking-[0.25em] text-white/70 leading-none whitespace-nowrap">
                                                    DEVELOPER
                                                </span>
                                                <span className="w-2 h-2 min-w-[8px] max-w-[8px] min-h-[8px] max-h-[8px] bg-[#FF5900] rounded-full my-2 flex-shrink-0"></span>
                                                <span className="[writing-mode:vertical-rl] rotate-180 text-xl font-semibold tracking-[0.35em] leading-none whitespace-nowrap">
                                                    T.COOPER
                                                </span>
                                            </div>
                                        </div>

                                        {/* Image - Responsive Fixed Size */}
                                        <div className="relative w-[400px] h-[200px] max-sm:max-w-[400px] max-sm:h-[300px] sm:max-w-[600px] sm:h-[500px] md:max-w-[400px] md:h-[340px] lg:max-w-[300px] lg:h-[300px]  xl:max-w-[700px] xl:h-[350px] rounded-2xl overflow-hidden group">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {/* Orange Arrow Button - Bottom Right */}
                                            <div className="absolute bottom-0 right-0  max-sm:w-12 max-sm:h-12 sm:w-20 sm:h-20 xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#FF5900]">
                                                <svg
                                                    aria-hidden="true"
                                                    viewBox="0 0 384 512"
                                                    className="w-6 h-6"
                                                    fill="white"
                                                >
                                                    <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSlider
