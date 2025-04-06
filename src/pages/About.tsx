
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Target, Award, Zap, Users, Globe, Building, History } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="relative bg-black text-white">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1542979915-a9c2df9a2e74?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
              filter: "grayscale(50%)"
            }}
          ></div>
          
          <div className="relative z-20 mil-container py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Styx</h1>
              <p className="text-xl text-gray-200">
                For over two decades, Styx has been at the forefront of military innovation, 
                providing elite forces with cutting-edge equipment and tactical solutions.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 bg-background">
          <div className="mil-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  At Styx, our mission is to empower those who protect us by providing the most advanced, 
                  reliable, and effective tactical equipment available. We believe that those who risk 
                  their lives in service deserve nothing less than the absolute best tools to ensure 
                  their success and safety.
                </p>
                <p className="text-muted-foreground">
                  Through continuous innovation, rigorous testing, and close collaboration with active 
                  operators, we develop solutions that meet the evolving challenges of modern combat 
                  and law enforcement scenarios. Our commitment to excellence drives every aspect of 
                  our business, from research and development to manufacturing and customer support.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-muted-foreground mb-6">
                  We envision a world where technological superiority serves as a force multiplier 
                  for those dedicated to maintaining peace and security. By pushing the boundaries 
                  of what's possible in tactical equipment, we aim to provide asymmetric advantages 
                  that save lives and ensure mission success.
                </p>
                <p className="text-muted-foreground">
                  Looking to the future, we are committed to leading the industry in sustainable 
                  innovation, developing solutions that not only meet today's challenges but 
                  anticipate tomorrow's threats. Our vision extends beyond products to encompass 
                  the entire ecosystem of tactical operations, from equipment and training to 
                  logistics and support.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted">
          <div className="mil-container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-6 rounded-md border border-border">
                <Shield className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Unwavering Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the highest ethical standards in all our business practices, ensuring 
                  trust and reliability in every interaction.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-md border border-border">
                <Target className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Relentless Excellence</h3>
                <p className="text-muted-foreground">
                  We consistently strive for perfection in our products and services, accepting 
                  nothing less than the highest quality in everything we do.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-md border border-border">
                <Award className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Operator-Focused</h3>
                <p className="text-muted-foreground">
                  Every decision we make is guided by the needs of those who use our equipment 
                  in the field, ensuring our solutions address real-world challenges.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-md border border-border">
                <Zap className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bold Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace calculated risks and creative problem-solving to develop breakthrough 
                  technologies that redefine what's possible in tactical equipment.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-background">
          <div className="mil-container">
            <h2 className="text-3xl font-bold text-center mb-12">Company Facts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">250+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              
              <div className="text-center">
                <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">45+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              
              <div className="text-center">
                <Building className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-muted-foreground">Research Facilities</div>
              </div>
              
              <div className="text-center">
                <History className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-black text-white">
          <div className="mil-container text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Elite</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Partner with Styx and gain access to the most advanced tactical equipment available. 
              Our team of experts is ready to assist with your specific requirements.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 h-10 px-4 py-2"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
