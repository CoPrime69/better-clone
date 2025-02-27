/**
 * Calculate the monthly mortgage payment
 * @param principal The loan amount (home price - down payment)
 * @param interestRate Annual interest rate as a percentage (e.g., 6.5)
 * @param loanTermYears Loan term in years
 * @returns Monthly payment amount
 */
export function calculateMonthlyPayment(
    principal: number,
    interestRate: number,
    loanTermYears: number
  ): number {
    // Convert annual interest rate to monthly decimal rate
    const monthlyRate = interestRate / 100 / 12;
    
    // Calculate total number of payments
    const numberOfPayments = loanTermYears * 12;
    
    // If interest rate is 0, return simple division
    if (interestRate === 0) {
      return principal / numberOfPayments;
    }
    
    // Calculate monthly payment using formula: P * (r(1+r)^n) / ((1+r)^n - 1)
    const monthlyPayment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return Math.round(monthlyPayment);
  }
  
  /**
   * Format a number as currency (e.g., 300000 -> "300,000")
   */
  export function formatCurrency(value: number | string): string {
    const numericValue = typeof value === 'string' ? 
      parseFloat(value.replace(/[^\d.-]/g, '')) : value;
    
    if (isNaN(numericValue)) return '';
    
    return numericValue.toLocaleString('en-US');
  }
  
  /**
   * Parse a currency string to a number (e.g., "$300,000" -> 300000)
   */
  export function parseCurrency(value: string): number {
    return parseFloat(value.replace(/[^\d.-]/g, '')) || 0;
  }
  
  /**
   * Calculate down payment amount based on home price and percentage
   */
  export function calculateDownPayment(homePrice: number, percentage: number): number {
    return Math.round(homePrice * (percentage / 100));
  }
  
  /**
   * Calculate down payment percentage based on home price and down payment amount
   */
  export function calculateDownPaymentPercentage(homePrice: number, downPaymentAmount: number): number {
    if (homePrice === 0) return 0;
    return Math.round((downPaymentAmount / homePrice) * 100);
  }