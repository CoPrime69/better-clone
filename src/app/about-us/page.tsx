// src/app/about-us/page.tsx
import HeroSection from "@/components/about/HeroSection";
// import MissionSection from '@/components/about-us/MissionSection'
// import TeamSection from '@/components/about/TeamSection'
// import ValuesSection from '@/components/about/ValuesSection'
import StatusSection from "@/components/about/StatusSection";
import SecondarySection from "@/components/about/SecondarySection";
import BackedBySection from "@/components/about/BackedBySection";
import TimelineSection from "@/components/about/TimelineSection";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatusSection />
        <SecondarySection />
        <BackedBySection />
        <TimelineSection/>
        {/* <MissionSection />
      <TeamSection />
      <ValuesSection /> */}
      </main>
      <Footer />
    </>
  );
}
