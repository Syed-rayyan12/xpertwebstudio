"use client"
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Banner() {
  return (
    <div className="w-full relative flex flex-wrap min-h-screen mt-40 max-w-7xl mx-auto lg:rounded-3xl overflow-hidden">

      {/* Image Container */}
      <div className="px-2 lg:px-3 xl:px-4 w-full relative">
        <div className="w-full relative rounded-2xl lg:rounded-3xl transform-gpu overflow-hidden aspect-[9/16] md:aspect-square lg:aspect-video bg-gray-900">
          <img
            src="/images/main-banner.png"
            alt="Main Banner"
            className="w-full h-full absolute top-0 left-0 bg-[#0E0F11] object-cover"
          />
        </div>
      </div>

      {/* Content Section - Left Side */}
      <div className="px-2 lg:px-3 xl:px-4 absolute -left-3  top-0 z-20 flex flex-col items-start pb-8 w-auto lg:left-20 xl:left-40">

        {/* White Background Bar */}
       

      
        {/* Badge - Hiya, we're Shape */}
        <div className="w-full bg-[#0E0F11]">
          <div className="inline-flex items-center space-x-2 relative z-20 mb-3 px-3 mt-px lg:px-6">

            <div className="font-light text-sm lg:text-base text-gray-600 dark:text-gray-100">
              Hiya, we're Shape
            </div>
            <div className="inline-flex animate-bounce delay origin-bottom-right">👋</div>
          </div>
        </div>

        {/* Main Heading Container */}
        <div className="w-auto relative">
          {/* Corner Cutout SVG */}
         

          
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
         

          {/* Buttons */}
          <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-7">

            {/* View our work button */}
            <div className="relative group inline-flex items-center">
              <a href="/work" className="inline-flex relative group outline-none focus:outline-none">
                <div className="w-auto inline-flex items-center justify-center relative leading-tight shadow-none overflow-hidden rounded-full border-0 text-white dark:bg-gray-700 dark:text-gray-100 py-2 px-5">
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