import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Products', href: '/products' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    {label: 'Contact', href: '/contact'}
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out font-sans 
          ${isScrolled 
            ? 'py-2 bg-white  border-b border-gold/20' 
            : 'py-4 bg-white'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center text-2xl font-bold text-dark transition-all duration-300 hover:scale-105 group"
          >
              <div className="relative w-10 h-10 mr-3 bg-gradient-to-r from-[#FFD700] to-[#FFDF00] rounded-full group-hover:rotate-12 transition-transform flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-gold/30">
                  <span className="text-dark font-black text-sm">iX</span>
                </div>
              </div>

            iWebX Digital Solutions
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium text-sm transition-all duration-300 group px-4 py-2 rounded-full
                    ${isActive 
                      ? 'text-gray-900 font-bold bg-gradient-to-r from-[#FFD700] to-[#FFDF00] shadow-lg' 
                      : 'text-dark hover:text-gold'
                    }`}
                >
                  {item.label}
                  {!isActive && (
                    <span className="absolute inset-0 bg-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  )}
                </Link>
              );
            })}
            
            {/* Get in Touch Button */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-3 font-bold rounded-full text-sm text-gray-900 bg-gradient-to-r from-[#FFD700] to-[#FFDF00] hover:from-gold-dark hover:to-gold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <span>Book a chat</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col space-y-2 z-50 p-2 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-8 h-1 bg-gold transition-transform duration-300 rounded-full ${isMenuOpen ? 'rotate-45 translate-y-3' : ''}`}></span>
            <span className={`w-8 h-1 bg-gold transition-opacity duration-300 rounded-full ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-8 h-1 bg-gold transition-transform duration-300 rounded-full ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`}></span>
          </button>

          {/* Mobile Navigation */}
          <div
            className={`fixed inset-0 bg-white transform transition-transform duration-500 ease-in-out z-40 md:hidden pt-20
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex flex-col items-center justify-start h-full space-y-6 text-center relative p-8">
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-24 h-24 bg-gold/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-gold/5 rounded-full blur-xl"></div>
              
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-2xl font-medium transition-all duration-300 relative py-3 px-6 rounded-full w-full max-w-xs
                      ${isActive 
                        ? 'text-white bg-gold shadow-lg' 
                        : 'text-dark hover:bg-gold/10'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              {/* Mobile Get in Touch Button */}
              <Link
                href="/contact"
                className="mt-8 px-8 py-4 font-bold rounded-full text-lg text-white bg-gradient-to-r from-gold to-gold-dark shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <style jsx global>{`
        :root {
          --color-gold: #FFDF00;
          --color-gold-dark: #D4AF37;
          --color-dark: #2D2D2D;
        }
        
        .text-gold {
          color: var(--color-gold);
        }
        
        .bg-gold {
          background-color: var(--color-gold);
        }
        
        .border-gold {
          border-color: var(--color-gold);
        }
        
        .text-dark {
          color: var(--color-dark);
        }
        
        .from-gold {
          --tw-gradient-from: var(--color-gold);
          --tw-gradient-to: rgba(255, 215, 0, 0);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        
        .to-gold-dark {
          --tw-gradient-to: var(--color-gold-dark);
        }
        
        .hover\\:from-gold-dark:hover {
          --tw-gradient-from: var(--color-gold-dark);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        
        .hover\\:to-gold:hover {
          --tw-gradient-to: var(--color-gold);
        }
        
        .bg-gold\\/10 {
          background-color: rgba(255, 215, 0, 0.1);
        }
        
        .bg-gold\\/5 {
          background-color: rgba(255, 215, 0, 0.05);
        }
      `}</style>
    </>
  );
}