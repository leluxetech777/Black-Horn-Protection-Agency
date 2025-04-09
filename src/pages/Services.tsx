import React from 'react';
import { Shield, Users, Building2, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Armed Security",
      description: "Professional armed security services with highly trained personnel, providing comprehensive protection for high-risk environments and valuable assets.",
      icon: <Shield className="w-8 h-8 text-primary-gold" />,
      image: "https://media.istockphoto.com/id/483532999/photo/security-guard.jpg?s=612x612&w=0&k=20&c=I9CuHbqw_FlVbfsen-Z31SrDH8sMhFCkclmr6iJj7_E="
    },
    {
      title: "Event Security",
      description: "Comprehensive event security and crowd management services, ensuring safe and orderly proceedings for gatherings of any size.",
      icon: <Users className="w-8 h-8 text-primary-gold" />,
      image: "https://media.istockphoto.com/id/1296496372/photo/security-guard-are-regulating-the-situation-of-safety-in-an-event-concert-in-a-nightclub.jpg?s=612x612&w=0&k=20&c=k_tZVbwgaw1WA3_pAs8zsgx_YtqXDLz_2cDXbBkPfDI="
    },
    {
      title: "Corporate Security",
      description: "Tailored security solutions for businesses and organizations, protecting your assets, employees, and operations 24/7.",
      icon: <Building2 className="w-8 h-8 text-primary-gold" />,
      image: "https://media.istockphoto.com/id/149319961/photo/security-personnel-in-control-room.jpg?s=612x612&w=0&k=20&c=lXOemvfFzIe30AmszDan9v77MRdOTd0T2H5USq12xcU="
    },
    {
      title: "24/7 Protection",
      description: "Round-the-clock security services and monitoring, providing continuous protection and immediate response to security concerns.",
      icon: <Clock className="w-8 h-8 text-primary-gold" />,
      image: "https://media.istockphoto.com/id/1311084193/photo/a-man-with-a-beard-a-security-guard-or-a-police-officer-possibly-from-the-rescue-service-is.jpg?s=612x612&w=0&k=20&c=0fkvvAf8Ss7aUy0XQ72P1bldPAUj8f3ahAHkMjBJIN4="
    }
  ];

  return (
    <div className="bg-primary-black min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Professional Security
              <span className="block text-primary-gold mt-2">Services</span>
            </h1>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto leading-relaxed">
              Comprehensive security solutions tailored to protect what matters most to you. Our expert team delivers unmatched protection services across the Twin Cities.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-primary-black to-primary-brown/30 rounded-2xl overflow-hidden border border-primary-gold/20 hover:border-primary-gold/40 transition-all duration-500"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/50 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-black/50 rounded-lg border border-primary-gold/30">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-primary-cream ml-4">
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg text-primary-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-custom py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-cream mb-6">
            Need Professional Security Services?
          </h2>
          <p className="text-xl text-primary-cream/90 mb-12 max-w-3xl mx-auto">
            Contact us today to discuss your security needs and discover how our professional team can help protect your interests.
          </p>
          <a
            href="/contact"
            className="bg-primary-black text-primary-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-primary-brown transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;