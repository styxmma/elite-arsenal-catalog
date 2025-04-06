
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting Styx. Our team will respond to your inquiry shortly.",
      duration: 5000,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-8 pb-16">
        <div className="mil-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team of experts for inquiries about our products, 
              services, or partnership opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div>
              <div className="bg-card p-8 rounded-md border border-border">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" />
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company/Organization
                    </label>
                    <Input id="company" />
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" required />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" rows={5} required />
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      className="h-4 w-4 rounded border-input"
                      required
                    />
                    <label htmlFor="consent" className="ml-2 text-sm text-muted-foreground">
                      I consent to Styx processing my data for the purpose of responding to my inquiry.
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="bg-card p-8 rounded-md border border-border mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Military Blvd<br />
                        Defense District<br />
                        CA 90210, USA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        Main: +1 (555) 123-4567<br />
                        Support: +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        General: info@styxdefense.com<br />
                        Sales: sales@styxdefense.com<br />
                        Support: support@styxdefense.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Hours of Operation</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-8 rounded-md border border-border">
                <div className="flex items-start">
                  <Shield className="h-8 w-8 text-secondary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Government & Military Inquiries</h3>
                    <p className="text-muted-foreground mb-4">
                      For official government, military, or law enforcement inquiries, please contact 
                      our dedicated procurement team for specialized assistance and information on our 
                      GSA Schedule contract.
                    </p>
                    <p className="font-medium">
                      Direct Line: +1 (555) 321-7890<br />
                      Email: government@styxdefense.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black rounded-md overflow-hidden h-96">
            {/* Placeholder for a map - in a real application, you would embed a Google Map or similar here */}
            <div className="h-full flex items-center justify-center bg-muted">
              <p className="text-muted-foreground text-lg">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
