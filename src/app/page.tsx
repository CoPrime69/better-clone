import Image from "next/image";
import Header from "@/app/Header";
import HeroSection from "@/components/home/HeroSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ProductSection from "@/components/home/ProductSection";
import Footer from "@/app/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* Add a spacer to account for the fixed header */}
      {/* <div className="h-16"></div> */}
      
      {/* Main content */}
      <main>
        {/* Hero Section with Green Background and Phone Mockup */}
        <HeroSection />

        {/* Testimonial Section with Arian's Story */}
        <TestimonialSection />

        {/* Products Section with Cards */}
        <ProductSection />
      </main>
      
      <Footer />
    </>
  );
}