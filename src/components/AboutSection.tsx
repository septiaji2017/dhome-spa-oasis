import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Home, Award, Wallet } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import spaAtmosphere from '@/assets/spa-atmosphere.jpg';
import calmCare from '@/assets/hero-massage_copy.jpg';

const features = [
  {
    icon: Users,
    titleKey: 'about.feature1.title',
    descKey: 'about.feature1.desc',
  },
  {
    icon: Home,
    titleKey: 'about.feature2.title',
    descKey: 'about.feature2.desc',
  },
  {
    icon: Award,
    titleKey: 'about.feature3.title',
    descKey: 'about.feature3.desc',
  },
  {
    icon: Wallet,
    titleKey: 'about.feature4.title',
    descKey: 'about.feature4.desc',
  },
];

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  
  // OPTIMIZATION: Detect Mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isInView = useInView(ref, { once: true, margin: isMobile ? '-50px' : '-100px' });

  return (
    <section id="about" className="section-padding bg-gradient-warm overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4"> {/* Added px-4 for mobile padding */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Images Column */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }} // Reduce movement on mobile
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div 
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src={spaAtmosphere}
                  alt="Spa Atmosphere"
                  className="w-full h-80 md:h-96 object-cover will-change-transform"
                  loading="lazy"
                />
              </div>

              {/* Secondary Floating Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                // Mobile: Load almost immediately. Desktop: Load after main image.
                transition={{ duration: 0.6, delay: isMobile ? 0.2 : 0.3 }}
                className="absolute -bottom-10 -right-2 md:-right-10 w-48 md:w-64 rounded-2xl overflow-hidden shadow-xl border-4 border-background z-20"
              >
                <img
                  src={calmCare}
                  alt="Calm Care Comfort"
                  className="w-full h-32 md:h-48 object-cover" // Smaller height on mobile
                  loading="lazy"
                />
              </motion.div>

              {/* Decorative Elements - OPTIMIZED */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-spa-gold/30 rounded-3xl" />
              
              {/* HIDE BLUR ON MOBILE: Very expensive for GPU */}
              <div className="hidden md:block absolute -bottom-4 left-1/4 w-32 h-32 bg-spa-gold/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: isMobile ? 0 : 0.2 }}
            className="mt-10 lg:mt-0"
          >
            <span className="inline-block text-spa-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              {t('about.subtitle')}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-6">
              {t('about.title')}
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-spa-gold to-transparent mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t('about.description')}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    // OPTIMIZATION: Faster stagger on mobile to make UI feel responsive
                    transition={{ 
                      duration: 0.4, 
                      delay: isMobile ? 0.1 + (index * 0.05) : 0.4 + (index * 0.1) 
                    }}
                    className="flex gap-4 group"
                  >
                    {/* Icon Box - CSS Hover */}
                    <div className="p-3 rounded-xl bg-spa-gold/10 text-spa-brown group-hover:bg-spa-gold/20 transition-colors duration-300 h-fit">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                        {t(feature.titleKey)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(feature.descKey)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;