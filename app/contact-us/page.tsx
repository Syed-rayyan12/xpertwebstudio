import React from 'react'
import Header from '../components/Header'
import ContactBanner from '../components/contact-us/contact-banner'
import LoopMarquee from '../components/customComponents/loop-marquee'
import ContactForm from '../components/contact-us/contact-form'
import FAQ from '../components/contact-us/faq'
import AboutMarquee from '../components/about-us/about-marquee'
import BlogSlider from '../components/customComponents/BlogSlider'
import SheetMarquee from '../components/customComponents/sheet-marquee'
import { Footer } from '../components/customComponents'

const page = () => {
    return (
        <>
            <>
                <Header />
                <ContactBanner />
                <LoopMarquee />
                <ContactForm />
                <FAQ />
                <AboutMarquee />
                <BlogSlider />
                <SheetMarquee />
                <Footer />
            </>
        </>
    )
}

export default page
