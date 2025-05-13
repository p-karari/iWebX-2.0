// 'use client';

// import Footer from "@/compoents/footer";
// import Blog from "@/compoents/landing.page/blog";
// import Navbar from "@/compoents/landing.page/navbar";
// import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// // Define interface for blog posts
// interface BlogPost {
//   title: string;
//   description: string;
//   date: string;
//   readTime: string;
//   author: string;
//   likes: number;
//   fullContent: string;
//   imageUrl: string;
// }

// interface BlogCategory {
//   title: string;
//   items: BlogPost[];
// }

// function BlogPage() {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [subscriberEmail, setSubscriberEmail] = useState('');
//   const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSubscribe = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       if (!formRef.current) return;

//       await emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID!,
//         formRef.current,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//       );

//       setStatus('success');
//       setSubscriberEmail('');
//     } catch (error) {
//       console.error('Subscription failed:', error);
//       setStatus('error');
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setStatus('idle'), 5000);
//     }
//   };

//   const handleReadArticle = (post: BlogPost) => {
//     setSelectedArticle(post);
//     setIsModalOpen(true);
//   };

//   const handleLike = () => {
//     if (selectedArticle) {
//       const updatedArticle = { ...selectedArticle, likes: selectedArticle.likes + 1 };
//       setSelectedArticle(updatedArticle);
      
//       // Update the likes in the main data (you might want to persist this to a database)
//       const updatedCategories = blogCategories.map(category => ({
//         ...category,
//         items: category.items.map(item => 
//           item.title === updatedArticle.title ? updatedArticle : item
//         )
//       }));
//       // In a real app, you'd set this state or update your database
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedArticle(null);
//   };

//   // Generate random image URLs from picsum.photos
//   const getRandomImage = (width: number = 400, height: number = 300) => {
//     return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;
//   };

//   // Blog posts data organized by category
//   const blogCategories: BlogCategory[] = [
//     {
//       title: "Web Development",
//       items: Array(4).fill(null).map((_, index) => ({
//         title: "Modern Web Development Trends in 2023",
//         description: "Explore the latest technologies and frameworks shaping the future of web development and how they can benefit your business.",
//         date: new Date(2023, 9, 15 + index).toLocaleDateString('en-US', { 
//           year: 'numeric', 
//           month: 'long', 
//           day: 'numeric' 
//         }),
//         readTime: "5 min read",
//         author: "Sarah Johnson",
//         likes: Math.floor(Math.random() * 50),
//         fullContent: "This is the full content of the article about modern web development trends. It includes detailed information about React, Vue, Angular, and other frameworks that are shaping the future of web development in 2023...",
//         imageUrl: getRandomImage()
//       }))
//     },
//     {
//       title: "UI/UX Design",
//       items: Array(3).fill(null).map((_, index) => ({
//         title: "Creating Intuitive User Experiences",
//         description: "Learn the principles behind designing interfaces that users love and how good UX translates to business success.",
//         date: new Date(2023, 8, 28 + index).toLocaleDateString('en-US', { 
//           year: 'numeric', 
//           month: 'long', 
//           day: 'numeric' 
//         }),
//         readTime: "7 min read",
//         author: "Mike Chen",
//         likes: Math.floor(Math.random() * 50),
//         fullContent: "This comprehensive guide covers everything you need to know about creating intuitive user experiences. From user research to prototyping and testing...",
//         imageUrl: getRandomImage()
//       }))
//     },
//     {
//       title: "Business Technology",
//       items: Array(3).fill(null).map((_, index) => ({
//         title: "Optimizing Operations with Custom Software",
//         description: "Discover how tailored management systems can streamline your business processes and increase productivity.",
//         date: new Date(2023, 7, 12 + index).toLocaleDateString('en-US', { 
//           year: 'numeric', 
//           month: 'long', 
//           day: 'numeric' 
//         }),
//         readTime: "6 min read",
//         author: "Emily Rodriguez",
//         likes: Math.floor(Math.random() * 50),
//         fullContent: "Custom software solutions can revolutionize your business operations. Learn how to identify areas for improvement and implement effective solutions...",
//         imageUrl: getRandomImage()
//       }))
//     },
//     {
//       title: "Digital Marketing",
//       items: Array(2).fill(null).map((_, index) => ({
//         title: "Leveraging SEO for Business Growth",
//         description: "Understand how search engine optimization works and why it's essential for your online visibility and customer acquisition.",
//         date: new Date(2023, 6, 5 + index).toLocaleDateString('en-US', { 
//           year: 'numeric', 
//           month: 'long', 
//           day: 'numeric' 
//         }),
//         readTime: "4 min read",
//         author: "David Kim",
//         likes: Math.floor(Math.random() * 50),
//         fullContent: "SEO is more than just keywords. This article dives deep into technical SEO, content strategy, and link building techniques that drive real results...",
//         imageUrl: getRandomImage()
//       }))
//     }
//   ];

