import Header from '@/app/Header';
import Footer from '@/app/Footer';
import MortgageCalculator from '@/components/mortgage-calculator/MortgageCalculator';
import Rest from '@/components/mortgage-calculator/Rest';
export default function Page() {
  return (
    <div className="bg-[#FFFDFA] min-h-screen">
      <Header />
      <main className='bg-[#FFFDFA]'>
        <MortgageCalculator />
        <Rest/>
      </main>
      <Footer />
    </div>
  );
}