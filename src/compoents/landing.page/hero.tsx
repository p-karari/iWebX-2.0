import { useEffect, useRef } from 'react';
import Image from 'next/image';

  const logos = [
    { id: 1, src: '/client-logo-1.webp', alt: "Client 1" },
    { id: 2, src: '/client-logo-2.jpeg', alt: "Client 2" },
    { id: 3, src: '/client-logo-3.jpeg', alt: "Client 3" },
    { id: 4, src: '/client-logo-4.webp', alt: "Client 4" },
    { id: 5, src: '/client-logo-5.jpeg', alt: "Client 5" },
    { id: 6, src: '/client-logo-6.jpeg', alt: "Client 6" },
  ];

// Define the Particle type
type Particle = {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  alpha: number;
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ---------- Optimized Config ----------
    const gridSize = 20;
    const particleCount = 300;
    const noiseScale = 0.005;
    const noiseStrength = 2;
    const repelRadius = 100;
    const repelStrength = 10;

    // Canvas dimensions
    let logicalWidth = 0;
    let logicalHeight = 0;

    // Flow field grid
    let columns = 0;
    let rows = 0;
    let flowField: Float32Array = new Float32Array(0);

    // Particles array
    let particles: Particle[] = [];

    // Mouse position
    const mouse = { x: -100, y: -100 };

    // ---------- Perlin Noise Implementation (Unchanged) ----------
    const fade = (t: number): number => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (t: number, a: number, b: number): number => a + t * (b - a);
    const grad = (hash: number, x: number, y: number): number => {
      const h = hash & 15;
      const u = h < 8 ? x : y;
      const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
      return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    };

    const p: number[] = [];
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < 256; i++) p[256 + i] = p[i];

    const noise2D = (x: number, y: number): number => {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const xf = x - Math.floor(x);
      const yf = y - Math.floor(y);
      const u = fade(xf);
      const v = fade(yf);
      const aa = p[p[X] + Y];
      const ab = p[p[X] + Y + 1];
      const ba = p[p[X + 1] + Y];
      const bb = p[p[X + 1] + Y + 1];
      const x1 = lerp(u, grad(aa, xf, yf), grad(ba, xf - 1, yf));
      const x2 = lerp(u, grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1));
      return lerp(v, x1, x2);
    };

    // ---------- Canvas Sizing ----------
    const setCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
      logicalWidth = Math.max(1, Math.floor(rect.width));
      logicalHeight = Math.max(1, Math.floor(rect.height));
      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.ceil(logicalWidth / gridSize) + 1;
      rows = Math.ceil(logicalHeight / gridSize) + 1;
      flowField = new Float32Array(columns * rows);
      if (particles.length > 0) {
        for (const pt of particles) {
          if (pt.x > logicalWidth) pt.x = logicalWidth - 1;
          if (pt.y > logicalHeight) pt.y = logicalHeight - 1;
        }
      }
    };

    // ---------- Particle Creation ----------
    const makeParticles = () => {
      particles = Array.from({ length: particleCount }, () => {
        const alpha = Math.random() * 0.4 + 0.1;
        return {
          x: Math.random() * logicalWidth,
          y: Math.random() * logicalHeight,
          size: Math.random() * 1.5 + 0.5,
          color: `rgba(255, 215, 0, ${alpha})`,
          speed: Math.random() * 1.5 + 0.5,
          alpha: alpha,
        };
      });
    };

    // ---------- Event Handlers ----------
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -100;
      mouse.y = -100;
    };
    const handleResize = () => {
      setCanvasSize();
      if (particles.length === 0) makeParticles();
    };

    // ---------- Flow Field Update ----------
    const updateFlowField = (timeMs: number) => {
      const t = timeMs * 0.00015;
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < columns; gx++) {
          const i = gx + gy * columns;
          const n = noise2D(gx * noiseScale + t, gy * noiseScale + t);
          const angle = n * Math.PI * noiseStrength;
          flowField[i] = angle;
        }
      }
    };

    // ---------- Particle Update ----------
    const updateParticles = () => {
      for (const particle of particles) {
        const gx = Math.floor(particle.x / gridSize);
        const gy = Math.floor(particle.y / gridSize);
        if (gx >= 0 && gx < columns && gy >= 0 && gy < rows) {
          const idx = gx + gy * columns;
          const angle = flowField[idx];
          particle.x += Math.cos(angle) * particle.speed;
          particle.y += Math.sin(angle) * particle.speed;
        }

        // Mouse repulsion
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 0 && dist < repelRadius) {
          const force = (repelRadius - dist) / repelRadius;
          const ux = dx / dist;
          const uy = dy / dist;
          particle.x += ux * force * repelStrength;
          particle.y += uy * force * repelStrength;
        }

        // Wrap around edges
        if (particle.x > logicalWidth) particle.x = 0;
        if (particle.x < 0) particle.x = logicalWidth;
        if (particle.y > logicalHeight) particle.y = 0;
        if (particle.y < 0) particle.y = logicalHeight;
      }
    };

    // ---------- Drawing Particles (Optimized) ----------
    const drawParticles = () => {
      // Clear the canvas completely to prevent trails
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);
      
      for (const particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      }
    };

    // ---------- Animation Loop ----------
    const animate = (time: number) => {
      updateFlowField(time);
      updateParticles();
      drawParticles();
      rafId = requestAnimationFrame(animate);
    };

    // ---------- Initialization ----------
    setCanvasSize();
    makeParticles();
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    let rafId = requestAnimationFrame(animate);

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(rafId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] min-h-[85vh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-gray-900" />
      </div>

      {/* Canvas for flow field particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full opacity-40"
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#FFD700]/20 to-[#FFDF00]/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-white/10 to-transparent rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-medium"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-l from-[#FFD700]/15 to-transparent rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pt-24 pb-7 md:pt-32 md:pb-36">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
          Elevate Your <span className="bg-gradient-to-r from-[#FFD700] to-[#FFDF00] bg-clip-text text-transparent">Digital Presence</span>
        </h1>

        {/* Subheadline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-gray-200 max-w-3xl leading-snug">
          We create stunning web experiences that convert visitors into customers
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          iWebX Solutions combines cutting-edge technology with elegant design to deliver digital experiences that drive growth, engagement, and measurable results for your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 md:gap-6 mb-2 md:mb-20">
          <a href="/pricing">
            <button className="group relative bg-gradient-to-r from-[#FFD700] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#FFD700] text-white font-semibold py-4 px-10 rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </a>

          <a href="/portfolio">
            <button className="group relative bg-transparent border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 font-semibold py-4 px-10 rounded-full overflow-hidden transition-all duration-300 flex items-center gap-2">
              <span className="relative z-10">View Our Work</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" viewBox="0 0 20 20" fill="CurrentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
            </button>
          </a>
        </div>

        {/* Trusted by div */}
        <div className="mb-[2px] md:mb-12">
          <p className="text-lg font-medium text-gray-400 mb-2">Trusted by innovative companies worldwide</p>
        </div>

        {/* Logo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 w-full max-w-5xl">
        {logos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300">
            <div className="relative w-28 h-20 opacity-70 hover:opacity-100 transition-opacity">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#FFD700]/50 rounded-full flex justify-center p-1">
            <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s infinite; }
        .animate-pulse-medium { animation: pulse-medium 4s infinite; }
      `}</style>
    </div>
  );
};

export default Hero;
