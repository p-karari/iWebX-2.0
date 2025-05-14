'use client';

import Footer from '@/compoents/footer';
// import Blog from '@/compoents/landing.page/blog';
import Navbar from '@/compoents/landing.page/navbar';
import { useState } from 'react';
import PricingModal from '@/compoents/pricing.page/PricingModal';
import Link from 'next/link';
import CustomQuoteModal from '@/compoents/pricing.page/get.quote';

interface PricingPackage {
  title: string;
  description: string;
  price: string;
  billing: string;
  popular: boolean;
  features: string[];
  cta: string;
}

// interface AddOnService {
//   title: string;
//   price: string;
//   description: string;
// }


function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handlePackageSelect = (pkg: PricingPackage) => {
    setSelectedPackage(pkg.title);
    setIsModalOpen(true);
  };

  // Pricing packages data
  const pricingPackages = [
    {
      title: "Starter Package",
      description: "Perfect for small businesses and startups",
      price: "KSH 20,000",
      billing: "one-time project fee",
      popular: false,
      features: [
        "5-page responsive website",
        "Basic SEO optimization",
        "Contact form integration",
        "1 round of revisions",
        "2-week delivery",
        "1 month technical support",
        "3 installments Payment plan option"
      ],
      cta: "Get Started"
    },
    {
      title: "Business Package",
      description: "Ideal for growing businesses with more complex needs",
      price: "KSH 35,000",
      billing: "one-time project fee",
      popular: true,
      features: [
        "Up to 15-page responsive website",
        "Advanced SEO optimization",
        "CMS integration (WordPress)",
        "3 rounds of revisions",
        "4-week delivery",
        "3 months technical support",
        "Basic branding package",
        "Social media integration",
        "3 installments Payment plan option"
      ],
      cta: "Choose Plan"
    },
    {
      title: "Enterprise Package",
      description: "Complete solution for large organizations",
      price: "KSH 75,000",
      billing: "one-time project fee",
      popular: false,
      features: [
        "Unlimited page responsive website",
        "E-commerce functionality",
        "Custom web application features",
        "Unlimited revisions",
        "6-8 week delivery",
        "6 months technical support",
        "Complete branding package",
        "Advanced analytics integration",
        "Priority support",
        "Training sessions",
        "4 installments Payment plan option"
      ],
      cta: "Choose Plan"
    }
  ];

  // Add-on services
  const addOnServices = [
    {
      title: "Logo Design",
      price: "KSH 500",
      description: "Custom logo design with 3 concepts to choose from"
    },
    {
      title: "SEO Package",
      price: "KSH 5,000",
      description: "Comprehensive on-page SEO optimization"
    },
    {
      title: "Website Maintenance",
      price: "KSH 3,000/ Month",
      description: "Regular updates, backups, and security monitoring"
    }
  ];

  // State for selected add-ons
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);

  // Toggle add-on selection
  const toggleAddOn = (index: number) => {
    if (selectedAddOns.includes(index)) {
      setSelectedAddOns(selectedAddOns.filter(i => i !== index));
    } else {
      setSelectedAddOns([...selectedAddOns, index]);
    }
  };

  // Handle custom quote request
  const handleCustomQuote = () => {
    setIsCustomModalOpen(true);
  };

  return (
    <>
      <Navbar />
      
      <main className=" pb-16 bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative pt-22 pb-10">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
              style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
            ></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-gold to-gold-dark px-4 py-2 mb-8 shadow-lg">
              <span className="text-white text-sm font-medium">Simple Pricing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent pricing for every<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">business size</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Choose the package that fits your needs. All packages include custom design, development, and deployment.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 my-12 max-w-7xl mx-auto"></div>

        {/* Pricing Packages */}
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  pkg.popular 
                    ? "ring-2 ring-gold/20 border-gold/30 transform -translate-y-2" 
                    : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <span className="bg-gradient-to-r from-gold to-gold-dark text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                
                {/* Package Header */}
                <div className="p-8 border-b border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600">{pkg.description}</p>
                  
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gold-dark">{pkg.price}</span>
                    <span className="text-gray-500 block mt-1 text-sm">{pkg.billing}</span>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button 
                    onClick={() => handlePackageSelect(pkg)}
                    className={`mt-8 w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer ${
                      pkg.popular
                        ? "bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800 "
                    }`}
                  >
                    {pkg.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200 my-16 max-w-7xl mx-auto"></div>

        {/* Add-on Services */}
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Enhance your package with these additional services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  selectedAddOns.includes(index) ? 'ring-2 ring-gold border-gold' : ''
                }`}
                onClick={() => toggleAddOn(index)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  <span className="text-xl font-bold text-gold-dark whitespace-nowrap pl-4">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    selectedAddOns.includes(index) ? 'text-gold' : 'text-gray-500'
                  }`}>
                    {selectedAddOns.includes(index) ? 'Added to package' : 'Add to package'}
                  </span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    selectedAddOns.includes(index) 
                      ? 'bg-gold border-gold' 
                      : 'border-gray-300'
                  }`}>
                    {selectedAddOns.includes(index) && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200 my-16 max-w-7xl mx-auto"></div>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 mb-16">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What&apos;s included in the pricing?</h3>
              <p className="text-gray-600">
                All our packages include design, development, testing, and deployment. We also provide training on how to use your new website and documentation for future reference.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How long does project take?</h3>
              <p className="text-gray-600">
                Project timelines vary by package. Starter packages typically take 2 weeks, Business packages 4 weeks, and Enterprise packages 6-8 weeks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Do you offer ongoing support?</h3>
              <p className="text-gray-600">
                Yes, all packages include technical support after launch. We also offer monthly maintenance plans to keep your website secure and up-to-date.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Can I upgrade my package later?</h3>
              <p className="text-gray-600">
                Absolutely! We can easily scale your website as your business grows. Just contact us when you&apos;re ready to upgrade.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 mb-16 mt-24 text-center">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your project is one-of-a-kind, and so is our approach.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let&apos;s create something amazing together—our full suite of tech and consultancy services is ready to bring your brilliant idea to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleCustomQuote}
                className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold hover:scale-105 cursor-pointer text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Request Custom Quote
              </button>
              <Link href="/contact" passHref>
                <button
                  className="text-gold-dark font-semibold py-3 px-8 rounded-xl border border-gold hover:bg-gold hover:scale-105  transition-all duration-300 cursor-pointer"
                >
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </section>
        <PricingModal 
          visible={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedPackage={selectedPackage}
          addOns={selectedAddOns.map(i => addOnServices[i].title)}
        />
        <CustomQuoteModal
          visible={isCustomModalOpen}
          onClose={() => setIsCustomModalOpen(false)}
        />

      </main>

      {/* <Blog /> */}
      <Footer />
    </>
  )
}

export default PricingPage;
