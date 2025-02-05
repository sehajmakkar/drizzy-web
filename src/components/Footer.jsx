import React from 'react';
import { Phone, Mail, MapPin, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Driving Made Easy Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Driving Made Easy
            </h3>
            <p className="flex items-center gap-2 text-lg font-semibold">
              <Download className="w-5 h-5" />
              Download Drizzy Now!!
            </p>
            <div className="flex space-x-4">
              {/* <button className="bg-white/10 hover:bg-white/20 transition-colors duration-300 p-3 rounded-lg">
                <img
                  src="/api/placeholder/120/40"
                  alt="App Store"
                  className="h-8"
                />
              </button> */}
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                <img src="/google-play.png" alt="Google Play" className="w-6 h-6 mr-2" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Explore Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Explore</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms and Conditions', href: '/terms' },
                { name: 'Refund and Cancellation', href: '/refund' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-yellow-400 transition-colors duration-300 inline-block relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a href="tel:+917042009908" className="hover:text-yellow-400 transition-colors duration-300">
                  +91 70420 09908
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a href="mailto:drizzy.gosafe@gmail.com" className="hover:text-yellow-400 transition-colors duration-300">
                  drizzy.gosafe@gmail.com
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <address className="not-italic">
                  57A, Pocket A11<br />
                  Kalkaji, Delhi - 110019
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © 2025 Drizzy. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Mobile App Bar - Fixed at Bottom */}
      {/* <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
        <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
          <Download className="w-5 h-5" />
          Download Drizzy
        </button>
      </div> */}
    </footer>
  );
};

export default Footer;