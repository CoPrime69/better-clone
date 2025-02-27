import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-green-700">Better</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Better is a family of companies serving all your homeownership needs.
            </p>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                'Home affordability calculator',
                'Mortgage calculator',
                'Free mortgage calculator',
                'Mortgage calculator with taxes',
                'Mortgage calculator with PMI',
                'Rent vs buy calculator',
                'HELOC payment calculator',
                'HELOC vs cash-out refinance calculator',
                'Buy a home',
                'Sell a home',
                'Get home inspection'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Careers',
                'Media',
                'Partner With Us',
                'Learning center',
                'FAQs',
                'Investor Relations'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="mailto:hello@better.com" className="text-gray-600 hover:text-green-700 transition-colors">
                  hello@better.com
                </a>
              </li>
              <li>
                <a href="tel:415-523-8837" className="text-gray-600 hover:text-green-700 transition-colors">
                  415-523-8837
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                  Glossary
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-3">
              {[
                'NMLS Consumer Access',
                'Privacy Policy',
                'Terms of Use',
                'Disclosures & Licensing',
                'Affiliated Business',
                'Browser Disclaimer'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Legal Icons */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Better. All rights reserved.</p>
            <div className="flex space-x-4">
              <img src="/equal-housing-lender.svg" alt="Equal Housing Lender" className="h-10" />
              <img src="/equal-housing-opportunity.svg" alt="Equal Housing Opportunity" className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;