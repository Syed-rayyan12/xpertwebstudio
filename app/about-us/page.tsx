import React from 'react'
import Header from '../components/Header'
import AboutBanner from '../components/about-us/about-banner'
import SheetMarquee from '../components/customComponents/sheet-marquee'
import AboutSheet from '../components/about-us/about-sheet'
import AboutSection from '../components/about-us/about-section'
import AboutSectionTwo from '../components/about-us/about-section-two'
import LogoMarquee from '../components/about-us/logo-marquee'
import TeamSlider from '../components/about-us/team-slider'
import Services from '../components/homeComponents/Services'
import ServicesDetail from '../components/homeComponents/ServicesDetail'
import Bann from '../components/about-us/bann'
import Marquee from '../components/homeComponents/Marquee'
import TestimonialSlider from '../components/about-us/testimonial-slider'
import AboutMarquee from '../components/about-us/about-marquee'
import BlogSlider from '../components/customComponents/BlogSlider'
import { Footer } from '../components/customComponents'



const page = () => {
    return (
        <>
            <Header />
            <AboutBanner />
             <AboutSheet/>
             <AboutSection/>
             <AboutSectionTwo />
             <LogoMarquee />
             <TeamSlider />
              
             <Bann/>
             <TestimonialSlider/>
             <AboutMarquee/>
             <BlogSlider />
              <SheetMarquee/>
              <Footer/>
            
        
             
        </>
    )
}

export default page
