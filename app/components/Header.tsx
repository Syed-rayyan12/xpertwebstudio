// import LogoMark from "./header/LogoMark";
// import ViewWorkButton from "./header/ViewWorkButton";

// type NavItem = {
//   label: string;
//   href: string;
//   hasDropdown?: boolean;
// };

// const navItems: NavItem[] = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services", hasDropdown: true },
//   { label: "Packages", href: "#packages" },
//   { label: "Reviews", href: "#reviews" },
// ];

// const arrowIcon = (
//   <svg
//     aria-hidden="true"
//     className="size-3 text-white/70"
//     viewBox="0 0 12 8"
//     fill="none"
//   >
//     <path
//       d="M1 2.25 5.5 6.5 10 2.25"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// export function Header() {
//   return (
//     <header className="flex w-full items-center justify-center px-6 pt-12 text-white">
//       <div className="flex w-full max-w-6xl flex-col items-center gap-6 rounded-[999px] border border-white/10 bg-[#111317] px-6 py-6 shadow-[0_15px_45px_rgba(0,0,0,0.55)] lg:flex-row lg:gap-8 lg:px-8 lg:py-4">
//         <div className="flex items-center gap-3">
//             <LogoMark />
//         </div>

// <nav className="flex w-full items-center justify-center text-sm font-medium tracking-wide lg:flex-1">
//   <ul className="flex flex-wrap items-center justify-center gap-4 text-white/80 md:gap-6 lg:gap-8">
//     {navItems.map((item) => (
//       <li key={item.label}>
//         <a
//           href={item.href}
// className="inline-flex items-center gap-2 transition-colors hover:text-white"
//         >
//           <span>{item.label}</span>
//           {item.hasDropdown ? arrowIcon : null}
//         </a>
//       </li>
//     ))}
//   </ul>
// </nav>

