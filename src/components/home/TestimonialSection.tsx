// src/components/home/TestimonialSection.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type TestimonialName = "Arian" | "Amanda" | "Paul";

export default function TestimonialSection() {
  const [activeTestimonial, setActiveTestimonial] =
    useState<TestimonialName>("Arian");

  const testimonials: Record<
    TestimonialName,
    { text: string; image: string; type: string }
  > = {
    Arian: {
      text: "The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the ones that provided me with the lowest interest rate.",
      image: "/images/testimonials/still-quote-Arian.webp",
      type: "Better Mortgage customer",
    },
    Amanda: {
      text: "",
      image: "/images/testimonials/still-quote-Amanda.webp",
      type: "Better Mortgage customer",
    },
    Paul: {
      text: "I used Better three years ago for my primary residence and just now for my vacation home. Very simple process. Each time it took about two weeks to close.",
      image: "/images/testimonials/still-quote-Paul.webp",
      type: "Better Mortgage customer",
    },
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 items-center md:px-8 lg:px-32">
          {/* Mobile Order: Title first, then image */}
          <div className="flex flex-col md:hidden md:mb-8">
            <h2 className="text-[40px] leading-tight font-bold mb-6 text-center text-black">
              Find out why
              we&apos;re better.
            </h2>

            <div className="flex flex-col items-center gap-4 mb-8">
              <button className="w-full bg-[#0A2E1C] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors text-center">
                <Link href="/about-us">See all our stories</Link>
              </button>

              <div className="flex flex-wrap items-center gap-2 justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#00B67A]"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div className="flex items-center gap-2 flex-wrap justify-center text-black">
                  <span className="font-medium">Trustpilot</span>
                  <span className="text-gray-700">Excellent</span>
                  <span className="text-gray-700">4.4 out of 5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column - Image and Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-full flex flex-col-reverse items-center md:flex-col">
              {/* Image container */}
              <div className="relative  rounded-lg overflow-hidden mt-4 md:mt-0">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={activeTestimonial}
                  width={340}
                  height={606.12}
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                  {/* <p className="text-white text-sm md:text-base">
                    {testimonials[activeTestimonial].text}
                  </p>
                  <p className="text-white/70 text-sm mt-2">
                    {testimonials[activeTestimonial].type}
                  </p> */}
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="grid grid-cols-3 gap-2 md:mt-4 mt-0 ">
                {Object.keys(testimonials).map((name) => (
                  <button
                  key={name}
                  onClick={() => setActiveTestimonial(name as TestimonialName)}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 ${
                    activeTestimonial === name
                      ? "h-12 px-6 py-3 w-auto shadow-[0_0_0_4px_inset] border-[#017848] shadow-[#017848] text-[#004733] border"
                      : "h-12 px-6 py-3 w-auto border border-[#e1e3e1] text-black hover:shadow-[0_0_0_4px_inset] hover:border-[#017848] hover:shadow-[#017848] hover:text-[#004733]"
                  }`}
                >
                  {name}
                </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Desktop Only */}
          <div className="hidden md:flex flex-col justify-center items-start h-full text-black">
            <div className="flex flex-col items-start gap-8">
              <h2 className="text-[48px] lg:text-[64px] leading-tight font-bold text-left">
                Find out why
                <br />
                we&apos;re better.
              </h2>

              <div className="flex flex-col items-start gap-4">
                <button className="w-fit bg-[#0A2E1C] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors text-center">
                  <Link href="/about-us">See all our stories</Link>
                </button>

                <div className="flex flex-wrap md:flex-nowrap items-center gap-2 justify-start">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#00B67A]"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Trustpilot</span>
                    <span className="text-gray-700">Excellent</span>
                    <span className="text-gray-700">4.4 out of 5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}