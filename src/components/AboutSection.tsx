import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-gradient-warm overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={spaAtmosphere}
                  alt="Spa Atmosphere"
                  className="w-full h-80 md:h-96 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-10 -right-5 md:-right-10 w-48 md:w-64 rounded-2xl overflow-hidden shadow-xl border-4 border-background z-20"
              >
                <img
                  src={calmCare}
                  alt="Calm Care Comfort"
                  className="w-full h-40 md:h-48 object-cover"
                />
              </motion.div>
              {/* Decorative */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-spa-gold/30 rounded-3xl" />
              <div className="absolute -bottom-4 left-1/4 w-32 h-32 bg-spa-gold/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-spa-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              {t('about.subtitle')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
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
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4 group"
                  >
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
