"use client"
import React from 'react'
import ViewWorkButton from '../header/ViewWorkButton'
import Link from 'next/link'

const projects = [
    {
        id: 1,
        year: '2025',
        client: 'Digital Studio Pro',
        tags: [
            { id: 'tag-1-1', label: 'Branding' },
            { id: 'tag-1-2', label: 'Website' }
        ],
        title: "Revolutionary E-Commerce Platform for Modern Retail",
        description: "A comprehensive digital solution combining innovative design with seamless user experience.",
        video: 'https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4',
    },
    {
        id: 2,
        year: '2025',
        client: 'Creative Agency',
        tags: [
            { id: 'tag-2-1', label: 'Design' },
            { id: 'tag-2-2', label: 'Development' }
        ],
        title: 'Premium Brand Identity & Digital Experience',
        description: 'Full-scale branding and web development for luxury lifestyle brand.',
        video: 'https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4',
    },
    {
        id: 3,
        year: '2025',
        client: 'Tech Innovations',
        tags: [
            {label: 'Development' },
            {label: 'Website' },
        ],
        title: 'Next-Gen SaaS Platform Design & Development',
        description: 'Modern tech startup branding with scalable web application.',
        video: 'https://videos.pexels.com/video-files/3141207/3141207-uhd_2560_1440_25fps.mp4',
    },
    {
        id: 4,
        year: '2025',
        client: 'Global Ventures',
        tags: [
            { id: 'tag-4-1', label: 'Website' },
            { id: 'tag-4-2', label: 'Strategy' }
        ],
        title: 'Corporate Digital Transformation & Brand Evolution',
        description: 'Enterprise-level web platform with comprehensive brand refresh.',
        video: 'https://videos.pexels.com/video-files/3141205/3141205-uhd_2560_1440_25fps.mp4',
    }
]

const ProjectCard = ({ project, badgePosition = '-right-11' }) => {
    const [isHovering, setIsHovering] = React.useState(false)
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const shouldShowHover = isMobile || isHovering

    const getClipPath = () => {
        if (!shouldShowHover) {
            return 'polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }
        
        if (isMobile) {
            // Wider polygon for mobile top-right
            return 'polygon(0% 0%, calc(100% - 180px) 0%, calc(100% - 177px) 2px, calc(100% - 173px) 5px, calc(100% - 170px) 10px, calc(100% - 168px) 15px, calc(100% - 167px) 20px, calc(100% - 166px) 30px, calc(100% - 165px) 35px, calc(100% - 163px) 40px, calc(100% - 159px) 44px, calc(100% - 154px) 47px, calc(100% - 148px) 49px, calc(100% - 140px) 51px, calc(100% - 130px) 52px, calc(100% - 30px) 52px, calc(100% - 25px) 53px, calc(100% - 20px) 55px, calc(100% - 15px) 58px, calc(100% - 10px) 62px, calc(100% - 6px) 67px, calc(100% - 3px) 73px, calc(100% - 1px) 80px, 100% 88px, 100% 100%, 0% 100%)'
        }
        
        // Desktop polygon
        return 'polygon(0% 0%, calc(100% - 280px) 0%, calc(100% - 275px) 2px, calc(100% - 270px) 5px, calc(100% - 267px) 10px, calc(100% - 265px) 15px, calc(100% - 264px) 20px, calc(100% - 264px) 50px, calc(100% - 262px) 55px, calc(100% - 258px) 60px, calc(100% - 252px) 64px, calc(100% - 245px) 67px, calc(100% - 235px) 69px, calc(100% - 220px) 70px, calc(100% - 40px) 70px, calc(100% - 35px) 71px, calc(100% - 30px) 73px, calc(100% - 25px) 75px, calc(100% - 20px) 78px, calc(100% - 15px) 82px, calc(100% - 10px) 87px, calc(100% - 5px) 93px, 100% 100px, 100% 100%, 0% 100%)'
    }

    return (
        <div
            className="group relative isolate aspect-[4/3] w-full transition-all duration-500 hover:-translate-y-2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Badges Container - Positioned at Top Right Outside */}
            <div
                key={`badge-${project.id}`}
                className={`absolute -right-2 sm:-right-6 lg:${badgePosition} top-0 z-20 flex flex-wrap justify-end gap-1 sm:gap-2 lg:gap-3 px-2 sm:px-4 lg:px-10 py-2 sm:py-3 lg:py-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${shouldShowHover ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
                {project.tags.map((tag) => (
                    <span
                        key={tag.id}
                        id={tag.id}
                        className="rounded-full px-2 max-sm:px-4 lg:px-7 py-1 sm:py-1.5 lg:py-2 bg-[#000] text-[10px] sm:text-[11px] lg:text-[13px] font-medium text-white/90"
                    >
                        {tag.label}
                    </span>
                ))}
            </div>

            {/* Video Container with Corner Cut Effect */}
            <div
                className="relative h-full w-full overflow-hidden bg-[#0c0d12] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                    clipPath: getClipPath(),
                    borderRadius: '32px'
                }}

            >
                <video
                    src={project.video}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-black/10 via-black/40 to-black/80 transition duration-500 group-hover:via-black/60" />

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5 lg:p-8">
                    <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/60">
                        <span>{project.year}</span>
                        <span className="text-[#ff6600]">•</span>
                        <span>{project.client}</span>
                    </div>
                    <h3 className="mt-1 sm:mt-1.5 lg:mt-2 text-base sm:text-xl lg:text-[26px] font-semibold leading-tight text-white">
                        {project.title}
                    </h3>
                </div>
            </div>
        </div>
    )
}

function ProjectShowcase() {
    return (
        <section className="w-full xl:px-16  lg:px-12  max-sm:px-6 md:px-10 sm:px-6  mx-auto  text-white">
            <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <ProjectCard project={projects[0]} badgePosition="-right-11" />
                </div>

                <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-5">
                    <div className="justify-between rounded-[20px] sm:rounded-[32px] border-white/10 bg-gradient-to-b  p-4 sm:p-6 lg:p-8">
                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6600]">
                            <span className="text-base sm:text-lg">•</span>
                            <span>Our Work</span>
                        </div>
                        <div className='top-heading-bussiness-cards'>
                            <div className="space-y-2 sm:space-y-4 text-left">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                                    Take A Look at Our Projects
                                </h2>
                            </div>
                            <div className="mt-4">
                                <Link href="/our-work">
                                <ViewWorkButton label="See Our Work" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ProjectCard project={projects[1]} badgePosition="-right-11" />
                </div>

                <div className="lg:col-span-6">
                    <ProjectCard project={projects[2]} badgePosition="-right-8" />
                </div>
                <div className="lg:col-span-6">
                    <ProjectCard project={projects[3]} badgePosition="-right-8" />
                </div>
            </div>
        </section>
    )
}

export default ProjectShowcase
