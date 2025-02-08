import React from 'react';
import { Star, StarHalf, Users, Calendar } from 'lucide-react';

const InstructorCard = ({ instructor }) => {
  // Function to render stars based on decimal ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    // Add empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="w-4 h-4 fill-gray-200 text-gray-200"
        />
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Mobile Layout - Horizontal */}
      <div className="flex flex-row md:flex-col">
        {/* Image Section - Increased height */}
        <div className="w-32 h-32 md:w-full md:h-64 lg:h-72 flex-shrink-0">
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
                {renderStars(instructor.rating)}
                <span className="text-sm text-gray-500 ml-1">({instructor.rating.toFixed(1)} • {instructor.reviews})</span>
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
};

const ProfessionalDrivers = () => {
  const instructors = [
    {
      name: "Naveen Kumar",
      rating: 4.8,
      reviews: 526,
      bio: "Licensed instructor specializing in defensive driving techniques. Known for patient teaching approach.",
      experience: 12,
      studentsCount: 2650,
      image: "driver1.jpg",
    },
    {
      name: "Basti Ram",
      rating: 4.5,
      reviews: 670,
      bio: "Former Military Officer turned instructor. Expert in advanced vehicle control and emergency maneuvers.",
      experience: 15,
      studentsCount: 4390,
      image: "driver2.png",
    },
    {
      name: "Anju Sharma",
      rating: 4.6,
      reviews: 235,
      bio: "Certified master instructor with expertise in helping anxious learners build confidence.",
      experience: 8,
      studentsCount: 1875,
      image: "driver3.jpg",
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