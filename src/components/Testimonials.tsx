import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO, Tech Innovations",
    content: "Webnox delivered an exceptional website that perfectly aligned with our brand vision. Their team was professional, responsive, and went above and beyond to ensure our satisfaction.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Marketing Director, Retail Solutions",
    content: "The digital marketing campaign developed by Webnox exceeded our expectations. We saw a significant increase in our online presence and a measurable boost in conversions. Highly recommended!",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Michael Davis",
    position: "Founder, Creative Studios",
    content: "Working with Webnox has been a game-changer for our business. Their SEO services helped us rank higher in search results, driving more organic traffic to our website. We're extremely satisfied with the results.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = window.setInterval(() => {
      goToNext();
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-[#00B6FF] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative"
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-full border-4 border-[#00B6FF]"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-[#00B6FF] text-2xl mb-4">❝</div>
                        <p className="text-gray-600 italic mb-6">{testimonial.content}</p>
                        <div className="text-[#00B6FF] text-2xl text-right">❞</div>
                        <div className="mt-4">
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-[#00B6FF] hover:text-white transition-colors duration-300 focus:outline-none z-10"
            onClick={goToPrev}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-[#00B6FF] hover:text-white transition-colors duration-300 focus:outline-none z-10"
            onClick={goToNext}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-[#00B6FF]" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;