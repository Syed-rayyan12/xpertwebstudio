"use client"
import React from 'react'

const blogPosts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
        time: "2 min ago",
        title: "How to Grow Your Brand Online",
        description: "Discover proven strategies to boost your brand's online presence and engage your audience more effectively.",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80",
        time: "5 min ago",
        title: "The Power of Consistent Content",
        description: "Learn why consistency in content creation is key to building trust and authority in your niche.",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80",
        time: "10 min ago",
        title: "Design Trends for 2026",
        description: "Stay ahead of the curve with the latest design trends that will define the digital landscape in 2026.",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
        time: "15 min ago",
        title: "Building a Strong Brand Identity",
        description: "Essential steps to create a memorable brand identity that resonates with your target audience.",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80",
        time: "20 min ago",
        title: "Social Media Marketing Tips",
        description: "Maximize your social media impact with these proven marketing strategies and techniques.",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
        time: "30 min ago",
        title: "User Experience Best Practices",
        description: "Create exceptional user experiences that keep visitors engaged and coming back for more.",
    },
]

const AllBlogs = () => {
    return (
        <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group">
                            {/* CARD WITH SHAPE EFFECT */}
                            <div className="w-full relative overflow-hidden rounded-bl-xl mb-3 pl-px lg:rounded-bl-2xl">
                                {/* MINI IMAGE CONTAINER WITH SVG CURVES */}
                                <div className="absolute bottom-0 bg-[#0e0f11] left-0 z-20 rounded-tr-2xl flex transition-transform duration-400 transform pt-2 pr-2 lg:pr-3 lg:pt-3 xl:translate-y-full xl:-translate-x-full lg:rounded-tr-3xl xl:group-hover:translate-x-0 xl:group-hover:translate-y-0 dark:bg-grayDark-600">
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
                            <span className="text-xs sm:text-sm text-white font-semibold mb-2 block">
                                {post.time}
                            </span>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                                {post.title}
                            </h3>
                            <p className="text-white/70 text-sm sm:text-base">
                                {post.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AllBlogs
