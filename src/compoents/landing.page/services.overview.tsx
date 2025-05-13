'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  highlight: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

// Service data with all 9 services and inline SVG icons
const services: Service[] = [
  {
    id: 1,
    title: 'Custom Software',
    highlight: 'Development',
    description: 'We create bespoke software solutions tailored to your specific business needs. Our full-stack expertise ensures scalable, maintainable, and high-performance applications that drive your business forward.',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'E-Commerce',
    highlight: 'Solutions',
    description: 'We build powerful e-commerce platforms that drive sales and enhance customer experiences. From intuitive product catalogs to seamless checkout processes, we create online stores that convert visitors into loyal customers.',
    features: ['Online Store Development', 'Payment Integration', 'Inventory Management', 'Sales Analytics'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
        <line x1="1" y1="10" x2="23" y2="10"></line>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Cloud &',
    highlight: 'DevOps',
    description: 'We implement robust cloud infrastructure and DevOps practices to ensure your applications are scalable, secure, and highly available. Our solutions optimize performance while reducing operational costs.',
    features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Performance Monitoring'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Mobile App',
    highlight: 'Development',
    description: 'We design and develop engaging mobile applications for iOS and Android that connect you with your audience on the devices they use most.',
    features: ['iOS & Android Development', 'UI/UX Design', 'App Store Deployment', 'Push Notifications'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'SEO & Digital',
    highlight: 'Marketing',
    description: 'Our data-driven SEO strategies enhance your online presence, attract high-intent traffic, and convert visitors into loyal customers, ensuring long-term profitability.',
    features: ['Keyword Strategy', 'Technical SEO', 'Content Planning', 'Analytics & Reporting'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Backup &',
    highlight: 'Recovery',
    description: 'A crucial service for data protection and business continuity, showing a focus on security and reliability. Our systems ensure your data is always safe and recoverable.',
    features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', '24/7 Monitoring'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
        <path d="M21.5 12H16C12.13 12 9 15.13 9 19V21H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h15l5 5V12z"></path>
      </svg>
    ),
  },
  {
    id: 7,
    title: 'UX/UI',
    highlight: 'Design',
    description: 'We craft intuitive and beautiful user interfaces that are a joy to use. Our human-centered design approach ensures your product is not only functional but also engaging and accessible.',
    features: ['User Research', 'Wireframing & Prototyping', 'Usability Testing', 'Interface Design'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
        <path d="M12 2L19 12L12 22L5 12L12 2Z"></path>
        <path d="M5 12L12 17L19 12"></path>
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Data',
    highlight: 'Analytics',
    description: 'Unlock the power of your data with our expert analytics services. We transform raw data into actionable insights, helping you make informed business decisions and identify new opportunities.',
    features: ['Data Visualization', 'Predictive Modeling', 'Reporting & Dashboards', 'Business Intelligence'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
        <path d="M12 20V10M18 20V4M6 20V16"></path>
      </svg>
    ),
  },
  {
    id: 9,
    title: 'AI & Machine',
    highlight: 'Learning',
    description: 'Integrate intelligent solutions into your business with our AI and machine learning expertise. We develop custom models to automate tasks, personalize experiences, and optimize operations.',
    features: ['Custom AI Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
        <path d="M12 21.6c-4.4 0-8-3.6-8-8s3.6-8 8-8c4.4 0 8 3.6 8 8c0 4.4-3.6 8-8 8zM12 13.6L12 21.6M12 13.6L19.4 17.6M12 13.6L4.6 17.6M12 13.6L19.4 9.6M12 13.6L4.6 9.6"></path>
      </svg>
    ),
  },
];

// Animation variants for the main container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for each child item
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    },
  },
};

// Variants for the card hover effect
const cardHoverVariants: Variants = {
  initial: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    },
  },
};

export default function ServicesOverview() {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900 px-4 sm:px-6 lg:px-8">
      {/* Font Import */}
      {/* <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
      </style> */}
      
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5 pointer-events-none z-0"></div>

      {/* Page Header */}
      <motion.div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Elevate Your Business With{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Premium Solutions</span>
        </h1>
        <p className="text-lg text-gray-600">
          We combine cutting-edge technology with elegant design to create digital experiences that drive growth, engagement, and measurable results for your business.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            className="group h-full"
          >
            <motion.div
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col transition-colors duration-300 group-hover:border-yellow-300 group-hover:shadow-lg group-hover:shadow-yellow-100"
            >
              {/* Icon */}
              <div className="text-yellow-500 mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-500/10">
                {service.icon}
              </div>

              {/* Title & Short Desc */}
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {service.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  {service.highlight}
                </span>
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Features - now always visible */}
              <div className="mt-auto">
                <ul className="space-y-1 text-sm mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-yellow-500 mr-2">▪</span> {feature}
                    </li>
                  ))}
                </ul>
                {/* CTA Button */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link href="/services">
                   
                  <button className="text-yellow-500 hover:text-yellow-400 font-medium text-sm hover:underline transition-all">
                    Explore Services →
                  </button>

                  </Link>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
