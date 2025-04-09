import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-300 mb-6">
            We are passionate about delivering cutting-edge solutions that transform businesses 
            and drive innovation. Our team of experts brings years of experience and dedication 
            to every project we undertake.
          </p>
          <p className="text-gray-300">
            Founded with a vision to revolutionize the industry, we combine technical excellence 
            with creative problem-solving to help our clients achieve their goals and stay ahead 
            in today's rapidly evolving digital landscape.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Team collaboration" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;