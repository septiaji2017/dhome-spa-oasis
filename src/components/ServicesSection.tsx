import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Sparkles, Hand, Heart, Leaf, Sun, Footprints, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const services = [
  {
    icon: Hand,
    titleKey: 'service.fullbody',
    descKey: 'service.fullbody.desc',
    price90: '160k',
    price120: '190k',
  },
  {
    icon: Footprints,
    titleKey: 'service.reflexology',
    descKey: 'service.reflexology.desc',
    price90: '180k',
    price120: '210k',
    popular: true,
  },
  {
    icon: Sparkles,
    titleKey: 'service.facial',
    descKey: 'service.facial.desc',
    price90: '175k',
    price120: '205k',
  },
  {
    icon: Star,
    titleKey: 'service.scrub',
    descKey: 'service.scrub.desc',
    price90: '175k',
    price120: '205k',
  },
  {
    icon: Sun,
    titleKey: 'service.kerokan',
    descKey: 'service.kerokan.desc',
    price90: '175k',
    price120: '205k',
  },
  {
    icon: Leaf,
    titleKey: 'service.boreh',
    descKey: 'service.boreh.desc',
    price90: '175k',
    price120: '205k',
  },
  {
    icon: Heart,
    titleKey: 'service.footreflexology',
    descKey: 'service.footreflexology.desc',
    price90: '150k',
    price120: '180k',
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    // BACKGROUND: Light Beige (bg-gradient-warm)
    <section id="services" className="section-padding bg-gradient-warm" ref={ref}>
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            className="inline-block text-spa-gold font-medium tracking-[0.3em] uppercase text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {t('services.subtitle')}
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            {t('services.title')}
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-muted-foreground text-lg">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isMobile ? 20 : 40 }} // Less movement on mobile
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  // If mobile, fast staggered or none. If desktop, standard stagger
                  delay: isMobile ? index * 0.05 : index * 0.1,
                  ease: "easeOut"
                }}
                // OPTIMIZATION: 
                // 1. bg-white/95 on mobile (solid color is faster than blur). 
                // 2. md:backdrop-blur-sm (blur only on desktop).
                // 3. will-change-transform (hints browser to use GPU).
                className="
                  relative group
                  bg-white/95 md:bg-white/50 
                  md:backdrop-blur-sm 
                  border border-border/50 rounded-2xl p-6
                  hover:shadow-lg transition-shadow duration-300
                  will-change-transform
                "
              >
                {/* CSS Hover Effect for lift - replaces Motion hover */}
                <div className="absolute inset-0 rounded-2xl transition-transform duration-300 md:group-hover:-translate-y-1" />

                {service.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-spa-gold/20 text-spa-brown text-xs font-medium rounded-full z-10">
                    {t('pricing.popular')}
                  </div>
                )}
                
                <div className="relative z-10 flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-spa-gold/10 text-spa-brown group-hover:bg-spa-gold/20 transition-colors duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(service.descKey)}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center gap-4 mt-6 pt-4 border-t border-border/50">
                  <div className="flex-1 text-center">
                    <p className="text-xs text-muted-foreground mb-1">90 {t('service.time')}</p>
                    <p className="font-serif text-xl font-medium text-spa-brown">
                      {service.price90}
                    </p>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="flex-1 text-center">
                    <p className="text-xs text-muted-foreground mb-1">120 {t('service.time')}</p>
                    <p className="font-serif text-xl font-medium text-spa-brown">
                      {service.price120}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;