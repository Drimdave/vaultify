"use client";

import React from "react";
import Reveal from "./Reveal";

export default function Footer() {
  // Use current year dynamically as requested
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white rounded-t-[2rem] sm:rounded-t-[4rem] pt-16 sm:pt-24 pb-0 px-4 sm:px-6 relative z-10 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.02)] border-t border-tertiary-100/50 mt-12 sm:mt-24">
      <div className="max-w-[85rem] mx-auto relative z-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-16 lg:gap-8 mb-16 sm:mb-20 lg:mb-32 pl-4 sm:pl-8">

          {/* Logo & Description */}
          <div className="w-full lg:w-5/12">
            <Reveal delay={0} direction="up">
              <span className="text-3xl font-bold tracking-tighter text-primary-600 block mb-8">
                Vaultify.
              </span>
              <p className="text-tertiary-600 text-base sm:text-[17px] leading-relaxed max-w-sm font-medium">
                Precision engineered banking for the digital age. Secure your future with the world's most advanced financial ecosystem.
              </p>
            </Reveal>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-6/12 grid grid-cols-3 sm:flex sm:flex-nowrap justify-between gap-6 sm:gap-4 pr-0 sm:pr-12 lg:pr-24">
            {/* Product */}
            <Reveal delay={100} direction="up" className="sm:w-1/3">
              <h4 className="text-accent-900 font-bold mb-6 text-[17px]">Product</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-tertiary-600 hover:text-primary-500 transition-colors font-medium text-[15px]">Features</a></li>
                <li><a href="#" className="text-tertiary-600 hover:text-primary-500 transition-colors font-medium text-[15px]">Pricing</a></li>
                <li><a href="#" className="text-tertiary-600 hover:text-primary-500 transition-colors font-medium text-[15px]">Security</a></li>
              </ul>
            </Reveal>

            {/* Company */}
            <Reveal delay={150} direction="up" className="sm:w-1/3">
              <h4 className="text-accent-900 font-bold mb-6 text-[17px]">Company</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-tertiary-600 hover:text-primary-500 transition-colors font-medium text-[15px]">Privacy</a></li>
                <li><a href="#" className="text-tertiary-600 hover:text-primary-500 transition-colors font-medium text-[15px]">Terms</a></li>
                <li><a href="#" className="text-tertiary-600 hover:text-primary-500 transition-colors font-medium text-[15px]">Support</a></li>
              </ul>
            </Reveal>

            {/* Connect */}
            <Reveal delay={200} direction="up" className="sm:w-1/3">
              <h4 className="text-accent-900 font-bold mb-6 text-[17px]">Connect</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-tertiary-600 hover:text-primary-500 transition-colors font-medium text-[15px]">Twitter</a></li>
                <li><a href="#" className="text-tertiary-600 hover:text-primary-500 transition-colors font-medium text-[15px]">LinkedIn</a></li>
                <li><a href="#" className="text-tertiary-600 hover:text-primary-500 transition-colors font-medium text-[15px]">Instagram</a></li>
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-tertiary-200/60 mb-8 sm:mb-12 max-w-[85rem] mx-auto"></div>

        {/* Copyright */}
        <Reveal delay={300} direction="up" className="pl-4 sm:pl-8">
          <p className="text-tertiary-600 text-[15px] font-medium tracking-tight">
            <span className="text-tertiary-700">© {currentYear} Vaultify Inc. All Rights Reserved.</span> Powered by Drimdave.
          </p>
        </Reveal>

      </div>

      {/* Massive Background Text overlaid at the very bottom */}
      <Reveal delay={400} direction="up" className="w-full flex justify-center mt-8 sm:mt-12 pointer-events-none select-none relative z-0">
        <span
          className="inline-block text-[22vw] sm:text-[18vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#A5C0FF] to-white/10 pb-4"
        >
          Vaultify.
        </span>
      </Reveal>
    </footer>
  );
}
