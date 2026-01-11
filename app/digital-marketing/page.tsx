import React from 'react'
import Header from '../components/Header'
import LoopMarquee from '../components/customComponents/loop-marquee'
import DigitalMarketingBanner from '../components/digital-marketing/digital-marketing'
import WhoWeAreDigital from '../components/digital-marketing/who-we-are-digitals'
import DigitalSection from '../components/digital-marketing/digital-section'
import Pricing from '../components/homeComponents/Pricing'
import DigitalProjects from '../components/digital-marketing/digital-projects'
import TestimonialSlider from '../components/about-us/testimonial-slider'
import AboutMarquee from '../components/about-us/about-marquee'
import BlogSlider from '../components/customComponents/BlogSlider'
import SheetMarquee from '../components/customComponents/sheet-marquee'
import Footer from '../components/customComponents/Footer'

const page = () => {
  return (
    <>
      <Header />
      <DigitalMarketingBanner />
      <LoopMarquee />
      <WhoWeAreDigital />
      <DigitalSection />
      <Pricing />
      <DigitalProjects />
      <TestimonialSlider />
      <AboutMarquee />
      <BlogSlider />
      <SheetMarquee />
      <Footer />

    </>
  )
}

export default page