//   // Featured article
//   const featuredArticle: BlogPost = {
//     title: "The Future of React: What to Expect in 2024",
//     description: "Dive into the upcoming features and changes in React ecosystem. Learn how Server Components, enhanced hooks, and performance improvements will change how we build web applications.",
//     date: new Date(2023, 9, 20).toLocaleDateString('en-US', { 
//       year: 'numeric', 
//       month: 'long', 
//       day: 'numeric' 
//     }),
//     readTime: "8 min read",
//     author: "Alex Taylor",
//     likes: 42,
//     fullContent: "React continues to evolve at a rapid pace. In 2024, we can expect significant improvements in Server Components, better performance optimization tools, and enhanced developer experience. This article explores the roadmap and what it means for developers...",
//     imageUrl: getRandomImage(600, 400)
//   };

//   return (
//     <>
//       <Navbar />
      
//       <main className="pb-16">
//         {/* Hero Section */}
//         <section className="relative pt-22 pb-10">
//           <div className="absolute inset-0 z-0">
//             <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
//             <div 
//               className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
//               style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
//             ></div>
//           </div>
          
//           <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
//             <div className="inline-flex items-center rounded-full bg-gradient-to-r from-gold to-gold-dark px-4 py-2 mb-8 shadow-lg">
//               <span className="text-white text-sm font-medium">BLOGS & INSIGHTS</span>
//             </div>
            
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//               Insights, tips and  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">industry perspectives</span>
//             </h1>
            
//             <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
//               Explore our latest articles on web development, design, business technology and digital marketing strategies.
//             </p>
//           </div>
//         </section>

//         <div className="border-t border-gray-200 my-12"></div>

//         {/* Featured Post */}
//         <section className="max-w-7xl mx-auto px-4 mb-20">
//           <div className="mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
//               <span className="w-3 h-3 bg-[#ffd700] rounded-full mr-3"></span>
//               Featured Article
//             </h2>
//           </div>

//           <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
//             <div className="md:flex">
//               {/* Image */}
//               <div 
//                 className="md:w-2/5 h-64 md:h-auto bg-cover bg-center"
//                 style={{ backgroundImage: `url(${featuredArticle.imageUrl})` }}
//               ></div>
              
