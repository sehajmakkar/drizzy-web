import React from 'react';
import { Download, Calendar, Car } from 'lucide-react';

const How = () => {
  const steps = [
    {
      number: "01",
      icon: <Download className="w-8 h-8" />,
      title: "Download the App",
      description: "Get started by downloading the Drizzy app from App Store or Google Play Store. Create your profile in minutes and verify your details to begin your journey."
    },
    {
      number: "02",
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Lessons",
      description: "Browse through our certified instructors, read reviews, and book lessons that fit your schedule. Choose from flexible time slots and customize your learning path."
    },
    {
      number: "03",
      icon: <Car className="w-8 h-8" />,
      title: "Start Learning",
      description: "Meet your instructor and start your practical lessons. Track your progress, get real-time feedback, and practice until you're ready for your driving test."
    }
  ];

  return (
    <div id="how" className="relative bg-slate-900">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>

      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-white">How Drizzy Works</h2>
          <p className="text-slate-300 text-center mb-20 max-w-2xl mx-auto text-lg">
            Get started with Drizzy in three simple steps
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* iPhone Mockup - Centered on Mobile and Tablet */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:border-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 dark:border-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                  <video 
                    src="./demo-drizzy.mp4" 
                    className="w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ playbackRate: 0.25 }}
                    onLoadedMetadata={(e) => {
                      e.target.playbackRate = 0.25;
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Steps - Now Larger */}
            <div className="w-full lg:w-3/5 space-y-12 relative">
              {/* Connecting Line */}
              <div className="absolute left-[60px] top-[100px] w-1 h-[calc(100%-140px)] bg-yellow-400 hidden lg:block"></div>

              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-10 relative group">
                  {/* Number and Icon Circle */}
                  <div className="flex-shrink-0 w-32 h-32 rounded-full bg-yellow-400 flex flex-col items-center justify-center z-10 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <span className="text-sm font-bold">{step.number}</span>
                    <div className="text-black mt-2">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content - Enhanced Size */}
                  <div className="flex-grow pt-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default How;