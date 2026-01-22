import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-spa-gold/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-spa-beige/50 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative Element */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-spa-gold/20 mb-8"
          >
            <div className="w-12 h-12 rounded-full bg-spa-gold/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-spa-gold animate-pulse" />
            </div>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
            {t('cta.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://www.instagram.com/dhomespaofficial_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Instagram size={20} />
              <span>{t('cta.button')}</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.a>

            <motion.a
              href="https://maps.app.goo.gl/EexGPMAG27bGxPBy6?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 border-2 border-primary/30 text-foreground rounded-full font-medium hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin size={20} />
              <span>{t('cta.location')}</span>
            </motion.a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 pt-12 border-t border-border/50"
          >
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-light text-spa-brown mb-2">
                7+
              </p>
              <p className="text-muted-foreground text-sm">{t('cta.trust1')}</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-light text-spa-brown mb-2">
                150k
              </p>
              <p className="text-muted-foreground text-sm">{t('cta.trust2')}</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-light text-spa-brown mb-2">
                ⭐
              </p>
              <p className="text-muted-foreground text-sm">{t('cta.trust3')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
