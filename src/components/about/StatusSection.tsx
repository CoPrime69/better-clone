'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function StatusSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <>
      <section className="pt-20 bg-[#FFFDFA] text-black">
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row gap-x-32 gap-y-8 px-5 md:px-20 pb-20">
          {/* Left content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              The status quo is broken
            </h2>
            <p className="text-gray-600 text-[16px] mb-8">
              The traditional processes around homeownership are opaque and stressful. Fees aren&apos;t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It&apos;s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
            </p>
            <button className="bg-[#0A7B3E] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
              Read Vishal&apos;s story
            </button>
          </div>
          
          {/* Video thumbnail container */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-[456px] h-[300px] md:h-[400px] overflow-hidden relative">
              <Image
                src="/images/about/vishal-mission.jpg"
                alt="Vishal Garg"
                fill
                className="object-cover"
              />
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center transition-all hover:bg-black/20"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-4">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/1KjYlLBM9j4?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}