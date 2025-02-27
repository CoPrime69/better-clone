// src/components/layout/Footer.tsx
import Image from 'next/image';

export default function Footer() {
    return (
      <footer className="bg-[#FFFDFA] py-16 border-t bg-[#FFFDFA] text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-[#0A2E1C] text-2xl font-bold mb-4">Better</h2>
            <p className="text-gray-600">
              Better is a family of companies serving all your homeownership needs.
            </p>
          </div>
  
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Home affordability calculator</li>
                <li>Mortgage calculator</li>
                <li>Free mortgage calculator</li>
                <li>Mortgage calculator with taxes</li>
                <li>Rent vs buy calculator</li>
                <li>HELOC payment calculator</li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-600">
                <li>About Us</li>
                <li>Careers</li>
                <li>Media</li>
                <li>Partner With Us</li>
                <li>Learning center</li>
                <li>Investor Relations</li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-gray-600">
                <li>hello@better.com</li>
                <li>415-523-8837</li>
                <li>FAQ</li>
                <li>Glossary</li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3 text-gray-600">
                <li>NMLS Consumer Access</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Disclosures & Licensing</li>
                <li>Browser Disclaimer</li>
              </ul>
            </div>
          </div>
  
          <div className="mt-12 pt-8 border-t">
            <div className="flex gap-4">
              <Image
                src="/images/equal-housing-lender.svg"
                alt="Equal Housing Lender"
                width={32}
                height={32}
                priority
              />
              <Image
                src="/images/equal-housing-opportunity.svg"
                alt="Equal Housing Opportunity"
                width={32}
                height={32}
                priority
              />
            </div>
          </div>
        </div>
      </footer>
    )
  }
