import Link from 'next/link';
import React from 'react';

const timelineData = [
  {
    year: '2014',
    content: "After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all."
  },
  {
    year: '2015',
    content: 'Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).'
  },
  {
    year: '2016',
    content: 'Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.'
  },
  {
    year: '2017',
    content: 'Better expands into the real estate market with Better Real Estate.'
  },
  {
    year: '2018',
    content: 'Better Mortgage partners with Ally Bank to build Ally powered by Better.'
  },
  {
    year: '2019',
    content: 'Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.'
  },
  {
    year: '2021',
    content: "Better acquires Trussle – The UK's most innovative online mortgage broker."
  },
  {
    year: '2022',
    content: 'Better Mortgage becomes the first fintech to fund $100B home loans entirely online.'
  },
  {
    year: '2023',
    events: [
      {
        content: 'Better Mortgage launches One Day Mortgage: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.'
      },
      {
        content: 'Better Mortgage launches the fully digital 3-day HELOCs'
      },
      {
        content: 'Better Mortgage launches One Day Verified Approval Letter.'
      }
    ]
  },
  {
    year: 'Today',
    content: 'You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.',
    hasButton: true
  }
];

const TimelineSection = () => {
  return (
    <div className="max-w-full mx-auto px-4 md:px-12 lg:px-[200px] py-10 md:py-16 bg-[#FFFDFA]">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-16 text-black">Company timeline</h2>
      
      <div className="relative">
        {/* Vertical line - visible on all screen sizes */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-600" />
        
        {timelineData.flatMap((item, index) => {
          if (item.events) {
            // Handle multiple events
            return item.events.map((event, eventIndex) => (
              <div key={`${item.year}-${eventIndex}`} className="relative mb-8 md:mb-16">
                {eventIndex === 0 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4 mb-4">
                    <div className="bg-emerald-600 text-white px-[14px] py-[4px] md:px-[28px] md:py-[8px] rounded-full text-sm md:text-xl font-semibold inline-block">
                      {item.year}
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-0">
                  {/* Consistent layout across all device sizes */}
                  {eventIndex % 2 === 0 ? (
                    <>
                      <div className="flex w-full justify-end pr-2 sm:pr-5">
                        <div className="w-full sm:max-w-[200px] md:max-w-[400px] bg-[#DFE0DC] p-3 sm:p-4 md:p-6 rounded-lg">
                          <p className="text-xs sm:text-sm md:text-base text-gray-700">{event.content}</p>
                        </div>
                      </div>
                      <div className="w-full" />
                    </>
                  ) : (
                    <>
                      <div className="w-full" />
                      <div className="flex w-full justify-start pl-2 sm:pl-5">
                        <div className="w-full sm:max-w-[200px] md:max-w-[400px] bg-[#DFE0DC] p-3 sm:p-4 md:p-6 rounded-lg">
                          <p className="text-xs sm:text-sm md:text-base text-gray-700">{event.content}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ));
          } else {
            // Handle single event
            return (
              <div key={item.year} className="relative mb-8 md:mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4 mb-4">
                  <div className="bg-emerald-600 text-white px-[14px] py-[4px] md:px-[28px] md:py-[8px] rounded-full text-sm md:text-xl font-semibold inline-block">
                    {item.year}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-0">
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex w-full justify-end pr-2 sm:pr-5">
                        <div className="w-full sm:max-w-[200px] md:max-w-[400px] bg-[#DFE0DC] p-3 sm:p-4 md:p-6 rounded-lg">
                          <p className="text-xs sm:text-sm md:text-base text-gray-700">{item.content}</p>
                          {item.hasButton && (
                            <Link href="/start">
                              <button className="mt-2 sm:mt-4 bg-emerald-600 text-white px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm md:text-base rounded-lg hover:bg-emerald-700 transition-colors">
                                Get started
                              </button>
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="w-full" />
                    </>
                  ) : (
                    <>
                      <div className="w-full" />
                      <div className="flex w-full justify-start pl-2 sm:pl-5">
                        <div className="w-full sm:max-w-[200px] md:max-w-[400px] bg-[#DFE0DC] p-3 sm:p-4 md:p-6 rounded-lg">
                          <p className="text-xs sm:text-sm md:text-base text-gray-700">{item.content}</p>
                          {item.hasButton && (
                            <Link href="/start">
                              <button className="mt-2 sm:mt-4 bg-emerald-600 text-white px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm md:text-base rounded-lg hover:bg-emerald-700 transition-colors">
                                Get started
                              </button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TimelineSection;