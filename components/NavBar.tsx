'use client';

import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-2 sm:top-6 left-0 right-0 z-[100] flex justify-center px-4 sm:px-6 pointer-events-none">
      <header className={`pointer-events-auto px-6 py-5 md:px-12 max-w-7xl w-full flex items-center justify-between backdrop-blur-md bg-white/70 border border-white/40 shadow-sm transition-all duration-500 overflow-hidden ${isOpen ? 'rounded-[2rem] h-[380px] items-start' : 'rounded-[2rem] h-[80px] items-center'}`}>
        {/* Top segment for Logo & Hamburger */}
        <div className={`flex items-center justify-between w-full h-[40px] ${isOpen ? 'mt-0' : ''}`}>
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-black text-primary-600 tracking-tighter">Vaultify.</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <a href="#features" className="text-sm font-medium text-tertiary-700 hover:text-accent-900 transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-tertiary-700 hover:text-accent-900 transition-colors">Pricing</a>
            <a href="#reviews" className="text-sm font-medium text-tertiary-700 hover:text-accent-900 transition-colors">Reviews</a>
          </nav>

          <div className="flex items-center">
            <button className="hidden md:block bg-gradient-to-b from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-primary-500/30 shadow-lg transition-all transform hover:-translate-y-0.5 border border-primary-300/30">
              Get Started
            </button>
            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-tertiary-700 hover:text-accent-900 transition-colors cursor-pointer outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation List (Visible when open) */}
        {isOpen && (
          <div className="md:hidden absolute top-[100px] left-0 right-0 px-8 pb-10 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <a href="#features" onClick={toggleMenu} className="text-2xl font-semibold text-tertiary-700 hover:text-primary-600 transition-colors">Features</a>
            <a href="#pricing" onClick={toggleMenu} className="text-2xl font-semibold text-tertiary-700 hover:text-primary-600 transition-colors">Pricing</a>
            <a href="#reviews" onClick={toggleMenu} className="text-2xl font-semibold text-tertiary-700 hover:text-primary-600 transition-colors">Reviews</a>
            <button className="mt-4 w-full bg-gradient-to-b from-primary-400 to-primary-600 text-white text-lg font-semibold py-4 rounded-2xl shadow-lg shadow-primary-500/20">
              Get Started
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
