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
    <footer className=" text-white pt-8 pb-8 px-8">
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
              <a href="#about" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">About</a>
              <a href="#services" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">Packages</a>
              <a href="#contact" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">Portfolio</a>
              <a href="#contact" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">Contact Us</a>
            </nav>
            <nav className="flex flex-col items-start gap-1.5 sm:gap-2">
              <a href="#home" className="hover:text-[#FF5900] text-[#FF5900] font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Services</a>
              <a href="#about" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">Web Development</a>
              <a href="#services" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">App Development</a>
              <a href="#contact" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">Logo Design</a>
            </nav>
            <nav className="flex flex-col items-start gap-1.5 sm:gap-2">
              <a href="#home" className="hover:text-[#FF5900] text-[#FF5900] font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Services</a>
              <a href="#about" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">Digital Marketing</a>
              <a href="#services" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">Ecommerce Website</a>
            </nav>
            <nav className="flex flex-col items-start gap-1.5 sm:gap-2">
              <a href="#home" className="hover:text-[#FF5900] text-[#FF5900] mb-2 sm:mb-4 text-sm sm:text-base">Quick Links</a>
              <a href="#about" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">Blogs</a>
              <a href="#services" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">Reviews</a>
              <a href="#contact" className="hover:text-[#FF5900] text-xs sm:text-sm md:text-base">Video Testimonials</a>
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
  );
};

export default Footer;
