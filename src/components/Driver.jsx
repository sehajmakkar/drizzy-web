import React from 'react';
import { Star, Users, Calendar } from 'lucide-react';

const InstructorCard = ({ instructor }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    {/* Mobile Layout - Horizontal */}
    <div className="flex flex-row md:flex-col">
      {/* Image Section */}
      <div className="w-24 h-24 md:w-full md:h-48 flex-shrink-0">
        <img 
          src={instructor.image}
          alt={instructor.name}
          className="w-full h-full rounded-full md:rounded-none object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className="flex-1 flex flex-col">
        {/* Name and Rating - Mobile */}
        <div className="p-4 md:px-6">
          <div className="flex flex-col md:text-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-900">{instructor.name}</h3>
            <div className="flex items-center gap-1 mt-1 md:justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < instructor.rating ? 'fill-yellow-400' : 'fill-gray-400'}`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-1">({instructor.reviews})</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-2 md:text-center">{instructor.bio}</p>
        </div>
        
        {/* Stats Section */}
        <div className="px-4 pb-4 md:px-6 mt-auto">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 md:justify-center">
              <Calendar className="w-4 h-4 text-yellow-500" />
              <div>
                <p className="text-xs text-gray-500">Experience</p>
                <p className="text-sm font-semibold">{instructor.experience} Years</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:justify-center">
              <Users className="w-4 h-4 text-yellow-500" />
              <div>
                <p className="text-xs text-gray-500">Students</p>
                <p className="text-sm font-semibold">{instructor.studentsCount}+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProfessionalDrivers = () => {
  const instructors = [
    {
      name: "Sarah Johnson",
      rating: 5,
      reviews: 128,
      bio: "Licensed instructor specializing in defensive driving techniques. Known for patient teaching approach.",
      experience: 12,
      studentsCount: 450,
      image: "https://cdn-icons-png.flaticon.com/512/219/219988.png",
    },
    {
      name: "Michael Chen",
      rating: 4,
      reviews: 96,
      bio: "Former race car driver turned instructor. Expert in advanced vehicle control and emergency maneuvers.",
      experience: 8,
      studentsCount: 320,
      image: "https://cdn-icons-png.flaticon.com/512/219/219988.png",
    },
    {
      name: "David Williams",
      rating: 5,
      reviews: 156,
      bio: "Certified master instructor with expertise in helping anxious learners build confidence.",
      experience: 15,
      studentsCount: 600,
      image: "https://cdn-icons-png.flaticon.com/512/219/219988.png",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Learn from the Best</h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            Our professional instructors bring years of experience to help you become a confident driver
          </p>
        </div>

        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className={`${index === 2 ? 'md:col-span-2 lg:col-span-1 md:justify-self-center' : ''}`}>
              <InstructorCard instructor={instructor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDrivers;