"use client"
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Pricing = () => {
    const [activeTab, setActiveTab] = useState('logo-design')
    const swiperRef = useRef(null)

    const tabs = [
        { id: 'logo-design', label: 'Logo Design' },
        { id: 'website-development', label: 'Website Development' },
 
        { id: 'digital-marketing', label: 'Digital Marketing' },
        { id: 'combo-package', label: 'Combo Package' }
    ]

    const pricingData = {
        'logo-design': [
            {
                name: 'Basic',
                price: '€29.99',
                features: [
                    '4 Custom Logo Design Concepts',
                    '3 Revision Rounds',
                    '24 Hours TAT',
                    '100% Satisfaction Guarantee',
                    '100% Unique Design Guarantee',
                    '100% Money Back Guarantee '
                ]
            },
            {
                name: 'Standard',
                price: '€54.99',
                features: [
                    '4 Custom Logo Design Concepts',
                    'FREE Icon',
                    'FREE Grayscale Formats',
                    'Unlimited Revision Rounds',
                    '24 Hours TAT',
                    'Files Format (JPEG, PNG, PDF, TIFF)',
                    '100% Ownership Rights',
                    '100% Satisfaction Guarantee',
                    '100% Unique Design Guarantee (No Template)',
                    '100% Money Back Guarantee'
                ]
            },
            {
                name: 'Premium',
                price: '€99.99',
                features: [
                    '8 Logo Design Concepts',
                    'By 4 Designers',
                    'UNLIMITED Revisions',
                    'Stationary Design (Business Card, Letterhead, Envelope)',
                    'FREE MS Word Letterhead',
                    '48 to 72 hours TAT',
                    'All Final Files Format ( PSD,  PNG,  JPG)',
                    '100% Satisfaction Guarantee',
                    '100% Unique Design Guarantee',
                    '100% Money Back Guarantee '
                ]
            }
        ],
        'website-development': [
            {
                name: 'Basic',
                price: '€199.99',
                features: [
                    '5 Stock Photos',
                    '3 Page Website',
                    '3 Banner Design',
                    '1 jQuery Slider Banner',
                    'FREE Google Friendly Sitemap',
                    'Complete W3C Certified HTML',
                    '48 to 72 hours TAT',
                    'Facebook Page Design',
                    'Twitter Page Design',
                    'YouTube Page Design',
                    '100% Satisfaction Guarantee',
                    '100% Unique Design Guarantee',
                    '100% Money Back Guarantee *',
                    'Mobile Responsive will be Additional £99*',
                    'CMS will be Additional £299*'
                ]
            },
            {
                name: 'Standard',
                price: '€599.99',
                features: [
                    '10 Unique Pages Website',
                    'CMS / Admin Panel Support',
                    '8 Stock images',
                    '5 Banner Designs',
                    '1 jQuery Slider Banner',
                    'FREE Google Friendly Sitemap',
                    'Complete W3C Certified HTML',
                    '48 to 72 hours TAT',
                    'Facebook Page Design',
                    'Twitter Page Design',
                    'YouTube Page Design',
                    'Complete Deployment',
                    '100% Satisfaction Guarantee',
                    '100% Unique Design Guarantee',
                    '100% Money Back Guarantee *',
                    'Mobile Responsive will be Additional £99*'
                ]
            },
            {
                name: 'Premium',
                price: '€999.99',
                features: [
                    'Upto 15 Unique Pages Website',
                    'Conceptual and Dynamic Website',
                    'Mobile Responsive',
                    'Online Reservation/Appointment Tool (Optional)',
                    'Online Payment Integration (Optional)',
                    'Custom Forms',
                    'Lead Capturing Forms (Optional)',
                    'Striking Hover Effects',
                    'Newsletter Subscription (Optional)',
                    'Newsfeed Integration',
                    'Social Media Integration',
                    'Search Engine Submission',
                    '5 Stock Photos',
                    '3 Unique Banner Design',
                    '1 jQuery Slider Banner',
                    'Complete W3C Certified HTML',
                    '48 to 72 hours TAT',
                    'Facebook Page Design',
                    'Twitter Page Design',
                    'YouTube Page Design',
                    'Complete Deployment',
                    '100% Satisfaction Guarantee',
                    '100% Unique Design Guarantee',
                    '100% Money Back Guarantee *'
                ]
            }
        ],
        'ecommerce': [
            {
                name: 'Basic',
                price: '€499.99',
                features: [
                    'Up to 50 Products',
                    'Payment Gateway Integration',
                    'Basic Design',
                    'Mobile Responsive',
                    'Shopping Cart',
                    '30 Days Support'
                ]
            },
            {
                name: 'Standard',
                price: '€899.99',
                features: [
                    'Up to 200 Products',
                    'Multiple Payment Gateways',
                    'Custom Design',
                    'Inventory Management',
                    'Order Management',
                    '60 Days Support'
                ]
            },
            {
                name: 'Premium',
                price: '€1499.99',
                features: [
                    'Unlimited Products',
                    'Advanced Payment Options',
                    'Premium Design',
                    'Full Inventory System',
                    'Analytics Dashboard',
                    '90 Days Premium Support'
                ]
            }
        ],
        'digital-marketing': [
            {
                name: 'Basic',
                price: '€249.99',
                features: [
                    '10-15 postings per month (per network) Facebook + Twitter + Instagram +',
                    'Content Creation',
                    'Business Page Optimization',
                    'Social Media Strategy (Overview)',
                    'Monthly Progress report',
                    'Copy Writing'
                ]
            },
            {
                name: 'Standard',
                price: '€699.99',
                features: [
                    'Copywriting & Visual designs',
                    'Business Page Optimization',
                    'Ad Campaign Management',
                    'Spam monitoring',
                    'Monthly Progress report',
                    '5 postings per week Facebook + Twitter + Instagram +',
                    'Reputation Management',
                    'Social Account Setup',
                    'Content Creation',
                    'Social Media Listening',
                    'Query and comments reply'
                ]
            },
            {
                name: 'Premium',
                price: '€1199.99',
                features: [
                    'Copywriting & Visual designs',
                    'Business Page Optimization',
                    'Ad Campaign Management',
                    'Spam monitoring',
                    '6 postings per week Facebook + Twitter + Instagram +',
                    'Reputation Management',
                    'Social Account Setup',
                    'Content Creation',
                    'Social Media Hearing',
                    'Query and comments reply'
                ]
            }
        ],
        'combo-package': [
            {
                name: 'Basic',
                price: '€499.99',
                features: [
                    '5 Custom Logo Design Concepts',
                    'By 2 Designers',
                    'Icon Design',
                    'Business Card, Letterhead, Envelope, Fax Template',
                    'MS Word Letterhead',
                    '5 Page Website',
                    'Mobile Responsive',
                    'Team of Expert Designers & Developers',
                    '8 Stock images',
                    '5 Banner Designs',
                    'jQuery Sliders',
                    'Free Google Friendly Sitemap',
                    'Complete W3C Certified HTML',
                    'Complete Deployment',
                    'Facebook Page Design',
                    'Twitter Page Design',
                    'YouTube Page Design',
                    'All Final File Formats',
                    'Dedicated Account Manager',
                    '100% Ownership Rights',
                    '100% Satisfaction Guarantee',
                    '100% Unique Design Guarantee',
                    '100% Money Back Guarantee *'
                ]
            },
            {
                name: 'Standard',
                price: '€999.99',
                features: [
                    'Unlimited Logo Design Concepts',
                    '+ Social Media Design',
                    'Mobile Responsive',
                    '3 Dedicated Designers',
                    'Icon Design',
                    'Business Card, Letterhead, Envelope',
                    'MS Word Letterhead',
                    'UNLIMITED Pages Website',
                    'Content Management System (CMS)',
                    '5 Stock Photos + 3 Banner Designs',
                    'Complete W3C Certified HTML',
                    'Complete Deployment',
                    'Facebook Page Design',
                    'Twitter Page Design',
                    'YouTube Page Design',
                    'All Final File Formats',
                    'Dedicated Account Manager',
                    '100% Ownership Rights',
                    '100% Satisfaction Guarantee',
                    '100% Unique Design Guarantee',
                    '100% Money Back Guarantee *'
                ]
            },
            {
                name: 'Premium',
                price: '€1299.99',
                features: [
                    'Unlimited Logo Concepts',
                    '8 Dedicated Designers',
                    'Icon Design',
                    '2 Free Custom Stationary Designs',
                    'MS Word Letterhead',
                    'Trifold Brochure Design',
                    'Presentation Folder Design',
                    'Conceptual and Dynamic Liquid Website',
                    'Team of Expert Designers & Developers',
                    'Mobile Responsive',
                    'Online Reservation/Appointment Tool (Optional)',
                    'Custom Forms',
                    'Lead Capturing Forms (Optional)',
                    'Newsfeed Integration',
                    'Social Media Integration',
                    'Search Engine Submission',
                    '15 Stock images',
                    '8 Unique Banner Designs',
                    'jQuery Sliders',
                    'Free Google Friendly Sitemap',
                    'Complete W3C Certified HTML',
                    'Facebook Page Design',
                    'Twitter Page Design',
                    'YouTube Page Design',
                    'Page Design',
                    'All Final File Formats',
                    'Dedicated Account Manager',
                    '100% Ownership Rights',
                    '100% Satisfaction Guarantee',
                    '100% Unique Design Guarantee',
                    '100% Money Back Guarantee *'
                ]
            }
        ]
    }

    const plans = pricingData[activeTab] || []

    return (
        <section className="w-full xl:px-26  lg:px-26  max-sm:px-6 md:px-16 sm:px-12  mx-auto mt-20 text-white">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 sm:mb-4 px-4">
                    Pocket-Friendly Pricing Plan!
                </h2>
                <p className="text-white/70 text-sm sm:text-base md:text-lg px-4">
                    Boost your brand, engage customers, and grow with XpertWebStudio.
                </p>
            </div>

            {/* Tabs - Hidden on mobile/tablet, shown on lg+ */}
            <div className="hidden lg:flex justify-center mb-8 sm:mb-10 md:mb-12 px-4">
                <div className="inline-flex rounded-lg bg-[#1A1B1E] p-1 gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 lg:px-10 py-3 rounded-md text-md font-medium transition-all duration-300 whitespace-nowrap ${
                                activeTab === tab.id
                                    ? 'text-[#FF5900]'
                                    : 'text-white hover:text-white'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Select Dropdown - Shown on mobile/tablet, hidden on lg+ */}
            <div className="lg:hidden flex justify-center mb-8 sm:mb-10 md:mb-12 px-4">
                <Select value={activeTab} onValueChange={setActiveTab}>
                    <SelectTrigger className="w-full max-w-md rounded-lg bg-[#1A1B1E] text-white px-4 py-3 text-sm sm:text-base font-medium border-2 border-[#FF5900] focus:ring-2 focus:ring-[#FF5900] h-auto">
                        <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1B1E] border-[#FF5900] text-white">
                        {tabs.map((tab) => (
                            <SelectItem 
                                key={tab.id} 
                                value={tab.id}
                                className="focus:bg-[#FF5900]/20 focus:text-white cursor-pointer"
                            >
                                {tab.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Pricing Cards Slider */}
            <div className="relative px-4">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ 
                        clickable: true,
                        bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#FF5900]',
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 32,
                        },
                    }}
                    className="pricing-swiper !pb-12"
                >
                    {plans.map((plan, index) => (
                        <SwiperSlide key={`${activeTab}-${index}`}>
                            <div className="rounded-md border-2 border-[#FF5900] bg-[#0c0d12]/50 p-4 sm:p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 h-full">
                                {/* Plan Name */}
                                <h3 className="text-xl sm:text-2xl font-semibold text-center text-white mb-3 sm:mb-4">
                                    {plan.name}
                                </h3>

                                {/* Underline */}
                                <div className="h-[1px] bg-white mb-4 sm:mb-6"></div>

                                {/* Pricing */}
                                <div className="mb-4 sm:mb-6 text-center">
                                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF5900]">
                                        {plan.price}
                                    </span>
                                    <span className="text-white/70 ml-2 text-sm sm:text-base">/month</span>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 h-[240px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FF5900] scrollbar-track-gray-800 pr-2">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 sm:gap-3 text-white/80 text-xs sm:text-sm">
                                            <svg
                                                className="w-5 h-5 text-white flex-shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className='text-white'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Underline */}
                                <div className="h-[1px] bg-white mb-4 sm:mb-6"></div>

                                {/* Order Button */}
                                <div className='w-44 mx-auto'>
                                    <button className="w-full rounded-[51.8px] bg-[#FF5900] px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:bg-[#ff6a1a] hover:shadow-[0_10px_30px_rgba(255,89,0,0.4)]">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Pricing
