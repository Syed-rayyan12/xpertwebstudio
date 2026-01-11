"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ViewBlogs from "./view-blogs";
import { ArrowLeft, ArrowRight } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
        time: "2 min ago",
        title: "How to Grow Your Brand Online",
        description:
            "Discover proven strategies to boost your brand's online presence and engage your audience more effectively.",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80",
        time: "5 min ago",
        title: "The Power of Consistent Content",
        description:
            "Learn why consistency in content creation is key to building trust and authority in your niche.",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80",
        time: "10 min ago",
        title: "Design Trends for 2026",
        description:
            "Stay ahead of the curve with the latest design trends that will define the digital landscape in 2026.",
    },
     {
        id: 4,
        image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80",
        time: "10 min ago",
        title: "Design Trends for 2026",
        description:
            "Stay ahead of the curve with the latest design trends that will define the digital landscape in 2026.",
    },
     {
        id: 5,
        image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80",
        time: "10 min ago",
        title: "Design Trends for 2026",
        description:
            "Stay ahead of the curve with the latest design trends that will define the digital landscape in 2026.",
    },
     {
        id: 6,
        image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80",
        time: "10 min ago",
        title: "Design Trends for 2026",
        description:
            "Stay ahead of the curve with the latest design trends that will define the digital landscape in 2026.",
    },
     {
        id: 7,
        image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80",
        time: "10 min ago",
        title: "Design Trends for 2026",
        description:
            "Stay ahead of the curve with the latest design trends that will define the digital landscape in 2026.",
    },
     {
        id: 8,
        image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80",
        time: "10 min ago",
        title: "Design Trends for 2026",
        description:
            "Stay ahead of the curve with the latest design trends that will define the digital landscape in 2026.",
    },
     {
        id: 9,
        image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80",
        time: "10 min ago",
        title: "Design Trends for 2026",
        description:
            "Stay ahead of the curve with the latest design trends that will define the digital landscape in 2026.",
    },
];

const BlogSlider = () => {
    const swiperRef = React.useRef(null);

    return (
        <section className="flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 md:gap-10 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:pl-20 overflow-hidden relative">
            {/* LEFT SIDE */}
            <div className="flex flex-col relative w-full lg:w-1/3 gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-6 md:mt-8 z-10">
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#FF5900]" />
                    <span className="uppercase text-[#FF5900] text-xs font-semibold tracking-widest">
                        Blog
                    </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    The latest  from our  design studio
                </h2>

                <ViewBlogs />

                <div className="flex gap-3 absolute max-lg-bottom-20 max-sm:right-0 max-sm:top-26 md:right-0 md:top-28 max-lg:-bottom-60 lg:-bottom-60">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="bg-[#23242A] hover:bg-[#FF5900] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                    >
                        <ArrowLeft />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="bg-[#23242A] hover:bg-[#FF5900] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative w-full lg:w-2/3 overflow-hidden">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={16}
                    slidesPerView={1.1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 2.2,
                            spaceBetween: 24
                        }
                    }}
                    style={{ paddingRight: "1rem" }}
                    className="!overflow-visible"
                >
                    {blogPosts.map((post) => (
                        <SwiperSlide key={post.id}>
                            <div className="group">
                                {/* CARD WITH SHAPE EFFECT */}
                                <div className="w-full relative overflow-hidden rounded-bl-xl mb-3 pl-px lg:rounded-bl-2xl">
                                    {/* MINI IMAGE CONTAINER WITH SVG CURVES */}
                                    <div className="absolute bottom-0 bg-[#0e0f11] left-0 z-20  rounded-tr-2xl flex transition-transform duration-400 transform pt-2 pr-2 lg:pr-3 lg:pt-3 xl:translate-y-full xl:-translate-x-full lg:rounded-tr-3xl xl:group-hover:translate-x-0 xl:group-hover:translate-y-0 dark:bg-grayDark-600">
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
                                        <div className="rounded-xl transform-gpu overflow-hidden relative w-12 h-12 bg-gray-50 dark:bg-grayDark-400 lg:w-16 lg:h-16 lg:rounded-2xl">
                                            <div
                                                className="relative overflow-hidden w-full"
                                                style={{ paddingTop: "100%" }}
                                            >
                                                <img
                                                    src={post.image}
                                                    alt=""
                                                    className="w-full h-full object-cover absolute top-0 left-0"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* MAIN IMAGE */}
                                    <div className="w-full relative z-10 transform-gpu rounded-2xl overflow-hidden bg-gray-50 dark:bg-grayDark-400 lg:rounded-3xl">
                                        <div className="w-full transform scale-110 transition-transform xl:group-hover:-translate-y-2.5">
                                            <div
                                                className="relative overflow-hidden w-full"
                                                style={{ paddingTop: "56.25%" }}
                                            >
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover absolute top-0 left-0"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* TEXT CONTENT */}
                                <span className="text-xs sm:text-sm text-white font-semibold mb-1 sm:mb-2 block">
                                    {post.time}
                                </span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-1 sm:mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-white/70 text-sm sm:text-base md:text-md">
                                    {post.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BlogSlider;