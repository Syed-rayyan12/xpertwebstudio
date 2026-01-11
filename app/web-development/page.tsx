import React from 'react'
import Header from '../components/Header'
import ServicebannerOne from '../components/web-development/service-banner-one'
import LoopMarquee from '../components/customComponents/loop-marquee'
import WhoWeAre from '../components/web-development/who-we-are'
import WebDevelopmentSection from '../components/web-development/web-development-section'
import WebProjects from '../components/web-development/web-projects'
import TestimonialSlider from '../components/about-us/testimonial-slider'
import AboutMarquee from '../components/about-us/about-marquee'
import BlogSlider from '../components/customComponents/BlogSlider'
import SheetMarquee from '../components/customComponents/sheet-marquee'
import Footer from '../components/customComponents/Footer'
import Pricing from '../components/homeComponents/Pricing'

const page = () => {
    return (
        <>
            <Header />
            <ServicebannerOne />
            <LoopMarquee />
            <WhoWeAre/>
            <WebDevelopmentSection/>
            <Pricing />
            <WebProjects/>
            <TestimonialSlider/>
             <AboutMarquee/>
             <BlogSlider />
              <SheetMarquee/>
              <Footer/>
            
        </>
    )
}

export default page
