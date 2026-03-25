import React from 'react';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 sm:pt-44 pb-0 max-w-7xl mx-auto w-full px-4 sm:px-6" id="home">
      <div className="flex flex-col items-center text-center max-w-[900px] w-full mx-auto space-y-6 sm:space-y-8 relative z-20">
        <Reveal delay={100} direction="up">
          {/* Main Headline styled like the image */}
          <h1 className="text-[3rem] sm:text-[4rem] lg:text-[7.5rem] leading-[0.95] tracking-tighter font-semibold">
            <span className="block text-accent-900">Your Money.</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400">
              No Middlemen.
            </span>
            <span className="block text-accent-900">No Delays.</span>
          </h1>
        </Reveal>

        <Reveal delay={200} direction="up">
          {/* Sub-headline */}
          <p className="text-base sm:text-lg lg:text-xl text-tertiary-700 max-w-[640px] mx-auto font-medium leading-relaxed tracking-tight">
            Send, receive, and manage your finances with military-grade security technology and join the fastest-growing financial ecosystem.
          </p>
        </Reveal>

        <Reveal delay={300} direction="up">
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-gradient-to-b from-primary-400 to-primary-600 text-white text-[15px] font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all hover:-translate-y-1 border border-white/10 relative overflow-hidden group">
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative">Get the App</span>
            </button>
            <button className="w-full sm:w-auto bg-white/80 backdrop-blur-md text-accent-900 text-[15px] font-semibold px-8 py-3.5 rounded-full shadow-sm shadow-tertiary-300/30 border border-tertiary-300 hover:bg-white transition-all hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={400} direction="up" className="w-full">
        {/* Premium Device Mockup using User Provided Image */}
        <div className="w-full mt-10 sm:mt-12 relative max-w-6xl mx-auto px-4 z-10 flex justify-center">
          <img
            src="/vaultify-hero.png"
            alt="Vaultify Financial App"
            className="w-[110%] sm:w-[95%] md:w-[90%] lg:w-[85%] max-w-[1200px] h-auto object-contain drop-shadow-[0_40px_80px_rgba(12,81,226,0.2)]"
            style={{
              transformOrigin: 'bottom center',
            }}
          />
        </div>
      </Reveal>
    </main>
  );
}
