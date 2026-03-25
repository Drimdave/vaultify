"use client";

import React from "react";
import Reveal from "./Reveal";

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={`w-5 h-5 shrink-0 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function Pricing() {
  return (
    <section className="bg-white py-24 sm:py-32 px-4 sm:px-6 relative z-10" id="pricing">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <Reveal delay={0}>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-accent-900 mb-4">
              Plans that scale with you
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-tertiary-700">
              Choose the perfect tier for your business needs.
            </p>
          </Reveal>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-6">
          
          {/* Basic Plan */}
          <Reveal delay={100} direction="up" className="h-full">
            {/* Note the larger pt-6 sm:pt-10 to create the top lip */}
            <div className="h-full bg-tertiary-100/70 pt-8 px-2 pb-2 sm:pt-10 sm:px-3 sm:pb-3 rounded-[2.5rem] transition-transform duration-500 hover:-translate-y-2">
              <div className="bg-white rounded-[2rem] h-full p-8 sm:p-10 shadow-sm ring-1 ring-tertiary-200/50 flex flex-col">
                <h3 className="text-xl font-semibold text-accent-900 mb-4">Basic</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl sm:text-6xl font-bold text-accent-900 tracking-tight">$0</span>
                  <span className="text-sm font-medium text-tertiary-600">/monthly</span>
                </div>
                <p className="text-sm text-tertiary-700 font-medium mb-8">
                  Simple, free plan with core features & support to get you started.
                </p>
                
                <button className="w-full py-3.5 px-6 rounded-xl bg-white text-accent-900 font-semibold border border-tertiary-300 hover:bg-tertiary-50 transition-colors mb-10 shadow-sm">
                  Get Started
                </button>

                <ul className="flex flex-col gap-4 mt-auto">
                  {["Free transfers", "Personalized dashboard", "24/7 support", "Tailored solutions"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-tertiary-700">
                      <CheckIcon className="text-tertiary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Pro Plan (Highlighted) */}
          <Reveal delay={200} direction="up" className="h-full">
            {/* Note the larger pt-6 sm:pt-10 to create the top lip */}
            <div className="h-full bg-primary-500 pt-8 px-2 pb-2 sm:pt-10 sm:px-3 sm:pb-3 rounded-[2.5rem] transition-transform duration-500 hover:-translate-y-2 shadow-[0_20px_40px_-15px_rgba(6,73,211,0.3)]">
              <div className="bg-white rounded-[2rem] h-full p-8 sm:p-10 shadow-xl flex flex-col relative overflow-hidden">
                
                {/* Premium Aura Mesh replicating the reference image exactly */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none opacity-80 mix-blend-multiply">
                   {/* Bright blue blob pushing down softly */}
                   <div className="absolute top-[-40px] right-[-60px] w-64 h-64 bg-blue-300 blur-[50px] rounded-full"></div>
                   {/* Pink vibrant blob crossing over in the top right */}
                   <div className="absolute top-[30px] right-[40px] w-48 h-48 bg-[#fcd4ff] blur-[50px] rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-accent-900">Pro</h3>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#f0f6ff] text-primary-600 text-xs font-bold rounded-full">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      Most Popular
                    </div>
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl sm:text-6xl font-bold text-accent-900 tracking-tight">$9</span>
                    <span className="text-sm font-medium text-tertiary-600">/monthly</span>
                  </div>
                  <p className="text-sm text-tertiary-700 font-medium mb-8">
                    Faster transfers and advanced tools for professionals who want more efficiency.
                  </p>
                  
                  {/* Glowing Blue Button exactly matching the target design */}
                  <div className="relative mb-10 group">
                    <div className="absolute -inset-1 bg-primary-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500 translate-y-2"></div>
                    <button className="relative w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold hover:from-primary-600 hover:to-primary-700 transition-colors shadow-md">
                      Choose Pro
                    </button>
                  </div>
                </div>

                <ul className="flex flex-col gap-4 mt-auto relative z-10">
                  {["Priority transfers", "Advanced analytics", "Dedicated support", "Personalized dashboard"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-tertiary-700">
                      <CheckIcon className="text-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Enterprise Plan */}
          <Reveal delay={300} direction="up" className="h-full">
            {/* Note the larger pt-6 sm:pt-10 to create the top lip */}
            <div className="h-full bg-tertiary-100/70 pt-8 px-2 pb-2 sm:pt-10 sm:px-3 sm:pb-3 rounded-[2.5rem] transition-transform duration-500 hover:-translate-y-2">
              <div className="bg-white rounded-[2rem] h-full p-8 sm:p-10 shadow-sm ring-1 ring-tertiary-200/50 flex flex-col">
                <h3 className="text-xl font-semibold text-accent-900 mb-4">Enterprise</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl sm:text-6xl font-bold text-accent-900 tracking-tight">Custom</span>
                </div>
                <p className="text-sm text-tertiary-700 font-medium mb-8 mt-1">
                  Tailored, scalable solutions, integrations & dedicated management for organizations.
                </p>
                
                <button className="w-full py-3.5 px-6 rounded-xl bg-white text-accent-900 font-semibold border border-tertiary-300 hover:bg-tertiary-50 transition-colors mb-10 shadow-sm">
                  Get Started
                </button>

                <ul className="flex flex-col gap-4 mt-auto">
                  {["API integration", "Account manager", "Contact Sales", "Tailored solutions"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-tertiary-700">
                      <CheckIcon className="text-tertiary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
