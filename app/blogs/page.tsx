import React from 'react'
import Header from '../components/Header'
import BlogBanner from '../components/blogs/blog-banner'
import LoopMarquee from '../components/customComponents/loop-marquee'
import AllBlogs from '../components/blogs/all-blogs'
import AboutMarquee from '../components/about-us/about-marquee'
import BlogSlider from '../components/customComponents/BlogSlider'
import SheetMarquee from '../components/customComponents/sheet-marquee'
import Footer from '../components/customComponents/Footer'

const page = () => {
    return (
        <>
            <Header />
            <BlogBanner />
            <LoopMarquee />
            <AllBlogs />
            <AboutMarquee />
            <BlogSlider />
            <SheetMarquee />
            <Footer />
        </>
    )
}

export default page
