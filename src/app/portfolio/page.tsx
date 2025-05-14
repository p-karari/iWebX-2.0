'use client';

import Footer from "@/compoents/footer";
// import Blog from "@/compoents/landing.page/blog";
import Navbar from "@/compoents/landing.page/navbar";
import Reviews from "@/compoents/portfolio.page/reviews";
import Link from "next/link";
import Image from "next/image";
import CtaCard from "@/compoents/landing.page/cta.card";

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
        image: "/portfolio_images/econest.jpeg", // add your own image in public/portfolio_images
        link: "https://awwwards.com" // or a live demo / your case study page
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
      
      <main className=" pb-16">
        {/* Hero Section */}
        <section className="relative pt-22 pb-10">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
              style={{ backgroundImage: "url('/images/contact-bg.png')" }}
            ></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-gold to-gold-dark px-4 py-2 mb-8 shadow-lg">
              <span className="text-white text-sm font-medium">Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Bringing your ideas to life in a<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">creative yet efficient way</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover the brands we&apos;ve worked with and the innovative solutions we&apos;ve delivered
            </p>
          </div>
        </section>

        <div className="border-t border-slate-200 my-12 max-w-7xl mx-auto"></div>

        {/* Portfolio Categories */}
        {portfolioCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="max-w-7xl mx-auto px-4 mb-20">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center">
                <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                {category.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200"
                >
                  {/* Image with Next.js Image component */}
<div className="h-48 relative overflow-hidden">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 py-2 px-4 rounded-full"
    >
      View Project
    </a>
  </div>
</div>

<div className="p-6">
  <h3 className="font-semibold text-lg text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
    {item.title}
  </h3>
  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>

  {/* View Project Button */}
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex text-blue-600 font-medium text-sm items-center group-hover:text-amber-500 transition-colors duration-300"
  >
    View Project
    <svg
      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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

      </main>
      <Reviews />

              <section className="max-w-7xl mx-auto px-4 mb-16 mt-24 text-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://picsum.photos/seed/cta/1200/400"
                alt="Ready to start your project?"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk8RGYy5QeTqNzX//2Q=="
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/80"></div>
            </div>
            

<CtaCard />

          </div>
        </section>

      {/* <Blog /> */}
      <Footer />
    </>
  )
}

export default PortfolioPage;