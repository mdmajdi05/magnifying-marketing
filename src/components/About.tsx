// import React from 'react';

const stats = [
  { number: "250+", text: "Clients Served" },
  { number: "500+", text: "Projects Completed" },
  { number: "10+", text: "Years Experience" },
  { number: "30+", text: "Team Members" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-300 to-blue-500 rounded-lg opacity-20 blur-2xl"></div>
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About Webnox"
                className="w-full rounded-lg shadow-xl relative"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#00B6FF] text-white text-xl font-bold p-6 rounded-lg shadow-lg hidden md:block">
                Since 2013
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Magnifying Marketing</h2>
            <div className="w-24 h-1 bg-[#00B6FF] mb-6"></div>
            
            <p className="text-gray-600 mb-6">
  Magnifying Marketing is a results-driven digital agency, offering cutting-edge solutions in website development, SEO, social media optimization, and digital marketing to businesses worldwide.
</p>

<p className="text-gray-600 mb-8">
  With a strong focus on creativity and innovation, our team of skilled professionals is dedicated to helping businesses amplify their online presence and achieve measurable success. From enhancing website performance to crafting compelling digital strategies, we deliver solutions that make a lasting impact in today's competitive digital landscape.
</p>

            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#00B6FF] mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.text}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="px-6 py-3 bg-[#00B6FF] text-white font-medium rounded-md hover:bg-blue-600 transition-colors duration-300 text-center"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-md hover:border-[#00B6FF] hover:text-[#00B6FF] transition-colors duration-300 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;