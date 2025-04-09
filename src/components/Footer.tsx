import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-black border-t border-primary-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="block mb-6">
              <img 
                src="https://i.imgur.com/rYrktav.png" 
                alt="Black Horn Protection Agency" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-primary-gray text-lg leading-relaxed">
              Professional security solutions for the Twin Cities area. Your safety is our unwavering priority.
            </p>
          </div>

          <div>
            <h3 className="text-primary-white text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About Us' },
                { to: '/careers', label: 'Careers' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-primary-gray hover:text-primary-gold transition-colors duration-300 text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary-white text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                'Armed Security',
                'Event Security',
                'Corporate Security',
                'Executive Protection'
              ].map((service) => (
                <li key={service} className="text-primary-gray text-lg">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary-white text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {[
                { icon: <Phone size={20} />, text: '(612) 636-7709' },
                { icon: <Mail size={20} />, text: 'c.sykes@blackhorn.com' },
                { icon: <MapPin size={20} />, text: 'Minneapolis-St. Paul, MN' }
              ].map((item, index) => (
                <li key={index} className="flex items-center text-primary-gray text-lg">
                  <span className="text-primary-gold mr-3">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-gold/20 mt-12 pt-8 text-center">
          <p className="text-primary-gray text-lg">
            &copy; {new Date().getFullYear()} Black Horn Protection Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;