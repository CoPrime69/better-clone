import Image from "next/image";
import Header from "@/app/Header";
import HeroSection from "@/components/home/HeroSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ProductSection from "@/components/home/ProductSection";
import Footer from "@/app/Footer";
import MortgageCalculator from '@/components/mortgage-calculator/MortgageCalculator';

export default function Home() {
  return (
    <>
      <Header />      
      <main>
        <HeroSection />
        <TestimonialSection/>
        <ProductSection />
      </main>
      <Footer />
    </>
  );
}