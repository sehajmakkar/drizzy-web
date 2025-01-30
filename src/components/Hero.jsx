import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 lg:py-32">
          {/* Left Section */}
          <section className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
              Learn to Drive
              <span className="text-yellow-500"> Easily</span>
            </h1>
            <p className="text-gray-700 text-lg lg:text-xl mb-8 max-w-xl">
              Book your driving lessons with certified instructors in just a few clicks. 
              Start your journey to becoming a confident driver today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-600 transition-colors">
                Book a Lesson
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-colors">
                Download App
              </button>
            </div>
          </section>

          {/* Right Section */}
          <section className="flex-1 w-full h-[500px] lg:h-[600px]">
            <Spline 
              scene="https://prod.spline.design/ajpsOalO8qtyewsG/scene.splinecode"
              className="w-full h-full"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;