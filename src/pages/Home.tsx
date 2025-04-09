import React from 'react';
import { Users, Building2, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-primary-white">
      {/* Hero Section */}
      <div 
        className="relative min-h-[90vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(18, 17, 19, 0.85), rgba(49, 46, 45, 0.9)), url("https://media.istockphoto.com/id/2154004975/photo/portrait-police-or-black-woman-in-city-for-law-enforcement-community-protection-or-legal.jpg?s=612x612&w=0&k=20&c=IIVrIhs5Pnldd0vAOQm_DstWKrVfCGjYF9kXGo3XJ4Q=")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black/90 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Protecting What
              <span className="block text-primary-gold"> Matters Most</span>
            </h1>
            <p className="text-2xl mb-12 text-primary-cream leading-relaxed">
              Elite security solutions tailored to safeguard your assets and ensure peace of mind in the Twin Cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-primary-gold text-primary-black px-10 py-5 rounded-lg text-xl font-semibold hover:bg-primary-cream transition-all duration-300 inline-block text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Request Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-primary-gold text-primary-gold px-10 py-5 rounded-lg text-xl font-semibold hover:bg-primary-gold/10 transition-all duration-300 inline-block text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-primary-black via-primary-brown/20 to-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Why Choose Black Horn</h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto leading-relaxed">
              Setting the standard for professional security services in Minneapolis-St. Paul with unmatched expertise and dedication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Shield className="h-16 w-16 text-primary-gold" />,
                title: "Elite Protection",
                description: "Industry-leading security solutions customized to your needs"
              },
              {
                icon: <Users className="h-16 w-16 text-primary-gold" />,
                title: "Expert Team",
                description: "Highly trained professionals with extensive field experience"
              },
              {
                icon: <Building2 className="h-16 w-16 text-primary-gold" />,
                title: "Local Expertise",
                description: "Deep understanding of Twin Cities security landscape"
              },
              {
                icon: <Clock className="h-16 w-16 text-primary-gold" />,
                title: "24/7 Service",
                description: "Round-the-clock protection and rapid response"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary-black to-primary-brown p-8 rounded-xl border border-primary-gold/20 hover:border-primary-gold/40 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary-cream">
                  {feature.title}
                </h3>
                <p className="text-primary-gray text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto leading-relaxed">
              Comprehensive security solutions designed to meet the diverse needs of our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                image: "https://media.istockphoto.com/id/1311084193/photo/a-man-with-a-beard-a-security-guard-or-a-police-officer-possibly-from-the-rescue-service-is.jpg?s=612x612&w=0&k=20&c=0fkvvAf8Ss7aUy0XQ72P1bldPAUj8f3ahAHkMjBJIN4=",
                title: "Corporate Security",
                description: "Protecting your business assets and personnel"
              },
              {
                image: "https://media.istockphoto.com/id/1263019790/photo/security-guard-at-work-talking-on-his-radio.jpg?s=612x612&w=0&k=20&c=opDA3KgOOGAEFaaiuO8XtbL7D8z5Mle61ZEXCidWKe8=",
                title: "Event Security",
                description: "Professional crowd management and event protection"
              },
              {
                image: "https://media.istockphoto.com/id/2154004975/photo/portrait-police-or-black-woman-in-city-for-law-enforcement-community-protection-or-legal.jpg?s=612x612&w=0&k=20&c=IIVrIhs5Pnldd0vAOQm_DstWKrVfCGjYF9kXGo3XJ4Q=",
                title: "Executive Protection",
                description: "Personalized security for high-profile individuals"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative h-[500px] rounded-xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold mb-4 text-primary-cream group-hover:text-primary-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-primary-gray transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-primary-cream mb-6">Ready to Secure Your Future?</h2>
          <p className="text-xl text-primary-cream/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a comprehensive security assessment and discover how we can protect what matters most to you.
          </p>
          <Link
            to="/contact"
            className="bg-primary-black text-primary-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-primary-brown transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;