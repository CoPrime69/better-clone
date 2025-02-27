import Image from "next/image";
import Header from "@/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ProductSection from "@/components/home/ProductSection";
import Footer from "@/layout/Footer";
export default function Home() {
  return (
    <>
      <Header />
        {/* Hero Section with Green Background and Phone Mockup */}
        <HeroSection />

        {/* Testimonial Section with Arian's Story */}
        <TestimonialSection />

        {/* Products Section with Cards */}
        <ProductSection />
      <Footer />
    </>
  );
}
