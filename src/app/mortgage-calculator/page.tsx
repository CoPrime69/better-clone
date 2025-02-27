import Header from '@/app/Header';
import Footer from '@/app/Footer';
import MortgageCalculator from '@/components/mortgage-calculator/MortgageCalculator';
// import PaymentBreakdown from '@/components/mortgage-calculator/PaymentBreakdown';

export default function Page() {
  return (
    <div className="bg-[#F7F8F9] min-h-screen">
      <Header />
      <main>
        <MortgageCalculator />
      </main>
      <Footer />
    </div>
  );
}