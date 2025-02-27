"use client";
import { useState, useEffect } from "react";
import {
  calculateMonthlyPayment,
  formatCurrency,
  parseCurrency,
  calculateDownPayment,
  calculateDownPaymentPercentage,
} from "@/utils/mortgageCalculator";
import PaymentBreakdown from "./PaymentBreakdown";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState("300,000");
  const [zipCode, setZipCode] = useState("342001");
  const [downPayment, setDownPayment] = useState("60,000");
  const [downPaymentPercent, setDownPaymentPercent] = useState("20");
  const [interestRate, setInterestRate] = useState("6.500");
  const [loanTerm, setLoanTerm] = useState("30");
  const [sliderValue, setSliderValue] = useState(300000);
  const [monthlyPayment, setMonthlyPayment] = useState("2,146");
  const [mobileDetailsOpen, setMobileDetailsOpen] = useState(false);
  const [mobileHeaderVisible, setMobileHeaderVisible] = useState(false);
  
  // Add state variables for additional costs
  const [propertyTaxes, setPropertyTaxes] = useState(265);
  const [homeownersInsurance, setHomeownersInsurance] = useState(132);
  const [hoaFees, setHoaFees] = useState(132);
  const [utilities, setUtilities] = useState(100);

  // Recalculate monthly payment whenever inputs change
  useEffect(() => {
    const price = parseCurrency(homePrice);
    const downPaymentAmount = parseCurrency(downPayment);
    const principal = price - downPaymentAmount;
    const interest = parseFloat(interestRate);
    const term = parseInt(loanTerm);

    if (price > 0 && interest >= 0 && term > 0) {
      // Calculate base mortgage payment
      const basePayment = calculateMonthlyPayment(principal, interest, term);
      
      // Add additional costs to get total monthly payment
      const totalPayment = basePayment + propertyTaxes + homeownersInsurance + hoaFees + utilities;
      
      setMonthlyPayment(formatCurrency(totalPayment));
    }
  }, [homePrice, downPayment, interestRate, loanTerm, propertyTaxes, homeownersInsurance, hoaFees, utilities]);

  // Handle scroll for mobile sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setMobileHeaderVisible(window.scrollY > 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle home price change from input
  const handleHomePriceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/[^\d,]/g, "");
    const numericValue = parseCurrency(value);
    setHomePrice(formatCurrency(numericValue));
    setSliderValue(numericValue);

    // Update down payment to maintain percentage
    const percent = parseFloat(downPaymentPercent);
    const newDownPayment = calculateDownPayment(numericValue, percent);
    setDownPayment(formatCurrency(newDownPayment));
  };

  // Handle down payment change
  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/[^\d,]/g, "");
    const numericValue = parseCurrency(value);
    setDownPayment(formatCurrency(numericValue));

    // Update percentage
    const price = parseCurrency(homePrice);
    if (price > 0) {
      const newPercent = calculateDownPaymentPercentage(price, numericValue);
      setDownPaymentPercent(newPercent.toString());
    }
  };

  // Handle down payment percentage change
  const handleDownPaymentPercentChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/[^\d.]/g, "");
    const percent = parseFloat(value) || 0;
    setDownPaymentPercent(percent.toString());

    // Update down payment amount
    const price = parseCurrency(homePrice);
    const newDownPayment = calculateDownPayment(price, percent);
    setDownPayment(formatCurrency(newDownPayment));
  };

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value;
    const numericValue: number = Number(value);
    setSliderValue(numericValue);
    setHomePrice(formatCurrency(numericValue));

    // Update down payment to maintain the same percentage
    const percent: number = parseFloat(downPaymentPercent);
    const newDownPayment: number = calculateDownPayment(numericValue, percent);
    setDownPayment(formatCurrency(newDownPayment));
  };

  // Handle updates from PaymentBreakdown component
  const handlePaymentBreakdownChange = (values: {
    propertyTaxes: number;
    homeownersInsurance: number;
    hoaFees: number;
    utilities: number;
  }) => {
    setPropertyTaxes(values.propertyTaxes);
    setHomeownersInsurance(values.homeownersInsurance);
    setHoaFees(values.hoaFees);
    setUtilities(values.utilities);
  };

  // Calculate the principal amount
  const principal = parseCurrency(homePrice) - parseCurrency(downPayment);

  // Calculate slider percentage for styling
  const sliderPercentage = Math.min(
    Math.max(((sliderValue - 50000) / (3000000 - 50000)) * 100, 0),
    100
  );

  // Calculate slider background style
  const sliderStyle = {
    backgroundImage: `linear-gradient(to right, rgb(41, 43, 41) ${sliderPercentage}%, rgb(200, 201, 198) ${sliderPercentage}%, rgb(200, 201, 198) 100%)`,
  };

  return (
    <>
      <section className="py-12 bg-[#F0F9F4]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-[64px]">
          <h1 className="text-4xl sm:text-[48px] font-semibold mb-4 text-gray-900 tracking-tight md:tracking-tighter">
            Mortgage calculator
          </h1>
          <p className="text-gray-700 my-[24px] pb-[16px] text-[16px] max-w-3xl">
            Our mortgage calculator includes key factors like homeowners
            association fees, property taxes, and private mortgage insurance
            (PMI). Get the whole picture and calculate your total monthly
            payment.
          </p>

          {/* Mobile sticky header */}
          <div
            className={`p-4 bg-white shadow-lg fixed left-0 top-[70px] w-full z-[10000] md:hidden transition-all duration-300 ${
              mobileHeaderVisible
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
            data-qa="mobile-header"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm mb-1 font-semibold">
                  Home price
                </p>
                <p
                  className="bg-[#0A7B3E] py-1 text-center font-semibold text-white rounded-md"
                  data-qa="mobile-header-home-price"
                >
                  ${homePrice}
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1 font-semibold">
                  Monthly payment
                </p>
                <p
                  className="text-gray-700 pt-1 font-semibold"
                  data-qa="mobile-header-monthly-payment"
                >
                  ${monthlyPayment}/mo
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-start md:items-end gap-8 mb-8">
            <div className="w-full md:w-auto">
              <div className="w-full max-w-[300px]">
                <label
                  className="block text-gray-700 mb-2 font-semibold text-sm md:text-base"
                  htmlFor="home-price"
                >
                  Home price
                </label>
                <div className="relative">
                  <div
                    className="relative bg-white border border-gray-300 rounded-md h-[50px] lg:h-[70px] overflow-hidden 
                  hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] focus-within:border-[#0A7B3E] focus-within:shadow-[0_0_0_3px_rgba(10,123,62,0.2)]
                  transition-all duration-300"
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10 flex items-center font-semibold text-2xl lg:text-5xl">
                      $
                    </div>
                    <input
                      id="home-price"
                      data-qa="home-price"
                      type="text"
                      value={homePrice}
                      onChange={handleHomePriceChange}
                      className="relative w-full h-full box-border left-1 pl-8 text-2xl lg:text-5xl font-semibold border-none outline-none rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <div className="w-full max-w-[300px]">
                <p className="block text-gray-700 mb-2 font-semibold text-sm md:text-base">
                  Monthly payment
                </p>
                <p
                  className="flex h-12 lg:h-16 items-center text-2xl lg:text-[48px] font-semibold"
                  data-qa="monthly-payment"
                >
                  ${monthlyPayment}/mo
                </p>
              </div>
            </div>

            <div className="hidden md:block">
              <a
                href="#"
                className="bg-[#0A7B3E] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-semibold inline-flex items-center justify-center min-w-[220px] h-12 lg:h-16"
              >
                Get pre-approved
              </a>
            </div>
          </div>

          {/* Slider */}
          <div className="relative mx-2 sm:mx-4 my-8">
            <input
              type="range"
              min="50000"
              max="3000000"
              step="100"
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full h-[5px] appearance-none cursor-pointer rounded-full focus:outline-none"
              style={sliderStyle}
            />
            <style jsx>{`
              input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: black;
                cursor: pointer;
              }
              input[type="range"]::-moz-range-thumb {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: black;
                cursor: pointer;
                border: none;
              }
            `}</style>
          </div>

          {/* Form fields - Desktop */}
          <div className="mt-8 hidden md:block">
            <div className="flex gap-5 flex-wrap lg:flex-nowrap">
              <div className="flex flex-1 mb-4 gap-6 flex-wrap sm:flex-nowrap">
                {/* ZIP code input */}
                <div className="w-full sm:w-auto sm:flex-1">
                  <div className="relative">
                    <div
                      className="relative bg-white border border-gray-300 rounded-md h-14 overflow-hidden
            hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] focus-within:border-[#0A7B3E] focus-within:shadow-[0_0_0_3px_rgba(10,123,62,0.2)]
            transition-all duration-300"
                    >
                      <label
                        htmlFor="zip-code"
                        className="absolute left-4 top-[6px] text-xs text-gray-500 font-normal"
                      >
                        ZIP code
                      </label>
                      <input
                        id="zip-code"
                        type="text"
                        maxLength={5}
                        value={zipCode}
                        onChange={(e) =>
                          setZipCode(e.target.value.replace(/\D/g, ""))
                        }
                        className="w-full h-full pt-[18px] pb-[10px] px-4 border-none outline-none font-semibold"
                      />
                    </div>
                  </div>
                </div>

                {/* Down payment input */}
                <div className="w-full sm:flex-1 sm:flex">
                  <div className="w-full sm:w-9/12">
                    <div className="relative">
                      <div
                        className="relative bg-white border border-gray-300 rounded-l-md h-14 overflow-hidden
              hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] focus-within:border-[#0A7B3E] focus-within:shadow-[0_0_0_3px_rgba(10,123,62,0.2)]
              transition-all duration-300"
                      >
                        <label
                          htmlFor="down-payment"
                          className="absolute left-4 top-[6px] text-xs text-gray-500 font-normal"
                        >
                          Down payment
                        </label>
                        <div className="absolute top-[31px] -translate-y-1/2 left-4 z-10 flex items-center font-semibold">
                          $
                        </div>
                        <input
                          id="down-payment"
                          data-qa="downpayment"
                          type="text"
                          value={downPayment}
                          onChange={handleDownPaymentChange}
                          className="w-full h-full pt-[18px] pb-[10px] pl-8 pr-4 border-none outline-none font-semibold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Down payment percentage */}
                  <div className="w-full sm:w-3/12 min-w-[100px]">
                    <div className="relative flex mt-2 sm:mt-0">
                      <div
                        className="relative bg-white border border-gray-300 sm:border-l-0 rounded-md sm:rounded-l-none rounded-r-md h-14 w-full overflow-hidden
              hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] focus-within:border-[#0A7B3E] focus-within:shadow-[0_0_0_3px_rgba(10,123,62,0.2)]
              transition-all duration-300"
                      >
                        <div className="flex items-center justify-center h-full">
                          <input
                            id="down-payment-percent"
                            data-qa="down-payment-ratio"
                            type="text"
                            value={downPaymentPercent}
                            onChange={handleDownPaymentPercentChange}
                            className="w-full h-full py-0 px-4 border-none outline-none font-semibold text-center"
                          />
                          <div className="absolute top-1/2 -translate-y-1/2 right-6 left-auto z-10 flex items-center font-semibold">
                            %
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interest rate and loan term */}
                <div className="flex flex-1 gap-6 flex-wrap sm:flex-nowrap">
                  {/* Interest rate input */}
                  <div className="w-full sm:w-auto sm:flex-1">
                    <div className="relative">
                      <div
                        className="relative bg-white border border-gray-300 rounded-md h-14 overflow-hidden
              hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] focus-within:border-[#0A7B3E] focus-within:shadow-[0_0_0_3px_rgba(10,123,62,0.2)]
              transition-all duration-300"
                      >
                        <label
                          htmlFor="interest-rate"
                          className="absolute left-4 top-[6px] text-xs text-gray-500 font-normal"
                        >
                          Interest rate
                        </label>
                        <input
                          id="interest-rate"
                          type="text"
                          value={interestRate}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^\d.]/g, "");
                            setInterestRate(value);
                          }}
                          className="w-full h-full pt-[18px] pb-[10px] pr-8 pl-4 border-none outline-none font-semibold"
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 flex items-center font-semibold">
                          %
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Loan term select */}
                  <div className="w-full sm:w-auto sm:flex-1">
                    <div className="relative w-full">
                      <label
                        htmlFor="loan-term"
                        className="absolute left-4 top-[6px] text-xs text-gray-500 font-normal z-10"
                      >
                        Length of loan
                      </label>
                      <select
                        id="loan-term"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                        className="w-full h-14 pt-[18px] pb-[10px] px-4 appearance-none bg-white border border-gray-300 rounded-md font-semibold outline-none
              hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] focus:border-[#0A7B3E] focus:shadow-[0_0_0_3px_rgba(10,123,62,0.2)]
              transition-all duration-300"
                      >
                        <option value="30">30 years</option>
                        <option value="20">20 years</option>
                        <option value="15">15 years</option>
                      </select>
                      <div className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="#000"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View Controls */}
          <div className="md:hidden">
            <div className="flex flex-col">
              <a
                href="#"
                className="bg-[#0A7B3E] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-semibold inline-flex items-center justify-center min-w-[220px] h-16 mb-2"
              >
                Get pre-approved
              </a>

              <button
                className="border border-gray-300 rounded-md py-3 px-6 mt-4 flex w-full items-center justify-center font-semibold bg-white
              hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] transition-all duration-300 h-16"
                onClick={() => setMobileDetailsOpen(!mobileDetailsOpen)}
              >
                {mobileDetailsOpen ? (
                  <>
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
                      className="mr-2"
                    >
                      <path d="M5 12h14"></path>
                    </svg>
                    Hide details
                  </>
                ) : (
                  <>
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
                      className="mr-2"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    Add details
                  </>
                )}
              </button>
            </div>

            {/* Mobile Details Panel */}
            {mobileDetailsOpen && (
              <div className="p-4 bg-white shadow-lg mt-2 rounded-md">
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative">
                    <label
                      htmlFor="m-zip-code"
                      className="block text-gray-500 text-sm mb-1"
                    >
                      ZIP code
                    </label>
                    <input
                      id="m-zip-code"
                      type="text"
                      maxLength={5}
                      value={zipCode}
                      onChange={(e) =>
                        setZipCode(e.target.value.replace(/\D/g, ""))
                      }
                      className="w-full border border-gray-300 rounded-md py-2 px-3 font-medium
                    hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] focus:outline-none focus:border-[#0A7B3E] focus:shadow-[0_0_0_3px_rgba(10,123,62,0.2)]
                    transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="m-down-payment"
                      className="block text-gray-500 text-sm mb-1"
                    >
                      Down payment
                    </label>
                    <div className="flex">
                      <div className="flex-1">
                        <div className="flex">
                          <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
                            $
                          </span>
                          <input
                            id="m-down-payment"
                            type="text"
                            value={downPayment}
                            onChange={handleDownPaymentChange}
                            className="flex-1 border border-gray-300 py-2 px-3 border-l-0 font-medium
                          hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] focus:outline-none focus:border-[#0A7B3E] focus:shadow-[0_0_0_3px_rgba(10,123,62,0.2)]
                          transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div className="w-24">
                        <div className="flex">
                          <input
                            id="m-down-payment-percent"
                            type="text"
                            value={downPaymentPercent}
                            onChange={handleDownPaymentPercentChange}
                            className="w-full border border-gray-300 py-2 px-3 rounded-l-none text-right font-medium
                          hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] focus:outline-none focus:border-[#0A7B3E] focus:shadow-[0_0_0_3px_rgba(10,123,62,0.2)]
                          transition-all duration-300"
                          />
                          <span className="inline-flex items-center px-3 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r-md">
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="m-interest-rate"
                      className="block text-gray-500 text-sm mb-1"
                    >
                      Interest rate
                    </label>
                    <div className="flex">
                      <input
                        id="m-interest-rate"
                        type="text"
                        value={interestRate}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^\d.]/g, "");
                          setInterestRate(value);
                        }}
                        className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 font-medium
                      hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] focus:outline-none focus:border-[#0A7B3E] focus:shadow-[0_0_0_3px_rgba(10,123,62,0.2)]
                      transition-all duration-300"
                      />
                      <span className="inline-flex items-center px-3 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r-md">
                        %
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="m-loan-term"
                      className="block text-gray-500 text-sm mb-1"
                    >
                      Length of loan
                    </label>
                    <div className="relative">
                      <select
                        id="m-loan-term"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 appearance-none bg-white font-medium
                      hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] focus:outline-none focus:border-[#0A7B3E] focus:shadow-[0_0_0_3px_rgba(10,123,62,0.2)]
                      transition-all duration-300"
                      >
                        <option value="30">30 years</option>
                        <option value="20">20 years</option>
                        <option value="15">15 years</option>
                      </select>
                      <div className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="#000"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <PaymentBreakdown
        principal={principal}
        interestRate={parseFloat(interestRate)}
        loanTermYears={parseInt(loanTerm)}
        propertyTaxes={propertyTaxes}
        homeownersInsurance={homeownersInsurance}
        hoaFees={hoaFees}
        utilities={utilities}
        onValuesChange={handlePaymentBreakdownChange}
      />
    </>
  );
}
