import React from 'react'
import Header from '../components/Header'
import PackagesBanner from '../components/packages/packages-banner'
import LoopMarquee from '../components/customComponents/loop-marquee'
import Pricing from '../components/homeComponents/Pricing'
import TestimonialSlider from '../components/about-us/testimonial-slider'
import AboutMarquee from '../components/about-us/about-marquee'
import BlogSlider from '../components/customComponents/BlogSlider'
import SheetMarquee from '../components/customComponents/sheet-marquee'
import { Footer } from '../components/customComponents'

const page = () => {
    return (
        <>
            <Header />
            <PackagesBanner />
            <LoopMarquee />
            <Pricing />
            <TestimonialSlider />
             <AboutMarquee/>
             <BlogSlider />
              <SheetMarquee/>
              <Footer/>

        </>
    )
}

export default page
