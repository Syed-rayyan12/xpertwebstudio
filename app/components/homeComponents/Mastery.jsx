'use client'
import React, { useState, useEffect, useRef } from 'react'

const marqueeItems = [
    'Branding',
    'Website Development',
    'Mobile App Development',
    'Digital Marketing',
    'Website Design'
]

const tagList = ['Branding', 'Design']

function Mastery() {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const statsRef = useRef(null)
    const targetCount = 220

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        if (statsRef.current) {
            observer.observe(statsRef.current)
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current)
            }
        }
    }, [isVisible])

    useEffect(() => {
        if (isVisible && count < targetCount) {
            const duration = 2000 // 2 seconds
            const steps = 60
            const increment = targetCount / steps
            const stepDuration = duration / steps

            const timer = setInterval(() => {
                setCount((prevCount) => {
                    const newCount = prevCount + increment
                    if (newCount >= targetCount) {
                        clearInterval(timer)
                        return targetCount
                    }
                    return newCount
                })
            }, stepDuration)

            return () => clearInterval(timer)
        }
    }, [isVisible, count])

    const barHeight1 = isVisible ? (count / targetCount) * 60 : 0
    const barHeight2 = isVisible ? (count / targetCount) * 100 : 0

    return (
        <div className="text-white my-8 sm:my-10 md:my-12 overflow-hidden">
            {/* Scrolling Banner */}
            <div className="overflow-hidden border-b border-[#333] bg-[#1a1a1a] py-3 sm:py-4">
                <div className="flex whitespace-nowrap [animation:scroll_30s_linear_infinite]">
                    {marqueeItems.concat(marqueeItems).map((item, index) => (
                        <span
                            key={`${item}-${index}`}
                            className="inline-flex items-center px-[30px] text-[14px] font-medium uppercase tracking-[1px] after:ml-[30px] after:text-[20px] after:text-[#ff6600] after:content-['•']"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Content Section */}
            <div className="xl:px-16  lg:px-12  max-sm:px-6 md:px-10 sm:px-6  mx-auto mt-20">
                <div className="flex max-sm:flex-col max-sm:justify-center gap-12">
                    {/* Left Side - Stats Card */}
                    <div ref={statsRef} className="relative w-[90%] max-sm:w-full max-sm:h-[320px] pt-10  rounded-2xl sm:rounded-3xl border border-[#f8f8f8] bg-[linear-gradient(135deg,#1a1a1a_0%,#0f0f0f_100%)] px-6 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0_0px_60px_rgba(255,102,0,0.26)]">
                        <div className='w-full'>
                            <div className="text-5xl sm:text-6xl max-sm:text-center md:text-[80px] font-bold tracking-[2px] text-[#ff6600]">
                                {Math.floor(count)}+
                            </div>
                            <div className="w-full sm:w-4/5 md:w-3/4 ">
                                <p className="text-sm sm:text-[15px] text-center max-sm:mt-2 leading-[1.6] sm:leading-[1.8] text-[#999]">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>
                        </div>
                        {/* Animated Chart Bars */}
                      


                            <div className="absolute bottom-[50px] max-sm:right-30 max-sm:bottom-6 right-[40px] flex h-[120px] w-[100px] items-end gap-[15px]">
                                <div
                                    className="flex-1 rounded-[8px] bg-[linear-gradient(180deg,#666_0%,#333_100%)] transition-all duration-1000 ease-out"
                                    style={{ height: `${barHeight1}%` }}
                                ></div>
                                <div
                                    className="flex-1 rounded-[8px] bg-[linear-gradient(180deg,#ff6600_0%,#cc5200_100%)] transition-all duration-1000 ease-out"
                                    style={{ height: `${barHeight2}%` }}
                                ></div>
                            </div>
                       
                    </div>

                    {/* Right Side - Content */}
                    <div className='w-full'>
                        <div className="flex flex-col gap-12 max-sm:justify-center lg:flex-row max-lg:flex-col">
                            <div>
                                <h1 className="text-4xl max-sm:pt-4 font-normal max-sm:text-center leading-[1.2] ">
                                    Mastery of Creative Innovation
                                </h1>
                                <div className='max-sm:text-center'>

                                <a
                                    href="#"
                                    className="mt-5 inline-block max-sm:text-center rounded-[30px] bg-[#ff6600] px-[40px] py-[15px] text-[14px] font-semibold tracking-[1px] text-white transition-all duration-300 hover:translate-x-[5px] hover:bg-[#ff8833] hover:text-black hover:shadow-[0_10px_30px_rgba(255,102,0,0.27)]"
                                    >
                                    Read More
                                </a>
                                    </div>
                            </div>
                            <div className="max-w-xl">
                                <div className="mb-[30px] max-sm:justify-center flex flex-wrap gap-[15px]">
                                    {tagList.map((tag) => (
                                        <div
                                            key={tag}
                                            className="rounded-[30px] border border-[#444] px-[30px] py-[12px] text-[13px] uppercase tracking-[1px] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#ff6600] hover:bg-[#ff6600]"
                                        >
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[15px] leading-[1.8] text-[#999] max-sm:text-center">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less here, content "here", making it look like readable English.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Discount Form Section */}
            <div className="w-full xl:px-16  lg:px-12  max-sm:px-6 mt-20 mb-20 md:px-10 sm:px-6  mx-auto ">
                <h2 className="text-[50px] font-bold text-[#ff6600]">Get 60% OFF</h2>
                <div className="mt-8 grid gap-5 md:[grid-template-columns:repeat(3,_minmax(0,_1fr))_0.8fr]">
                    <input
                        type="text"
                        placeholder="Name"
                        className="rounded-[15px] border border-white bg-[#1a1a1a] px-[25px] py-[20px] text-[15px] text-white placeholder:text-[#666] transition-all duration-300 focus:border-[#ff6600] focus:shadow-[0_0_20px_rgba(255,102,0,0.3)] focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="rounded-[15px] border border-white bg-[#1a1a1a] px-[25px] py-[20px] text-[15px] text-white placeholder:text-[#666] transition-all duration-300 focus:border-[#ff6600] focus:shadow-[0_0_20px_rgba(255,102,0,0.3)] focus:outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="rounded-[15px] border border-white bg-[#1a1a1a] px-[25px] py-[20px] text-[15px] text-white placeholder:text-[#666] transition-all duration-300 focus:border-[#ff6600] focus:shadow-[0_0_20px_rgba(255,102,0,0.3)] focus:outline-none"
                    />
                    <button className="rounded-[15px] bg-[#ff6600] px-[40px] py-[20px] text-[15px] font-semibold uppercase tracking-[1px] text-white transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#ff8833] hover:shadow-[0_10px_30px_rgba(255,102,0,0.5)]">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mastery