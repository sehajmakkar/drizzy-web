import React from 'react';
import { Car, Shield, Book, Clock, CheckCircle, Users } from 'lucide-react';

const features = [
  { 
    icon: <Car className="w-12 h-12" />, 
    title: "Flexible Scheduling", 
    description: "Book lessons that fit your schedule. Choose from morning, afternoon, or evening slots with real-time instructor availability."
  },
  { 
    icon: <Shield className="w-12 h-12" />, 
    title: "Licensed Instructors", 
    description: "Learn from certified professionals with years of experience and perfect safety records. All instructors are background checked."
  },
  { 
    icon: <Book className="w-12 h-12" />, 
    title: "Custom Learning Plans", 
    description: "Get a personalized curriculum tailored to your skill level and learning pace. Track your progress with detailed feedback."
  },
  { 
    icon: <Clock className="w-12 h-12" />, 
    title: "On-Time Guarantee", 
    description: "We value your time. If your instructor is late, you get extra lesson time or a partial refund - guaranteed."
  },
  { 
    icon: <CheckCircle className="w-12 h-12" />, 
    title: "Test Preparation", 
    description: "Comprehensive preparation for your driving test, including mock tests and detailed feedback on your performance."
  },
  { 
    icon: <Users className="w-12 h-12" />, 
    title: "Community Support", 
    description: "Join our community of learners. Share experiences, get tips, and connect with other students in your area."
  }
];

const WhyDrizzy = () => {
  return (
    <section id="features" className="bg-gray-50 pt-5 mb-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Drizzy</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experience the future of driver education with our comprehensive learning platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-yellow-50"
            >
              <div className="text-black bg-amber-300 w-14 p-1 rounded-lg mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black group-hover:text-yellow-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDrizzy;