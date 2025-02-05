import React, { useState, useEffect } from 'react';
import { Star, Car, Calendar, Award } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentSection = document.getElementById('testimonials-section');
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Alex Thompson",
      achievement: "Passed First Try!",
      rating: 5,
      review: "Drizzy made learning to drive so easy! The booking process was smooth, and my instructor was incredibly patient. Passed my test on the first attempt!",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219988.png",
      icon: <Car className="w-5 h-5 text-yellow-500" />
    },
    {
      id: 2,
      name: "Maria Garcia",
      achievement: "Flexible Schedule",
      rating: 5,
      review: "As a busy student, I loved how easy it was to schedule lessons through the app. The reminders and progress tracking features were super helpful!",
      imageUrl: "https://freesvg.org/img/1459344336.png",
      icon: <Calendar className="w-5 h-5 text-yellow-500" />
    },
    {
      id: 3,
      name: "David Chen",
      achievement: "Confident Driver",
      rating: 5,
      review: "The structured learning approach and supportive instructors helped me overcome my driving anxiety. Now I'm a confident driver thanks to Drizzy!",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219988.png",
      icon: <Award className="w-5 h-5 text-yellow-500" />
    }
  ];

  return (
    <section 
      id="testimonials-section"
      className="px-4 py-16 bg-gradient-to-b from-yellow-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold mb-4">
            Success Stories from Our Learners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied learners who started their driving journey with Drizzy.
          </p>
        </div>

        <div className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transform transition-all duration-700 w-full max-w-md mb-6 md:mb-0 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : `translate-y-20 opacity-0 delay-${index * 200}`
              } ${
                index === 2 
                  ? 'md:col-start-1 md:col-end-3 md:justify-self-center lg:col-start-auto lg:col-end-auto' 
                  : ''
              }`}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 group-hover:border-yellow-500 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow-md">
                      {testimonial.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg group-hover:text-yellow-600 transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      {testimonial.achievement}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      className={`transform transition-all duration-300 ${
                        index < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400 group-hover:scale-110'
                          : 'text-gray-300 fill-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  "{testimonial.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;