import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import FeatureGrid from '@/components/FeatureGrid';
import OnboardingSteps from '@/components/OnboardingSteps';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary-100/60 to-primary-200/40 relative font-sans overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-0 left-0 w-full h-[70vh] bg-gradient-to-t from-primary-400 via-primary-300/40 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(71,121,224,0.15),transparent)]"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-primary-400/25 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-primary-300/20 blur-[130px] rounded-full"></div>
      </div>

      <NavBar />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Hero />
      </div>

      <TrustIndicators />
      <FeatureGrid />
      <OnboardingSteps />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
