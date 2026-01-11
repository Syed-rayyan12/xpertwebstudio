import React from 'react'
import Header from '../components/Header';
import WebDesignBanner from '../components/web-design/web-design-banner';
import LoopMarquee from '../components/customComponents/loop-marquee';
import WhoWeAreDesign from '../components/web-design/who-we-are-design';
import WebDesignSection from '../components/web-design/web-design-section';
import Pricing from '../components/homeComponents/Pricing';
import WebDesignProjects from '../components/web-design/web-design-projects';
import TestimonialSlider from '../components/about-us/testimonial-slider';
import AboutMarquee from '../components/about-us/about-marquee';
import BlogSlider from '../components/customComponents/BlogSlider';
import SheetMarquee from '../components/customComponents/sheet-marquee';
import Footer from '../components/customComponents/Footer';

const page = () => {
    return (
        <>
            <Header />
            <WebDesignBanner />
            <LoopMarquee />
            <WhoWeAreDesign />
            <WebDesignSection />
            <Pricing />
            <WebDesignProjects />
            <TestimonialSlider />
            <AboutMarquee />
            <BlogSlider />
            <SheetMarquee />
            <Footer />
        </>
    )
}

export default page;
