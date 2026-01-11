"use client"
import React, { useState } from 'react'

const projectsData = [
    {
        id: 1,
        year: '2025',
        client: 'Digital Studio Pro',
        tags: ['Branding', 'Website', 'SEO'],
        title: "Revolutionary E-Commerce Platform for Modern Retail",
        description: "A comprehensive digital solution combining innovative design with seamless user experience.",
        video: 'https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4',
    },
    {
        id: 2,
        year: '2025',
        client: 'Creative Agency',
        tags: ['Design', 'Development'],
        title: 'Premium Brand Identity & Digital Experience',
        description: 'Full-scale branding and web development for luxury lifestyle brand.',
        video: 'https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4',
    },
    {
        id: 3,
        year: '2025',
        client: 'Tech Innovations',
        tags: ['Branding', 'Website', 'App'],
        title: 'Next-Gen SaaS Platform Design & Development',
        description: 'Modern tech startup branding with scalable web application.',
        video: 'https://videos.pexels.com/video-files/3141207/3141207-uhd_2560_1440_25fps.mp4',
    },
    {
        id: 4,
        year: '2025',
        client: 'Global Ventures',
        tags: ['Website', 'Branding', 'Strategy'],
        title: 'Corporate Digital Transformation & Brand Evolution',
        description: 'Enterprise-level web platform with comprehensive brand refresh.',
        video: 'https://videos.pexels.com/video-files/3141205/3141205-uhd_2560_1440_25fps.mp4',
    },
    {
        id: 5,
        year: '2024',
        client: 'Fashion Forward',
        tags: ['E-commerce', 'Branding', 'Photography'],
        title: 'Luxury Fashion E-Commerce Experience',
        description: 'High-end fashion platform with immersive shopping experience.',
        video: 'https://videos.pexels.com/video-files/3252919/3252919-uhd_2560_1440_25fps.mp4',
    },
    {
        id: 6,
        year: '2024',
        client: 'FitLife Studio',
        tags: ['App', 'Branding', 'UI/UX'],
        title: 'Fitness & Wellness Mobile Application',
        description: 'Complete fitness tracking app with personalized workout plans.',
        video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    },
    {
        id: 7,
        year: '2024',
        client: 'GreenEnergy Co',
        tags: ['Website', 'Branding', 'Animation'],
        title: 'Sustainable Energy Solutions Platform',
        description: 'Environmental tech company branding and web presence.',
        video: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4',
    },
    {
        id: 8,
        year: '2024',
        client: 'TravelExplore',
        tags: ['Website', 'App', 'Content'],
        title: 'Travel Booking & Discovery Platform',
        description: 'Complete travel experience platform with booking integration.',
        video: 'https://videos.pexels.com/video-files/3191019/3191019-uhd_2560_1440_25fps.mp4',
    },
    {
        id: 9,
        year: '2024',
        client: 'FoodieHub',
        tags: ['App', 'Branding', 'Social'],
        title: 'Restaurant Discovery & Food Delivery App',
        description: 'Social dining platform connecting food lovers and restaurants.',
        video: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
    },
    {
        id: 10,
        year: '2024',
        client: 'ArtGallery Online',
        tags: ['Website', 'E-commerce', 'Design'],
        title: 'Digital Art Marketplace & Gallery',
        description: 'Premium online art gallery with virtual exhibition spaces.',
        video: 'https://videos.pexels.com/video-files/3191836/3191836-uhd_2560_1440_25fps.mp4',
    }
]

const Projects = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    </section>
  )
}

const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => {
    const [isHovering, setIsHovering] = useState(false)
    const badgePosition = 'right-0'

    return (
        <div
            className="group relative isolate aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/3] w-full transition-all duration-500 hover:-translate-y-2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Badges Container - Positioned at Top Right Outside */}
            <div
                className={`absolute ${badgePosition} top-0 z-20 flex flex-wrap justify-end gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovering ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
                {project.tags.map((tag, index) => (
                    <span
                        key={`${project.id}-${tag}-${index}`}
                        className="rounded-full px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-[#000] text-[11px] sm:text-[12px] md:text-[13px] font-medium text-white/90"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Video Container with Corner Cut Effect */}
            <div
                className="relative h-full w-full overflow-hidden bg-[#0c0d12] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                    clipPath: isHovering
                        ? 'polygon(0% 0%, calc(100% - 280px) 0%, calc(100% - 275px) 2px, calc(100% - 270px) 5px, calc(100% - 267px) 10px, calc(100% - 265px) 15px, calc(100% - 264px) 20px, calc(100% - 264px) 50px, calc(100% - 262px) 55px, calc(100% - 258px) 60px, calc(100% - 252px) 64px, calc(100% - 245px) 67px, calc(100% - 235px) 69px, calc(100% - 220px) 70px, calc(100% - 40px) 70px, calc(100% - 35px) 71px, calc(100% - 30px) 73px, calc(100% - 25px) 75px, calc(100% - 20px) 78px, calc(100% - 15px) 82px, calc(100% - 10px) 87px, calc(100% - 5px) 93px, 100% 100px, 100% 100%, 0% 100%)'
                        : 'polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    borderRadius: '32px'
                }}

            >
                <video
                    src={project.video}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-black/10 via-black/40 to-black/80 transition duration-500 group-hover:via-black/60" />

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                        <span>{project.year}</span>
                        <span className="text-[#ff6600]">•</span>
                        <span>{project.client}</span>
                    </div>
                    <h3 className="mt-2 text-[26px] font-semibold leading-tight text-white">
                        {project.title}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Projects;
