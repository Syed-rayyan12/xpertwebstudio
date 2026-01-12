"use client"
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/xpertwebstudio/",
    icon: (
     <Instagram/>
    ),
    desc: "Share visually appealing snippets of our latest web projects."
  },
  {
    name: "Trust Poilot",
    url: "https://twitter.com",
    icon: (
      <Instagram/>
    ),
    desc: "Showcase design elements of our web projects."
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61563486471739",
    icon: (
      <Facebook/>
    ),
    desc: "Tweet about interesting coding challenges you've overcome."
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <Linkedin/>
    ),
    desc: "Create detailed presentations for our projects."
  }
];

const Footer = () => {
  return (
    <>
      {/* Mobile & Tablet Footer (Hidden on Desktop) */}
      <footer className="lg:hidden bg-[#0E0F11] w-full p-4 -mt-4 rounded-t-2xl  text-gray-800">
        <div className="w-full relative  bg-[#1A1B1E] rounded-bl-2xl rounded-tr-2xl pt-3 pb-16 overflow-hidden">
          
          {/* Logo at bottom left (mobile only) */}
          <div className="absolute bottom-2 left-0 flex w-5/16 pl-2 justify-center md:justify-start md:pl-6">
            <svg className="text-white fill-current w-16 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253.89 72.05">
              <rect x="241.48" y="45.58" width="12.4" height="12.17" rx="1.31" ry="1.31"></rect>
            </svg>
          </div>

          {/* Top Left Corner Decorations */}
          <div className="absolute top-0 left-0 pr-5 pb-5 z-30 bg-[#0E0F11] ">
            <div className="absolute top-0 left-0 transform translate-x-full w-full bg-[#1A1B1E]  z-20">
              <div className="w-full aspect-square bg-[#1A1B1E] rounded-tl-2xl"></div>
            </div>
            <div className="absolute bottom-0 right-0 transform w-full bg-[#0E0F11]  z-20">
              <div className="w-full aspect-square bg-[#0E0F11] rounded-br-2xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 transform translate-y-full w-full bg-[#0E0F11] dark:bg-[#1A1B1E] z-20">
              <div className="w-full aspect-square bg-[#1A1B1E] dark:bg-[#0c0d12] rounded-tl-2xl"></div>
            </div>
            
            {/* Social Links */}
            <div className="relative z-20">
              <div className="flex flex-col items-start space-y-1.5">
                <a href="https://www.linkedin.com/company/xpertwebstudio/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#FF5900] text-white rounded-full w-8 h-8 hover:bg-gray-600 transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a href="https://twitter.com/xpertwebstudio" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#FF5900] text-white rounded-full w-8 h-8 hover:bg-gray-600 transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com/xpertwebstudio" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#FF5900] text-white rounded-full w-8 h-8 hover:bg-gray-600 transition-colors">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.facebook.com/xpertwebstudio" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#FF5900] text-white rounded-full w-8 h-8 hover:bg-gray-600 transition-colors">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Right - Back to Top */}
          <div className="absolute bottom-0 right-0 bg-[#0E0F11] flex justify-center pl-4 rounded-tl-2xl">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-flex items-center space-x-1 font-light group transition-none pt-3 pb-1.5">
              <div className="text-xs text-white">Back to top</div>
              <div className="animate-bounce">👆</div>
            </a>
          </div>

          {/* Main Content */}
          <div className="w-full flex flex-wrap justify-between mb-10 ml-6 pt-4 relative z-30 md:mb-16 md:ml-10 md:pt-8">
            
            {/* Heading */}
            <div className="w-full mb-10 flex max-sm:pl-14 flex-wrap flex-col md:flex-row md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-white leading-tight max-w-xs mb-5 pr-10">
                Do you like <br />what you see?
              </h2>
              <div className="flex items-start flex-col space-y-5 md:mt-1 md:flex-row md:items-center md:space-y-0 md:space-x-5">
                <Link href="/contact-us" className="inline-flex items-center bg-[#FF5900] text-white px-5 py-2 rounded-full hover:bg-[#ff6a1a] transition-colors">
                  <span>Start a project</span>
                  <svg className="w-4 h-4 ml-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="w-full grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-gray-200 font-light mb-3 text-sm">Learn</div>
                <ul className="space-y-1">
                  <li><Link href="/about-us" className="text-white hover:text-[#FF5900] text-sm">About</Link></li>
                  <li><Link href="/our-work" className="text-white hover:text-[#FF5900] text-sm">Our Work</Link></li>
                  <li><Link href="/reviews" className="text-white hover:text-[#FF5900] text-sm">Testimonials</Link></li>
                  <li><Link href="/blogs" className="text-white hover:text-[#FF5900] text-sm">Blog</Link></li>
                </ul>
              </div>
              <div>
                <div className="text-gray-200 font-light mb-3 text-sm">Explore</div>
                <ul className="space-y-1">
                  <li><Link href="/" className="text-white hover:text-[#FF5900] text-sm">Home</Link></li>
                  <li><Link href="/our-work" className="text-white hover:text-[#FF5900] text-sm">Work</Link></li>
                  <li><Link href="/packages" className="text-white hover:text-[#FF5900] text-sm">Services</Link></li>
                  <li><Link href="/contact-us" className="text-white hover:text-[#FF5900] text-sm">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full">
              <div className="text-gray-200 font-light mb-3 text-sm">Get in touch</div>
              <a href="tel:+1234567890" className="flex items-center space-x-2 mb-1 text-white text-sm hover:text-[#FF5900]">
                <svg className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 32L144 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8l67-83.8 144 80-32 144h-32C200.6 512 0 311.4 0 64V32z"></path>
                </svg>
                <span>+1 234 567 890</span>
              </a>
              <a href="mailto:hello@xpertwebstudio.com" className="flex items-center space-x-2 text-white text-sm hover:text-[#FF5900]">
                <svg className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 64h512v80L256 320 0 144V64zm0 384V182.8l237.9 163.6 18.1 12.4 18.1-12.5L512 182.8V448H0z"></path>
                </svg>
                <span>hello@xpertwebstudio.com</span>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="w-full flex flex-col items-center justify-center px-6 pb-4 pt-8 border-t border-white/10">
            <div className="text-gray-200 text-xs text-center">
              © Xpert Web Studio 2025 | All Rights Reserved
            </div>
          </div>
        </div>
      </footer>

      {/* Desktop Footer (Hidden on Mobile & Tablet) */}
      <footer className="hidden lg:block text-white pt-8 pb-8 px-8">
        <div className="flex gap-4 max-sm:flex-col">
          <div className="grid grid-cols-2 grid-rows-2 max-sm:grid-cols-1 gap-4 w-full">
          {/* Social Links - Left 4 boxes */}
          {socialLinks.map((link, idx) => (
            <div key={idx} className="bg-[#1A1B1E] flex flex-col justify-between rounded-xl p-6 gap-2 max-sm:gap-6">
                <div className="flex items-center justify-between">
                  <div className="border border-gray-600 p-3 rounded-md">
                    <span className="mb-2 text-[#FF5900]">{link.icon}</span>
                  </div>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 group-hover:bg-[#FF5900] transition-colors">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 384 512"
                        className="w-6 h-6 text-[#FF5900]"
                        fill="currentColor"
                      >
                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                      </svg>
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-[#FF5900] uppercase text-2xl">{link.name}</span>
                  <span className="text-md text-white/70  mb-2">{link.desc}</span>
                </div>
              </div>
          ))}
        </div>
        {/* Right 3 boxes */}
        <div className="flex flex-col gap-4 w-full">


          <div className="flex flex-col sm:flex-row items-start justify-between bg-[#1A1B1E] rounded-xl p-4 sm:p-5 md:p-6 lg:p-6 gap-4 sm:gap-6 md:gap-8 lg:gap-8">
            <nav className="flex flex-col items-start gap-1.5 sm:gap-2">
              <a href="#home" className="hover:text-[#FF5900] text-[#FF5900] font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Home</a>
              <a href="/about-us" className="hover:text-[#FF5900] text-[15px]  ">About</a>
              <a href="/packages" className="hover:text-[#FF5900] text-[15px]  ">Packages</a>
              <a href="/portfolio" className="hover:text-[#FF5900] text-[15px]  ">Portfolio</a>
              <a href="/contact-us" className="hover:text-[#FF5900] text-[15px]  ">Contact Us</a>
            </nav>
            <nav className="flex flex-col items-start gap-1.5 sm:gap-2">
              <a href="#" className="hover:text-[#FF5900] text-[#FF5900] font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Services</a>
              <a href="/web-development" className="hover:text-[#FF5900] text-[15px]    ">Web Development</a>
              <a href="/app-development" className="hover:text-[#FF5900] text-[15px]  ">App Development</a>
              <a href="/logo-design" className="hover:text-[#FF5900] text-[15px]  ">Logo Design</a>
            </nav>
            <nav className="flex flex-col items-start gap-1.5 sm:gap-2">
              <a href="#home" className="hover:text-[#FF5900] text-[#FF5900] font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Services</a>
              <a href="/digital-marketing" className="hover:text-[#FF5900] text-[15px]  ">Digital Marketing</a>
              <a href="/ecommerce-website" className="hover:text-[#FF5900] text-[15px]  ">Ecommerce Website</a>
            </nav>
            <nav className="flex flex-col items-start gap-1.5 sm:gap-2">
              <a href="#home" className="hover:text-[#FF5900] text-[#FF5900] font-semibold mb-2 sm:mb-4 text-sm sm:text-base">Quick Links</a>
              <a href="/blogs" className="hover:text-[#FF5900] text-[15px]  ">Blogs</a>
              <a href="/reviews" className="hover:text-[#FF5900] text-[15px]  ">Reviews</a>
              <a href="/video-testimonials" className="hover:text-[#FF5900] text-[15px]  ">Video Testimonials</a>
            </nav>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-[#1A1B1E] rounded-xl p-4 sm:p-5 md:p-6 gap-4 lg:gap-6">
            <div className="flex flex-col w-full lg:w-auto gap-1 sm:gap-2">
              <span className="font-semibold text-base sm:text-lg uppercase">Newsletter</span>
              <span className="font-semibold text-base sm:text-lg uppercase text-[#FF5900]">Subscribe To our Newsletter</span>
            </div>
            <form className="flex items-center gap-3 sm:gap-4 w-full lg:w-auto lg:flex-1 lg:max-w-md">
              <input type="email" placeholder="Your email" className="px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base text-white border-b-2 border-gray-600 bg-transparent focus:outline-none focus:border-[#FF5900] w-full transition-all" />
              <div className="border border-gray-600 rounded-full p-1.5 sm:p-2 flex-shrink-0">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 384 512"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FF5900]"
                  fill="currentColor"
                >
                  <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                </svg>
              </div>
            </form>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between bg-[#1A1B1E] rounded-xl p-4 sm:p-5 md:p-6 gap-3 sm:gap-2">
            <span className="font-normal text-xs sm:text-sm md:text-base lg:text-lg text-center sm:text-left">© 2025 Xpert Web Studio. All rights reserved.</span>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a href="#terms" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">Terms & Conditions</a>
              <a href="#privacy" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
