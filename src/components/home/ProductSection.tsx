"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ProductName = "Our products" | "Calculators" | "Guides & FAQs";

// Define types for the card properties
interface BaseCard {
  title: string;
  isSmall: boolean;
  href: string;
}

interface ProductCard extends BaseCard {
  image: string;
  description?: string;
}

interface CalculatorCard extends BaseCard {
  chartImage: string;
  description?: string;
}

interface GuideCard extends BaseCard {
  image: string;
  readTime: string;
  description?: string;
}

type Card = ProductCard | CalculatorCard | GuideCard;

interface TabContent {
  cards: Card[];
}

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState<ProductName>("Our products");

  const contentByTab: { [key in ProductName]: TabContent } = {
    "Our products": {
      cards: [
        {
          title: "Buying your first home with Better",
          image: "/images/productsection/first-home.webp",
          isSmall: true,
          href: "/content/buying-your-first-home-with-better-mortgage/",
        },
        {
          title: "One Day Mortgage¹",
          description:
            "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.¹",
          image: "/images/productsection/one-day-mortgage.webp",
          isSmall: false,
          href: "/b/one-day-mortgage/",
        },
        {
          title: "Better HELOC",
          description:
            "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit². Access up to 90% of your home equity as cash in as little as 7 days.³",
          image: "/images/productsection/better-heloc.webp",
          isSmall: false,
          href: "/b/heloc/",
        },
        {
          title: "Insurance",
          image: "/images/productsection/insurance.webp",
          isSmall: true,
          href: "https://www.bettercover.com",
        },
      ],
    },
    Calculators: {
      cards: [
        {
          title: "Mortgage calculator",
          chartImage: "/images/productsection/20.webp",
          isSmall: true,
          href: "/mortgage-calculator/",
        },
        {
          title: "Affordability calculator",
          description:
            "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
          chartImage: "/images/productsection/21.webp",
          isSmall: false,
          href: "/mortgage-affordability-calculator/",
        },
        {
          title: "HELOC calculator",
          description:
            "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
          chartImage: "/images/productsection/22.webp",
          isSmall: false,
          href: "/heloc-calculator/",
        },
        {
          title: "Fixed-rate loan comparison calculator",
          chartImage: "/images/productsection/23.webp",
          isSmall: true,
          href: "/mortgage-comparison-calculator/",
        },
      ],
    },
    "Guides & FAQs": {
      cards: [
        {
          title: "What is a good debt-to-income ratio for a home loan?",
          readTime: "5 minutes",
          image: "/images/productsection/debt-ratio.webp",
          isSmall: true,
          href: "/content/what-is-a-good-debt-to-income-ratio/",
        },
        {
          title: "Buying a house without realtor",
          description:
            "Thinking about buying a house without a real estate agent? Read this first.",
          readTime: "5 minutes",
          image: "/images/productsection/31.webp",
          isSmall: false,
          href: "/content/buying-a-house-without-realtor/",
        },
        {
          title: "Timeline for homebuying process",
          description:
            "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
          readTime: "3 minutes",
          image: "/images/productsection/32.webp",
          isSmall: false,
          href: "/content/timeline-for-homebuying-process/",
        },
        {
          title: "Conventional loan requirements",
          readTime: "3 minutes",
          image: "/images/productsection/33.webp",
          isSmall: true,
          href: "/content/conventional-loan-requirements/",
        },
      ],
    },
  };
  
  const currentContent = contentByTab[activeTab];

  const ArrowSvg = () => (
    <div className="group">
      <svg 
        width="48" 
        height="49" 
        viewBox="0 0 48 49" 
        fill="none" 
        className="transition ease-in-out duration-300 fill-transparent hover:fill-[#004733] [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.843384" width="47" height="47" rx="23.5" stroke="#A4A8A4"></rect>
        <path d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z" fill="#004733"></path>
      </svg>
    </div>
  );

  // SmallCard component for rendering cards with isSmall=true
  const SmallCard = ({ card, index }: { card: Card; index: number }) => {
    const getImageSrc = () => {
      if ('chartImage' in card) {
        return card.chartImage;
      }
      return card.image;
    };

    return (
      <Link 
        href={card.href}
        className="flex w-full max-w-lg flex-col gap-8 rounded-md bg-[#F7FAF7] px-6 py-5
                  md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8
                  lg:flex-col lg:px-8 lg:py-8 lg:h-[350px] lg:justify-between"
      >
        {/* Mobile and Tablet view */}
        <div className="flex flex-col gap-6 lg:hidden">
          <h4 className="font-bold leading-tight m-0 p-0 w-auto md:text-[32px] text-[24px] md:tracking-normal tracking-normal text-[#004733]">
            {card.title}
            {card.title.includes('¹') && <sup>1</sup>}
          </h4>
          
          {'readTime' in card && (
            <span className="hidden md:inline-block text-sm text-gray-500">
              {(card as GuideCard).readTime}
            </span>
          )}
          
          <div className="flex items-end justify-between">
            <ArrowSvg />
          </div>
        </div>
        
        <Image 
          src={getImageSrc()}
          alt={card.title}
          width={200}
          height={200}
          className="w-full rounded-md object-cover h-[160px] md:h-[130px] lg:hidden"
        />

        {/* Desktop view */}
        <div className="hidden lg:flex lg:flex-col lg:h-full">
          <div className="mb-2">
            <h4 className="text-[24px] font-semibold font-bold mb-2 text-[#004733]">
              {card.title}
              {card.title.includes('¹') && <sup>1</sup>}
            </h4>
            <div className="flex items-center justify-between">
              {'readTime' in card && (
                <span className="text-sm text-gray-500">
                  {(card as GuideCard).readTime}
                </span>
              )}
              <ArrowSvg />
            </div>
          </div>
          <div className="flex-grow mt-4 min-h-[150px]">
            <div className={`${('chartImage' in card) ? "bg-[#E8F5EC]" : ""} h-full w-full rounded-xl`}>
              <Image
                src={getImageSrc()}
                alt={card.title}
                width={335}
                height={200}
                className="w-full h-full object-cover rounded-xl"
                sizes="(min-width: 1024px) 25vw, (max-width: 768px) 100vw, 50vw"
                style={{ minWidth: '194px', maxWidth: '335px', minHeight: '150px' }}
                priority
              />
            </div>
          </div>
        </div>
      </Link>
    );
  };

  // LargeCard component for rendering cards with isSmall=false
  const LargeCard = ({ card, index }: { card: Card; index: number }) => {
    const getImageSrc = () => {
      if ('chartImage' in card) {
        return card.chartImage;
      }
      return card.image;
    };

    const isReversed = index === 2; // Third card (index 2) should be reversed

    return (
      <Link 
        href={card.href}
        className="flex w-full max-w-lg flex-col gap-8 rounded-md bg-[#F7FAF7] px-6 py-5
                  md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8
                  lg:px-0 lg:py-0 lg:overflow-hidden lg:h-[350px]"
      >
        {/* Mobile and Tablet view */}
        <div className="flex flex-col gap-6 lg:hidden">
          <h4 className="font-semibold leading-tight m-0 p-0 w-auto lg:text-[24px] md:text-[32px] text-[24px] md:tracking-normal tracking-normal text-[#004733]">
            {card.title}
            {card.title.includes('¹') && <sup>1</sup>}
          </h4>
          
          {'description' in card && (
            <p className="hidden flex-1 md:flex-none text-sm text-[#004733] md:block">
              {card.description}
              {card.description?.includes('²') && <sup>2</sup>}
              {card.description?.includes('³') && <sup>3</sup>}
            </p>
          )}
          
          {'readTime' in card && (
            <span className="hidden md:inline-block text-sm text-gray-500">
              {(card as GuideCard).readTime}
            </span>
          )}
          
          <div className="flex items-end justify-between">
            <ArrowSvg />
          </div>
        </div>
        
        <Image 
          src={getImageSrc()}
          alt={card.title}
          width={200}
          height={200}
          className="w-full rounded-md object-cover h-[160px] md:h-[130px] lg:hidden"
        />

        {/* Desktop view */}
        <div className="hidden lg:grid grid-cols-12 gap-8 h-full p-8 w-full">
          {isReversed ? (
            <>
              <div className="col-span-5 flex items-center justify-center">
                <div className="bg-[#E8F5EC] rounded-xl w-full h-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={getImageSrc()}
                    alt={card.title}
                    width={285}
                    height={285}
                    className="w-full h-full object-cover"
                    style={{ maxWidth: '285px' }}
                    priority
                  />
                </div>
              </div>
              <div className="col-span-7">
                <div>
                  <h4 className="text-[24px] font-semibold mb-2 text-[#004733]">
                    {card.title}
                    {card.title.includes('¹') && <sup>1</sup>}
                  </h4>
                  {'readTime' in card && (
                    <span className="text-sm text-gray-500 block mb-2">
                      {(card as GuideCard).readTime}
                    </span>
                  )}
                  {'description' in card && (
                    <p className="text-gray-700 mb-2 text-sm text-[#004733]">
                      {card.description}
                      {card.description?.includes('²') && <sup>2</sup>}
                      {card.description?.includes('³') && <sup>3</sup>}
                    </p>
                  )}
                  <ArrowSvg />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-span-7">
                <div>
                  <h4 className="text-[24px] font-semibold mb-2 text-[#004733]">
                    {card.title}
                    {card.title.includes('¹') && <sup>1</sup>}
                  </h4>
                  {'readTime' in card && (
                    <span className="text-sm text-gray-500 block mb-2">
                      {(card as GuideCard).readTime}
                    </span>
                  )}
                  {'description' in card && (
                    <p className="text-gray-700 mb-2 text-sm text-[#004733]">
                      {card.description}
                      {card.description?.includes('²') && <sup>2</sup>}
                      {card.description?.includes('³') && <sup>3</sup>}
                    </p>
                  )}
                  <ArrowSvg />
                </div>
              </div>
              <div className="col-span-5 flex items-center justify-center">
                <div className="bg-[#E8F5EC] rounded-xl w-full h-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={getImageSrc()}
                    alt={card.title}
                    width={285}
                    height={285}
                    className="w-full h-full object-cover"
                    style={{ maxWidth: '285px' }}
                    priority
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </Link>
    );
  };

  return (
    <section className="py-10 md:py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 mb-8 md:mb-12">
          <h2 className="text-[48px] font-semibold leading-tight">
            Got questions?
            <br />
            We&apos;ve got answers
          </h2>
          <div className="grid grid-cols-3 gap-2 md:gap-3 w-full md:w-auto">
            {["Our products", "Calculators", "Guides & FAQs"].map((tab) => (
              <button
                key={tab}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 ${
                    activeTab === tab
                      ? "h-12 px-6 py-3 w-auto shadow-[0_0_0_4px_inset] border-[#017848] shadow-[#017848] text-[#004733] border"
                      : "h-12 px-6 py-3 w-auto border border-[#e1e3e1] text-black hover:shadow-[0_0_0_4px_inset] hover:border-[#017848] hover:shadow-[#017848] hover:text-[#004733]"
                  }`}
                onClick={() => setActiveTab(tab as ProductName)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid for Mobile and Tablet */}
        <div className="flex flex-row flex-wrap justify-center gap-8 lg:hidden">
          {currentContent.cards.map((card, index) => (
            card.isSmall ? 
              <SmallCard key={index} card={card} index={index} /> : 
              <LargeCard key={index} card={card} index={index} />
          ))}
        </div>
        
        {/* Cards Grid for Desktop - with specific layout */}
        <div className="hidden lg:flex flex-col w-full gap-8">
          {/* First Row */}
          <div className="flex gap-8 w-full">
            <div className="flex-1 min-w-[300px]">
              <SmallCard card={currentContent.cards[0]} index={0} />
            </div>
            <div className="flex-[2] min-w-[600px]">
              <LargeCard card={currentContent.cards[1]} index={1} />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex gap-8 w-full">
            <div className="flex-[2] min-w-[600px]">
              <LargeCard card={currentContent.cards[2]} index={2} />
            </div>
            <div className="flex-1 min-w-[300px]">
              <SmallCard card={currentContent.cards[3]} index={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}