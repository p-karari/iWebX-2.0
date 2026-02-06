'use client';

import Footer from '@/compoents/footer';
import Navbar from '@/compoents/landing.page/navbar';
// import Reviews from '@/compoents/portfolio.page/reviews';
// import Link from 'next/link';
import BrandComponent from '@/compoents/about.page/brand';
import CoreValues from '@/compoents/about.page/core-values';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-900 min-h-screen font-sans">
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
                      <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12zM8 9a1 1 0 000 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
                    </svg>
                    <span>Behind the Curtain</span>
                  </button>
                </div>
              </div>

              {/* Main headline with animated gradient */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent bg-300% animate-gradient">
                  The story of how we started,
                </span>
                <br />
                <span className="text-white">the magic we make, and the people who make it happen.</span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Where passion meets pixels, and big ideas become tangible realities.
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

        {/* Our Story Section - Enhanced */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
          {/* Section header with badge */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>Our Journey</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              From a Garage to <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Greatness</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We started with a simple idea: to build something that mattered. Not just another job, but a machine for change. We're driven by the conviction that technology should serve a purpose, empower businesses, and create real impact.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image container with premium styling */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative h-96 rounded-2xl shadow-2xl overflow-hidden">
                <Image 
                  src="/team collaboration 3.jpg" 
                  alt="A photo of a creative workspace" 
                  fill 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>
            </div>

            {/* Text content with improved styling */}
            <div className="space-y-8">
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Gold accent line */}
                <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-tl-2xl"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                  </svg>
                  Our Manifesto
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The job market wanted us to be cogs in a machine. We wanted to be the machine itself. We chose to build a place where our creativity and skills could truly make a difference, helping businesses of all sizes find their voice and dominate their space. We're not just developers; we're innovators, problem-solvers, and partners in your success.
                </p>
              </div>

              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Gold accent line */}
                <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-tl-2xl"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  The Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is simple: to transform your ideas into powerful digital realities. We believe that a great user experience and flawless design are non-negotiable. Whether you're a startup or a global brand, we approach every project with the same passion and dedication to excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Stats section - optional enhancement */}
          <div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <CoreValues />
        <BrandComponent />
      </main>

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
  );
}