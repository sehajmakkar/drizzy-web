import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I book my first driving lesson?",
      answer: "Booking your first lesson is simple! Download the Drizzy app from the App Store or Google Play, create an account, and choose your preferred time slot and instructor. You can also specify your pickup location and any specific learning requirements. We'll confirm your booking instantly!"
    },
    {
      id: 2,
      question: "What documents do I need before starting lessons?",
      answer: "You'll need a valid provisional driving license before your first lesson. We recommend uploading this to the app during registration. You don't need to bring any physical documents to your lessons as everything is stored securely in the app."
    },
    {
      id: 3,
      question: "How much does each lesson cost and what payment methods are accepted?",
      answer: "Our lesson prices start from £30 per hour, with discounts available when you book packages. We accept all major credit/debit cards, Apple Pay, and Google Pay through our secure payment system in the app. You can view all pricing options and special offers directly in the app."
    },
    {
      id: 4,
      question: "Can I change my instructor or reschedule my lessons?",
      answer: "Yes, absolutely! You can reschedule any lesson up to 24 hours before the scheduled time through the app at no extra cost. If you'd like to change instructors, you can do this in the app or contact our support team who will help match you with someone new."
    },
    {
      id: 5,
      question: "How many lessons will I need before taking my test?",
      answer: "The number of lessons varies per individual, but on average, learners need between 40-50 hours of practice. The Drizzy app tracks your progress and provides estimates based on your learning speed. Your instructor will also give you regular feedback and recommendations through the app."
    }
  ];

  const [openId, setOpenId] = useState(null);

  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Everything you need to know about getting started with Drizzy
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:bg-gray-50/80 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a 
              href="#contact" 
              className="text-yellow-600 hover:text-yellow-700 font-medium underline decoration-2 decoration-yellow-200 hover:decoration-yellow-400 transition-colors"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;