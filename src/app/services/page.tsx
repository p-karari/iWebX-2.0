'use client';

import Navbar from "@/compoents/landing.page/navbar";
import Footer from "@/compoents/footer";
import Reviews from "@/compoents/portfolio.page/reviews";
import { motion, Variants } from 'framer-motion';
import Image from "next/image";

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

// Animation variants for fade-in effect on scroll
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Component for a single service block
const ServiceBlock = ({ service, isReversed }: { service: Service; isReversed: boolean }) => (
  <motion.div
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} items-center justify-between mb-20 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden`}
  >
    <div className="p-8 lg:p-12 lg:w-1/2">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        {service.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">{service.highlight}</span>
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      {/* Features List with Golden Checkmarks */}
      <ul className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <svg
              className="h-5 w-5 mr-2 mt-0.5 text-yellow-500 flex-shrink-0"
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
      
      <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
        Get a Quote
      </button>
    </div>
    <div className="lg:w-1/2 h-96 relative">
      <Image
        src={service.imageUrl}
        alt={service.altText}
        width={400}
        height={500}
        className="object-cover w-full h-full"
        onError={(e) => {
          e.currentTarget.src = 'https://placehold.co/800x600/E5E7EB/4B5563?text=Image+Not+Found';
          console.error(`Failed to load image at ${service.imageUrl}`);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-end justify-center p-8">
        <div className="text-center text-white">
          <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            {service.icon}
          </div>
          <p className="text-white font-medium">{service.iconDescription}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

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
        
        .gold-button:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        }
        `}
      </style>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 font-sans">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat hero-bg-animated opacity-20"
            style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
          ></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 mb-8 shadow-lg"
          >
            <span className="text-white text-sm font-medium">OUR SERVICES</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Thicken up even the thinnest of margins.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> The secret key to profitability</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Discover how our tailored web solutions, expert design, and strategic digital marketing can transform your business
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <ServiceBlock key={service.id} service={service} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </section>

      <Reviews />
      <Footer />
    </>
  );
}
