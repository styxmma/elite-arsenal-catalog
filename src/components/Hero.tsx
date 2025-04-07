
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-black">
      {/* Dark overlay - reduced opacity */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Background image - battlefield scene */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"
        }}
      ></div>
      
      <div className="relative z-20 mil-container py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Elite Tactical Solutions for Modern Defense
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Styx delivers cutting-edge military innovation with precision and reliability. 
            Trusted by elite forces worldwide for superior performance in demanding environments.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link to="/catalog">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Link to="/about">
                About Styx
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
