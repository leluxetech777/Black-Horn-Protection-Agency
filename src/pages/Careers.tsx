import React from 'react';
import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Join Our Team</h1>
        
        <div className="bg-black/50 p-8 rounded-lg border border-gold/20">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Are you ready to embark on a rewarding career in professional security? Whether you're an experienced officer looking for a new home, considering a career change, or seeking your first opportunity in the security industry – Black Horn Protection Agency welcomes you.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            We believe in fostering growth, providing excellent training, and creating an environment where security professionals can thrive while serving our community with distinction.
          </p>

          <Link 
            to="/contact" 
            className="inline-block bg-gold text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-dark transition-colors"
          >
            Start Your Journey With Us
          </Link>
        </div>
      </div>
    </div>
  );
}