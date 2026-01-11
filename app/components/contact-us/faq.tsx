"use client"

import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What services does XpertWebStudio offer?",
            answer: "We offer a comprehensive range of services including web development, UI/UX design, digital marketing, brand strategy, SEO optimization, and more. Our team specializes in creating custom solutions tailored to your business needs."
        },
        {
            question: "How long does it take to design and develop a website?",
            answer: "Project timelines vary depending on the scope and complexity. A typical website project takes 4-8 weeks, while larger projects may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
        },
        {
            question: "Which platforms or CMS do you work with?",
            answer: "Our pricing is project-based and depends on your specific requirements. We offer flexible packages and custom solutions. Contact us for a detailed quote tailored to your needs."
        },
        {
            question: "Do you offer eCommerce website development?",
            answer: "Yes, we offer comprehensive support and maintenance packages to ensure your website stays up-to-date, secure, and performing optimally. We provide different levels of support based on your needs."
        },
        {
            question: "Will my website be mobile-friendly and SEO-optimized?",
            answer: "Absolutely! We can redesign, optimize, or enhance your existing website. Whether you need a complete overhaul or specific improvements, we're here to help."
        },
        {
            question: "Do you provide ongoing website support and maintenance?",
            answer: "Yes, we work with startups, small businesses, and large enterprises. Our flexible approach allows us to scale our services to match your business size and goals."
        },
                {
            question: "How can I get started with XpertWebStudio?",
            answer: "Yes, we work with startups, small businesses, and large enterprises. Our flexible approach allows us to scale our services to match your business size and goals."
        } 
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-16'>
            <div className='max-w-[1280px] mx-auto rounded-xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12'>
                <div className='mb-8 sm:mb-9 md:mb-10'>
                    <div className='flex items-center gap-3 mb-4'>
                       
                     
                    </div>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium text-white text-center'>Frequently Asked Questions</h2>
                    <p className='text-white text-sm sm:text-base mt-3 sm:mt-4 text-center'>Helping You Make Informed Decisions</p>
                </div>

                <div className='space-y-3 sm:space-y-4'>
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className='bg-[#1A1B1E] max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto border border-gray-700 rounded-lg overflow-hidden transition-all duration-300'
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className='w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left bg-transparent transition-colors duration-300'
                            >
                                <span className='text-sm sm:text-base md:text-lg font-medium text-white pr-3 sm:pr-4'>{faq.question}</span>
                                <span className='text-[#FF5900] text-2xl flex-shrink-0 transition-transform duration-300'>
                                    {openIndex === index ? (
                                        <svg 
                                            width="24" 
                                            height="24" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    ) : (
                                        <svg 
                                            width="24" 
                                            height="24" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        >
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    )}
                                </span>
                            </button>
                            <div 
                                className='overflow-hidden transition-all duration-300'
                                style={{ 
                                    maxHeight: openIndex === index ? '500px' : '0',
                                    opacity: openIndex === index ? 1 : 0
                                }}
                            >
                                <div className='px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6 text-sm sm:text-base text-gray-300 leading-relaxed'>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
