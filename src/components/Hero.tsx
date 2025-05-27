import { useState, useEffect } from 'react';

const heroTexts = [
  "Web Design",
  "Web Development",
  "Digital Marketing",
  "SEO Services",
  "Mobile App Development"
];

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-black min-h-screen flex items-center pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-24 left-24 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Professional{" "}
              <span className={`text-[#00B6FF] inline-block transition-all duration-500 ${isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
                {heroTexts[currentTextIndex]}
              </span>
              <br />
              Agency in Delhi
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl md:mx-0 mx-auto">
              At Magnifying Marketing, we believe that digital marketing is more than just promotions—it’s about creating meaningful connections. With a team of highly skilled professionals, we bring innovative ideas, data-driven strategies, and creativity to every campaign, ensuring our clients stay ahead in the competitive digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#services"
                className="px-8 py-3 bg-[#00B6FF] text-white font-medium rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-900 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-full opacity-30 blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Agency"
                className="relative rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-white opacity-80 hover:opacity-100">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;