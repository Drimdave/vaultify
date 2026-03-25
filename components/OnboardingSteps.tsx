import React from 'react';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

export default function OnboardingSteps() {
  return (
    <section className="bg-white py-24 sm:py-32 px-4 sm:px-6 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Steps Graphic Container */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start order-2 lg:order-1">
          {/* Outer Light Gray Container */}
          <div className="relative w-full max-w-xl bg-tertiary-50/50 rounded-[2.5rem] p-8 sm:p-12 flex flex-col gap-6 ring-1 ring-tertiary-200/50 z-10">
            {/* Global Dotted Connection Line (sits behind cards) */}
            <div className="absolute top-[80px] bottom-[80px] left-[64px] sm:left-[88px] w-0.5 border-l-2 border-dotted border-tertiary-300 z-0"></div>
            
            {/* Step 1 */}
            <Reveal delay={200} direction="up" className="relative z-10">
              <SpotlightCard className="bg-white group ring-1 ring-tertiary-200/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-5 sm:p-6 flex items-start gap-5 relative w-full h-full">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-50 flex items-center justify-center shrink-0 border border-primary-100/50 relative z-10">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-lg font-semibold text-accent-900 mb-1 leading-snug">Create your Account</h3>
                    <p className="text-sm sm:text-sm text-tertiary-700 font-medium">Sign up for free and verify your identity in seconds.</p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={300} direction="up" className="relative z-10">
              <SpotlightCard className="bg-white group ring-1 ring-tertiary-200/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-5 sm:p-6 flex items-start gap-5 relative w-full h-full">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100/50 relative z-10">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-lg font-semibold text-accent-900 mb-1 leading-snug">Add your funds</h3>
                    <p className="text-sm sm:text-sm text-tertiary-700 font-medium">Deposit money securely using your preferred method.</p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={400} direction="up" className="relative z-10">
              <SpotlightCard className="bg-white group ring-1 ring-tertiary-200/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-5 sm:p-6 flex items-start gap-5 relative w-full h-full">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100/50 relative z-10">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-lg font-semibold text-accent-900 mb-1 leading-snug">Transact globally</h3>
                    <p className="text-sm sm:text-sm text-tertiary-700 font-medium">Send, receive, and spend money anywhere, anytime.</p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
            
          </div>
        </div>

        {/* Right Side: Copy Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left z-10 relative order-1 lg:order-2">
          {/* Subtle background glow for copy */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary-200/30 blur-[100px] rounded-full mix-blend-multiply pointer-events-none -z-10"></div>
          
          <Reveal delay={300} direction="up">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent-900 leading-[1.05] tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-accent-900 to-tertiary-500">
              <span className="block mb-2">Simple.</span>
              <span className="block mb-2">Transparent.</span>
              <span className="block">Fast.</span>
            </h2>
          </Reveal>
          
          <Reveal delay={500} direction="up">
            <p className="text-lg sm:text-xl text-tertiary-700 font-medium max-w-md mb-10">
              Get started in under a minute with our streamlined onboarding process.
            </p>
          </Reveal>
          
          <Reveal delay={700} direction="up">
            <button className="bg-gradient-to-b from-primary-400 to-primary-600 border border-white/20 text-white text-lg font-semibold px-10 py-4 mb-10 rounded-full shadow-xl shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <span className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-xl group-hover:bg-white/30 rounded-full transition-all duration-500 translate-x-10 -translate-y-10 group-hover:-translate-x-6 group-hover:translate-y-0"></span>
              <span className="relative z-10">Open an Account</span>
            </button>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
