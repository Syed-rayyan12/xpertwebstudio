import React from 'react'
import Header from '../components/Header'
import VideoBanner from '../components/video-testimonial/video-banner'
import LoopMarquee from '../components/customComponents/loop-marquee'
import VideoTestimonials from '../components/video-testimonial/video-testimonials'
import AboutMarquee from '../components/about-us/about-marquee'
import SheetMarquee from '../components/customComponents/sheet-marquee'
import { Footer } from '../components/customComponents'
import BlogSlider from '../components/customComponents/BlogSlider'

const page = () => {
    return (
        <>
            <Header />
            <VideoBanner />
            <LoopMarquee />
            <VideoTestimonials />
            <AboutMarquee />
            <BlogSlider />
            <SheetMarquee />
            <Footer />
        </>
    )
}

export default page
