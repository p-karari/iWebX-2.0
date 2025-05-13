'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

// Define the shape of a single review item for type safety.
interface Review {
  id: number;
  user: string;
  rating: number;
  reviewText: string;
  likes: number;
  liked: boolean;
  avatarPlaceholderColor: string;
}

// Dummy data for the reviews.
const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex R.",
    rating: 5,
    reviewText: "The team's work on our website was incredible. The design is sleek, the performance is flawless, and they delivered ahead of schedule. Highly recommend for any custom project!",
    likes: 21,
    liked: false,
    avatarPlaceholderColor: "#4A90E2"
  },
  {
    id: 2,
    user: "Sarah L.",
    rating: 5,
    reviewText: "I had a vision for a unique app, and this team brought it to life with precision and creativity. The communication was excellent throughout the process.",
    likes: 15,
    liked: false,
    avatarPlaceholderColor: "#50E3C2"
  },
  {
    id: 3,
    user: "John D.",
    rating: 4,
    reviewText: "The custom IT solution they built has streamlined our operations significantly. The support has been great, and the product is exactly what we needed. A solid choice.",
    likes: 9,
    liked: false,
    avatarPlaceholderColor: "#F5A623"
  },
  {
    id: 4,
    user: "Maria K.",
    rating: 5,
    reviewText: "From concept to launch, they were true partners. The web application is intuitive, fast, and has received great feedback from our users. Thank you for the amazing work!",
    likes: 32,
    liked: false,
    avatarPlaceholderColor: "#BD10E0"
  },
  {
    id: 5,
    user: "David C.",
    rating: 5,
    reviewText: "Our company's digital presence has never been stronger. The personalized approach and attention to detail made all the difference. Fantastic results!",
    likes: 25,
    liked: false,
    avatarPlaceholderColor: "#7ED321"
  },
  {
    id: 6,
    user: "Jessica P.",
    rating: 5,
    reviewText: "We hired them for a full-stack consultancy project. Their expertise and strategic advice were invaluable. The final product exceeded our expectations.",
    likes: 18,
    liked: false,
    avatarPlaceholderColor: "#9B59B6"
  }
];

// Helper function to render star icons
const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg 
      key={index} 
      className={`h-4 w-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
    </svg>
  ));
  return <div className="flex">{stars}</div>;
};

// Animation variants for fade-in effect on scroll
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(reviewsData);

  const handleLike = (id: number) => {
    setReviews(prevReviews => 
      prevReviews.map(review => {
        if (review.id === id) {
          return {
            ...review,
            likes: review.liked ? review.likes - 1 : review.likes + 1,
            liked: !review.liked,
          };
        }
        return review;
      })
    );
  };

  return (
    <div className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 leading-tight">
          Hear it from our <span className="text-gray-900">clients</span>
        </h2>
        <p className="text-center text-gray-500 text-base mb-12 max-w-2xl mx-auto">
          We&apos;re not just building solutions, we&apos;re building partnerships. See what our clients have to say about their experience.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map(review => (
            <motion.div 
              key={review.id} 
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
            >
              <div className="flex items-center mb-4">
                {/* User Avatar Placeholder */}
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 shadow-sm"
                  style={{ backgroundColor: review.avatarPlaceholderColor }}
                >
                  {review.user.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-base">{review.user}</p>
                  <StarRating rating={review.rating} />
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {review.reviewText}
              </p>

              <div className="flex items-center justify-between">
                <button 
                  onClick={() => handleLike(review.id)}
                  className="flex items-center space-x-1 text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transform transition-transform duration-300 ${
                      review.liked ? 'text-blue-500 scale-110' : ''
                    }`} 
                    fill={review.liked ? 'currentColor' : 'none'} 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="font-medium text-xs">
                    {review.likes}
                  </span>
                </button>
                <span className="text-xs text-gray-400 italic">via Trustpilot</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
