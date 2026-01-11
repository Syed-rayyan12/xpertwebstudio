import React from 'react'
import Header from '../components/Header'
import AppBanner from '../components/app-development/app-banner'
import LoopMarquee from '../components/customComponents/loop-marquee'
import WhoWeAreApp from '../components/app-development/who-we-are-app'
import TestimonialSlider from '../components/about-us/testimonial-slider'
import AboutMarquee from '../components/about-us/about-marquee'
import BlogSlider from '../components/customComponents/BlogSlider'
import SheetMarquee from '../components/customComponents/sheet-marquee'
import Footer from '../components/customComponents/Footer'
import AppProjects from '../components/app-development/app-projects'
import AppSection from '../components/app-development/app-section'
import Pricing from '../components/homeComponents/Pricing'

const page = () => {
    return (
        <>
            <Header />
            <AppBanner />
            <LoopMarquee />
            <WhoWeAreApp />
            <AppSection/>
            <Pricing/>
            <AppProjects />
            <TestimonialSlider />
            <AboutMarquee />
            <BlogSlider />
            <SheetMarquee />
            <Footer />
        </>
    )
}

export default page
