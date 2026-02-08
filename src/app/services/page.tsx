'use client';

import Footer from "@/compoents/footer";
import Navbar from "@/compoents/landing.page/navbar";
import Reviews from "@/compoents/portfolio.page/reviews";
import Image from "next/image";
import { useState } from "react";

interface Service {
  id: number;
  title: string;
  highlight: string;
  description: string;
  imageUrl: string;
  altText: string;
  icon: React.ReactNode;
  iconDescription: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Custom Software',
    highlight: 'Development',
    description: 'At iWebX Solutions, we empower businesses with tailored digital solutions that simplify operations, enhance user experience, and drive sustainable growth. Our tech-first approach transforms complex challenges into streamlined systems your team and clients will love.',
    imageUrl: '/custom software.jpg',
    altText: 'Custom Software Development',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M9.75 17L9 20L8 21H16L15 20L14.25 17M3 13H21M5 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconDescription: 'Custom Software Development',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design']
  },
  {
    id: 2,
    title: 'Custom Web',
    highlight: 'Development',
    description: 'Our design philosophy centers on creating intuitive, beautiful interfaces that users love. We combine aesthetic appeal with functional design to deliver exceptional digital experiences that engage and convert your audience.',
    imageUrl: '/UI _ UX on Behance.jpeg',
    altText: 'UI/UX Design Excellence',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M7 21C4.79086 21 3 19.2091 3 17V10C3 7.79086 4.79086 6 7 6H17C19.2091 6 21 7.79086 21 10V17C21 19.2091 19.2091 21 17 21H7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconDescription: 'User-Centered Design',
    features: ['User Research', 'Wireframing & Prototyping', 'Usability Testing', 'Interface Design']
  },
  {
    id: 3,
    title: 'E-Commerce',
    highlight: 'Solutions',
    description: 'We build powerful e-commerce platforms that drive sales and enhance customer experiences. From intuitive product catalogs to seamless checkout processes, we create online stores that convert visitors into loyal customers.',
    imageUrl: '/ecommerce.jpg',
    altText: 'E-Commerce Solutions',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconDescription: 'E-Commerce Platforms',
    features: ['Online Store Development', 'Payment Integration', 'Inventory Management', 'Sales Analytics']
  },
  {
    id: 4,
    title: 'Cloud &',
    highlight: 'DevOps',
    description: 'We implement robust cloud infrastructure and DevOps practices to ensure your applications are scalable, secure, and highly available. Our solutions optimize performance while reducing operational costs.',
    imageUrl: '/cloud-devops.jpeg',
    altText: 'Cloud & DevOps',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M18 10H21M3 10H6M10 3V6M10 18V21M7.2 7.2L5.4 5.4M16.8 7.2L18.6 5.4M7.2 16.8L5.4 18.6M16.8 16.8L18.6 18.6M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconDescription: 'Cloud Infrastructure',
    features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Performance Monitoring']
  },
  {
    id: 5,
    title: 'Search Engine',
    highlight: 'Optimization',
    description: 'We optimize your online presence to increase visibility in search engine results. Our SEO strategies drive organic traffic, improve rankings, and boost your conversion rates through proven techniques.',
    imageUrl: '/SEO.jpeg',
    altText: 'Search Engine Optimization',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconDescription: 'Visibility Growth',
    features: ['Keyword Strategy', 'Technical SEO', 'Content Planning', 'Analytics & Reporting']
  },
  {
    id: 6,
    title: 'Backup &',
    highlight: 'Recovery',
    description: 'We implement comprehensive backup solutions and disaster recovery plans to protect your critical data. Ensure business continuity with our reliable and secure data protection strategies.',
    imageUrl: '/Backup.jpeg',
    altText: 'Backup & Recovery Services',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M19 11H5M5 11C3.89543 11 3 10.1046 3 9V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11ZM5 11V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15L12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 15L9 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 15L15 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    iconDescription: 'Data Protection',
    features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', '24/7 Monitoring']
  },
  {
    id: 7,
    title: 'System',
    highlight: 'Maintenance',
    description: 'We provide comprehensive system maintenance services to keep your infrastructure running smoothly. Our proactive approach minimizes downtime and ensures optimal performance of your IT environment.',
    imageUrl: '/mainatance.jpeg',
    altText: 'System Maintenance Services',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M14 10L21 3M21 3L16.5 7.5M21 3V8.5M10 14L3 21M3 21L7.5 16.5M3 21V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 4C14 4 12.5 7 11 9C9.5 11 7 13 4 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 12C18 12 17 14.5 15.5 16C14 17.5 12 19 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M5 16C5 16 8 15.5 10 14C12 12.5 14 10 14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    iconDescription: 'Proactive Care',
    features: ['Regular Updates', 'Security Patches', 'Performance Optimization', 'Monitoring & Support']
  },
  {
    id: 8,
    title: 'Payment',
    highlight: 'Integration',
    description: 'We integrate secure payment solutions like M-Pesa and Stripe into your platforms, enabling seamless transactions for your customers. Our implementations ensure compliance and security for all financial operations.',
    imageUrl: '/payment integration.jpeg',
    altText: 'Payment Integration Services',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M3 10H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconDescription: 'Secure Transactions',
    features: ['Secure Gateways', 'M-Pesa Integration', 'Custom Checkout', 'Transaction Analytics']
  },
  {
    id: 9,
    title: 'Custom Mobile',
    highlight: 'Applications',
    description: 'We develop bespoke mobile applications for iOS and Android platforms, tailored to your specific business needs. Our apps deliver exceptional user experiences and drive engagement.',
    imageUrl: '/mobile app development.jpeg',
    altText: 'Custom Mobile Applications',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M12 18H12.01M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconDescription: 'Native & Cross-Platform',
    features: ['iOS & Android Development', 'UI/UX Design', 'App Store Deployment', 'Push Notifications']
  },
];

