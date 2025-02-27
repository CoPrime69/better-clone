// src/components/about/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="min-h-screen h-screen bg-[#FFFDFA] flex items-center justify-center text-black px-4 md:px-[80px] mt-[60px] max-w-screen-xl m-auto">
      <div className="max-w-[1200px] text-center px-4 mx-auto">
        <h3 className="text-[#0A7B3E] text-xl md:text-[32px] mb-6 font-semibold tracking-normal md:tracking-tight m-0 p-0 w-auto">
          Our mission
        </h3>
        <h1 className="text-2xl md:text-[48px] font-semibold text-gray-800 leading-tight tracking-tight md:tracking-tighter mt-8 m-0 p-0 w-auto">
          We&apos;re making homeownership simpler, faster — 
          and most importantly, more accessible for all Americans.
        </h1>
      </div>
    </section>
  );
}