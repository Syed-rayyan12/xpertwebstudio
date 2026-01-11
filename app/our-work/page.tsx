import React from 'react'
import Header from '../components/Header'
import WorkBanner from '../components/our-work/work-banner'
import LoopMarquee from '../components/customComponents/loop-marquee'
import Projects from '../components/our-work/projects'
import AboutMarquee from '../components/about-us/about-marquee'
import BlogSlider from '../components/customComponents/BlogSlider'
import SheetMarquee from '../components/customComponents/sheet-marquee'
import { Footer } from '../components/customComponents'

const page = () => {
  return (
    <>
       <Header/>
       <WorkBanner />
       <LoopMarquee/>
       <Projects/>
        <AboutMarquee/>
             <BlogSlider />
              <SheetMarquee/>
              <Footer/>
    </>
  )
}

export default page
