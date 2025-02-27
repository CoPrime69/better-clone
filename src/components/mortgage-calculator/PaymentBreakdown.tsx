import React, { useState, useRef, useEffect } from "react";
import {
  calculateMonthlyPayment,
  formatCurrency,
} from "@/utils/mortgageCalculator";

interface PaymentBreakdownProps {
  principal: number;
  interestRate: number;
  loanTermYears: number;
  propertyTaxes: number;
  homeownersInsurance: number;
  hoaFees: number;
  utilities: number;
  onValuesChange?: (values: {
    propertyTaxes: number;
    homeownersInsurance: number;
    hoaFees: number;
    utilities: number;
  }) => void;
}

const PaymentBreakdown: React.FC<PaymentBreakdownProps> = ({
  principal,
  interestRate,
  loanTermYears,
  propertyTaxes = 0,
  homeownersInsurance = 0,
  hoaFees = 0,
  utilities = 0,
  onValuesChange,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Local state to track input values
  const [localPropertyTaxes, setLocalPropertyTaxes] = useState(propertyTaxes);
  const [localHomeownersInsurance, setLocalHomeownersInsurance] =
    useState(homeownersInsurance);
  const [localHoaFees, setLocalHoaFees] = useState(hoaFees);
  const [localUtilities, setLocalUtilities] = useState(utilities);

  // Update local state when props change
  useEffect(() => {
    setLocalPropertyTaxes(propertyTaxes);
    setLocalHomeownersInsurance(homeownersInsurance);
    setLocalHoaFees(hoaFees);
    setLocalUtilities(utilities);
  }, [propertyTaxes, homeownersInsurance, hoaFees, utilities]);

  // Calculate monthly principal and interest payment
  const monthlyPrincipalAndInterest = calculateMonthlyPayment(
    principal,
    interestRate,
    loanTermYears
  );

  // Calculate total monthly payment using local state values
  const totalMonthlyPayment =
    monthlyPrincipalAndInterest +
    localPropertyTaxes +
    localHomeownersInsurance +
    localHoaFees +
    localUtilities;

  // Calculate percentages for the chart
  const calculatePercentage = (value: number) =>
    totalMonthlyPayment > 0 ? (value / totalMonthlyPayment) * 100 : 0;

  const piPercentage = calculatePercentage(monthlyPrincipalAndInterest);
  const taxPercentage = calculatePercentage(localPropertyTaxes);
  const insurancePercentage = calculatePercentage(localHomeownersInsurance);
  const hoaPercentage = calculatePercentage(localHoaFees);
  const utilitiesPercentage = calculatePercentage(localUtilities);

  // Replace the fixed SVG width with a responsive approach
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [svgWidth, setSvgWidth] = useState(528); // Default width, will be updated

  // Update SVG width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (svgContainerRef.current) {
        setSvgWidth(svgContainerRef.current.clientWidth);
      }
    };

    // Initial width calculation
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Calculate widths for SVG visualization (now using dynamic svgWidth)
  const piWidth = (piPercentage / 100) * svgWidth;
  const taxWidth = (taxPercentage / 100) * svgWidth;
  const insuranceWidth = (insurancePercentage / 100) * svgWidth;
  const hoaWidth = (hoaPercentage / 100) * svgWidth;
  const utilitiesWidth = (utilitiesPercentage / 100) * svgWidth;

  // Starting position for each segment
  const taxStart = piWidth;
  const insuranceStart = taxStart + taxWidth;
  const hoaStart = insuranceStart + insuranceWidth;
  const utilitiesStart = hoaStart + hoaWidth;

  // Item descriptions
  const getItemDescription = (item: string): string => {
    if (item === "principal")
      return "Principal is the amount originally borrowed. Interest is the cost of borrowing that principal.";
    if (item === "taxes")
      return "These are taxes paid to the local government, not your mortgage lender. This estimate uses the national average for property taxes.";
    if (item === "insurance")
      return "This is an estimate of your monthly premium.";
    if (item === "hoa")
      return "These are payments made to a homeowners association(HOA) that oversees day-to-day opration, rules and regulations..";
    if (item === "utilities")
      return "Utilities include water, electricity, and gas.";
    return "";
  };

  const getSegmentColor = (item: string) => {
    if (!hoveredItem) {
      // Original colors when nothing is hovered
      if (item === "principal") return "#0A7B3E";
      if (item === "taxes") return "#4F46E5";
      if (item === "insurance") return "#818CF8";
      if (item === "hoa") return "#FCD34D";
      if (item === "utilities") return "#FB7185";
    } else if (hoveredItem === item) {
      // Original colors for the hovered item
      if (item === "principal") return "#0A7B3E";
      if (item === "taxes") return "#4F46E5";
      if (item === "insurance") return "#818CF8";
      if (item === "hoa") return "#FCD34D";
      if (item === "utilities") return "#FB7185";
    } else {
      // Gray color for non-hovered items
      return "#e5e7eb";
    }
    return "";
  };

  // Handle input changes
  const handlePropertyTaxesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value) || 0;
    setLocalPropertyTaxes(value);
    if (onValuesChange) {
      onValuesChange({
        propertyTaxes: value,
        homeownersInsurance: localHomeownersInsurance,
        hoaFees: localHoaFees,
        utilities: localUtilities,
      });
    }
  };

  const handleHomeownersInsuranceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value) || 0;
    setLocalHomeownersInsurance(value);
    if (onValuesChange) {
      onValuesChange({
        propertyTaxes: localPropertyTaxes,
        homeownersInsurance: value,
        hoaFees: localHoaFees,
        utilities: localUtilities,
      });
    }
  };

  const handleHoaFeesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setLocalHoaFees(value);
    if (onValuesChange) {
      onValuesChange({
        propertyTaxes: localPropertyTaxes,
        homeownersInsurance: localHomeownersInsurance,
        hoaFees: value,
        utilities: localUtilities,
      });
    }
  };

  const handleUtilitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setLocalUtilities(value);
    if (onValuesChange) {
      onValuesChange({
        propertyTaxes: localPropertyTaxes,
        homeownersInsurance: localHomeownersInsurance,
        hoaFees: localHoaFees,
        utilities: value,
      });
    }
  };

  const handleCopyLink = () => {
    // Implementation for copy link functionality
    const link = `${window.location.origin}${window.location.pathname}?principal=${principal}&rate=${interestRate}&term=${loanTermYears}&taxes=${localPropertyTaxes}&insurance=${localHomeownersInsurance}&hoa=${localHoaFees}&utilities=${localUtilities}`;

    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  };

  const [isUtilitiesOpen, setIsUtilitiesOpen] = useState(false);
  const [waterBill, setWaterBill] = useState(25);
  const [gasBill, setGasBill] = useState(25);
  const [internetBill, setInternetBill] = useState(50);
  const [includeUtilities, setIncludeUtilities] = useState(true);

  const handleWaterBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setWaterBill(value);
    updateUtilitiesTotal(value, gasBill, internetBill);
  };

  const handleGasBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setGasBill(value);
    updateUtilitiesTotal(waterBill, value, internetBill);
  };

  const handleInternetBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setInternetBill(value);
    updateUtilitiesTotal(waterBill, gasBill, value);
  };

  const updateUtilitiesTotal = (water: number, gas: number, internet: number): void => {
    const total = includeUtilities ? water + gas + internet : 0;
    setLocalUtilities(total);
    if (onValuesChange) {
      onValuesChange({
        propertyTaxes: localPropertyTaxes,
        homeownersInsurance: localHomeownersInsurance,
        hoaFees: localHoaFees,
        utilities: total,
      });
    }
  };

  const toggleIncludeUtilities = () => {
    const newValue = !includeUtilities;
    setIncludeUtilities(newValue);
    if (!newValue) {
      setLocalUtilities(0);
      if (onValuesChange) {
        onValuesChange({
          propertyTaxes: localPropertyTaxes,
          homeownersInsurance: localHomeownersInsurance,
          hoaFees: localHoaFees,
          utilities: 0,
        });
      }
    } else {
      const total = waterBill + gasBill + internetBill;
      setLocalUtilities(total);
      if (onValuesChange) {
        onValuesChange({
          propertyTaxes: localPropertyTaxes,
          homeownersInsurance: localHomeownersInsurance,
          hoaFees: localHoaFees,
          utilities: total,
        });
      }
    }
  };

  return (
    <section className="bg-[#FFFDFA] pt-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Chart and Total */}
          <div>
            <h4 className="font-semibold text-gray-900 text-base md:text-[18px]">
              Monthly payment breakdown
            </h4>

            <p
              className="mt-[24px] text-[48px] font-semibold text-gray-900"
              data-testid="sum"
            >
              ${formatCurrency(totalMonthlyPayment)}/mo
            </p>

            {/* SVG Chart Visualization - Now with ref for dynamic sizing */}
            <div className="mt-8" ref={svgContainerRef}>
              <svg height="80" width="100%" viewBox={`0 0 ${svgWidth} 80`} preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg">
                <rect
                  data-testid="principalPill"
                  height="80"
                  rx="40"
                  ry="40"
                  fill={getSegmentColor("principal")}
                  className="duration-300 ease-in-out"
                  width={piWidth}
                  x="0"
                  y="0"
                  onMouseEnter={() => setHoveredItem("principal")}
                  onMouseLeave={() => setHoveredItem(null)}
                />
                {localPropertyTaxes > 0 && (
                  <rect
                    data-testid="taxesPill"
                    height="80"
                    rx={Math.min(taxWidth / 2, 40)}
                    ry={Math.min(taxWidth / 2, 40)}
                    fill={getSegmentColor("taxes")}
                    className="duration-300 ease-in-out"
                    width={taxWidth}
                    x={taxStart}
                    y="0"
                    onMouseEnter={() => setHoveredItem("taxes")}
                    onMouseLeave={() => setHoveredItem(null)}
                  />
                )}
                {localHomeownersInsurance > 0 && (
                  <rect
                    data-testid="insurancePill"
                    height="80"
                    rx={Math.min(insuranceWidth / 2, 40)}
                    ry={Math.min(insuranceWidth / 2, 40)}
                    fill={getSegmentColor("insurance")}
                    className="duration-300 ease-in-out"
                    width={insuranceWidth}
                    x={insuranceStart}
                    y="0"
                    onMouseEnter={() => setHoveredItem("insurance")}
                    onMouseLeave={() => setHoveredItem(null)}
                  />
                )}
                {localHoaFees > 0 && (
                  <rect
                    data-testid="hoaPill"
                    height="80"
                    rx={Math.min(hoaWidth / 2, 40)}
                    ry={Math.min(hoaWidth / 2, 40)}
                    fill={getSegmentColor("hoa")}
                    className="duration-300 ease-in-out"
                    width={hoaWidth}
                    x={hoaStart}
                    y="0"
                    onMouseEnter={() => setHoveredItem("hoa")}
                    onMouseLeave={() => setHoveredItem(null)}
                  />
                )}
                {localUtilities > 0 && (
                  <rect
                    data-testid="utilitiesPill"
                    height="80"
                    rx={Math.min(utilitiesWidth / 2, 40)}
                    ry={Math.min(utilitiesWidth / 2, 40)}
                    fill={getSegmentColor("utilities")}
                    className="duration-300 ease-in-out"
                    width={utilitiesWidth}
                    x={utilitiesStart}
                    y="0"
                    onMouseEnter={() => setHoveredItem("utilities")}
                    onMouseLeave={() => setHoveredItem(null)}
                  />
                )}
              </svg>

              {/* Hover description box */}
              <div
                className={`block p-4 mt-8 rounded-md shadow-[0_0_12px_rgba(41,43,41,0.12)] transition-opacity duration-300 ease-in-out ${
                  hoveredItem ? "opacity-100" : "opacity-0"
                }`}
              >
                <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-2">
                  {hoveredItem === "principal"
                    ? "Principal & interest"
                    : hoveredItem === "taxes"
                    ? "Property taxes"
                    : hoveredItem === "insurance"
                    ? "Homeowners insurance"
                    : hoveredItem === "hoa"
                    ? "HOA fees"
                    : "Utilities"}
                </h4>
                <p
                  className="text-gray-700 text-base"
                  data-testid="description"
                >
                  {hoveredItem ? getItemDescription(hoveredItem) : ""}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Details */}
          <div>
            {/* Principal & Interest */}
            <div className="flex justify-between h-12 mb-4">
              <div className="flex items-center text-gray-900 w-1/2">
                <div className="rounded-sm h-4 w-1 mr-2 bg-[#0A7B3E]"></div>
                <p className="text-gray-900 text-base">Principal & interest</p>
              </div>
              <p
                className="text-base pt-0 items-center text-left w-1/2 sm:w-[160px] flex font-semibold text-gray-700"
                data-testid="principal-&-interest"
              >
                ${formatCurrency(monthlyPrincipalAndInterest)}
              </p>
            </div>

            {/* Property Taxes */}
            <div className="flex justify-between h-12 mb-4">
              <div className="flex items-center text-gray-900 w-1/2">
                <div className="rounded-sm h-4 w-1 mr-2 bg-[#4F46E5]"></div>
                <label
                  className="text-gray-900 text-base"
                  htmlFor="input-taxes"
                  id="taxes-label"
                >
                  Property taxes
                </label>
              </div>
              <div className="relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                <div
                  className="relative rounded-md bg-white w-full border border-solid border-gray-300 ease-in-out duration-300 
                             hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] 
                             focus-within:border-[#0A7B3E] focus-within:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] h-12"
                >
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 z-10 flex items-center font-semibold">
                    $
                  </div>
                  <input
                    aria-describedby="taxes-help-text"
                    name="taxes"
                    type="number"
                    id="input-taxes"
                    className="text-right px-3 pl-8 relative outline-none border-none rounded-md text-base font-semibold w-full h-full box-border"
                    value={localPropertyTaxes}
                    onChange={handlePropertyTaxesChange}
                    min="0"
                    step="1"
                  />
                </div>
                <div
                  className="text-xs pt-1 text-gray-500 flex flex-row-reverse pr-2"
                  id="taxes-help-text"
                >
                  {" "}
                </div>
              </div>
            </div>

            {/* Homeowners Insurance */}
            <div className="flex justify-between h-12 mb-4">
              <div className="flex items-center text-gray-900 w-1/2">
                <div className="rounded-sm h-4 w-1 mr-2 bg-[#818CF8]"></div>
                <label
                  className="text-gray-900 text-base"
                  htmlFor="input-insurance"
                  id="insurance-label"
                >
                  Homeowners insurance
                </label>
              </div>
              <div className="relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                <div
                  className="relative rounded-md bg-white w-full border border-solid border-gray-300 ease-in-out duration-300 
                             hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] 
                             focus-within:border-[#0A7B3E] focus-within:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] h-12"
                >
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 z-10 flex items-center font-semibold">
                    $
                  </div>
                  <input
                    aria-describedby="insurance-help-text"
                    name="insurance"
                    type="number"
                    id="input-insurance"
                    className="text-right px-3 pl-8 relative outline-none border-none rounded-md text-base font-semibold w-full h-full box-border"
                    value={localHomeownersInsurance}
                    onChange={handleHomeownersInsuranceChange}
                    min="0"
                    step="1"
                  />
                </div>
                <div
                  className="text-xs pt-1 text-gray-500 flex flex-row-reverse pr-2"
                  id="insurance-help-text"
                >
                  {" "}
                </div>
              </div>
            </div>

            {/* HOA Fees */}
            <div className="flex justify-between h-12 mb-4">
              <div className="flex items-center text-gray-900 w-1/2">
                <div className="rounded-sm h-4 w-1 mr-2 bg-[#FCD34D]"></div>
                <label
                  className="text-gray-900 text-base"
                  htmlFor="input-hoa"
                  id="hoa-label"
                >
                  HOA fees
                </label>
              </div>
              <div className="relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                <div
                  className="relative rounded-md bg-white w-full border border-solid border-gray-300 ease-in-out duration-300 
                             hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] 
                             focus-within:border-[#0A7B3E] focus-within:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] h-12"
                >
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 z-10 flex items-center font-semibold">
                    $
                  </div>
                  <input
                    aria-describedby="hoa-help-text"
                    name="hoa"
                    type="number"
                    id="input-hoa"
                    className="text-right px-3 pl-8 relative outline-none border-none rounded-md text-base font-semibold w-full h-full box-border"
                    value={localHoaFees}
                    onChange={handleHoaFeesChange}
                    min="0"
                    step="1"
                  />
                </div>
                <div
                  className="text-xs pt-1 text-gray-500 flex flex-row-reverse pr-2"
                  id="hoa-help-text"
                >
                  {" "}
                </div>
              </div>
            </div>

            {/* Utilities - Collapsible Section */}
            <div className="mb-6">
              <div>
                <button
                  type="button"
                  onClick={() => setIsUtilitiesOpen(!isUtilitiesOpen)}
                  className="flex flex-1 items-center justify-between py-4 transition-all w-full"
                >
                  <div
                    className="flex justify-between h-auto mb-0 w-full"
                    data-testid="open-utilities"
                  >
                    <div className="flex items-center text-gray-900 w-1/2">
                      <div className="rounded-sm h-4 w-1 mr-2 bg-[#FB7185]"></div>
                      <p
                        className="text-gray-900 text-base font-weight-200"
                        id="utilities-label"
                      >
                        Utilities
                      </p>
                    </div>
                    <span className="text-gray-900 text-base w-[144px] text-left font-semibold">
                      ${formatCurrency(localUtilities)}
                    </span>
                  </div>
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
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                      isUtilitiesOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>

              {/* Collapsible content with transition */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isUtilitiesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[#FFDFA] rounded-md mt-4 mb-4">
                  {/* Water/Sewer Bill */}
                  <div className="flex justify-between h-12 mb-4">
                    <div className="flex items-center text-gray-900 w-1/2">
                      <label
                        className="text-gray-900 text-base"
                        htmlFor="input-water"
                        id="water-label"
                      >
                        Water/Sewer
                      </label>
                    </div>
                    <div className="relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                      <div
                        className="relative rounded-md bg-white w-full border border-solid border-gray-300 ease-in-out duration-300 
          hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] 
          focus-within:border-[#0A7B3E] focus-within:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] h-12"
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 left-3 z-10 flex items-center font-semibold">
                          $
                        </div>
                        <input
                          aria-describedby="water-help-text"
                          name="water"
                          type="number"
                          id="input-water"
                          className="text-right px-3 pl-8 relative outline-none border-none rounded-md text-base font-semibold w-full h-full box-border"
                          value={waterBill}
                          onChange={handleWaterBillChange}
                          min="0"
                          step="1"
                          disabled={!includeUtilities}
                        />
                      </div>
                      <div
                        className="text-xs pt-1 text-gray-500 flex flex-row-reverse pr-2"
                        id="water-help-text"
                      >
                        {" "}
                      </div>
                    </div>
                  </div>

                  {/* Gas Bill */}
                  <div className="flex justify-between h-12 mb-4">
                    <div className="flex items-center text-gray-900 w-1/2">
                      <label
                        className="text-gray-900 text-base"
                        htmlFor="input-gas"
                        id="gas-label"
                      >
                        Gas
                      </label>
                    </div>
                    <div className="relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                      <div
                        className="relative rounded-md bg-white w-full border border-solid border-gray-300 ease-in-out duration-300 
          hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] 
          focus-within:border-[#0A7B3E] focus-within:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] h-12"
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 left-3 z-10 flex items-center font-semibold">
                          $
                        </div>
                        <input
                          aria-describedby="gas-help-text"
                          name="gas"
                          type="number"
                          id="input-gas"
                          className="text-right px-3 pl-8 relative outline-none border-none rounded-md text-base font-semibold w-full h-full box-border"
                          value={gasBill}
                          onChange={handleGasBillChange}
                          min="0"
                          step="1"
                          disabled={!includeUtilities}
                        />
                      </div>
                      <div
                        className="text-xs pt-1 text-gray-500 flex flex-row-reverse pr-2"
                        id="gas-help-text"
                      >
                        {" "}
                      </div>
                    </div>
                  </div>

                  {/* Internet Bill */}
                  <div className="flex justify-between h-12 mb-4">
                    <div className="flex items-center text-gray-900 w-1/2">
                      <label
                        className="text-gray-900 text-base"
                        htmlFor="input-internet"
                        id="internet-label"
                      >
                        Internet
                      </label>
                    </div>
                    <div className="relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                      <div
                        className="relative rounded-md bg-white w-full border border-solid border-gray-300 ease-in-out duration-300 
          hover:border-[#0A7B3E] hover:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] 
          focus-within:border-[#0A7B3E] focus-within:shadow-[0_0_0_3px_rgba(10,123,62,0.2)] h-12"
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 left-3 z-10 flex items-center font-semibold">
                          $
                        </div>
                        <input
                          aria-describedby="internet-help-text"
                          name="internet"
                          type="number"
                          id="input-internet"
                          className="text-right px-3 pl-8 relative outline-none border-none rounded-md text-base font-semibold w-full h-full box-border"
                          value={internetBill}
                          onChange={handleInternetBillChange}
                          min="0"
                          step="1"
                          disabled={!includeUtilities}
                        />
                      </div>
                      <div
                        className="text-xs pt-1 text-gray-500 flex flex-row-reverse pr-2"
                        id="internet-help-text"
                      >
                        {" "}
                      </div>
                    </div>
                  </div>

                  {/* Include Utilities Checkbox */}
                  <div className="relative flex items-center mt-4">
                    <button
                      type="button"
                      onClick={toggleIncludeUtilities}
                      className="flex items-center justify-center w-8 h-8 rounded-md cursor-pointer appearance-none border-none transition-all ease-in-out duration-300 bg-transparent hover:bg-gray-200"
                      role="checkbox"
                      aria-checked={includeUtilities}
                    >
                      <div
                        className={`flex items-center justify-center border h-5 w-5 p-0.5 rounded-sm pointer-events-none transition ease-in-out duration-300 ${
                          includeUtilities
                            ? "border-[#0A7B3E] bg-[#0A7B3E]"
                            : "border-gray-300"
                        }`}
                      >
                        {includeUtilities && (
                          <svg
                            aria-hidden="true"
                            width="13"
                            height="10"
                            viewBox="0 0 13 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="transition-all duration-300 ease-in-out stroke-white"
                          >
                            <path
                              d="M11.8 1L4.6 8.2L1 4.6"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                          </svg>
                        )}
                      </div>
                    </button>
                    <label className="text-gray-700 text-base pl-2 cursor-pointer">
                      Include utilities in payment
                    </label>
                    <input
                      type="checkbox"
                      className="z-[-1] hidden"
                      checked={includeUtilities}
                      onChange={toggleIncludeUtilities}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Link Button */}
            <button
              className="inline-block rounded-md text-base text-center px-[40px] h-[64px] font-semibold select-none outline-none transition duration-300 ease-in-out
                       bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 focus:ring-2 focus:ring-[#0A7B3E] active:bg-gray-200 px-6 h-12 w-auto mb-1"
              data-testid="copyLink"
              onClick={handleCopyLink}
            >
              Copy estimate link
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentBreakdown;
