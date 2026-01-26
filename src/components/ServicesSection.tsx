import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card hover-lift group bg-white/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-spa-gold/20 text-spa-brown text-xs font-medium rounded-full">
                    {t('pricing.popular')}
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
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

                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border/50">
                  <div className="flex-1 text-center">
                    <p className="text-xs text-muted-foreground mb-1">90 min</p>
                    <p className="font-serif text-xl font-medium text-spa-brown">
                      {service.price90}
                    </p>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="flex-1 text-center">
                    <p className="text-xs text-muted-foreground mb-1">120 min</p>
                    <p className="font-serif text-xl font-medium text-spa-brown">
                      {service.price120}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;