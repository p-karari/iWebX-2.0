'use client';

import Footer from '@/compoents/footer';
// import Blog from '@/compoents/landing.page/blog';
import Navbar from '@/compoents/landing.page/navbar';
import CustomQuoteModal from '@/compoents/pricing.page/get.quote';
import PricingModal from '@/compoents/pricing.page/PricingModal';
import Link from 'next/link';
import { useState } from 'react';

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handlePackageSelect = (pkg: PricingPackage) => {
    setSelectedPackage(pkg.title);
    setIsModalOpen(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Pricing packages data
  const pricingPackages = [
    {
      title: "Starter Package",
      description: "Perfect for small businesses and startups",
      price: "KSH 25,000",
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
      price: "KSH 45,000",
      billing: "one-time project fee",
      popular: true,
      features: [
        "Up to 10-page responsive website",
        "Advanced SEO optimization",
        "CMS integration",
        "3 rounds of revisions",
        "4-week delivery",
        "2 months technical support",
        "Basic branding package",
        "Social media integration",
        "3 installments Payment plan option"
      ],
      cta: "Choose Plan"
    },
    {
      title: "Enterprise Package",
      description: "Complete solution for large organizations",
      price: "KSH 85,000",
      billing: "one-time project fee",
      popular: false,
      features: [
        "Unlimited page responsive website",
        "E-commerce functionality",
        "Custom web application features",
        "Unlimited revisions",
        "6-8 week delivery",
        "3 months technical support",
        "Complete branding package",
        "Advanced analytics integration",
        "Priority support",
        "Training sessions",
        "4 installments Payment plan option"
      ],
      cta: "Choose Plan"
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What's included in the pricing?",
      answer: "All our packages include design, development, testing, and deployment. We also provide training on how to use your new website and documentation for future reference. Additionally, every package comes with post-launch technical support for the specified duration.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      question: "How long does a project take?",
      answer: "Project timelines vary by package. Starter packages typically take 2 weeks, Business packages 4 weeks, and Enterprise packages 6-8 weeks. We'll provide you with a detailed timeline during our initial consultation and keep you updated throughout the development process.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, all packages include technical support after launch. We offer different tiers of monthly maintenance plans to keep your website secure, updated, and performing at its best. These plans include regular backups, security updates, performance monitoring, and content updates as needed.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely! We build our websites to be scalable and flexible. As your business grows, we can easily add new features, pages, or functionality. Just contact us when you're ready to upgrade, and we'll create a custom migration plan for you.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, M-Pesa (for Kenyan clients), and credit/debit cards. We also offer flexible installment plans - 3 installments for Starter and Business packages, and 4 installments for Enterprise packages.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      question: "Do you require a deposit to start?",
      answer: "Yes, we require a 50% deposit to begin work on your project, with the remaining balance due upon completion. This helps us secure your slot in our development schedule and shows your commitment to the project.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
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
      
      <main className="pb-16 bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section - Updated to match blog hero style */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Background Grid Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4b5563_1px,transparent_1px),linear-gradient(to_bottom,#4b5563_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-0 -left-4 w-96 h-96 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-yellow-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${8 + Math.random() * 7}s`
                }}
              />
            ))}
          </div>

          {/* Decorative gold accent lines */}
          <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              {/* Premium badge */}
              <div className="flex justify-center mb-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <button className="relative flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Simple Pricing</span>
                  </button>
                </div>
              </div>

              {/* Main headline with animated gradient */}
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent bg-300% animate-gradient">
                  Transparent Pricing
                </span>
                <br />
                <span className="text-white">for Every Business</span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Choose the package that fits your needs. All packages include custom design, development, and deployment with flexible payment options.
              </p>

              {/* Scroll indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-scroll"></div>
                </div>
              </div>
            </div>
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
                    ? "ring-2 ring-yellow-400/20 border-yellow-400/30 transform -translate-y-2" 
                    : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                
                {/* Package Header */}
                <div className="p-8 border-b border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600">{pkg.description}</p>
                  
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-yellow-600">{pkg.price}</span>
                    <span className="text-gray-500 block mt-1 text-sm">{pkg.billing}</span>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 text-gray-900"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
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
                  selectedAddOns.includes(index) ? 'ring-2 ring-yellow-400 border-yellow-400' : ''
                }`}
                onClick={() => toggleAddOn(index)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  <span className="text-xl font-bold text-yellow-600 whitespace-nowrap pl-4">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    selectedAddOns.includes(index) ? 'text-yellow-600' : 'text-gray-500'
                  }`}>
                    {selectedAddOns.includes(index) ? 'Added to package' : 'Add to package'}
                  </span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    selectedAddOns.includes(index) 
                      ? 'bg-yellow-400 border-yellow-400' 
                      : 'border-gray-300'
                  }`}>
                    {selectedAddOns.includes(index) && (
                      <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* FAQ Section - Redesigned */}
        <section className="max-w-4xl mx-auto px-4 mb-24">
          <div className="text-center mb-16">
            {/* Section badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>Got Questions?</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about our pricing, process, and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform duration-300">
                      {faq.icon}
                    </div>
                    <span className="text-lg md:text-xl font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 ${
                    openFaqIndex === index ? 'bg-yellow-400 rotate-180' : ''
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openFaqIndex === index ? 'text-gray-900' : 'text-gray-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6 pl-24 pr-16">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Still have questions?</h3>
              <p className="text-gray-300 mb-6">Can't find the answer you're looking for? Please chat with our friendly team.</p>
              <button
                onClick={handleCustomQuote}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-semibold py-3 px-8 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Support
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
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
              Let's create something amazing together—our full suite of tech and consultancy services is ready to bring your brilliant idea to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleCustomQuote}
                className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 cursor-pointer text-gray-900 font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Request Custom Quote
              </button>
              <Link href="/contact" passHref>
                <button
                  className="text-yellow-600 font-semibold py-3 px-8 rounded-xl border border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 hover:scale-105 transition-all duration-300 cursor-pointer"
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

      <style >{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 10s infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 6s ease infinite;
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </>
  )
}

export default PricingPage;