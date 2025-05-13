'use client';

import Footer from '@/compoents/footer';
import Navbar from '@/compoents/landing.page/navbar';
import Reviews from '@/compoents/portfolio.page/reviews';
import Link from 'next/link';
import { JSX } from 'react';
import Image from 'next/image';

// Reusable component for the Value Cards
const ValueCard = ({ icon, title, description, color }: { icon: JSX.Element, title: string, description: string, color: string }) => {
  return (
    <div className={`relative p-8 rounded-2xl border border-gray-800 backdrop-blur-sm bg-gray-900/50 overflow-hidden group transition-all duration-300 transform hover:-translate-y-2`}>
      <div 
        className={`absolute inset-0 opacity-20`} 
        style={{ background: `radial-gradient(circle at 10% 10%, ${color}, transparent 50%)` }}
      ></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe great work comes from a great mindset. These are the principles that guide us every day.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              title="Creativity"
              description="Thinking outside the box is our default setting. We love finding unique solutions to complex problems."
              color="#50E3C2"
              icon={
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 100 4m-3.5 12h8a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v8a2 2 0 002 2zM17.5 16h-5M17.5 8h-5M17.5 12h-5M7.5 12h5" /></svg>
              }
            />
            <ValueCard 
              title="Innovation"
              description="We're constantly exploring new technologies to keep our work fresh and our clients ahead of the curve."
              color="#4A90E2"
              icon={
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L14.25 7m-1.5 10a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zm1.5-10a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zM5.5 12h13" /></svg>
              }
            />
            <ValueCard 
              title="Professionalism"
              description="We deliver high-quality work on time, every time. Your success is our reputation."
              color="#F5A623"
              icon={
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3v2.25c0 .328-.15.65-.45.85L12 15.55l-2.55-1.45a1.5 1.5 0 01-.45-.85V11c0-1.657 1.343-3 3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11v-.25c0-2.36 1.1-4.73 3-5.75l.4-.2a2.5 2.5 0 012.2-.1c1.2.6 1.9 1.9 1.9 3.4V11" /></svg>
              }
            />
            <ValueCard 
              title="Good Vibes"
              description="We're doing what we love, and that energy is contagious. A positive and fun collaboration is key."
              color="#BD10E0"
              icon={
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              }
            />
          </div>
        </section>

        {/* Who We Help Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Who We <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Help</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our services are for anyone with a digital need. If you&are a business, we&apos;re ready to help you thrive.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {['Schools', 'Colleges', 'Universities', 'Charities', 'Medical Institutions', 'Financial Institutions', 'SMEs', 'E-commerce', 'Franchises', 'Fashion Brands', 'NGOs', 'Individuals'].map((item, index) => (
              <div key={index} className="p-4 rounded-xl border border-gray-300 bg-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-lg font-medium text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <div className="border-t border-gray-300 my-16 max-w-7xl mx-auto"></div>
        <div className="bg-gray-100">
          <Reviews />
        </div>
        <div className="border-t border-gray-300 my-16 max-w-7xl mx-auto"></div>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto p-10 bg-white rounded-3xl border border-gray-300 shadow-xl">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Ready to create something amazing?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s turn your vision into a digital masterpiece. Our team is ready to get started.
            </p>
            <Link href="/contact" passHref>
              <button className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold cursor-pointer text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                Let&apos;s Talk
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