// Component for a single service block - Always visible, no scroll animations
const ServiceBlock = ({ service, isReversed }: { service: Service; isReversed: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} items-center justify-between mb-20 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500`}
    >
      <div className="p-8 lg:p-12 lg:w-1/2 relative">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-tl-3xl"></div>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
          {service.title}{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            {service.highlight}
          </span>
        </h2>
        
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          {service.description}
        </p>
        
        {/* Features List with Golden Checkmarks */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <svg
                className="h-5 w-5 mr-3 mt-0.5 text-yellow-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-base">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className="group relative bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-semibold py-3 px-8 rounded-full overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl">
          {/* Shine effect */}
          <div className="absolute inset-0 -inset-x-10 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700"></div>
          <span className="relative z-10 flex items-center gap-2">
            Get a Quote
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
      </div>
      
      <div className="lg:w-1/2 h-[500px] relative overflow-hidden group/image">
        <Image
          src={service.imageUrl}
          alt={service.altText}
          fill
          className="object-cover transition-transform duration-700 group-hover/image:scale-110"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/800x600/E5E7EB/4B5563?text=Image+Not+Found';
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center p-8 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
          <div className="text-center text-white transform transition-transform duration-500 group-hover/image:translate-y-[-10px]">
            <div className={`w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
              {service.icon}
            </div>
            <p className="text-white font-medium text-lg">{service.iconDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <>
      <style>
        {`
        @keyframes subtle-pan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        .hero-bg-animated {
          animation: subtle-pan 30s linear infinite alternate;
          background-size: 200% 200%;
        }
        `}
      </style>
      
      <Navbar />

      {/* Hero Section - Updated to match blog hero style */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <span>OUR SERVICES</span>
                </button>
              </div>
            </div>

            {/* Main headline with animated gradient */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent bg-300% animate-gradient">
                Thicken up even the
              </span>
              <br />
              <span className="text-white">thinnest of margins.</span>
            </h1>

            {/* Secondary headline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                The secret key to profitability
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover how our tailored web solutions, expert design, and strategic digital marketing can transform your business
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

      {/* Services Section - Always visible, no scroll animations */}
      <section className="py-24 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>What We Offer</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Solutions for{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Your Business
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom software to digital marketing, we provide end-to-end services that drive growth and innovation.
            </p>
          </div>

          {services.map((service, index) => (
            <ServiceBlock key={service.id} service={service} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </section>

      <Reviews />
      <Footer />

      <style>{`
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
  );
}