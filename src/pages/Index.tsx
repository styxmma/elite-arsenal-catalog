
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CompanyIntro from '@/components/CompanyIntro';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { blogPosts } from '@/data/blogPosts';
import CategoryCard from '@/components/CategoryCard';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Get the most recent blog posts
  const recentPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 2);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <CompanyIntro />
        
        <FeaturedProducts />
        
        {/* Product Categories */}
        <section className="py-16 bg-background">
          <div className="mil-container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Product Categories</h2>
                <p className="text-muted-foreground">Browse our extensive collection of tactical equipment</p>
              </div>
              <Button asChild variant="outline" className="mt-4 md:mt-0">
                <Link to="/catalog">
                  View All Categories <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Recent Blog Posts */}
        <section className="py-16 bg-muted">
          <div className="mil-container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Latest Insights</h2>
                <p className="text-muted-foreground">Stay informed with our expert analysis and industry updates</p>
              </div>
              <Button asChild variant="outline" className="mt-4 md:mt-0">
                <Link to="/blog">
                  View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group">
                  <div className="bg-card rounded-md overflow-hidden border border-border h-full flex flex-col transition-all duration-300 group-hover:border-secondary">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-secondary">{post.category}</span>
                        <span className="text-xs text-muted-foreground mx-2">•</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center text-sm font-medium">
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
