import React from 'react';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

export default function TrustIndicators() {
  return (
    <section className="bg-white py-24 sm:py-32 px-4 sm:px-6 relative z-20 border-t border-tertiary-200">

      {/* Deep Ambient Background Glow */}
      <div className="absolute top-[40%] right-[10%] w-[60%] h-[60%] bg-primary-100/60 blur-[130px] rounded-full mix-blend-multiply pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-center">

            {/* Heading */}
            <Reveal delay={100} direction="up">
              <div className="mb-10 sm:mb-14">
                <h2 className="text-4xl sm:text-6xl lg:text-[64px] leading-[1.05] font-semibold tracking-tight text-tertiary-400">
                  Reliability you can <br />
                  <span className="text-accent-900 drop-shadow-sm">Count on, every</span> <br />
                  <span className="text-accent-900 drop-shadow-sm">second.</span>
                </h2>
              </div>
            </Reveal>

            {/* 2M+ Users Card */}
            <Reveal delay={200} direction="up">
              <SpotlightCard className="bg-white/70 backdrop-blur-xl border border-white/60 mb-10 ring-1 ring-accent-900/5 w-full sm:w-max">
                <div className="p-6 sm:p-8 sm:pr-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 h-full w-full">
                  <div className="flex -space-x-4 sm:-space-x-5">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[3px] border-white bg-gradient-to-tr from-primary-400 to-primary-600 shadow-md transform -rotate-6"></div>
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-[3px] border-white bg-gradient-to-tr from-secondary-400 to-secondary-500 shadow-md"></div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[3px] border-white bg-gradient-to-tr from-tertiary-400 to-tertiary-600 shadow-md transform translate-y-2"></div>
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-[3px] border-white bg-gradient-to-tr from-primary-300 to-primary-400 shadow-lg z-10"></div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[3px] border-white bg-gradient-to-tr from-accent-800 to-accent-900 shadow-md transform -translate-y-1"></div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-5xl sm:text-6xl font-medium tracking-tighter text-accent-900">2M<span className="text-4xl font-bold">+</span></h3>
                    <p className="text-base font-medium text-tertiary-700 mt-1">Active Users</p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Subtext */}
            <Reveal delay={300} direction="up">
              <p className="text-tertiary-700 text-base sm:text-lg max-w-md mb-8 sm:mb-10 font-medium">
                Our features sets us apart. For every transaction, there is a reassurance.
              </p>
            </Reveal>

            {/* Bottom Cards row */}
            <div className="grid grid-cols-2 gap-5 sm:gap-8 max-w-xl">
              <Reveal delay={400} direction="up" className="h-full">
                <SpotlightCard className="bg-white/70 backdrop-blur-xl border border-white/60 h-full ring-1 ring-accent-900/5">
                  <div className="p-6 sm:p-8 h-full flex flex-col items-center justify-center">
                    <h3 className="text-4xl sm:text-6xl font-medium tracking-tighter text-accent-900 mb-3">99.99<span className="text-2xl sm:text-3xl text-tertiary-400 font-semibold">%</span></h3>
                    <p className="text-base font-medium text-tertiary-700">Total Product Uptime</p>
                  </div>
                </SpotlightCard>
              </Reveal>

              <Reveal delay={500} direction="up" className="h-full">
                <SpotlightCard className="bg-white/70 backdrop-blur-xl border border-white/60 h-full ring-1 ring-accent-900/5">
                  <div className="p-6 sm:p-8 h-full flex flex-col items-center justify-center">
                    <h3 className="text-4xl sm:text-6xl font-medium tracking-tighter text-accent-900 mb-3">150<span className="text-3xl sm:text-4xl tracking-tighter font-semibold">+</span></h3>
                    <p className="text-base font-medium text-tertiary-700">Total Currencies</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>
          </div>

          {/* Right Column (Blue Card) */}
          <div className="lg:w-[45%] flex flex-col justify-between">
            <Reveal delay={400} direction="left">
              <p className="text-tertiary-700 text-base sm:text-lg font-medium mb-8 lg:mb-0 max-w-[300px] ml-auto lg:text-right">
                We certainly have perform beyond your expectations
              </p>
            </Reveal>

            <Reveal delay={500} direction="left" className="flex-1 mt-6 lg:mt-8 flex flex-col">
              <SpotlightCard
                className="bg-gradient-to-b from-primary-400 to-primary-600 border border-white/20 text-white min-h-[580px] sm:min-h-[600px] relative flex-1 shadow-2xl shadow-primary-500/30"
                spotlightColor="rgba(255,255,255,0.2)"
              >
                <div className="flex flex-col pt-10 pb-8 px-8 sm:pt-14 sm:px-14 sm:pb-8 min-h-[580px] sm:min-h-[600px] relative">
                  <p className="text-lg sm:text-xl/snug font-medium max-w-[320px] relative z-10 text-white/90">
                    We have active users with incredible uptime across the world's continent
                  </p>

                  <div className="flex-1"></div>

                  {/* Decorative Line Graph */}
                  <div className="absolute inset-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 px-0">
                    <svg width="100%" height="300" viewBox="0 0 400 250" fill="none" preserveAspectRatio="none">
                      <path d="M-20 150 C 30 150, 60 200, 100 200 C 140 200, 150 40, 180 40 C 210 40, 230 160, 260 160 C 290 160, 310 100, 340 100 C 380 100, 400 180, 440 180" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                      <path d="M-20 160 C 30 160, 60 210, 100 210 C 140 210, 150 50, 180 50 C 210 50, 230 170, 260 170 C 290 170, 310 110, 340 110 C 380 110, 400 190, 440 190" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-[72px] sm:text-[96px] leading-none font-semibold tracking-tighter mb-2 relative inline-block drop-shadow-lg">
                      50<span className="text-5xl text-white/80 absolute -top-2 ml-2">+</span>
                    </h3>
                    <p className="text-2xl sm:text-3xl font-medium text-white/90">Countries</p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
