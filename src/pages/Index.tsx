import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import LocationSection from '@/components/LocationSection';
import AboutSection from '@/components/AboutSection';
import ProcessSelection from '@/components/ProcessSelection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <ProcessSelection />
          <AboutSection />
          <LocationSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
