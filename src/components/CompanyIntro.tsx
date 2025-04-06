
import React from 'react';
import { Shield, Target, Award, Zap } from 'lucide-react';

const CompanyIntro = () => {
  return (
    <section className="py-16 bg-background">
      <div className="mil-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Military Innovation Excellence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For over two decades, Styx has been at the forefront of military technology, 
            providing elite forces with the tools they need for mission success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-6 rounded-md border border-border">
            <Shield className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Defense Expertise</h3>
            <p className="text-muted-foreground">
              Trusted by military contractors and elite units for our uncompromising quality and reliability.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-md border border-border">
            <Target className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Precision Engineering</h3>
            <p className="text-muted-foreground">
              Every product is designed and manufactured to meet the most demanding specifications.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-md border border-border">
            <Award className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Industry Leading</h3>
            <p className="text-muted-foreground">
              Award-winning innovations that set new standards in tactical equipment performance.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-md border border-border">
            <Zap className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cutting Edge</h3>
            <p className="text-muted-foreground">
              Continuously developing next-generation technologies for tomorrow's challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