//         <div className="flex flex-col items-center gap-2 text-sm lg:flex-row">
//           <ViewWorkButton />
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import LogoMark from "./header/LogoMark"
import ViewWorkButton from "./header/ViewWorkButton"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showServicesMenu, setShowServicesMenu] = useState(false)
  const [showMobileServicesMenu, setShowMobileServicesMenu] = useState(false)
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "Packages", href: "/packages" },
    { name: "Reviews", href: "/reviews" },
  ]

  const serviceLinks = [
    { name: "Web Development", href: "/web-development" },
    { name: "Logo Design", href: "/logo-design" },
    { name: "App Development", href: "/app-development" },
    { name: "SEO & Content Writing", href: "/seo-friendly" },
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Ecommerce Web Solutions", href: "/ecommerce-web-solutions" },
  ]

  const serviceContent: Record<string, { title: string; description: string; image: string }> = {
    "Web Development": {
      title: "Web Development",
      description: "Build responsive, high-performance websites with cutting-edge technologies and best practices.",
      image: "/images/web-development-service.png"
    },
    "Logo Design": {
      title: "Logo Design",
      description: "Create memorable brand identities with unique, professional logo designs that stand out.",
      image: "/images/logo-section.png"
    },
    "App Development": {
      title: "App Development",
      description: "Develop powerful mobile applications for iOS and Android with seamless user experiences.",
      image: "/images/app-image.png"
    },
    "SEO & Content Writing": {
      title: "SEO & Content Writing",
      description: "Boost your online visibility with SEO-optimized content that ranks and engages your audience.",
      image: "/images/design-1.png"
    },
    "Digital Marketing": {
      title: "Digital Marketing",
      description: "Drive growth with data-driven digital marketing strategies across all major platforms.",
      image: "/images/digital-section.png"
    },
    "Ecommerce Web Solutions": {
      title: "Ecommerce Solutions",
      description: "Launch and scale your online store with custom ecommerce solutions built for conversion.",
      image: "/images/web-design.png"
    },
    default: {
      title: "View All Services",
      description: "Explore our complete range of digital services designed to elevate your brand and drive growth.",
      image: "/images/work-banner.png"
    }
  }
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999999 }}>
        <header
          className={`flex justify-between  items-center my-2 sm:my-3 md:my-4 mx-auto transition-all duration-300 ${
            isScrolled 
              ? "h-16 sm:h-18 md:h-20 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[70%] max-sm:px-4 lg:px-8 border rounded-3xl md:rounded-4xl border-gray-200/50 bg-white/20 backdrop-blur-xl shadow-lg" 
              : "h-16 sm:h-18 md:h-20 xl:px-16   lg:px-12  max-sm:px-4 md:px-10 sm:px-6 border-none bg-transparent"
          }`}
        >

          {/* Logo */}
          <Link href="/" className="flex items-center  gap-2">
            <div className="flex items-center gap-3">
              <LogoMark />
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8 xl:gap-10 px-4 lg:px-6 xl:px-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setShowServicesMenu(true)}

              >
                {item.hasDropdown ? (
                  <>
                    <button
                      className="inline-flex text-white cursor-pointer items-center font-normal text-white text-[16px] gap-2 transition-colors hover:text-white font-[family-name:var(--font-asap)]"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${showServicesMenu ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" className="text-white" />
                      </svg>
                    </button>

                    {/* Backdrop Blur - Below Header, starts after header */}
                    {showServicesMenu && (
                      <div
                        className="fixed bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                        style={{
                          top: '120px',
                          left: '0',
                          right: '0',
                          bottom: '0',
                          opacity: showServicesMenu ? 1 : 0,
                          zIndex: 999998
                        }}
                      />
                    )}

                    {/* Mega Menu Dropdown */}
                    <div
                      className={`fixed bg-[#1A1B1E] border border-gray-800 rounded-2xl shadow-2xl transition-all duration-300 ${showServicesMenu
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-0 pointer-events-none'
                        }`}
                      style={{
                        left: '50%',
                        transform: showServicesMenu ? 'translate(-50%, 0)' : 'translate(-50%, -16px)',
                        top: '90px',
                        width: '730px',
                        zIndex: 999999
                      }}
                      onMouseEnter={() => setShowServicesMenu(true)}
                      onMouseLeave={() => setShowServicesMenu(false)}
                    >
                      <div className="flex">
                        {/* Left Side - Service Links */}
                        <div className="w-1/2 p-6 border-r border-gray-800">
                          <h3 className="text-[#FF5900] font-semibold text-lg mb-4">Our Services</h3>
                          <ul className="space-y-0">
                            {serviceLinks.map((service) => (
                              <li key={service.name}>
                                <Link
                                  href={service.href}
                                  className="flex items-center cursor-pointer justify-between text-gray-300 hover:text-white hover:bg-gray-900 px-3 py-2 rounded transition-all group"
                                  onMouseEnter={() => setHoveredService(service.name)}
                                  onMouseLeave={() => setHoveredService(null)}
                                >
                                  <span className="font-medium">{service.name}</span>
                                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right Side - Featured Box */}
                        <div className="w-1/2 p-6 hover:bg-gray-900 transition-colors cursor-pointer">
                          <div className="bg-black rounded-xl p-6">
                            <div
                              key={hoveredService || 'default'}
                              className="animate-in fade-in duration-500">
                              <div className="flex items-start justify-between mb-3">
                                <h3 className="text-white font-bold text-xl transition-all duration-500 ease-in-out">
                                  {hoveredService ? serviceContent[hoveredService].title : serviceContent.default.title}
                                </h3>
                                <ChevronRight className="w-5 h-5 text-[#FF5900]" />
                              </div>
                              <p className="text-gray-400 text-sm mb-4 leading-relaxed transition-all duration-500 ease-in-out">
                                {hoveredService ? serviceContent[hoveredService].description : serviceContent.default.description}
                              </p>
                              <div className="rounded-lg overflow-hidden">
                                <img
                                  src={hoveredService ? serviceContent[hoveredService].image : serviceContent.default.image}
                                  alt={hoveredService || "Services"}
                                  className="w-full h-32 object-cover transition-opacity duration-800 ease-in-out transform hover:scale-105"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex text-white items-center font-normal text-[16px] gap-2 transition-colors hover:text-white font-[family-name:var(--font-asap)]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Invisible Bridge - Outside of map */}
          {showServicesMenu && (
            <div
              className="fixed"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
                top: '80px',
                width: '730px',
                height: '40px',
                zIndex: 999999
              }}
              onMouseEnter={() => setShowServicesMenu(true)}
            />
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex flex-col items-center gap-2 text-sm lg:flex-row">
              <ViewWorkButton />
            </div>
          </div>

        </header>

        {/* Mobile Menu Backdrop Blur */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-opacity duration-300"
            onClick={() => {
              setIsOpen(false)
              setShowMobileServicesMenu(false)
            }}
          />
        )}

        {/* Mobile Menu Sheet - Slides from Left */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-[#1A1B1E] z-[9999] transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-white text-xl font-semibold">Menu</h2>
              <button
                onClick={() => {
                  setIsOpen(false)
                  setShowMobileServicesMenu(false)
                }}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setShowMobileServicesMenu(!showMobileServicesMenu)}
                        className="w-full flex items-center justify-between text-white hover:text-[#FF5900] hover:bg-white/5 py-3 px-4 rounded-lg text-lg transition-colors"
                      >
                        <span>{item.name}</span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${
                            showMobileServicesMenu ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Mobile Services Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          showMobileServicesMenu ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="ml-4 mt-2 space-y-1 border-l-2 border-[#FF5900]/30 pl-4">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block text-white/80 hover:text-[#FF5900] py-2 text-base transition-colors"
                              onClick={() => {
                                setIsOpen(false)
                                setShowMobileServicesMenu(false)
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white hover:text-[#FF5900] hover:bg-white/5 py-3 px-4 rounded-lg text-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8 px-4">
              <ViewWorkButton />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
