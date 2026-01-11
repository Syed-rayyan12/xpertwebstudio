

"use client";
import React from "react";

const HeroVideoSection = () => {
    return (
        <div className="w-full xl:px-16  lg:px-12  max-sm:px-4 md:px-10 sm:px-6  mx-auto mt-50 mb-30">
            <div className="">
                <div className="w-full relative flex flex-wrap">
                    
                    {/* VIDEO CTA BUTTON (TOP RIGHT) */}
                    <div className="absolute top-0 right-0 flex h-full z-20 py-4 px-6 lg:py-6 lg:px-10">
                        <div className="sticky bottom-6 left-0 self-end">
                            <button className="w-auto relative inline-flex items-center rounded-full py-1.5 pl-1.5 pr-8 transition-none group">
                                <div className="absolute top-0 left-0 w-full h-full z-0 rounded-full bg-[#0e0f11] dark:bg-grayDark-600"></div>
                                <div className="w-14 h-14 mr-3 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden relative z-20 transform transition-all duration-700 left-0 lg:group-hover:left-full dark:bg-grayDark-500">
                                    <svg
                                        className="w-3 h-3 text-white fill-current relative z-10"
                                        width="12"
                                        height="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M384 256L0 32v448l384-224z"></path>
                                    </svg>
                                    <img
                                        src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Individuals-Black-Wall/Shape-April-2022-HR-186.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651143173&s=be043bcd94bb13283574b35d1df6ee93"
                                        alt="Andy"
                                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="tracking-tight leading-tight relative z-10 transform transition duration-500 lg:group-hover:-translate-x-12">
                                    <div className="text-white dark:text-grayDark-100">Hear from Andy</div>
                                    <div className="font-light text-gray-400 dark:text-grayDark-200">
                                        Co-Founder of Shape
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* VIDEO CONTAINER */}
                    <div className="px-2 lg:px-3 xl:px-4 w-full relative">
                        <div className="w-full relative rounded-2xl transform-gpu overflow-hidden aspect-[9/16] bg-gray-50 md:aspect-square dark:bg-grayDark-500 lg:rounded-3xl lg:aspect-video">
                            <video
                                className="w-full h-full absolute top-0 left-0 object-cover"
                                playsInline
                                autoPlay
                                loop
                                muted
                            >
                                <source src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/showreel-2024-portrait_cropped.mp4" type="video/mp4" media="(max-width: 1023px)" />
                                <source src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/shape-showreel-2024_looping-v3.mp4" type="video/mp4" media="(min-width: 1024px)" />
                            </video>
                        </div>
                    </div>

                    {/* HEADING & CTA OVERLAY */}
                    <div className="px-2 lg:px-3 xl:px-4 absolute -left-3 top-0 z-20 flex flex-col items-start pb-8 w-auto lg:left-20 xl:left-40">
                        
                        {/* BACKGROUND BAR */}
                        <div className="w-20 bg-[#0e0f11] h-40 absolute top-0 left-5 z-10 transform -translate-x-full lg:w-44 dark:bg-grayDark-600"></div>
                        
                        {/* SVG CURVES */}
                        <svg
                            id="Layer_1"
                            className="w-10 h-10 text-[#0e0f11] z-30 fill-current absolute top-40 left-3 -mt-px ml-px transform -translate-x-full xl:left-4 dark:text-grayDark-600"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            viewBox="0 0 100 100"
                            xmlSpace="preserve"
                        >
                            <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                        </svg>
                        <svg
                            id="Layer_1"
                            className="w-10 h-10 text-[#0e0f11] z-30 fill-current absolute -mt-px -ml-px top-40 -left-17 xl:-left-36 dark:text-grayDark-600"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            viewBox="0 0 100 100"
                            xmlSpace="preserve"
                        >
                            <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
                        </svg>

                        {/* BADGE */}
                        <div className="w-full bg-[#0e0f11] dark:bg-grayDark-600">
                            {/* Top-left corner cutout for badge */}
                            <svg
                                id="Layer_1"
                                className="w-10 h-10 text-[#0e0f11] z-30 fill-current absolute top-0 left-5 transform -translate-x-full dark:text-grayDark-600"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                viewBox="0 0 100 100"
                                xmlSpace="preserve"
                            >
                                <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                            </svg>
                            <div className="inline-flex items-center space-x-2 relative z-20 mb-3 px-3 mt-px lg:px-6">
                                <div className="bg-white dark:bg-grayDark-100 w-1.5 h-1.5 rounded-full"></div>
                                <div className="font-light text-sm lg:text-base text-white dark:text-grayDark-100">
                                    Hiya, we're Shape
                                </div>
                                <div className="inline-flex animate-bounce origin-bottom-right">
                                    👋
                                </div>
                            </div>
                            {/* Bottom-left corner cutout for badge */}
                            <svg
                                id="Layer_1"
                                className="w-10 h-10 text-[#0e0f11] z-30 fill-current absolute bottom-0 left-5 transform -translate-x-full dark:text-grayDark-600"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                viewBox="0 0 100 100"
                                xmlSpace="preserve"
                            >
                                <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
                            </svg>
                        </div>

                        {/* HEADING & BUTTONS CONTAINER - One continuous box */}
                        <div className="w-auto relative">
                            {/* Top-left corner cutout */}
                            <svg
                                id="Layer_1"
                                className="w-10 h-10 text-[#0e0f11] z-30 fill-current absolute top-0 left-5 transform -translate-x-full dark:text-grayDark-600"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                viewBox="0 0 100 100"
                                xmlSpace="preserve"
                            >
                                <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                            </svg>
                            
                            {/* Top-right corner cutout */}
                            <svg
                                id="Layer_1"
                                className="w-9 h-9 lg:w-10 lg:h-10 text-[#0e0f11] z-30 fill-current absolute -mt-px top-0.5 right-px transform -translate-y-10 translate-x-full dark:text-grayDark-600"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                viewBox="0 0 100 100"
                                xmlSpace="preserve"
                            >
                                <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
                            </svg>
                            
                            {/* HEADING */}
                            <div className="w-auto relative">
                                <div className="relative">
                                    <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-7xl 4xl:text-8xl leading-none tracking-tight text-white dark:text-grayDark-100 bg-[#0e0f11] dark:bg-grayDark-650 pt-16 pb-3">
                                        <span className="flex-shrink-0 truncate inline relative pl-3 lg:pl-5" style={{ zIndex: 2 }}>
                                            A web design and&nbsp;&nbsp;
                                            <br />
                                        </span>
                                        <span className="flex-shrink-0 truncate inline relative pl-3 lg:pl-5" style={{ zIndex: 1 }}>
                                            branding agency&nbsp;&nbsp;
                                            <br />
                                        </span>
                                        <span className="flex-shrink-0 truncate inline relative pl-3 lg:pl-5" style={{ zIndex: 0 }}>
                                            in Manchester&nbsp;&nbsp;
                                            <br />
                                        </span>
                                    </h1>
                                    {/* Gooey SVG Filter for smooth text effect */}
                                    <svg width="0" height="0" className="absolute hidden" colorInterpolationFilters="sRGB">
                                        <defs>
                                            <filter id="goo">
                                                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur>
                                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix>
                                                <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/* CTA BUTTONS - Part of same container */}
                            <div className="relative bg-[#0e0f11] rounded-b-xl pr-3 pl-3 pb-3 pt-1 inline-flex lg:rounded-b-2xl lg:pt-3 lg:pr-8 lg:pl-5 lg:pb-5 dark:bg-grayDark-600">
                                {/* Bottom-left corner cutout */}
                                <svg
                                    id="Layer_1"
                                    className="w-10 h-10 text-[#0e0f11] z-30 fill-current absolute bottom-0 left-5 transform -translate-x-full translate-y-full dark:text-grayDark-600"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0"
                                    y="0"
                                    viewBox="0 0 100 100"
                                    xmlSpace="preserve"
                                >
                                    <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
                                </svg>
                                
                                {/* Bottom-right corner cutout */}
                                <svg
                                    id="Layer_1"
                                    className="w-10 h-10 text-[#0e0f11] fill-current absolute bottom-0 right-0 transform translate-x-full translate-y-full dark:text-grayDark-600"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0"
                                    y="0"
                                    viewBox="0 0 100 100"
                                    xmlSpace="preserve"
                                >
                                    <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                                </svg>

                            <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-7">
                                {/* PRIMARY BUTTON */}
                                <div className="relative group inline-flex items-center">
                                    {/* Button SVG Filter */}
                                    <svg width="0" height="0" className="absolute hidden" colorInterpolationFilters="sRGB">
                                        <defs>
                                            <filter id="buttonFilter">
                                                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"></feGaussianBlur>
                                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="buttonFilter"></feColorMatrix>
                                                <feComposite in="SourceGraphic" in2="buttonFilter" operator="atop"></feComposite>
                                                <feBlend in="SourceGraphic" in2="buttonFilter"></feBlend>
                                            </filter>
                                        </defs>
                                    </svg>
                                    <a
                                        href="/work"
                                        className="inline-flex relative group outline-none focus:outline-none"
                                        style={{ filter: 'url(#buttonFilter)' }}
                                    >
                                        <div className="w-auto inline-flex items-center justify-center relative leading-tight shadow-none overflow-hidden rounded-full bg-gray-600 text-white dark:bg-grayDark-400 dark:text-grayDark-100 py-2 px-5">
                                            <div className="relative inline-flex top-px flex-shrink-0">
                                                <div>View our work</div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-600 dark:bg-grayDark-400 flex-shrink-0 overflow-hidden flex items-center justify-center -ml-1 rounded-full transform transition-transform w-9 h-9 xl:group-hover:translate-x-3 xl:group-hover:rotate-45"></div>
                                    </a>
                                    <div className="w-9 h-9 absolute top-0 right-0 flex items-center justify-center z-20 transition-transform transform xl:group-hover:translate-x-3 xl:group-hover:rotate-45">
                                        <div className="relative overflow-hidden text-white dark:text-grayDark-100">
                                            <div className="relative top-0 left-0 transition-transform transform">
                                                <svg className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                    <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                                                </svg>
                                            </div>
                                            <div className="absolute top-0 left-0 transition-transform transform translate-y-full -translate-x-full">
                                                <svg className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                    <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SECONDARY BUTTON */}
                                <div className="hidden lg:inline-flex">
                                    <div className="relative group inline-flex items-center">
                                        <a
                                            href="/team"
                                            className="inline-flex relative group outline-none link focus:outline-none"
                                        >
                                            <div className="w-auto inline-flex items-center justify-center relative leading-tight shadow-none overflow-hidden rounded-full text-white dark:text-grayDark-100 py-1 mt-1 pr-3">
                                                <div className="relative inline-flex top-px flex-shrink-0">
                                                    <div>Meet the team</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="mt-1 flex items-center justify-center z-20 transition-transform transform">
                                            <div className="relative overflow-hidden text-white dark:text-grayDark-100">
                                                <div className="relative top-0 left-0 transition-transform transform xl:group-hover:translate-x-full xl:group-hover:-translate-y-full">
                                                    <svg className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                                                    </svg>
                                                </div>
                                                <div className="absolute top-0 left-0 transition-transform transform translate-y-full -translate-x-full xl:group-hover:translate-x-0 xl:group-hover:translate-y-0">
                                                    <svg className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroVideoSection;