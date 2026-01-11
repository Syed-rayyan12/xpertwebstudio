import React from 'react'
import Header from '../components/Header'
import ReviewsBanner from '../components/reviews-page/reviews-banner'
import LoopMarquee from '../components/customComponents/loop-marquee'
import TestimonialCards from '../components/about-us/testimonial-cards'
import AboutMarquee from '../components/about-us/about-marquee'
import BlogSlider from '../components/customComponents/BlogSlider'
import SheetMarquee from '../components/customComponents/sheet-marquee'
import Footer from '../components/customComponents/Footer'

const page = () => {
  return (
    <>
      <Header />
      <ReviewsBanner />
      <LoopMarquee />
      <TestimonialCards />
      <AboutMarquee />
      <BlogSlider />
      <SheetMarquee />
      <Footer />
    </>
  )
}

export default page
