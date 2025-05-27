import React from 'react';

const processes = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements."
  },
  {
    step: "02",
    title: "Strategy",
    description: "Based on our findings, we develop a strategic plan tailored to your specific needs and objectives."
  },
  {
    step: "03",
    title: "Design",
    description: "Our creative team designs visually appealing interfaces that align with your brand identity."
  },
  {
    step: "04",
    title: "Development",
    description: "We build robust, scalable solutions using the latest technologies and best practices."
  },
  {
    step: "05",
    title: "Testing",
    description: "Rigorous testing ensures your product functions flawlessly across all devices and browsers."
  },
  {
    step: "06",
    title: "Launch",
    description: "We deploy your project and provide ongoing support to ensure continued success."
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <div className="w-24 h-1 bg-[#00B6FF] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a systematic approach to ensure the successful delivery of every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:bg-white group"
            >
              <div className="text-5xl font-bold text-gray-200 group-hover:text-[#00B6FF] transition-colors duration-300 mb-4">
                {process.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;