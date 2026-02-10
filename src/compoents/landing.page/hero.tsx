import { useEffect, useRef } from 'react';

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
    const particleCount = 1000;
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
          color: `rgba(251, 191, 36, ${alpha})`, // Yellow-400 color
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
    <div ref={containerRef} className="relative isolate flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-[600px]">
      {/* Background Grid Effect - matching blog hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4b5563_1px,transparent_1px),linear-gradient(to_bottom,#4b5563_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800" />
      </div>

      {/* Canvas for flow field particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full opacity-40"
      />

      {/* Animated Gradient Orbs - matching blog hero style with yellow */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-yellow-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Floating particles - matching blog hero */}
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

      {/* Decorative gold accent lines - matching blog hero */}
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pt-24 pb-7 md:pt-32 md:pb-36">
        {/* Premium badge - matching blog hero style */}
        <div className="flex justify-center mb-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <button className="relative flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Premium Solutions</span>
            </button>
          </div>
        </div>

        {/* Main Headline with animated gradient */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent bg-300% animate-gradient">
            Elevate Your
          </span>
          <br />
          <span className="text-white">Digital Presence</span>
        </h1>

        {/* Subheadline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-gray-200 max-w-3xl leading-snug">
          We create stunning web experiences that convert visitors into customers
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          iWebX Solutions combines cutting-edge technology with elegant design to deliver digital experiences that drive growth, engagement, and measurable results for your business.
        </p>

        {/* CTA Buttons with hover design */}
        <div className="flex flex-col sm:flex-row gap-5 md:gap-6 mb-2">
          {/* Primary Button */}
          <a href="/pricing">
            <button className="group relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform">
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -inset-x-10 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-1000"></div>
              
              <span className="relative z-10 flex items-center gap-2 text-gray-900 font-semibold py-4 px-10">
                Start Your Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </a>

          {/* Secondary Button */}
          <a href="/portfolio">
            <button className="group relative bg-transparent border-2 border-yellow-400 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 transform">
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -inset-x-10 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-1000"></div>
              
              <span className="relative z-10 flex items-center gap-2 text-yellow-400 hover:text-gray-900 font-semibold py-4 px-10 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-yellow-300 group-hover:to-yellow-200">
                View Our Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </a>
        </div>

        {/* Scroll indicator - matching blog hero */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Hero;