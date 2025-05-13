import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Logo and tagline */}
        <div className="mb-16 text-center">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFDF00] rounded-xl flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">iX</span>
              </div>
              <h1 className="text-4xl font-bold">
                iWebX <span className="text-gold">Solutions</span>
              </h1>
            </div>
          </Link>
          <p className="text-gold-light font-medium text-lg">Reimagining Digital Experiences</p>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1 - Navigation */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gold text-lg font-semibold uppercase tracking-wider mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Navigation
              </h3>
              <ul className="space-y-4">
                <li><Link href="/" className="hover:text-gold transition-colors flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link></li>
                <li><Link href="/about" className="hover:text-gold transition-colors flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                </Link></li>
                <li><Link href="/services" className="hover:text-gold transition-colors flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                  Services
                </Link></li>
                <li><Link href="/portfolio" className="hover:text-gold transition-colors flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Portfolio
                </Link></li>
              </ul>
            </div>
          </div>

          {/* Column 2 - Services & Resources */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gold text-lg font-semibold uppercase tracking-wider mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Our Services
              </h3>
              <ul className="space-y-4">
                <li><Link href="/services" className="hover:text-gold transition-colors">Custom Web Development</Link></li>
                <li><Link href="/services" className="hover:text-gold transition-colors">Mobile App Solutions</Link></li>
                <li><Link href="/services" className="hover:text-gold transition-colors">Software Integration</Link></li>
                <li><Link href="/services" className="hover:text-gold transition-colors">UI/UX Design</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gold text-lg font-semibold uppercase tracking-wider mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Resources
              </h3>
              <ul className="space-y-4">
                <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
                <li><Link href="/portfolio" className="hover:text-gold transition-colors">Success Stories</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3 - Pricing & Products */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gold text-lg font-semibold uppercase tracking-wider mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pricing
              </h3>
              <ul className="space-y-4">
                <li><Link href="/pricing" className="hover:text-gold transition-colors">Pricing Packages</Link></li>
                <li><Link href="/contact" className="hover:text-gold transition-colors">Get Quote</Link></li>
                <li><Link href="/contact" className="hover:text-gold transition-colors">Book a Consultation</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gold text-lg font-semibold uppercase tracking-wider mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Products
              </h3>
              <ul className="space-y-4">
                <li><Link href="/products" className="hover:text-gold transition-colors">Our Products</Link></li>
                <li><Link href="/products" className="hover:text-gold transition-colors">E-commerce Solutions</Link></li>
                <li><Link href="/products" className="hover:text-gold transition-colors">CRM Systems</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4 - Connect & Legal */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gold text-lg font-semibold uppercase tracking-wider mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Connect
              </h3>
              <ul className="space-y-4">
                <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
                <li className="flex items-center gap-4 mt-6">
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 group">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 group">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 group">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gold text-lg font-semibold uppercase tracking-wider mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Legal
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-gold transition-colors">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results statement */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Results you can take to the <span className="text-gold">bank</span>.
          </h2>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/30 my-8"></div>

        {/* Copyright and legal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 iWebX Digital Solutions. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-gold transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-gold transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;