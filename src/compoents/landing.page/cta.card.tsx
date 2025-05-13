import { motion, Variants  } from 'framer-motion';
import Link from 'next/link';

const cardVariants: Variants  = {
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

const CtaCard = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-gradient-to-br from-[#001F3F] to-[#00152c] rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-2xl overflow-hidden transform-gpu"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          {/* Background decorative pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <pattern
                id="pattern-rects"
                x="0"
                y="0"
                width="15"
                height="15"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="2" height="2" fill="#D4AF37" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-rects)" />
            </svg>
          </div>
          
          <div className="relative z-10 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
              Let&apos;s build something extraordinary together. Contact us today for a free consultation.
            </p>
            <Link href="/contact" passHref>
              <button className="relative bg-gradient-to-r from-[#FFD700] to-[#FFDF00] text-[#001F3F] font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span className="relative z-10">Get in Touch</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CtaCard;
