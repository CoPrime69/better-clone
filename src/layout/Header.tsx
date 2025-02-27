'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showGetStarted, setShowGetStarted] = useState(false)
  const pathname = usePathname()
  const isAboutPage = pathname === '/about-us'

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effects on homepage
      if (!isAboutPage) {
        setIsScrolled(window.scrollY > window.innerHeight * 0.8)
        const testimonialStart = window.innerHeight
        const halfwayPoint = testimonialStart + (window.innerHeight * 0.5)
        setShowGetStarted(window.scrollY > halfwayPoint)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isAboutPage])

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isAboutPage || isScrolled ? 'bg-white shadow-sm' : 'bg-[#004733]'
    }`}>
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-bold text-xl transition-colors duration-300 ${
                isAboutPage || isScrolled ? 'text-[#004733]' : 'text-white'
              }`}
            >
              Better
            </Link>
            <div className="hidden md:flex space-x-6">
              {['Buy', 'Refinance', 'HELOC', 'Rates', 'Better+'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase().replace('+', '-plus')}`}
                  className={`transition-colors duration-300 ${
                    isAboutPage || isScrolled ? 'text-[#004733] hover:text-gray-700' : 'text-white hover:text-gray-300'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button className={`transition-colors duration-300 mr-6 ${
              isAboutPage || isScrolled ? 'text-[#004733]' : 'text-white'
            }`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            
            <div className="flex items-center">
              <Link 
                href="/sign-in" 
                className={`transition-all duration-300 ${
                  isAboutPage || isScrolled ? 'text-[#004733]' : 'text-white'
                }`}
              >
                Sign in
              </Link>
              
              {!isAboutPage && showGetStarted && (
                <Link
                  href="/get-started"
                  className="ml-6 transition-all duration-300 bg-[#004733] text-white px-4 py-2 rounded-lg hover:bg-[#096434]"
                >
                  Get started
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
