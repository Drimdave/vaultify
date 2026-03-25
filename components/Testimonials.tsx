"use client";

import React from "react";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote: "The system is reliable, Adaptable, and easy to adopt, even for individuals who are not familiar with similar platforms or modern tools.",
    name: "Daniella Hassan",
    role: "Freelancer",
    avatar: "https://i.pravatar.cc/150?u=daniella",
    hasQuoteMark: false,
  },
  {
    quote: "The system is reliable, Adaptable, and easy to adopt, even for individuals who are not familiar with similar platforms or modern tools.",
    name: "Demola Basiru",
    role: "Business Man",
    avatar: "https://i.pravatar.cc/150?u=demola",
    hasQuoteMark: true,
  },
  {
    quote: "Using Vaultify simplified expenses for me, at least it's faster than using traditional banks that delay everything.",
    name: "Nathan Kanu",
    role: "Business Man",
    avatar: "https://i.pravatar.cc/150?u=nathan",
    hasQuoteMark: true,
  },
  {
    quote: "The system is reliable, Adaptable, and easy to adopt, even for individuals who are not familiar with similar platforms or modern tools.",
    name: "Sarah Jenkins",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    hasQuoteMark: false,
  },
];

// Separate the original array for mathematically perfect loops
const col1Items = [...testimonials];
// Offset column 2 slightly so adjacent cards aren't identical
const col2Items = [testimonials[2], testimonials[3], testimonials[0], testimonials[1]];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative z-10" id="testimonials">
      <div className="max-w-[85rem] mx-auto bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-16 lg:p-20 shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-tertiary-100 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-24 items-center h-full overflow-hidden relative">
        
        {/* Left Side: Sticky Headers and Stats */}
        <div className="w-full lg:w-5/12 flex flex-col z-10 bg-white lg:bg-transparent pb-8 lg:pb-0">
          <Reveal delay={0} direction="up">
            <svg 
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-primary-500 mb-4 sm:mb-6 drop-shadow-sm" 
              viewBox="0 0 448 512" 
              fill="currentColor"
            >
              <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z" />
            </svg>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-accent-900 mb-4 sm:mb-6 leading-[1.05]">
              What our users<br className="hidden md:block" /> are saying
            </h2>
            <p className="text-base sm:text-xl text-tertiary-600 font-medium mb-10 sm:mb-16 leading-relaxed max-w-sm">
              Discover how our service makes a difference for users worldwide.
            </p>
          </Reveal>

          <Reveal delay={200} direction="up">
            <div className="flex items-center gap-8 sm:gap-14">
              {/* Stat 1 */}
              <div>
                <h4 className="text-4xl sm:text-6xl font-medium text-tertiary-800 tracking-tight mb-2">2M+</h4>
                <p className="text-tertiary-600 text-sm font-medium">Satisfied Users</p>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-4xl sm:text-6xl font-medium text-tertiary-800 tracking-tight">4.8</h4>
                  <svg className="w-8 h-8 text-[#facc15] mt-2 shrink-0 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <p className="text-tertiary-600 text-sm font-medium">Apple Store Ratings</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Infinite Marquee Grid */}
        <div className="w-full lg:w-7/12 h-[450px] sm:h-[600px] lg:h-[700px] relative">
          {/* Vertical Fade Masks */}
          <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-20 sm:h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>

          <div className="flex gap-3 sm:gap-6 h-full overflow-hidden px-1 sm:px-2 relative py-4">
            
            {/* Column 1: Scrolls Up (-50% translation) */}
            <div className="w-full sm:w-1/2 flex flex-col animate-marquee-up relative">
              {/* Block A */}
              <div className="flex flex-col gap-4 sm:gap-6 pb-4 sm:pb-6">
                {col1Items.map((item, idx) => <TestimonialCard key={`c1a-${idx}`} item={item} />)}
              </div>
              {/* Block B identical copy */}
              <div className="flex flex-col gap-4 sm:gap-6 pb-4 sm:pb-6" aria-hidden="true">
                {col1Items.map((item, idx) => <TestimonialCard key={`c1b-${idx}`} item={item} />)}
              </div>
            </div>

            {/* Column 2: Scrolls Down (+50% translation... wait, down goes from -50% to 0) */}
            <div className="hidden sm:flex w-1/2 flex-col animate-marquee-down relative">
              {/* Block A */}
              <div className="flex flex-col gap-4 sm:gap-6 pb-4 sm:pb-6">
                {col2Items.map((item, idx) => <TestimonialCard key={`c2a-${idx}`} item={item} />)}
              </div>
              {/* Block B identical copy */}
              <div className="flex flex-col gap-4 sm:gap-6 pb-4 sm:pb-6" aria-hidden="true">
                {col2Items.map((item, idx) => <TestimonialCard key={`c2b-${idx}`} item={item} />)}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: typeof testimonials[0] }) {
  return (
    <div className="bg-tertiary-50/50 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] w-full flex-shrink-0 flex flex-col justify-between hover:bg-tertiary-100/50 transition-colors duration-300">
      <div className="mb-8">
        {item.hasQuoteMark && (
          <svg className="w-8 h-8 text-primary-400 mb-6 drop-shadow-sm" viewBox="0 0 448 512" fill="currentColor">
            <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v136zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H32c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v136z" />
          </svg>
        )}
        <p className="text-base sm:text-[17px] text-tertiary-800 font-medium leading-relaxed tracking-tight">
          {item.quote}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover shadow-sm bg-tertiary-200"
          loading="lazy"
        />
        <div className="flex flex-col">
          <h5 className="text-[13px] font-bold text-accent-900 leading-tight">{item.name}</h5>
          <p className="text-[11px] font-medium text-tertiary-500 leading-tight">{item.role}</p>
        </div>
      </div>
    </div>
  );
}
