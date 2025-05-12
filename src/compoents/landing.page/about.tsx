import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Animation variants with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const statsVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
};

// Variants for the new section's headline and subheading
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Variants for the new feature cards
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


function About() {
  return (
    <motion.section
      className="relative py-15 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-navy/5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gold/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-navy/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            variants={itemVariants}
          >
            Where Vision Meets <span className="text-gold">Digital Innovation</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We deliver powerful digital solutions that help businesses innovate, grow, and lead.
            Our commitment to excellence makes us the trusted partner for forward-thinking brands.
          </motion.p>
        </motion.div>

        {/* Stats Section - Fully Floating Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { number: "3+", label: "Years" },
            { number: "15+", label: "Projects" },
            { number: "28+", label: "Clients" },
            { number: "98%", label: "Success" },
            { number: "100+", label: "Reviews" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-white/80 text-center transform-gpu backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold text-navy mb-2">{stat.number}</h3>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Our Clients Choose Us Section - New Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={headerVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Our Clients Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We go beyond development to partner with you for long-term success, delivering tangible results and exceptional value.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.3 }
              }
            }}
          >
            <motion.div
              variants={cardVariants}
              className="bg-gray-100 p-8 rounded-xl border border-gray-200 hover:border-navy transition-colors duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-navy/10 text-navy mb-6 group-hover:bg-navy/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Full-Stack Expertise</h3>
              <p className="text-gray-600 text-sm">
                From elegant front-end design to robust back-end systems, we handle every aspect of your project with precision.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="bg-gray-100 p-8 rounded-xl border border-gray-200 hover:border-navy transition-colors duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-navy/10 text-navy mb-6 group-hover:bg-navy/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L9.54 8.54a5 5 0 0 0 .54 7.54z"></path><path d="M18 13a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71A5 5 0 0 0 18 13z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Scalable Solutions</h3>
              <p className="text-gray-600 text-sm">
                Our architecture is designed to grow with your business, ensuring your application can handle increased traffic and new features.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="bg-gray-100 p-8 rounded-xl border border-gray-200 hover:border-navy transition-colors duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-navy/10 text-navy mb-6 group-hover:bg-navy/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-8.6"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Transparent Process</h3>
              <p className="text-gray-600 text-sm">
                We believe in open communication and a clear development process. You&apos;ll be involved at every step, from concept to launch.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Company Story Section - Fully Floating Card */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl border border-white/80 p-12 mb-20 transform-gpu backdrop-blur-sm"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-navy/10 to-gold/10 px-4 py-2 mb-6">
                <span className="text-navy text-sm font-medium">OUR STORY</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Crafting Digital <span className="text-navy">Excellence</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                iWebX Solutions transforms businesses with cutting-edge digital solutions. We specialize in creating tailored software that streamlines operations, drives growth, and enhances customer engagement across industries.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our passionate team delivers innovative web and mobile applications, AI-powered tools, and scalable cloud solutions. We partner with you to understand your vision and build technology that propels your business forward.
              </p>
              <a href="/about" className="bg-gradient-to-r from-navy to-navy-dark hover:from-navy-dark hover:to-navy text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Discover Our Journey
              </a>
            </div>

            <div className="relative">
              {/* Floating image cards */}
              <div className="relative h-96">
                <motion.div
                  className="absolute top-0 left-0 w-4/5 h-64 rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/50"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/team collaboration (2).jpg"
                    alt="Team collaboration at iWebX Solutions"
                    className="object-cover w-full h-full"
                    width={400}
                    height={300}
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-0 right-0 w-4/5 h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/50"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/team collaboration 3.jpg"
                    alt="Innovation at iWebX Solutions"
                    className="object-cover w-full h-full"
                    width={400}
                    height={300}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Animation styles */}
      <style>
        {`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.05); }
          50% { transform: translate(0, 20px) scale(1.08); }
          75% { transform: translate(-20px, 0) scale(1.05); }
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
        .object-cover {
          object-fit: cover;
        }
        `}
      </style>

      {/* Custom color definitions */}
      <style>
        {`
        .bg-navy { background-color: #001F3F; }
        .bg-navy\\/5 { background-color: rgba(0, 31, 63, 0.05); }
        .bg-navy-dark { background-color: #00152c; }
        .text-navy { color: #001F3F; }
        .bg-gold { background-color: #D4AF37; }
        .bg-gold\\/5 { background-color: rgba(212, 175, 55, 0.05); }
        .bg-gold-dark { background-color: #B8860B; }
        .text-gold { color: #D4AF37; }
        .from-navy { --tw-gradient-from: #001F3F; --tw-gradient-to: rgba(0, 31, 63, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .to-navy-dark { --tw-gradient-to: #00152c; }
        .from-gold { --tw-gradient-from: #D4AF37; --tw-gradient-to: rgba(212, 175, 55, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .to-gold-dark { --tw-gradient-to: #B8860B; }
        `}
      </style>
    </motion.section>
  );
}

export default About;
