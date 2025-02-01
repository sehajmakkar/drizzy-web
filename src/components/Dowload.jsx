import React from 'react';
import { Check } from 'lucide-react';

const DownloadSection = () => {
  const features = [
    "Learn from certified instructors",
    "Flexible scheduling that fits your lifestyle",
    "Track your progress in real-time",
    "Practice tests and learning materials"
  ];

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24">
          {/* Phone Mockups - Adjusted width and positioning */}
          <div className="w-full md:w-2/5 relative min-h-[600px] flex items-center">
            {/* Center Phone */}
            <div className="relative mx-auto w-[240px] transform translate-x-4 z-20">
              <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[260px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -right-[17px] top-[124px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
                  <img src="/api/placeholder/272/572" alt="App Preview 1" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Left Phone - Smaller & Behind */}
            <div className="absolute top-20 left-0 w-[200px] transform -rotate-12 scale-75 opacity-75 z-10 hidden md:block">
              <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[260px] shadow-xl">
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
                  <img src="/api/placeholder/272/572" alt="App Preview 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Right Phone - Smaller & Behind */}
            <div className="absolute top-20 right-0 w-[200px] transform rotate-12 scale-75 opacity-75 z-10 hidden md:block">
              <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[260px] shadow-xl">
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
                  <img src="/api/placeholder/272/572" alt="App Preview 3" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Content - Adjusted width and added padding */}
          <div className="w-full md:w-3/5 text-center md:text-left z-30">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Download Drizzy Today
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Start your journey to becoming a confident driver with personalized lessons and expert instruction.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Google Play Button */}
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                <img src="/api/placeholder/24/24" alt="Google Play" className="w-6 h-6 mr-2" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>

              {/* App Store Button */}
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                <img src="/api/placeholder/24/24" alt="App Store" className="w-6 h-6 mr-2" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;