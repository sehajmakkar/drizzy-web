import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-yellow-50 via-white to-yellow-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
          <div className="flex-1 flex justify-start items-center">
            <img 
              src="/drizzy-logo.svg" 
              alt="Drizzy Logo" 
              className="w-10 h-10 mr-2" 
              />
            <span className="text-3xl font-bold text-black bg-clip-text hover:scale-105 transition-transform cursor-pointer">
              Drizzy
            </span>
          </div>
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how">How it Works</NavLink>
            <NavLink href="#testimonials-section"> Testimonials</NavLink>
          </div>

          {/* App Store Buttons */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
            {/* <StoreButton type="apple" /> */}
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                <img src="/google-play.png" alt="Google Play" className="w-6 h-6 mr-2" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black p-2 hover:bg-yellow-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-4">
            <a href="#features" className="block px-3 py-2 text-black hover:bg-yellow-100 rounded-lg text-center">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-black hover:bg-yellow-100 rounded-lg text-center">How it Works</a>
            <a href="#contact" className="block px-3 py-2 text-black hover:bg-yellow-100 rounded-lg text-center">Contact</a>
            
            <div className="space-y-3 px-3">
              {/* <StoreButton type="apple" isMobile /> */}
              <StoreButton type="google" isMobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// NavLink component with hover animation
const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="relative text-black hover:text-yellow-600 transition-colors py-2 group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform group-hover:scale-x-100" />
  </a>
);

// Store Button component
const StoreButton = ({ type, isMobile = false }) => {
  const baseClasses = `flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 ${
    isMobile ? 'w-full justify-center' : ''
  }`;
  
  return (
    <button className={baseClasses}>
      {type === 'apple' ? (
        <>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div className="text-left">
            <div className="text-xs">Download on the</div>
            <div className="text-sm font-semibold">App Store</div>
          </div>
        </>
      ) : (
        <>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.26 3.31l5.77 3.35L4.27 12.5l6.76 5.84-5.77 3.35c-.73.43-1.66-.08-1.66-.91V4.22c0-.83.93-1.34 1.66-.91zM6 4.22v15.56L17.54 12 6 4.22zm7.76 7.78l3.77-2.19 1.66.91c.73.43.73 1.48 0 1.91l-1.66.91-3.77-2.19z"/>
          </svg>
          <div className="text-left">
            <div className="text-xs">GET IT ON</div>
            <div className="text-sm font-semibold">Google Play</div>
          </div>
        </>
      )}
    </button>
  );
};

export default Navbar;