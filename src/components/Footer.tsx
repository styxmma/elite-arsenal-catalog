
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground pt-12 pb-8">
      <div className="mil-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold tracking-tight text-foreground">STYX</span>
            </Link>
            <p className="text-sm">
              Styx is a leading company in military innovation, providing cutting-edge equipment for elite forces around the world.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog?category=firearms" className="hover:text-foreground transition-colors">Firearms</Link></li>
              <li><Link to="/catalog?category=ammunition" className="hover:text-foreground transition-colors">Ammunition</Link></li>
              <li><Link to="/catalog?category=accessories" className="hover:text-foreground transition-colors">Accessories</Link></li>
              <li><Link to="/catalog?category=gear" className="hover:text-foreground transition-colors">Tactical Gear</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>123 Military Blvd, Defense District, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@styxdefense.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Styx Defense Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
