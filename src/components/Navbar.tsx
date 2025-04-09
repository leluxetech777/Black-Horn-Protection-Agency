import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary-black/95 backdrop-blur-lg border-b border-primary-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src="https://i.imgur.com/rYrktav.png" 
                alt="Black Horn Protection Agency" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About' },
                { to: '/careers', label: 'Careers' }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg text-primary-white hover:text-primary-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary-gold text-primary-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary-cream transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-white hover:text-primary-gold transition-colors p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-primary-black/95 backdrop-blur-lg border-b border-primary-gold/20">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About' },
              { to: '/careers', label: 'Careers' },
              { to: '/contact', label: 'Contact' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-lg text-primary-white hover:text-primary-gold transition-colors duration-300 py-3"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;