import { useEffect, useRef, useState } from 'react';
import { FaLightbulb, FaCode, FaSmile, FaUsers } from 'react-icons/fa';

export default function CoreValues() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      title: "Pixel Playfulness",
      description: "We believe work should feel like play. Our creative process is filled with experimentation, laughter, and the occasional nerf gun battle to keep those innovative juices flowing!",
      icon: <FaLightbulb className="text-4xl" />,
      delay: "100"
    },
    {
      title: "Code & Create",
      description: "We're passionate builders who love turning complex problems into elegant, user-friendly solutions. We speak fluent JavaScript and human!",
      icon: <FaCode className="text-4xl" />,
      delay: "200"
    },
    {
      title: "User Wow Factor",
      description: "We don't just meet expectations—we exceed them with delightful interactions that make users say 'Wow!' We're in the business of creating digital smiles.",
      icon: <FaSmile className="text-4xl" />,
      delay: "300"
    },
    {
      title: "Growth Guild",
      description: "We grow together, learn together, and lift each other up. Whether it's mastering new tech or perfecting coffee brewing, we're always leveling up as a team.",
      icon: <FaUsers className="text-4xl" />,
      delay: "400"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            <span className="text-yellow-500">iWebX</span> Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our innovative web experiences and make our digital playground so much fun!
          </p>
        </div>
        
        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${value.delay}ms` }}
            >
              <div className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 rounded-xl p-8 h-full flex flex-col relative overflow-hidden group hover:shadow-2xl hover:scale-105 transition-all duration-300">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 -inset-x-10 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-1000"></div>
                
                {/* Icon container */}
                <div className="mb-6 p-3 bg-white rounded-full w-16 h-16 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{value.description}</p>
                
                <div className="mt-auto pt-4">
                  <div className="w-12 h-1 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative corner elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-yellow-400 opacity-50"></div>
        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-yellow-400 opacity-50"></div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-yellow-400 opacity-50"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-yellow-400 opacity-50"></div>
      </div>
    </section>
  );
}