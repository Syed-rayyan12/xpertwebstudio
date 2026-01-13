"use client"
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Banner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full relative flex flex-wrap min-h-screen mt-40 max-w-7xl mx-auto lg:rounded-3xl overflow-hidden">

      {/* Video CTA Button - Top Right */}
      <div className="absolute top-0 right-0 flex h-full z-20 py-4 px-6 lg:py-6 lg:px-10">
        <div className="sticky bottom-6 left-0 self-end">
          <button
            onClick={() => setShowModal(true)}
            className="w-auto relative inline-flex items-center rounded-full py-1.5 pl-1.5 pr-8 transition-all group hover:pr-10"
          >
            {/* Button Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0 rounded-full bg-[#0E0F11]"></div>

            {/* Profile Image with Play Icon */}
            <div className="w-14 h-14 mr-3 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden relative z-20 transform transition-all duration-700 lg:group-hover:translate-x-full dark:bg-gray-700">
              <svg className="w-3 h-3 text-white fill-current relative z-10" width="12" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M384 256L0 32v448l384-224z"></path>
              </svg>
              <img
                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Individuals-Black-Wall/Shape-April-2022-HR-186.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651143173&s=be043bcd94bb13283574b35d1df6ee93"
                alt="Andy"
                className="w-full absolute top-0 left-0 w-full h-full object-cover z-0"
              />
            </div>

            {/* Text Content */}
            <div className="tracking-tight leading-tight relative z-10 transform transition duration-500 lg:group-hover:-translate-x-12">
              <div className="dark:text-gray-100 text-gray-900 font-medium">Hear from Andy</div>
              <div className="font-light text-gray-400 dark:text-gray-300 text-sm">Co-Founder of Shape</div>
            </div>
          </button>
        </div>
      </div>

      {/* Video Container */}
      <div className="px-2 lg:px-3 xl:px-4 w-full relative">
        <div className="w-full relative rounded-2xl lg:rounded-3xl transform-gpu overflow-hidden aspect-[9/16] md:aspect-square lg:aspect-video bg-gray-900">
          <video
            className="w-full h-full absolute top-0 left-0 object-cover"
            playsInline
            autoPlay
            loop
            muted
            loading="lazy"
          >
            <source src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/showreel-2024-portrait_cropped.mp4" type="video/mp4" media="(max-width: 1023px)" />
            <source src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/shape-showreel-2024_looping-v3.mp4" type="video/mp4" media="(min-width: 1024px)" />
          </video>
        </div>
      </div>

      {/* Content Section - Left Side */}
      <div className="px-2 lg:px-3 xl:px-4 absolute -left-3 top-0 z-20 flex flex-col items-start pb-8 w-auto lg:left-20 xl:left-40">

        {/* White Background Bar */}
        <div className="w-20 bg-[#0E0F11] h-40 absolute top-0 left-5 z-10 transform -translate-x-full lg:w-44"></div>

        {/* Top Right Corner Cutout */}
        <svg className="w-10 h-10 z-30 absolute top-40 left-3 -mt-px ml-px transform -translate-x-full xl:left-4" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z" className='fill-[#0E0F11]'></path>
        </svg>

        {/* Top Left Corner Cutout */}
        <svg className="w-10 h-10 z-30 absolute -mt-px -ml-px top-40 -left-17 xl:-left-36" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z" className='fill-[#0E0F11]'></path>
        </svg>

        {/* Badge - Hiya, we're Shape */}
        <div className="w-full bg-[#0E0F11]">
          <div className="inline-flex items-center space-x-2 relative z-20 mb-3 px-3 mt-px lg:px-6">
            <div className="bg-gray-600 dark:bg-gray-100 w-1.5 h-1.5 rounded-full"></div>
            <div className="font-light text-sm lg:text-base text-gray-600 dark:text-gray-100">
              Hiya, we're Shape
            </div>
            <div className="inline-flex animate-bounce delay origin-bottom-right">👋</div>
          </div>
        </div>

        {/* Main Heading Container */}
        <div className="w-auto relative rounded-br-2xl">
          {/* Corner Cutout SVG */}
          <svg className="w-9 h-9 lg:w-10 lg:h-10 z-30 absolute -mt-px top-0.5 right-px transform -translate-y-10 translate-x-full" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z" className='fill-[#0E0F11]'></path>
          </svg>

            <div className='h-32 w-12 bg-[#0E0F11] absolute -right-4 top-0 '></div>
             {/* <div className='h-20 w-50 bg-[#0E0F11] absolute -right-4 top-35 '></div>
              <div className='h-20 w-50 bg-[#0E0F11] absolute -right-8 top-28  rounded-bl-xl'></div> */}
          {/* Heading */}
          <div className="w-auto relative   overflow-hidden">

            <h1 className="text-4xl relative sm:text-5xl md:text-6xl xl:text-6xl 2xl:text-8xl  leading-none tracking-tight text-white bg-[#0E0F11] pt-16 pb-3">
              <div className="flex-shrink-0 truncate  pl-3 lg:pl-5 relative">
                A web design and<br />
                
              </div>
              <div className="flex-shrink-0 truncate  pl-3 lg:pl-5 relative">
                branding agency<br />
                
              </div>
              <div className="flex-shrink-0 truncate  pl-3 lg:pl-5 relative">
                in Manchester<br />
              </div>
            </h1>

          </div>
        </div>

        {/* Buttons Container */}
        <div className="relative bg-[#0E0F11] rounded-b-xl lg:rounded-b-2xl pr-3 pl-3 pb-3 mt-2.5 pt-1 inline-flex lg:pt-3 lg:mt-0 lg:pr-8 lg:pl-5 lg:pb-5">

          {/* Bottom Right Corner Cutout */}
          <svg className="w-10 h-10 absolute -mt-px -ml-px right-px top-1 lg:top-3 xl:top-0 transform translate-x-full" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z" className='fill-[#0E0F11]'></path>
          </svg>

          {/* Buttons */}
          <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-7">

            {/* View our work button */}
            <div className="relative group inline-flex items-center">
              <a href="/work" className="inline-flex relative group outline-none focus:outline-none">
                <div className="w-auto inline-flex items-center justify-center relative leading-tight shadow-none overflow-hidden rounded-full border-0 bg-gray-600 text-white dark:bg-gray-700 dark:text-gray-100 py-2 px-5">
                  <div className="relative inline-flex top-px flex-shrink-0">
                    <div>View our work</div>
                  </div>
                </div>
                <div className="bg-gray-600 dark:bg-gray-700 flex-shrink-0 overflow-hidden flex items-center justify-center -ml-1 rounded-full transform transition-transform w-9 h-9 xl:group-hover:translate-x-3 xl:group-hover:rotate-45"></div>
              </a>
              <div className="w-9 h-9 absolute top-0 right-0 flex items-center justify-center z-20 transition-transform transform xl:group-hover:translate-x-3 xl:group-hover:rotate-45">
                <ArrowUpRight className="w-3 h-3 text-white dark:text-gray-100" />
              </div>
            </div>

            {/* Meet the team button */}
            <div className="hidden lg:inline-flex relative group items-center">
              <a href="/meet-the-team" className="inline-flex relative group outline-none focus:outline-none">
                <div className="w-auto inline-flex items-center justify-center relative leading-tight shadow-none overflow-hidden rounded-full border-0 text-gray-600 dark:text-gray-100 py-1 mt-1 pr-3">
                  <div className="relative inline-flex top-px flex-shrink-0">
                    <div>Meet the team</div>
                  </div>
                </div>
              </a>
              <div className="mt-1 flex items-center justify-center z-20 transition-transform transform">
                <ArrowUpRight className="w-3 h-3 text-gray-600 dark:text-gray-100 transition-transform xl:group-hover:translate-x-1 xl:group-hover:-translate-y-1" />
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}