'use client';

import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Multi-section Intersection Observer for active state
  useEffect(() => {
    const sections = ['home', 'features', 'pricing', 'reviews'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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

  const navLinks = [
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
  ];

  return (
    <div className="fixed top-2 sm:top-6 left-0 right-0 z-[100] flex justify-center px-4 sm:px-6 pointer-events-none">
      <header className={`pointer-events-auto px-6 py-5 md:px-12 max-w-7xl w-full flex items-center justify-between backdrop-blur-md bg-white/70 border border-white/40 shadow-sm transition-all duration-500 overflow-hidden ${isOpen ? 'rounded-[2rem] h-[380px] items-start' : 'rounded-[2rem] h-[80px] items-center'}`}>
        {/* Top segment for Logo & Hamburger */}
        <div className={`flex items-center justify-between w-full h-[40px] ${isOpen ? 'mt-0' : ''}`}>
          <a href="#home" className="flex items-center gap-1.5 group transition-transform hover:scale-105 active:scale-95">
            <span className="text-2xl font-black text-primary-600 tracking-tighter">Vaultify.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href} 
                className={`text-sm font-semibold transition-all duration-300 relative py-1 ${
                  activeSection === link.id 
                    ? 'text-primary-600' 
                    : 'text-tertiary-700 hover:text-accent-900'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full animate-in fade-in zoom-in duration-300"></span>
                )}
              </a>
            ))}
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
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href} 
                onClick={toggleMenu} 
                className={`text-2xl font-bold transition-colors ${
                  activeSection === link.id ? 'text-primary-600' : 'text-tertiary-700'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="mt-4 w-full bg-gradient-to-b from-primary-400 to-primary-600 text-white text-lg font-semibold py-4 rounded-2xl shadow-lg shadow-primary-500/20">
              Get Started
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
