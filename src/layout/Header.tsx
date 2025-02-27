'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const pathname = usePathname();
  const isAboutPage = pathname === "/about-us";

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effects on homepage
      if (!isAboutPage) {
        setIsScrolled(window.scrollY > window.innerHeight * 0.8);
        const testimonialStart = window.innerHeight;
        const halfwayPoint = testimonialStart + window.innerHeight * 0.5;
        setShowGetStarted(window.scrollY > halfwayPoint);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAboutPage]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-20 transition-all ease-in-out duration-300 ${
        isAboutPage || isScrolled ? "bg-white shadow-sm" : "bg-[#004733]"
      }`}
    >
      <nav className="m-auto flex max-w-screen-2xl justify-between p-5 md:py-5 md:px-10 xl:p-5">
        {/* Left side - Logo and nav items */}
        <div className="flex flex-row">
          {/* Desktop Logo */}
          <ul className="flex items-center">
            <li className="mr-2">
              <Link
                className={`font-bold text-xl ${
                  isAboutPage || isScrolled ? "text-[#292B29]" : "text-white"
                }`}
                href="/"
              >
                Better
              </Link>
            </li>

            {/* Desktop Navigation Links */}
            {['Buy', 'Refinance', 'HELOC', 'Rates', 'Better+'].map((item) => (
              <li key={item} className="mx-5 hidden xl:block rounded-xl">
                <Link
                  href={`/${item.toLowerCase().replace('+', '-plus')}`}
                  className={`rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 ${
                    isAboutPage || isScrolled ? "text-[#292B29]" : "text-white"
                  } hover:bg-[#f5f5f5] hover:text-[#292B29]`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - CTA buttons and mobile menu toggle */}
        <ul className="flex items-center gap-3 lg:gap-6">
          {/* Phone Icon */}
          <li>
            <div className="group min-[520px]:relative">
              <div
                className={`transition-all ease-in-out duration-300 border rounded-full p-2 md:p-3.5 ${
                  isAboutPage || isScrolled
                    ? "border-[#e1e3e1]"
                    : "border-[#ffffff50]"
                } group-hover:bg-[#f5f5f5] group-hover:border-[#f5f5f5]`}
              >
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  className={`transition-all ease-in-out group-hover:[&_path]:fill-[#004733] ${
                    isAboutPage || isScrolled
                      ? "[&_path]:fill-[#292B29]"
                      : "[&_path]:fill-white"
                  } h-3 w-3 md:h-4 md:w-4`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                    fill="#292B29"
                  ></path>
                </svg>
              </div>
            </div>
          </li>

          {/* Sign In (Desktop) */}
          <li className="hidden md:block">
            <Link
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base leading-normal bg-transparent py-5 w-auto font-normal transition-all ease-in-out duration-300 h-12 px-4 ${
                isAboutPage || isScrolled ? "text-[#292B29]" : "text-white"
              } hover:bg-[#f5f5f5] hover:text-[#292B29] cursor-pointer`}
              href="/sign-in"
            >
              Sign in
            </Link>
          </li>

          {/* Get Started Button - Conditionally shown based on scroll position */}
          <li
            className={`transition-all duration-500 ease-in ${
              !isAboutPage && showGetStarted ? "block" : "hidden"
            }`}
          >
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold leading-normal transition-all ease-in-out duration-200 bg-[#017848] text-white hover:bg-[#004733] hover:text-white py-3 w-auto h-8 px-4 md:px-6 md:h-12"
              href="/get-started"
            >
              Get started
            </Link>
          </li>

          {/* Mobile Menu Toggle Button */}
          <li>
            <button
              className={`xl:hidden flex items-center font-normal transition-all ease-in-out duration-300 group-hover:bg-[#f5f5f5] group-hover:text-[#292B29] ${
                isAboutPage || isScrolled ? "text-[#292B29]" : "text-white"
              } hover:text-white hover:bg-inherit`}
              aria-label="open mobile nav bar"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}