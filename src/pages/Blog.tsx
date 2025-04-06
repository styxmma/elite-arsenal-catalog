
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search, Calendar, User } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === null || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-8 pb-16">
        <div className="mil-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Tactical Insights</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest developments in military technology and tactical equipment
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Main content */}
            <div className="flex-grow">
              {sortedPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
              
              {sortedPosts.length === 0 && (
                <div className="text-center py-12 border border-border rounded-md">
                  <h3 className="text-xl font-medium mb-2">No articles found</h3>
                  <p className="text-muted-foreground">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-card border border-border rounded-md p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-md p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <button 
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${activeCategory === null ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'}`}
                    onClick={() => setActiveCategory(null)}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button 
                      key={category} 
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${activeCategory === category ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-md p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .slice(0, 3)
                    .map((post) => (
                      <Link key={post.id} to={`/blog/${post.id}`} className="block group">
                        <div className="text-sm font-medium group-hover:text-secondary transition-colors">
                          {post.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{post.date}</div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="mb-8 border-b border-border pb-8 last:border-0 last:pb-0">
      <Link to={`/blog/${post.id}`} className="block group">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 rounded-md overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center gap-4 mb-2">
              <Badge variant="outline">{post.category}</Badge>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar size={14} className="mr-1" />
                {post.date}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <User size={14} className="mr-1" />
                {post.author}
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">{post.title}</h2>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex items-center text-sm font-medium group-hover:text-secondary transition-colors">
              Read More <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Blog;
