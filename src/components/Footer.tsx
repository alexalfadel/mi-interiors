import React from 'react';
import { Instagram, Linkedin, Bookmark } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-100 text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Miranda Irwin Interiors</h3>
            <p className="text-gray-600 leading-relaxed">
              Creating timeless, beautiful spaces that reflect your unique style and enhance your everyday life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-green-700 transition-all duration-200 ease-out hover:underline motion-reduce:transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-gray-900">Contact</h4>
            <div className="space-y-2 text-gray-600">
              <p>123 Design District</p>
              <p>Portland, OR 97205</p>
              <p>
                <a 
                  href="tel:+15035550123"
                  className="hover:text-green-700 transition-all duration-200 ease-out hover:underline motion-reduce:transition-colors"
                >
                  (503) 555-0123
                </a>
              </p>
              <p>
                <a 
                  href="mailto:hello@mirandairwin.com"
                  className="hover:text-green-700 transition-all duration-200 ease-out hover:underline motion-reduce:transition-colors"
                >
                  hello@mirandairwin.com
                </a>
              </p>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com/mirandairwininteriors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-700 transition-all duration-200 ease-out hover:scale-103 motion-reduce:hover:scale-100 motion-reduce:hover:underline"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://pinterest.com/mirandairwininteriors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-700 transition-all duration-200 ease-out hover:scale-103 motion-reduce:hover:scale-100 motion-reduce:hover:underline"
              >
                <Bookmark size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/mirandairwin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-700 transition-all duration-200 ease-out hover:scale-103 motion-reduce:hover:scale-100 motion-reduce:hover:underline"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 Miranda Irwin Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;