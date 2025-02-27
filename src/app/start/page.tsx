"use client";

import HeroSection from "@/components/start/HeroSection";
import Header from "@/components/start/Header";
import Footer from "@/app/Footer";

export default function StartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* Add your start page content here */}
      </main>
      <Footer />
      <Footer/>
    </div>
  );
}