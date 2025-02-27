import Header from '@/app/Header';
import Footer from '@/app/Footer';
import MortgageCalculator from '@/components/mortgage-calculator/MortgageCalculator';
import Rest from '@/components/mortgage-calculator/Rest';
export default function Page() {
  return (
    <div className="bg-[#F7F8F9] min-h-screen">
      <Header />
      <main>
        <MortgageCalculator />
        <Rest/>
      </main>
      <Footer />
    </div>
  );
}