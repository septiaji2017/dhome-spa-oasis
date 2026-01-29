import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { MapPin, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-massage.png';

const HeroSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Detect Mobile to disable heavy animations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Only run scroll logic if not mobile and motion not reduced
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Conditionally apply transforms. If mobile, return static values.
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ['0%', '0%'] : ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] : [1, 1.1]);

  const phoneNumber = '6281280911224'; 
  const message = "Halo, saya ingin reservasi home spa. Bisa info slot yang tersedia?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;  

  const handleScrollToService = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#services');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-28 pt-6"
    >
      {/* Background Image - Optimized */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0 will-change-transform" // added will-change for performance
      >
        <img
          src={heroImage}
          alt="D'home Spa Massage Treatment"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
      </motion.div>

      {/* Decorative Elements - HIDDEN ON MOBILE (hidden md:block) */}
      {/* Blurs are extremely expensive on mobile GPUs */}
      <motion.div
        className="hidden md:block absolute top-20 right-10 w-72 h-72 rounded-full bg-spa-gold/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-40 left-10 w-96 h-96 rounded-full bg-spa-beige/30 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 md:px-8 pt-20"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 mb-6"
          >
            <MapPin size={16} className="text-spa-gold" />
            <span className="text-sm font-medium text-foreground/80">
              {t('hero.homeService')}
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-spa-taupe font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.1] mb-6"
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('hero.title1')}
            </motion.span>
            <motion.span
              className="block text-spa-gold italic"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('hero.title2')}
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {t('hero.title3')}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons - REPLACED motion.a WITH STANDARD CSS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary Button: CSS Hover Effects instead of JS */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden shadow-lg transition-transform active:scale-95 hover:scale-105"
            >
              <span className="relative z-10 transition-colors duration-300">{t('hero.cta')}</span>
              {/* CSS-based fill animation */}
              <div className="absolute inset-0 bg-spa-gold translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>

            {/* Secondary Button */}
            <a
              href="#services"
              onClick={handleScrollToService}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/30 text-foreground rounded-full font-medium hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 active:scale-95 hover:scale-105"
            >
              {t('hero.cta.secondary')}
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#services"
          onClick={handleScrollToService}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;