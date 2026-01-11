'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
                });
                setFormData({ name: '', email: '', service: '', message: '' });
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.error || 'Failed to send message. Please try again.'
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'An error occurred. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className='max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12'>
                <div className='flex flex-col lg:flex-row justify-between gap-6 lg:gap-8'>
                    <div className='relative w-full lg:w-[40%]'>
                        <img src="/images/contact-bar.png" alt="Contact Form" className='object-cover w-full h-full rounded-xl' />
                        <div className='absolute top-0 left-0 pt-6 px-6 sm:pt-8 sm:px-8 md:pt-10 md:px-10'>
                            <h2 className='text-[#FF5900] font-medium text-2xl sm:text-3xl md:text-4xl'>Let's Connect</h2>
                            <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6 text-white'>
                                <h2 className='text-lg sm:text-xl md:text-2xl font-medium'>Address</h2>
                                <p className='text-sm sm:text-base'>242 Ellesmere Road, West Gate Road, Newcastle upon Tyne, NE4 8TQ UK</p>
                            </div>
                            <div className='border-2 text-gray-700 w-full mt-3 sm:mt-4'></div>
                            <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6 text-white'>
                                <h2 className='text-lg sm:text-xl md:text-2xl font-medium'>Email</h2>
                                <p className='text-sm sm:text-base'>info@xpertwebstudio.co.uk</p>
                            </div>
                            <div className='border-2 text-gray-700 w-full mb-3 mt-3 sm:mb-4 sm:mt-4'></div>
                            <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6 text-white'>
                                <h2 className='text-lg sm:text-xl md:text-2xl font-medium'>Phone Call</h2>
                                <p className='text-sm sm:text-base'>020 4592 1183</p>
                            </div>
                            <div className='border-2 text-gray-700 w-full mt-3 sm:mt-4'></div>
                            <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6 text-white'>
                                <h2 className='text-lg sm:text-xl md:text-2xl font-medium'>Follow Us</h2>
                                <div className='flex items-center gap-3 sm:gap-4'>
                                    <Link href="https://www.facebook.com/profile.php?id=61563486471739" className='cursor-pointer'>
                                        <div className='rounded-xl w-10 h-10 flex items-center justify-center border border-gray-600'>
                                        <img src="/images/icon 3.png" alt="" />
                                        </div>
                                    </Link>

                                    <Link href="https://www.instagram.com/xpertwebstudio/" className='cursor-pointer'>
                                        <div className='rounded-xl w-10 h-10 flex items-center justify-center border border-gray-600'>
                                            <img src="/images/icon 2.png" alt="" />
                                        </div>
                                    </Link>
                                    <Link href="https://www.facebook.com/profile.php?id=61563486471739" className='cursor-pointer'>
                                        <div className='rounded-xl w-10 h-10 flex items-center justify-center border border-gray-600'>
                                            <img src="/images/icon 1.png" alt="" />
                                        </div>
                                    </Link>
                                    <Link href="/" className='cursor-pointer'>
                                        <div className='rounded-xl w-10 h-10 flex items-center justify-center border border-gray-600'>
                                            <img src="/images/icon x.png" alt="" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[60%] px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-10'>
                        <div className='flex flex-col gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6'>
                            <div className='flex items-center gap-3 sm:gap-4'>
                                <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FF5900] rounded-full'></div>
                                <h1 className='text-lg sm:text-xl md:text-2xl font-medium text-white'>Get In Touch</h1>
                            </div>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium'>Get started and grow your business now.</h2>
                        </div>
                        <p className='text-white text-sm sm:text-base mb-6 sm:mb-8'>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>

                        {submitStatus && (
                            <div className={`px-4 py-3 rounded-lg mb-4 text-sm sm:text-base ${submitStatus.type === 'success'
                                    ? 'bg-green-500/10 border border-green-500 text-green-500'
                                    : 'bg-red-500/10 border border-red-500 text-red-500'
                                }`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className='flex flex-col gap-4 sm:gap-5 md:gap-6'>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <div className='flex-1'>

                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-[#1A1B1E] border border-gray-600 text-white rounded-lg focus:outline-none focus:border-[#FF5900]'
                                        placeholder='Name'
                                        required
                                    />
                                </div>

                                <div className='flex-1'>

                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-[#1A1B1E] border border-gray-500 text-white rounded-lg focus:outline-none focus:border-[#FF5900]'
                                        placeholder='Email'
                                        required
                                    />
                                </div>
                            </div>

                            <div>

                                <select
                                    id='service'
                                    name='service'
                                    value={formData.service}
                                    onChange={handleChange}
                                    className='w-full px-4 py-3 bg-[#1A1B1E] border border-gray-500 text-white rounded-lg focus:outline-none focus:border-[#FF5900]'
                                    required
                                >
                                    <option value=''>Select a service</option>
                                    <option value='web-development'>Web Development</option>
                                    <option value='mobile-app'>Mobile App Development</option>
                                    <option value='branding'>Branding</option>
                                    <option value='marketing'>Digital Marketing</option>
                                    <option value='consulting'>Consulting</option>
                                    <option value='other'>Other</option>
                                </select>
                            </div>

                            <div>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className='w-full px-4 py-3 bg-[#1A1B1E] border border-gray-500 text-white rounded-lg focus:outline-none focus:border-[#FF5900] resize-none'
                                    placeholder='Message'
                                    required
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='bg-[#FF5900] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#E54F00] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;
