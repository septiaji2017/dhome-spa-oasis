import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CalendarCheck, MessageCircle, Sparkles, HandPlatter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const steps = [
  {
    icon: HandPlatter, // Icon for choosing service
    titleKey: 'step.1.title',
    descKey: 'step.1.desc',
  },
  {
    icon: MessageCircle, // Icon for WhatsApp
    titleKey: 'step.2.title',
    descKey: 'step.2.desc',
  },
  {
    icon: CalendarCheck, // Icon for Confirmation
    titleKey: 'step.3.title',
    descKey: 'step.3.desc',
  },
  {
    icon: Sparkles, // Icon for Relax
    titleKey: 'step.4.title',
    descKey: 'step.4.desc',
  },
];

const ProcessSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleWhatsAppClick = () => {
    const phoneNumber = '6281280911224'; 
    
    const message = "Halo, saya ingin reservasi home spa. Bisa info slot yang tersedia?";
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  return (
    <section id="how-it-works" className="section-padding bg-background relative" ref={ref}>
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-spa-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
            {t('process.subtitle')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            {t('process.title')}
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-muted-foreground text-lg">
            {t('process.desc')}
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border/50 -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Badge (Mobile Only) */}
                <div className="md:hidden absolute -top-3 -left-3 w-8 h-8 bg-spa-brown text-white rounded-full flex items-center justify-center font-serif text-sm">
                  {index + 1}
                </div>

                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 z-10">
                  <div className="w-20 h-20 rounded-full bg-spa-gold/10 flex items-center justify-center text-spa-brown group-hover:bg-spa-gold group-hover:text-white transition-colors duration-300">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed px-2">
                  {t(step.descKey)}
                </p>

              </motion.div>
            );
          })}
        </div>
        
        {/* Optional: CTA Button at bottom */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center mt-16"
        >
            <button onClick={handleWhatsAppClick} className="bg-spa-brown text-white px-8 py-3 rounded-full hover:bg-spa-gold hover:text-spa-brown transition-all duration-300 font-medium">
                Book via WhatsApp Now
            </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessSection;