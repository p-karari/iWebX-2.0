'use client';

import Link from 'next/link';

interface ProcessStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    phase: '01 — DISCOVERY',
    title: 'Understand Your Vision',
    description: 'We dive deep into your business goals, target audience, and technical requirements. Through collaborative workshops and research, we align our strategy with your objectives.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <circle cx="12" cy="8" r="0.5" fill="currentColor" stroke="none"></circle>
      </svg>
    ),
  },
  {
    id: 2,
    phase: '02 — STRATEGY',
    title: 'Plan & Architect',
    description: 'Our experts create a detailed roadmap, selecting the right technologies and architecture. We define milestones, deliverables, and success metrics to ensure transparency.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    phase: '03 — DESIGN',
    title: 'Craft The Experience',
    description: 'We transform ideas into intuitive interfaces. Through iterative prototyping and user feedback, we design solutions that are both beautiful and functional.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
  {
    id: 4,
    phase: '04 — DEVELOP',
    title: 'Build & Iterate',
    description: 'Agile development in action. We build incrementally, with continuous integration and regular demos. Your feedback shapes each sprint, ensuring the end product exceeds expectations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    id: 5,
    phase: '05 — LAUNCH',
    title: 'Deploy & Optimize',
    description: 'Rigorous testing, performance optimization, and a seamless deployment strategy. We ensure your solution launches flawlessly and performs at scale from day one.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    ),
  },
  {
    id: 6,
    phase: '06 — EVOLVE',
    title: 'Support & Grow',
    description: 'Partnership doesn\'t end at launch. We provide ongoing support, analytics, and continuous improvement to help your digital product evolve with your business.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 12H16c-2.9 0-5.5 2-6 5.1-.5 2.3.8 4.5 2.9 5.4 2.1.9 4.5.2 5.8-1.7.8-1.2 1.2-2.6 1-4.1-.1-1-.7-1.9-1.4-2.6"></path>
        <path d="M12 4.5A3.5 3.5 0 0 1 15.5 8"></path>
        <path d="M4.9 11.2c-.4-.4-.7-.9-.8-1.5-.3-1.7.8-3.4 2.4-4 1.6-.6 3.4.1 4.2 1.6.4.8.5 1.7.3 2.6"></path>
        <path d="M7.5 21c-2.1-.9-3.4-3.1-2.9-5.4.5-3.1 3.1-5.1 6-5.1h5.5"></path>
      </svg>
    ),
  },
];

export default function ProcessInsight() {
  return (
    <div className="bg-white font-sans px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header - Black on Gold */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Gold Badge with Black Text */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full px-6 py-2 inline-block mx-auto mb-6 shadow-xl">
            <span className="text-black font-bold text-xs tracking-[0.2em] uppercase">
              How We Work
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-black tracking-tight">
            Insight Into Our{' '}
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 px-4 py-1 rounded-lg">
              <span className="text-black">
                Process
              </span>
            </span>
          </h2>
          
          {/* White Card with subtle shadow - keeping description clean */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              We don't just build products—we build partnerships. Our proven methodology ensures transparency, quality, and results at every stage.
            </p>
          </div>
        </div>

        {/* Process Grid - Black on Gold */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="group relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 rounded-[2.5rem] p-10 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-1000"></div>
              
              <div className="relative z-10">
                {/* Phase number - White pill with black text */}
                <div className="mb-6 inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-md">
                  <span className="text-black text-[10px] font-black tracking-widest">
                    {step.phase}
                  </span>
                </div>
                
                {/* Icon - White background with gold icon */}
                <div className="mb-8 w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                  <div className="text-yellow-500 transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>
                
                {/* Title - Black text */}
                <h3 className="text-2xl font-bold mb-4 text-black leading-tight">
                  <span className="text-black">{step.title.split(' ')[0]}</span>{' '}
                  <span className="inline-block bg-black/10 px-2 py-0.5 rounded-md group-hover:bg-black/20 transition-all duration-300">
                    <span className="text-black">
                      {step.title.split(' ').slice(1).join(' ')}
                    </span>
                  </span>
                </h3>
                
                {/* Description - Dark gray/black text */}
                <p className="text-gray-800 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
              
              {/* Decorative corner accent - Dark */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 translate-y-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black/40">
                  <path d="M7 7L17 17M17 7L7 17" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Black on Gold */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <span className="text-black font-bold tracking-tight">
              Ready to start your journey?
            </span>
            <Link href="/contact">
              <button className="flex items-center gap-3 bg-black text-white font-bold py-3 px-10 rounded-full transition-all duration-300 hover:shadow-xl hover:bg-gray-900 group">
                <span className="text-white">Let's Talk</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}