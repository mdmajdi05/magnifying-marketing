import { useState } from 'react';

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Custom, responsive websites that engage visitors and represent your brand perfectly.",
    icon: "🎨",
    details: [
      "Custom website design",
      "Responsive layouts",
      "User experience optimization",
      "Brand integration",
      "Visual identity development"
    ]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Robust, scalable web applications built with cutting-edge technologies and best practices.",
    icon: "💻",
    details: [
      "Frontend development",
      "Backend integration",
      "E-commerce solutions",
      "CMS implementation",
      "Custom web applications"
    ]
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive traffic, leads, and conversions.",
    icon: "📈",
    details: [
      "Social media marketing",
      "Content marketing",
      "Email campaigns",
      "PPC advertising",
      "Marketing automation"
    ]
  },
  {
    id: 4,
    title: "SEO Services",
    description: "Comprehensive SEO strategies to improve your search rankings and drive organic traffic.",
    icon: "🔍",
    details: [
      "Keyword research",
      "On-page optimization",
      "Technical SEO audit",
      "Link building",
      "Local SEO"
    ]
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    icon: "📱",
    details: [
      "iOS app development",
      "Android app development",
      "Cross-platform solutions",
      "App UI/UX design",
      "App maintenance & support"
    ]
  },
  {
    id: 6,
    title: "Branding",
    description: "Comprehensive branding solutions to establish and strengthen your market presence.",
    icon: "🏆",
    details: [
      "Brand strategy",
      "Logo design",
      "Brand guidelines",
      "Visual identity",
      "Brand messaging"
    ]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#00B6FF] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business grow and succeed in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="text-4xl mb-4 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-lg group-hover:bg-[#00B6FF] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className={`overflow-hidden transition-all duration-300 ${activeService === service.id ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#00B6FF] mr-2">✓</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href="#contact"
                className="text-[#00B6FF] font-medium hover:text-blue-700 inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;