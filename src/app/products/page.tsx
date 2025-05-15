'use client';

import Footer from "@/compoents/footer";
import Navbar from "@/compoents/landing.page/navbar";
import { useState, useEffect } from "react";

function ProductsPage() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const updateCountdown = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#0028ff] to-[#ffd700] px-4 py-2 mb-8 shadow-lg">
              <span className="text-white text-sm font-medium">COMING SOON</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0028ff] to-[#ffd700]">
                Amazing
              </span>{" "}
              is Coming
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              We&apos;re working hard to bring you innovative products that will transform your digital experience. 
              Stay tuned for our upcoming launch!
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-[#0028ff] mb-2">{countdown.days}</div>
                <div className="text-gray-600 text-sm font-medium">Days</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-[#0028ff] mb-2">{countdown.hours}</div>
                <div className="text-gray-600 text-sm font-medium">Hours</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-[#0028ff] mb-2">{countdown.minutes}</div>
                <div className="text-gray-600 text-sm font-medium">Minutes</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-[#0028ff] mb-2">{countdown.seconds}</div>
                <div className="text-gray-600 text-sm font-medium">Seconds</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Notified First</h2>
              <p className="text-gray-600 mb-6">
                Be the first to know when we launch our new products. Enter your email below and we&apos;ll send you an exclusive preview.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0028ff] focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-[#0028ff] to-[#0055ff] hover:from-[#ffd700] hover:to-[#ffed4e] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              What to <span className="text-[#0028ff]">Expect</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0028ff]/10 to-[#ffd700]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#0028ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20L8 21H16L15 20L14.25 17M3 13H21M5 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovative Solutions</h3>
                <p className="text-gray-600">
                  Cutting-edge products designed to solve real-world problems and enhance your digital experience.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ffd700]/10 to-[#0028ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#0028ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
                <p className="text-gray-600">
                  Optimized for performance and speed, ensuring seamless operation and exceptional user experience.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0028ff]/10 to-[#ffd700]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#0028ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Reliable</h3>
                <p className="text-gray-600">
                  Built with security in mind, ensuring your data and operations are protected at all times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0028ff] to-[#0045ff]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-100 text-xl mb-8 max-w-2xl mx-auto">
              While you wait for our products, explore our services that are already helping businesses succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#0028ff] hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Services
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#0028ff] font-semibold py-3 px-8 rounded-full transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProductsPage;