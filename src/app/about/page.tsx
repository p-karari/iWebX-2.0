'use client';

import Footer from '@/compoents/footer';
import Navbar from '@/compoents/landing.page/navbar';
// import Reviews from '@/compoents/portfolio.page/reviews';
// import Link from 'next/link';
import BrandComponent from '@/compoents/about.page/brand';
import CoreValues from '@/compoents/about.page/core-values';
import Image from 'next/image';

// Reusable component for the Value Cards
// const ValueCard = ({ icon, title, description, color }: { icon: JSX.Element, title: string, description: string, color: string }) => {
//   return (
//     <div className={`relative p-8 rounded-2xl border border-gray-800 backdrop-blur-sm bg-gray-900/50 overflow-hidden group transition-all duration-300 transform hover:-translate-y-2`}>
//       <div 
//         className={`absolute inset-0 opacity-20`} 
//         style={{ background: `radial-gradient(circle at 10% 10%, ${color}, transparent 50%)` }}
//       ></div>
//       <div className="relative z-10 flex flex-col items-center text-center">
//         <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300">
//           {icon}
//         </div>
//         <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//         <p className="text-gray-300">{description}</p>
//       </div>
//     </div>
//   );
// };

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-900 min-h-screen font-sans">
        {/* Hero Section */}
        <section className="relative pt-22 pb-5">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
              style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
            ></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-gold to-gold-dark px-4 py-2 mb-8 shadow-lg">
              <span className="text-white text-sm font-medium">Behind the Curtain</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The story of how we started, the magic we make, <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">and the people who make it happen.</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Where passion meets pixels, and big ideas become tangible realities.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              From a Garage to Greatness
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We started with a simple idea: to build something that mattered. Not just another job, but a machine for change. We&apos;re driven by the conviction that technology should serve a purpose, empower businesses, and create real impact.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-2xl shadow-xl overflow-hidden">
              <Image 
              src="/team collaboration 3.jpg" 
              alt="A photo of a creative workspace" 
              fill 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent"></div>
            </div>
            <div className="space-y-8">
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Manifesto</h3>
                <p className="text-gray-600 leading-relaxed">
                  The job market wanted us to be cogs in a machine. We wanted to be the machine itself. We chose to build a place where our creativity and skills could truly make a difference, helping businesses of all sizes find their voice and dominate their space. We&apos;re not just developers; we&apos;re innovators, problem-solvers, and partners in your success.
                </p>
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is simple: to transform your ideas into powerful digital realities. We believe that a great user experience and flawless design are non-negotiable. Whether you&apos;re a startup or a global brand, we approach every project with the same passion and dedication to excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
<CoreValues />
<BrandComponent />

      </main>

      <Footer />
    </>
  );
}
