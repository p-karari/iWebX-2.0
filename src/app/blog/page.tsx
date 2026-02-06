'use client';

import BlogHero from "@/compoents/blog.page/blogHero";
import Footer from "@/compoents/footer";
import Navbar from "@/compoents/landing.page/navbar";
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import { useEffect, useRef, useState } from 'react';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(POSTS_QUERY);
      setPosts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Helper to get all unique category titles from our posts
  const categoryList = Array.from(new Set(posts.flatMap(p => p.categories || ["General"])));

  const handleReadArticle = (post: any) => {
    setSelectedArticle(post);
    setIsModalOpen(true);
  };

  const handleCopyLink = () => {
    if (selectedArticle) {
      const url = `${window.location.origin}/blog/${selectedArticle.slug?.current || selectedArticle._id}`;
      navigator.clipboard.writeText(url);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-yellow-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-gray-600">Loading articles...</p>
      </div>
    </div>
  );

  const featuredArticle = posts[0];

  return (
    <>
      <Navbar />
    <BlogHero 
      postCount={posts.length}
      latestPostDate={posts[0]?.publishedAt ? formatDate(posts[0].publishedAt).split(',')[0] : undefined}
    />      
      {/* Background Grid Effect - matching services page */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5 pointer-events-none z-0"></div>
      
      <main className="relative z-10 pb-16 pt-20 bg-transparent">
        {/* Featured Section - Premium styled */}
        {featuredArticle && (
          <section className="max-w-7xl mx-auto px-4 mb-20">
            <div className="relative group">
              {/* Decorative gold accent line */}
              <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-tl-2xl"></div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 h-64 md:h-96 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${featuredArticle.imageUrl})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent"></div>
                  </div>
                  <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    {/* Category badge */}
                    <button className="group flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-2 px-4 rounded-full w-fit mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <span>{featuredArticle.categories?.[0] || 'Featured'}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                      {featuredArticle.title}
                    </h3>
                    
                    {/* Author info */}
                    <div className="flex items-center gap-3 mb-6">
                      {featuredArticle.authorImage ? (
                        <img 
                          src={featuredArticle.authorImage} 
                          alt={featuredArticle.authorName || "Author"}
                          className="w-10 h-10 rounded-full border-2 border-yellow-400"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center text-gray-900 font-bold border-2 border-yellow-400">
                          {(featuredArticle.authorName || "T")[0]}
                        </div>
                      )}
                      <div>
                        <p className="text-white font-semibold">{featuredArticle.authorName || "Team iWebX"}</p>
                        <p className="text-gray-300 text-sm">{featuredArticle.publishedAt ? formatDate(featuredArticle.publishedAt) : 'Latest Article'}</p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleReadArticle(featuredArticle)}
                      className="group relative bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-semibold py-3 px-6 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg w-fit"
                    >
                      <div className="absolute inset-0 -inset-x-10 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        Read Now
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Categories Sections */}
        {categoryList.map((catName) => (
          <section key={catName} className="max-w-7xl mx-auto px-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center text-gray-900">
              <span className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full mr-3"></span>
              {catName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts
                .filter(p => p.categories?.includes(catName) || (catName === "General" && !p.categories))
                .map((post) => (
                  <div 
                    key={post._id} 
                    onClick={() => handleReadArticle(post)}
                    className="group relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
                  >
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 -inset-x-10 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-1000"></div>
                    
                    <div className="relative z-10">
                      {/* Image with overlay */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.imageUrl} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                          alt={post.title} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                        
                        {/* Category badge */}
                        <span className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          {post.categories?.[0] || 'General'}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-3 text-gray-900 line-clamp-2 group-hover:text-gray-800 transition-colors">
                          {post.title}
                        </h3>
                        
                        {/* Preview text from body */}
                        <p className="text-gray-800 mb-4 line-clamp-2 text-sm">
                          {post.body?.[0]?.children?.[0]?.text || 'Click to read more about this article...'}
                        </p>
                        
                        {/* Author and meta info */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-900/20">
                          <div className="flex items-center gap-2">
                            {post.authorImage ? (
                              <img 
                                src={post.authorImage} 
                                alt={post.authorName || "Author"}
                                className="w-8 h-8 rounded-full border-2 border-white"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 font-bold text-sm border-2 border-white">
                                {(post.authorName || "T")[0]}
                              </div>
                            )}
                            <span className="text-sm font-medium text-gray-900">
                              {post.authorName || "Team iWebX"}
                            </span>
                          </div>
                          <span className="text-xs text-gray-700">
                            {post.publishedAt ? formatDate(post.publishedAt).split(',')[0] : 'Recent'}
                          </span>
                        </div>
                        
                        {/* Read more indicator */}
                        <div className="mt-4 flex items-center text-gray-900 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                          Read Article
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}

        {/* Content Modal - Premium styled with scroll lock */}
        {isModalOpen && selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div 
              ref={modalRef}
              className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              style={{ scrollbarWidth: 'thin' }}
            >
              {/* Decorative gold accent line */}
              <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-tl-2xl"></div>
              
              {/* Close button */}
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Featured Image */}
              {selectedArticle.imageUrl && (
                <div className="relative h-64 md:h-96 w-full overflow-hidden">
                  <img 
                    src={selectedArticle.imageUrl} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              )}
              
              <div className="p-8">
                {/* Category badge */}
                <button className="group flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-2 px-4 rounded-full w-fit mb-4 shadow-lg">
                  <span>{selectedArticle.categories?.[0] || 'Article'}</span>
                </button>
                
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  {selectedArticle.title}
                </h2>
                
                {/* Author and meta info with share button */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    {selectedArticle.authorImage ? (
                      <img 
                        src={selectedArticle.authorImage} 
                        alt={selectedArticle.authorName || "Author"}
                        className="w-12 h-12 rounded-full border-2 border-yellow-400"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center text-gray-900 font-bold text-xl border-2 border-yellow-400">
                        {(selectedArticle.authorName || "T")[0]}
                      </div>
                    )}
                    <div>
                      <p className="text-gray-900 font-semibold text-lg">{selectedArticle.authorName || "Team iWebX"}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span>{selectedArticle.publishedAt ? formatDate(selectedArticle.publishedAt) : 'No date'}</span>
                        <span>•</span>
                        <span>{selectedArticle.categories?.[0] || 'General'}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Share button */}
                  <div className="relative">
                    <button
                      onClick={handleCopyLink}
                      className="group flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-full transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share
                    </button>
                    {copySuccess && (
                      <div className="absolute top-full mt-2 right-0 bg-green-500 text-white text-sm py-1 px-3 rounded-full shadow-lg">
                        Link copied!
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="prose prose-lg max-w-none text-gray-700">
                  <PortableText value={selectedArticle.body} />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}