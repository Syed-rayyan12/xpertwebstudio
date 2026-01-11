import React from 'react'
import Header from '../components/Header'
import LogoBanner from '../components/logo-design/logo-banner'
import LoopMarquee from '../components/customComponents/loop-marquee'
import WhoWeAreLogo from '../components/logo-design/who-we-are-logo'
import LogoSection from '../components/logo-design/logo-section'
import Pricing from '../components/homeComponents/Pricing'
import TestimonialSlider from '../components/about-us/testimonial-slider'
import AboutMarquee from '../components/about-us/about-marquee'
import BlogSlider from '../components/customComponents/BlogSlider'
import SheetMarquee from '../components/customComponents/sheet-marquee'
import Footer from '../components/customComponents/Footer'
import LogoDesignProject from '../components/logo-design/logo-design-project'

const page = () => {
    return (
        <>
            <Header />
            <LogoBanner />
            <LoopMarquee />
            <WhoWeAreLogo />
            <LogoSection />
            <Pricing />
            <LogoDesignProject/>
            <TestimonialSlider />
            <AboutMarquee />
            <BlogSlider />
            <SheetMarquee />
            <Footer />
        </>
    )
}

export default page
