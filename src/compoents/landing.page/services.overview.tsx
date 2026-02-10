'use client';

import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  highlight: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

// Service data with all services - HEADER, 8 SERVICE CARDS, 1 FOOTER CARD
const services: Service[] = [
  // HEADER AS FIRST CARD - No icon, no features, minimal styling
  {
    id: 0,
    title: 'Elevate Your Business With Premium Solutions',
    highlight: '',
    description: 'We combine cutting-edge technology with elegant design to create digital experiences that drive growth, engagement, and measurable results for your business.',
    features: [],
    icon: null,
  },
  {
    id: 1,
    title: 'Web & Software',
    highlight: 'Development',
    description: 'From dynamic websites to enterprise-grade custom software, we build end-to-end digital solutions that solve real business problems. Our full-stack engineering team delivers robust, scalable applications across web, mobile, and cloud platforms—tailored to your unique workflow and growth goals.',
    features: ['Custom Web Applications', 'Enterprise Software', 'Mobile & Progressive Web Apps', 'API & System Integration'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Website',
    highlight: 'Management',
    description: 'Keep your digital storefront running at peak performance with our comprehensive website maintenance and optimization services. From security updates and performance tuning to content updates and technical SEO, we ensure your site remains fast, secure, and always up-to-date.',
    features: ['Security Monitoring', 'Performance Optimization', 'Content Updates', 'Technical SEO', 'Backup & Recovery'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Mobile App',
    highlight: 'Development',
    description: 'We design and develop engaging mobile applications for iOS and Android that connect you with your audience on the devices they use most.',
    features: ['iOS & Android Development', 'UI/UX Design', 'App Store Deployment', 'Push Notifications'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'SEO & Digital',
    highlight: 'Marketing',
    description: 'Our data-driven SEO strategies enhance your online presence, attract high-intent traffic, and convert visitors into loyal customers, ensuring long-term profitability.',
    features: ['Keyword Strategy', 'Technical SEO', 'Content Planning', 'Analytics & Reporting'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Social Media',
    highlight: 'Management',
    description: 'Amplify your brand\'s voice and build meaningful connections across all major platforms. We handle strategy, content creation, community engagement, and performance analytics—transforming your social presence into a powerful growth engine that drives real business results.',
    features: ['Content Strategy & Creation', 'Community Management', 'Paid Advertising', 'Analytics & Reporting', 'Brand Voice Development'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Backup & Recovery',
    highlight: 'Recovery',
    description: 'A crucial service for data protection and business continuity, showing a focus on security and reliability. Our systems ensure your data is always safe and recoverable.',
    features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', '24/7 Monitoring'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
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
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
        <path d="M12 2L19 12L12 22L5 12L12 2Z"></path>
        <path d="M5 12L12 17L19 12"></path>
      </svg>
    ),
  },
  // FOOTER CARD - Call to action
  {
    id: 8,
    title: 'Ready to Start Your Project?',
    highlight: '',
    description: 'Let\'s discuss how our digital solutions can transform your business. Get in touch with our team for a free consultation.',
    features: [],
    icon: null,
  },
];

export default function ServicesOverview() {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-16">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5 pointer-events-none z-0"></div>

      {/* Services Grid - NO SCROLL EFFECTS, FULLY VISIBLE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="group h-full"
          >
            {service.id === 0 ? (
              // HEADER CARD - Minimal, all black text
<div className="relative h-full flex flex-col justify-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl">
  {/* Decorative gold accent line */}
  <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-tl-2xl"></div>
  
  {/* Services badge - now proper button styling */}
  <button className="group flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-full w-fit mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
    <span>Services</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>
  
  {/* Main headline - WHITE TEXT */}
  <h1 className="text-4xl md:text-2xl lg:text-3xl font-extrabold mb-4 text-white leading-tight">
    {service.title}
  </h1>
  
  {/* Description - light gray for contrast */}
  <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
    {service.description}
  </p>
  
  {/* Subtle decorative element */}
  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
    <svg className="w-full h-full text-yellow-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="50" cy="50" r="40" />
      <path d="M20 50h60M50 20v60" />
    </svg>
  </div>
</div>
            ) : service.id === 8 ? (
              // FOOTER CARD - Call to action, spans full width on desktop
              <div className="relative bg-gray-50 rounded-xl p-8 h-full flex flex-col items-center justify-center text-center border border-gray-200 col-span-1 md:col-span-2 lg:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                  {service.description}
                </p>
                <Link href="/contact">
                  <button className="group relative bg-yellow-400 text-gray-900 font-semibold py-4 px-8 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-yellow-500">
                    {/* Button shine effect */}
                    <div className="absolute inset-0 -inset-x-10 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700"></div>
                    
                    <span className="relative z-10 flex items-center gap-2 text-lg">
                      Get in Touch
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            ) : (
              // REGULAR SERVICE CARDS
              <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 rounded-xl p-8 h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group-hover:shadow-xl">
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 -inset-x-10 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-1000"></div>
                
                {/* Icon container with hover effect */}
                <div className="mb-6 p-3 bg-white rounded-full w-14 h-14 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform duration-300 shadow-md relative z-10">
                  {service.icon}
                </div>

                {/* Title & Short Desc - BLACK TEXT ON YELLOW */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 relative z-10">
                  {service.title}{' '}
                  <span className="text-gray-800">
                    {service.highlight}
                  </span>
                </h3>
                <p className="text-gray-800 mb-4 flex-grow relative z-10">{service.description}</p>

                {/* Features - always visible with black text */}
                <div className="mt-auto relative z-10">
                  <ul className="space-y-2 text-sm mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-800">
                        <span className="text-gray-900 font-bold mr-2">▪</span> {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <div className="mt-6 pt-4 border-t border-gray-900/20">
                    <Link href="/services">
                      <button className="group relative bg-white text-gray-900 font-semibold py-3 px-6 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                        {/* Button shine effect */}
                        <div className="absolute inset-0 -inset-x-10 bg-gradient-to-r from-transparent via-yellow-100/40 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700"></div>
                        
                        <span className="relative z-10 flex items-center gap-2">
                          Explore Services
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

//hiro
//smokys
//270degrees