import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LocationSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // --- CONFIGURATION ---
  const mapDirectLink = "https://maps.app.goo.gl/EexGPMAG27bGxPBy6?g_st=awb";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.633112680167!2d107.5475395!3d-6.934378700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ef61201223b9%3A0xfc5ccc63b0e92802!2sBlk.%20A%20No.31%2C%20Margaasih%2C%20Kec.%20Margaasih%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040215!5e0!3m2!1sen!2sid!4v1769415908369!5m2!1sen!2sid";

  return (
    <section id="location" className="section-padding bg-background relative overflow-hidden" ref={ref}>
    
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-spa-gold/5 blur-3xl opacity-60"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-spa-beige/50 blur-3xl opacity-60"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text Info */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                {/* Decorative Pill */}
            <span className="inline-block text-spa-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              {t('location.subtitle')}
            </span>

                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                    {t('location.title')}
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-md">
                    {t('location.desc')}
                </p>

                {/* Address Box */}
                <div className="flex items-center gap-4 p-6 bg-secondary/30 border border-border/50 rounded-2xl mb-8 hover:bg-secondary/50 transition-colors duration-300">
                    <div className="p-3 bg-white rounded-xl text-spa-brown shadow-sm shrink-0">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-serif text-lg font-medium mb-1 text-foreground">D'Home Spa & Massage</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {t('location.address')}
                        </p>
                    </div>
                </div>

                {/* Main CTA Button */}
                <motion.a 
                    href={mapDirectLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-spa-brown text-white px-8 py-4 rounded-full hover:bg-spa-gold hover:text-spa-brown transition-all duration-300 font-medium group shadow-lg shadow-spa-brown/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Navigation size={20} />
                    <span>{t('location.btn')}</span>
                </motion.a>
            </motion.div>

            {/* Right Column: Map Embed */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white"
            >
                <iframe 
                    src={mapEmbedUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Spa Location"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-medium text-spa-brown shadow-sm pointer-events-none">
                    📍 Google Maps
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;