//               {/* Content */}
//               <div className="p-8 md:w-3/5">
//                 <div className="flex items-center text-sm text-gray-500 mb-4">
//                   <span>{featuredArticle.date}</span>
//                   <span className="mx-2">•</span>
//                   <span>{featuredArticle.readTime}</span>
//                   <span className="mx-2">•</span>
//                   <span className="text-[#0028ff] font-medium">Web Development</span>
//                 </div>
                
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-[#0028ff] transition-colors duration-300">
//                   {featuredArticle.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   {featuredArticle.description}
//                 </p>
                
//                 {/* Author and Like Info */}
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="flex items-center">
//                     <div className="w-8 h-8 bg-gradient-to-r from-[#0028ff] to-[#ffd700] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
//                       {featuredArticle.author.split(' ').map(name => name[0]).join('')}
//                     </div>
//                     <span className="text-sm text-gray-600">{featuredArticle.author}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-sm text-gray-600 mr-2">{featuredArticle.likes}</span>
//                     <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//                     </svg>
//                   </div>
//                 </div>
                
//                 {/* Read More Button */}
//                 <button 
//                   onClick={() => handleReadArticle(featuredArticle)}
//                   className="text-[#0028ff] font-medium flex items-center hover:text-[#ffd700] transition-colors duration-300 group"
//                 >
//                   Read Full Article
//                   <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         <div className="border-t border-gray-200 my-16"></div>

//         {/* Blog Categories */}
//         {blogCategories.map((category, categoryIndex) => (
//           <section key={categoryIndex} className="max-w-7xl mx-auto px-4 mb-20">
//             <div className="mb-12">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
//                 <span className="w-3 h-3 bg-[#ffd700] rounded-full mr-3"></span>
//                 {category.title}
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {category.items.map((item, itemIndex) => (
//                 <div 
//                   key={itemIndex} 
//                   className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
//                   onClick={() => handleReadArticle(item)}
//                 >
//                   {/* Image */}
//                   <div 
//                     className="h-48 bg-cover bg-center relative overflow-hidden"
//                     style={{ backgroundImage: `url(${item.imageUrl})` }}
//                   >
//                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
//                       <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         Read Article
//                       </span>
//                     </div>
//                   </div>
                  
//                   {/* Content */}
//                   <div className="p-6">
//                     <div className="flex items-center text-sm text-gray-500 mb-3">
//                       <span>{item.date}</span>
//                       <span className="mx-2">•</span>
//                       <span>{item.readTime}</span>
//                     </div>
                    
//                     <h3 className="font-semibold text-lg text-gray-800 mb-3 group-hover:text-[#0028ff] transition-colors duration-300">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                       {item.description}
//                     </p>
                    
//                     {/* Author and Like Info */}
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center">
//                         <div className="w-6 h-6 bg-gradient-to-r from-[#0028ff] to-[#ffd700] rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
//                           {item.author.split(' ').map(name => name[0]).join('')}
//                         </div>
//                         <span className="text-xs text-gray-600">{item.author}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-xs text-gray-600 mr-1">{item.likes}</span>
//                         <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//                         </svg>
//                       </div>
//                     </div>
                    
//                     {/* Read More Button */}
//                     <button className="text-[#0028ff] font-medium text-sm flex items-center group-hover:text-[#ffd700] transition-colors duration-300">
//                       Read More
//                       <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* Divider between categories */}
//             {categoryIndex < blogCategories.length - 1 && (
//               <div className="border-t border-gray-200 my-16"></div>
//             )}
//           </section>
//         ))}

//         {/* Newsletter CTA Section */}
//         <section className="max-w-7xl mx-auto px-4 mb-16 mt-24 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//             Stay Updated with Our Latest Insights
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
//             Subscribe to our newsletter to receive expert tips, industry news, and updates on the latest trends.
//           </p>
//           <form 
//             ref={formRef} 
//             onSubmit={handleSubscribe} 
//             className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto gap-4 w-full"
//           >
//             <input
//               type="email"
//               name="user_email"
//               required
//               value={subscriberEmail}
//               onChange={(e) => setSubscriberEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0028ff] flex-grow w-full"
//             />
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="bg-gradient-to-r from-[#0028ff] to-[#0028ff] hover:from-[#ffd700] hover:to-[#ffd700] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap disabled:opacity-50"
//             >
//               {isSubmitting ? 'Subscribing...' : 'Subscribe'}
//             </button>
//           </form>
//           {status === 'success' && (
//             <p className="text-green-600 mt-4">Thanks for subscribing!</p>
//           )}
//           {status === 'error' && (
//             <p className="text-red-600 mt-4">Something went wrong. Please try again.</p>
//           )}
//         </section>

//         {/* Article Modal */}
//         {isModalOpen && selectedArticle && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="relative">
//                 {/* Article Image */}
//                 <div 
//                   className="h-64 w-full bg-cover bg-center"
//                   style={{ backgroundImage: `url(${selectedArticle.imageUrl})` }}
//                 ></div>
                
//                 {/* Close Button */}
//                 <button 
//                   onClick={closeModal}
//                   className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                   </svg>
//                 </button>
//               </div>
              
//               <div className="p-8">
//                 <div className="flex items-center text-sm text-gray-500 mb-4">
//                   <span>{selectedArticle.date}</span>
//                   <span className="mx-2">•</span>
//                   <span>{selectedArticle.readTime}</span>
//                 </div>
                
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">
//                   {selectedArticle.title}
//                 </h2>
                
//                 {/* Author and Like Section */}
//                 <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
//                   <div className="flex items-center">
//                     <div className="w-10 h-10 bg-gradient-to-r from-[#0028ff] to-[#ffd700] rounded-full flex items-center justify-center text-white font-bold mr-3">
//                       {selectedArticle.author.split(' ').map(name => name[0]).join('')}
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-800">{selectedArticle.author}</p>
//                       <p className="text-sm text-gray-500">Author</p>
//                     </div>
//                   </div>
                  
//                   <button 
//                     onClick={handleLike}
//                     className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors"
//                   >
//                     <span className="text-lg font-medium">{selectedArticle.likes}</span>
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//                     </svg>
//                   </button>
//                 </div>
                
//                 {/* Article Content */}
//                 <div className="prose max-w-none">
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     {selectedArticle.description}
//                   </p>
//                   <p className="text-gray-700 leading-relaxed">
//                     {selectedArticle.fullContent}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>

//       <Blog />
//       <Footer />
//     </>
//   )
// }

// export default BlogPage;