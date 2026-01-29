import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { CalendarCheck, MessageCircle, Sparkles, HandPlatter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const steps = [
  {
    icon: HandPlatter,
    titleKey: 'step.1.title',
    descKey: 'step.1.desc',
  },
  {
    icon: MessageCircle,
    titleKey: 'step.2.title',
    descKey: 'step.2.desc',
  },
  {
    icon: CalendarCheck,
    titleKey: 'step.3.title',
    descKey: 'step.3.desc',
  },
  {
    icon: Sparkles,
    titleKey: 'step.4.title',
    descKey: 'step.4.desc',
  },
];

const ProcessSection = () => {
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

  // OPTIMIZATION: Reduce margin on mobile to trigger animation sooner
  const isInView = useInView(ref, { once: true, margin: isMobile ? '-50px' : '-100px' });

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    // Prevent default if we want to handle via window.open, 
    // though using href on the <a> tag is usually better for mobile deep linking.
    // Keeping logic but using it on an anchor tag below is best practice.
  };

  const phoneNumber = '6281280911224'; 
  const message = "Halo, saya ingin reservasi home spa. Bisa info slot yang tersedia?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="how-it-works" className="section-padding bg-background relative overflow-hidden" ref={ref}>
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
          
          {/* Connecting Line (Desktop Only - Pure CSS) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border/50 -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                // OPTIMIZATION: Fast transition on mobile, staggered on desktop
                transition={{ 
                  duration: 0.5, 
                  delay: isMobile ? index * 0.1 : index * 0.2 
                }}
                className="relative flex flex-col items-center text-center group will-change-transform"
              >
                {/* Number Badge (Mobile Only) */}
                <div className="md:hidden absolute -top-3 -left-3 w-8 h-8 bg-spa-brown text-white rounded-full flex items-center justify-center font-serif text-sm shadow-sm z-20">
                  {index + 1}
                </div>

                {/* Icon Circle - CSS Hover Effects */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 z-10">
                  <div className="w-20 h-20 rounded-full bg-spa-gold/10 flex items-center justify-center text-spa-brown transition-colors duration-300 group-hover:bg-spa-gold group-hover:text-white">
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
        
        {/* CTA Button */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: isMobile ? 0.3 : 1 }}
            className="text-center mt-16"
        >
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="
                inline-block
                bg-spa-brown text-white 
                px-8 py-3 rounded-full 
                font-medium shadow-md
                transform transition-all duration-300 
                hover:bg-spa-gold hover:text-spa-brown hover:scale-105 hover:shadow-lg
                active:scale-95
              "
            >
                Book via WhatsApp Now
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessSection;