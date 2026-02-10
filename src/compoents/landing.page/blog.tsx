'use client';

import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BlogPost {
  _id: string;
  title: string;
  slug?: { current: string };
  imageUrl: string;
  authorName?: string;
  authorImage?: string;
  categories?: string[];
  publishedAt?: string;
  body?: any[];
}

export default function BlogHighlight() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(POSTS_QUERY);
        // Get only the 3 most recent posts
        setPosts(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-yellow-400 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Loading latest insights...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Services badge */}
          <div className="flex justify-center mb-6">
            <button className="group flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-full w-fit shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>Our Insights</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover expert insights, industry trends, and practical tips to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <Link 
                href={`/blog#${post.slug?.current || post._id}`} 
                key={post._id}
                className="group relative block"
                onClick={(e: { preventDefault: () => void; }) => {
                  e.preventDefault();
                  // You can implement modal opening logic here if needed
                  window.location.href = '/blog';
                }}
              >
                <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full">
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -inset-x-10 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-1000"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {post.categories?.[0] || 'Article'}
                      </span>
                      
                      {/* Number indicator for first 3 posts */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-gray-800 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-800 mb-4 line-clamp-2 text-sm">
                        {post.body?.[0]?.children?.[0]?.text || 'Click to read more about this insightful article...'}
                      </p>
                      
                      {/* Author and Meta */}
                      <div className="mt-auto">
                        <div className="flex items-center justify-between pt-4 border-t border-gray-900/20">
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
                            {post.publishedAt ? formatDate(post.publishedAt) : 'Recent'}
                          </span>
                        </div>
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
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts available yet. Check back soon!</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Link href="/blog">
            <button className="group relative bg-gray-900 text-white font-semibold py-4 px-10 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
              {/* Button shine effect */}
              <div className="absolute inset-0 -inset-x-10 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700"></div>
              
              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <span className="relative z-10 flex items-center gap-3 text-lg">
                View All Articles
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-64 h-64 bg-gray-200/20 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}