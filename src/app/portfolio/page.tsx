'use client';

import Footer from "@/compoents/footer";
// import Blog from "@/compoents/landing.page/blog";
import Navbar from "@/compoents/landing.page/navbar";
import Reviews from "@/compoents/portfolio.page/reviews";
// import Link from "next/link";
import CtaCard from "@/compoents/landing.page/cta.card";
import Image from "next/image";

function PortfolioPage() {
  // Portfolio data organized by category
const portfolioCategories = [
  {
    title: "Custom Websites for Brands",
    items: [
      {
        title: "EcoNest – Sustainable Housing Website",
        description:
          "Example project showing the type of responsive, SEO-optimized marketing sites we can build. Next.js + TailwindCSS, custom animations, blog and lead capture.",
        image: "/portfolio_images/econest.jpeg",
        link: "https://awwwards.com"
      },
      {
        title: "TasteHub – Restaurant Chain Landing Page",
        description:
          "Example project showing multi-location restaurant landing pages with online booking integration and menu management dashboard.",
        image: "/portfolio_images/tastehub.png",
        link: "https://land-book.com"
      },
      {
        title: "TravelPoint – Tour Agency Platform",
        description:
          "Example project showing full-featured tour booking websites with dynamic filtering, payment gateway, and admin panel.",
        image: "/portfolio_images/travelpoint.png",
        link: "https://onepagelove.com"
      },
      {
        title: "NovaFit – Fitness Studio Website",
        description:
          "Example project showing single-page promotional sites with interactive schedules, instructor profiles, and embedded class booking.",
        image: "/portfolio_images/novafit.png",
        link: "https://behance.net"
      },
      {
        title: "BrightFuture – Education Nonprofit Site",
        description:
          "Example project showing NGO sites focusing on donations, volunteer sign-up, and content strategy. Accessibility & performance in mind.",
        image: "/portfolio_images/brightfuture.png",
        link: "https://dribbble.com"
      },
      {
        title: "UrbanTech – SaaS Product Website",
        description:
          "Example project showing marketing and documentation websites for B2B SaaS with gated content, analytics and newsletter integration.",
        image: "/portfolio_images/urbantech.png",
        link: "https://godly.website"
      }
    ]
  },
  {
    title: "Management Systems for SMEs",
    items: [
      {
        title: "RetailPro – Inventory & Sales Dashboard",
        description:
          "Example project showing web-based systems for SMEs to manage inventory, POS and daily sales reports with real-time charts.",
        image: "/portfolio_images/retailpro.png",
        link: "https://datanoesis.gr/retail-in-a-box/"
      },
      {
        title: "ClinicEase – Patient Management System",
        description:
          "Example project showing HIPAA-friendly portals for small clinics to manage appointments, patient records and billing.",
        image: "/portfolio_images/clinicease.png",
        link: "https://medinous.com/"
      },
      {
        title: "TaskFlow – Team Project Manager",
        description:
          "Example project showing lightweight Kanban-style task managers for SMEs with drag-and-drop boards, notifications and team chat.",
        image: "/portfolio_images/taskflow.png",
        link: "https://clickup.com/"
      }
    ]
  },
  {
    title: "Payment Integration for Existing Systems",
    items: [
      {
        title: "Stripe Integration for E-Commerce",
        description:
          "Example project showing Stripe Checkout/Webhooks integrated into existing online stores to support subscriptions and one-off payments.",
        image: "/portfolio_images/stripe.png",
        link: "https://stripe.com"
      },
      {
        title: "PayPal + Mpesa Gateway for Local Shop",
        description:
          "Example project showing PayPal & Mpesa API integration into small retailers’ existing systems for cross-border payments.",
        image: "/portfolio_images/mpesa.png",
        link: "https://paypal.com"
      },
      {
        title: "Secure Donation Platform",
        description:
          "Example project showing multiple payment options (credit card, PayPal, mobile money) with fraud prevention and automated receipts.",
        image: "/portfolio_images/donation.png",
        link: "https://example.com"
      }
    ]
  },
  {
    title: "Posters, Logos and Banner Designs for Businesses",
    items: [
      {
        title: "Brand Identity for Coffee House",
        description:
          "Example project showing new logo, color palette, and packaging assets for a local coffee brand including social media banners.",
        image: "/portfolio_images/coffee.png",
        link: "https://behance.net"
      },
      {
        title: "Tech Conference 2024 Promo Pack",
        description:
          "Example project showing event posters, roll-up banners, and digital ads for a tech conference.",
        image: "/portfolio_images/techconf.png",
        link: "https://dribbble.com"
      },
      {
        title: "Fitness Studio Rebranding",
        description:
          "Example project showing complete rebrand of a fitness studio: new logo, outdoor banners, class schedule posters, and website graphics.",
        image: "/portfolio_images/fitness.png",
        link: "https://behance.net"
      }
    ]
  }
];

  return (
    <>
      <Navbar />
      
      <main className="pb-16">
        {/* Hero Section - Updated to match blog hero style */}
        <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              {/* Premium badge */}
              <div className="flex justify-center mb-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <button className="relative flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                      <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Portfolio</span>
                  </button>
                </div>
              </div>

              {/* Main headline with animated gradient */}
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent bg-300% animate-gradient">
                  Bringing your ideas to life
                </span>
                <br />
                <span className="text-white">in a creative yet efficient way</span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Discover the brands we&apos;ve worked with and the innovative solutions we&apos;ve delivered
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

        <div className="border-t border-slate-200 my-12 max-w-7xl mx-auto"></div>

        {/* Portfolio Categories */}
        {portfolioCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="max-w-7xl mx-auto px-4 mb-20">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                {category.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-2"
                >
                  {/* Image with Next.js Image component */}
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl"
                      >
                        View Project
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-slate-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>

                    {/* View Project Button */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-yellow-600 font-medium text-sm items-center group-hover:text-yellow-500 transition-colors duration-300"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Divider between categories */}
            {categoryIndex < portfolioCategories.length - 1 && (
              <div className="border-t border-slate-200 my-16 max-w-7xl mx-auto"></div>
            )}
          </section>
        ))}

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 mb-16 mt-24 text-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://picsum.photos/seed/cta/1200/400"
                alt="Ready to start your project?"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-slate-900/80"></div>
            </div>
            
            <CtaCard />
          </div>
        </section>
      </main>
      
      <Reviews />
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

export default PortfolioPage;