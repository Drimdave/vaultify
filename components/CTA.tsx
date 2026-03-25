"use client";

import React from "react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="bg-tertiary-50 py-16 sm:py-24 px-4 sm:px-6 relative z-10" id="cta">
      <div className="max-w-[85rem] mx-auto bg-primary-500 hover:bg-primary-600 transition-colors duration-500 rounded-[2rem] sm:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center relative shadow-2xl shadow-primary-500/20">
        
        {/* Left Content */}
        <div className="w-full lg:w-7/12 p-6 sm:p-12 lg:p-20 z-10 relative flex flex-col">
          <Reveal delay={0} direction="up">
            <h2 className="text-3xl sm:text-5xl lg:text-[4rem] font-semibold text-white tracking-tight mb-4 sm:mb-6 leading-[1.05]">
              Join 2 million people<br className="hidden sm:block" /> who moved smarter.
            </h2>
            <p className="text-primary-100 text-base sm:text-xl mb-8 sm:mb-10 max-w-md font-medium leading-relaxed">
              Start your journey toward zero-fees banking today. No credit check required to get started
            </p>
          </Reveal>
          
          <Reveal delay={100} direction="up">
            <div className="flex flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-16">
              <button className="bg-white text-primary-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-50 transition-colors shadow-lg shadow-white/10 whitespace-nowrap">
                Download App
              </button>
              <button className="bg-transparent border-[1.5px] border-white/30 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors whitespace-nowrap">
                Learn More
              </button>
            </div>
          </Reveal>

          <Reveal delay={200} direction="up">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=4" alt="User 1" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-primary-500 z-30 object-cover" />
                <img src="https://i.pravatar.cc/100?img=5" alt="User 2" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-primary-500 z-20 object-cover" />
                <img src="https://i.pravatar.cc/100?img=6" alt="User 3" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-primary-500 z-10 object-cover" />
              </div>
              <p className="text-primary-100 text-sm sm:text-base font-medium">
                24,000+ new users joined this week
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Image - visible on all breakpoints */}
        <div className="w-full lg:w-5/12 relative h-[250px] sm:h-[350px] lg:h-auto lg:self-stretch overflow-hidden z-0">
          <img 
            src="/vaultify-hero.png" 
            alt="Vaultify Dashboard on Phone" 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 w-[90%] sm:w-[80%] lg:w-[130%] max-w-none object-contain object-bottom"
          />
        </div>

      </div>
    </section>
  );
}
