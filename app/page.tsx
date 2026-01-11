import Header from "./components/Header";
import Banner from "./components/Banner";
import Mastery from "./components/homeComponents/Mastery";
import ProjectShowcase from "./components/homeComponents/ProjectShowcase";
import Pricing from "./components/homeComponents/Pricing";
import Services from "./components/homeComponents/Services";
import ServicesDetail from "./components/homeComponents/ServicesDetail";
import Marquee from './components/homeComponents/Marquee'
import BlogSlider from './components/customComponents/BlogSlider';
import SheetMarquee from "./components/customComponents/sheet-marquee";
import { Footer } from "./components/customComponents";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Mastery />
      <ProjectShowcase />
      <Pricing />
      <Services />
      <ServicesDetail />
      <Marquee />
      <BlogSlider />
       <SheetMarquee/>
       {/* <Footer/>   */}
    </>
  );
}
