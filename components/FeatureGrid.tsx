import React from 'react';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

export default function FeatureGrid() {
  return (
    <section className="bg-white py-24 sm:py-32 px-4 sm:px-6 relative z-20" id="features">

      {/* Deep Ambient Background Glow for the whole section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-200/40 blur-[150px] rounded-full mix-blend-multiply pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <Reveal delay={0}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-accent-900 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-accent-900 to-tertiary-700">
            Precision Financial Tools
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-lg sm:text-xl text-tertiary-700 font-medium max-w-2xl mx-auto">
            Experience a banking suite designed for speed, security, and growth.
          </p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto bg-primary-50/50 backdrop-blur-3xl rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 relative z-10 border border-white/60 shadow-[0_20px_80px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <Reveal delay={200} direction="up" className="h-[280px]">
              {/* AI Spending Insight - Small */}
              <SpotlightCard className="bg-white/70 group h-full">
                <div className="p-8 flex flex-col h-full w-full">
                  <h3 className="text-xl font-semibold text-accent-900 mb-2">AI Spending Insight</h3>
                  <p className="text-sm font-medium text-tertiary-700">Send money anywhere in seconds with zero fees.</p>

                  {/* Stacked cards behind the main notification */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[75%] h-12 bg-white/60 rounded-2xl shadow-md border border-tertiary-200/50 -z-20"></div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[65%] h-10 bg-white/40 rounded-2xl shadow-sm border border-tertiary-200/30 -z-30"></div>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-2xl shadow-lg border border-tertiary-200 p-4 flex items-center gap-4 group-hover:scale-105 transition-transform duration-500 z-10">
                    <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center text-white shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-accent-900 leading-tight">Monthly Insight</h4>
                      <p className="text-[10px] text-tertiary-700 mt-1">See your insight for the past months</p>
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">4</div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={300} direction="up" className="h-[400px]">
              {/* Bank-Level Encryption - Tall */}
              <SpotlightCard className="bg-white/70 group h-full">
                <div className="p-8 flex flex-col h-full w-full">
                  <h3 className="text-xl font-semibold text-accent-900 mb-2 relative z-10">Bank-Level Encryption</h3>
                  <p className="text-sm font-medium text-tertiary-700 relative z-10">Your data is protected with 256-bit encryption.</p>

                  <div className="absolute inset-x-0 bottom-0 h-[250px] bg-[radial-gradient(ellipse_at_bottom,theme(colors.primary.100),transparent)] flex items-end justify-center pb-8 opacity-70 group-hover:opacity-100 transition-opacity">
                    {/* CSS Art Shield */}
                    <div className="relative w-40 h-48">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary-100 to-primary-300 rounded-t-full rounded-b-[4rem] opacity-30 transform scale-110 blur-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-50/50 border-[6px] border-primary-100 rounded-t-[3rem] rounded-b-[5rem] shadow-inner flex items-center justify-center backdrop-blur-sm z-10 overflow-hidden">
                        <div className="w-16 h-24 border-b-4 border-r-4 border-primary-400 transform rotate-45 -translate-x-2 -translate-y-4 rounded-sm"></div>
                      </div>
                      {/* Floating password dots */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex gap-1.5 whitespace-nowrap text-2xl tracking-[0.2em] font-black text-primary-400 bg-white/50 backdrop-blur-sm py-2 px-6 rounded-full border border-white/60 shadow-xl">
                        <span className="text-sm mr-2 font-mono tracking-normal bg-primary-500 text-white px-2 py-1 rounded-md">02163</span> ******
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <Reveal delay={400} direction="up" className="h-[400px]">
              {/* Instant Global Transfers - Tall */}
              <SpotlightCard className="bg-white/70 group h-full">
                <div className="p-8 flex flex-col h-full w-full">
                  <h3 className="text-xl font-semibold text-accent-900 mb-2 text-center lg:text-left relative z-10">Instant Global Transfers</h3>
                  <p className="text-sm font-medium text-tertiary-700 text-center lg:text-left relative z-10">Send money anywhere in seconds with zero fees.</p>

                  {/* Abstract Map Graphic */}
                  <div className="absolute inset-x-4 bottom-4 top-36 sm:top-32 bg-gradient-to-br from-primary-50 to-white rounded-2xl overflow-hidden border border-primary-100 flex items-center justify-center">

                    {/* Abstract SVG Globe Background */}
                    <svg className="absolute w-[200%] h-[200%] sm:w-[150%] sm:h-[150%] opacity-20 group-hover:scale-110 transition-transform duration-[1500ms] group-hover:-rotate-3" viewBox="0 0 100 100" fill="none" strokeWidth="0.5">
                      <defs>
                        <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--color-primary-300)" />
                          <stop offset="50%" stopColor="var(--color-primary-500)" />
                          <stop offset="100%" stopColor="var(--color-accent-900)" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="45" stroke="url(#globeGradient)" />
                      <ellipse cx="50" cy="50" rx="45" ry="18" stroke="url(#globeGradient)" />
                      <ellipse cx="50" cy="50" rx="18" ry="45" stroke="url(#globeGradient)" />
                      <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(45 50 50)" stroke="url(#globeGradient)" />
                      <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(-45 50 50)" stroke="url(#globeGradient)" />
                      <ellipse cx="50" cy="50" rx="18" ry="45" transform="rotate(45 50 50)" stroke="url(#globeGradient)" />
                      <ellipse cx="50" cy="50" rx="18" ry="45" transform="rotate(-45 50 50)" stroke="url(#globeGradient)" />
                    </svg>

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      <path d="M50 100 L150 160 L250 80" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-primary-300" fill="none" />
                    </svg>

                    {/* Nodes */}
                    <div className="absolute top-[80px] left-[30px] w-12 h-12 rounded-full bg-white shadow-lg border border-primary-100 flex items-center justify-center font-bold text-primary-600 group-hover:scale-110 transition-transform">$</div>
                    <div className="absolute top-[140px] left-[130px] w-12 h-12 rounded-full bg-white shadow-lg border border-primary-100 flex items-center justify-center font-bold text-primary-600 group-hover:scale-110 transition-transform delay-75">₦</div>
                    <div className="absolute top-[60px] left-[230px] w-12 h-12 rounded-full bg-white shadow-lg border border-primary-100 flex items-center justify-center font-bold text-primary-600 group-hover:scale-110 transition-transform delay-150">¥</div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={500} direction="up" className="h-[280px]">
              {/* 24/7 Support - Small Blue */}
              <SpotlightCard className="bg-gradient-to-tr from-primary-400 to-primary-600 group shadow-primary-500/20 h-full overflow-hidden" spotlightColor="rgba(255,255,255,0.2)">
                <div className="p-8 flex flex-col justify-end h-full w-full relative">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                  {/* Decorative huge typography filling the upper space */}
                  <div className="absolute top-0 right-6 text-[140px] leading-none font-black text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors duration-700 tracking-tighter">
                    24
                  </div>

                  <div className="relative z-10 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-6 flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 relative z-10">24/7 Support</h3>
                  <p className="text-sm font-medium text-white/80 relative z-10">Get help whenever you need it.</p>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <Reveal delay={600} direction="up" className="h-[280px]">
              {/* Multi-Currency Wallet - Small */}
              <SpotlightCard className="bg-white/70 group h-full">
                <div className="p-8 flex flex-col h-full w-full">
                  <h3 className="text-xl font-semibold text-accent-900 mb-2">Multi-Currency Wallet</h3>
                  <p className="text-sm font-medium text-tertiary-700">Hold and exchange multiple currencies instantly.</p>

                  <div className="absolute inset-x-0 bottom-6 flex justify-center items-center h-[100px]">
                    <div className="relative w-40 h-16">
                      {/* Floating currency cards */}
                      <div className="absolute right-4 top-0 w-16 h-16 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-tertiary-200 flex items-center justify-center font-bold text-2xl text-accent-900 transform rotate-12 group-hover:rotate-6 transition-transform z-10 mix-blend-multiply">₦</div>
                      <div className="absolute left-1/2 -translate-x-1/2 top-1 w-16 h-16 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-tertiary-200 flex items-center justify-center font-bold text-2xl text-accent-900 transform -rotate-6 group-hover:rotate-0 transition-transform z-20">£</div>
                      <div className="absolute left-4 top-2 w-16 h-16 bg-primary-500 rounded-xl shadow-[0_10px_30px_rgba(6,73,211,0.3)] border border-primary-400 flex items-center justify-center text-white transform -rotate-12 group-hover:-rotate-6 transition-transform z-30">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={700} direction="up" className="h-[400px]">
              {/* Freeze Card Instantly - Tall */}
              <SpotlightCard className="bg-white/70 group h-full">
                <div className="p-8 flex flex-col justify-end h-full w-full">
                  {/* Abstract Frozen Graphic */}
                  <div className="absolute inset-0 bottom-24 bg-gradient-to-b from-tertiary-50 to-white/0 overflow-hidden pointer-events-none">
                    {/* Card Base */}
                    <div className="absolute top-10 left-10 right-10 h-40 bg-gradient-to-br from-primary-400 via-primary-500 to-accent-900 rounded-2xl transform -rotate-6 shadow-2xl skew-x-6 group-hover:-rotate-3 group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute bottom-4 right-6 text-white/50 text-2xl font-bold tracking-widest italic">VISA</div>
                      <div className="absolute top-6 left-6 w-12 h-8 bg-white/20 rounded-md"></div>
                    </div>

                    {/* Frosted Ice Effect overlay */}
                    <div className="absolute inset-0 backdrop-blur-[6px] bg-white/40 border-t border-white/60 flex flex-wrap gap-2 p-4 opacity-90 mix-blend-hard-light group-hover:backdrop-blur-sm transition-all duration-700">
                      {/* Simulated ice crystals using abstract shapes */}
                      <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwbDRsNCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPg==')] opacity-60"></div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-white/50 backdrop-blur-md pt-6 rounded-xl mt-4 px-2">
                    <h3 className="text-xl font-semibold text-accent-900 mb-2">Freeze Card Instantly</h3>
                    <p className="text-sm font-medium text-tertiary-700">Lock your card anytime to prevent unauthorized use.</p>
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
