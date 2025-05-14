'use client';
import Footer from "@/compoents/footer";
import About from "@/compoents/landing.page/about";
import CtaCard from "@/compoents/landing.page/cta.card";
// import Blog from "@/compoents/landing.page/blog";
import Hero from "@/compoents/landing.page/hero";
import Navbar from "@/compoents/landing.page/navbar";
// import { ServicesOverview } from "@/compoents/landing.page/services.overview";
import ServicesOverview from "@/compoents/landing.page/services.overview";
import Reviews from "@/compoents/portfolio.page/reviews";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <Hero />
      
      <About />
      
      <ServicesOverview />
      

      <Reviews />
      <CtaCard />
      <Footer />
    </>
  );
}