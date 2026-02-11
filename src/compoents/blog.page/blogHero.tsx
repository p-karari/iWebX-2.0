'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface BlogHeroProps {
  postCount?: number;
  latestPostDate?: string;
}

export default function BlogHero({ postCount = 0, latestPostDate }: BlogHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animated counter for stats
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (postCount > 0) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = postCount / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= postCount) {
          setCount(postCount);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [postCount]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated background grid */}
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Premium badge */}
          <div className="flex justify-center mb-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <button className="relative flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Insights & Innovation</span>
              </button>
            </div>
          </div>

          {/* Main headline with animated gradient */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent bg-300% animate-gradient">
              Ideas, Insights
            </span>
            <br />
            <span className="text-white">& Innovation</span>
          </h1>

          {/* Description with fade-in */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Explore expert perspectives, industry trends, and actionable strategies to transform your digital presence and drive meaningful growth.
          </p>

          {/* Stats and CTA row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {/* Stats */}
            <div className="flex items-center gap-8 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              {postCount > 0 && (
                <div className="text-center px-4">
                  <div className="text-3xl font-bold text-yellow-400">{count}+</div>
                  <div className="text-sm text-gray-400">Articles</div>
                </div>
              )}
              {latestPostDate && (
                <>
                  <div className="w-px h-10 bg-white/20"></div>
                  <div className="text-center px-4">
                    <div className="text-sm text-gray-400">Latest Post</div>
                    <div className="text-white font-semibold">{latestPostDate}</div>
                  </div>
                </>
              )}
              <div className="w-px h-10 bg-white/20"></div>
              <div className="text-center px-4">
                <div className="text-sm text-gray-400">Categories</div>
                <div className="text-white font-semibold">Multiple Topics</div>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="#categories">
              <button className="group relative bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-4 px-8 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                {/* Button shine effect */}
                <div className="absolute inset-0 -inset-x-10 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700"></div>
                
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  Explore Categories
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>

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
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
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
    </section>
  );
}