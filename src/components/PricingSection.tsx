import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Heart, Star, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const packages = [
  {
    title: "Couple's Retreat",
    subtitle: "Perfect for dates",
    icon: Heart,
    items: [
      "2x Full Body Massage (90min)",
      "Free Aromatherapy Oil",
      "Complimentary Ginger Tea",
      "Side-by-side Service"
    ],
    price: "310k",
    originalPrice: "340k", 
    popular: false,
  },
  {
    title: "The Royal Indulgence",
    subtitle: "Best Value",
    icon: Sparkles,
    items: [
      "Full Body Massage (90min)",
      "Reflexology (30min)",
      "Premium Lulur Scrub",
      "Face Acupressure"
    ],
    price: "240k",
    originalPrice: "285k",
    popular: true, // Highlights this card
  },
  {
    title: "Family Relax Pack",
    subtitle: "For 3 People",
    icon: Star,
    items: [
      "3x Full Body Massage (90min)",
      "Flexible Locations",
      "Choice of Therapist",
      "Free Transport (<5km)"
    ],
    price: "450k",
    originalPrice: "480k",
    popular: false,
  }
];

const PricingSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="packages" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-spa-gold/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center max-w-2xl mx-auto mb-16"
        >
            <span className="inline-block text-spa-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
               {/* Replaced 'pricing.subtitle' with a packages specific subtitle */}
               EXCLUSIVE OFFERS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-spa-brown mb-4">
              Curated Packages
            </h2>
            <div className="decorative-line mb-6" />
            <p className="text-muted-foreground">
              Best value combinations designed for total relaxation.
            </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {packages.map((pkg, index) => {
                const Icon = pkg.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                            pkg.popular 
                            ? 'bg-spa-brown text-white border-spa-brown shadow-xl scale-100 md:scale-110 z-10' 
                            : 'bg-white border-border/50 hover:border-spa-gold/50 text-foreground hover:shadow-lg'
                        }`}
                    >
                        {pkg.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-spa-gold text-white px-4 py-1 rounded-full text-sm font-medium shadow-md whitespace-nowrap">
                                Most Popular
                            </div>
                        )}

                        <div className={`p-3 rounded-2xl w-fit mb-6 ${pkg.popular ? 'bg-white/10' : 'bg-spa-gold/10 text-spa-brown'}`}>
                            <Icon size={24} strokeWidth={1.5} />
                        </div>

                        <h3 className="font-serif text-2xl font-medium mb-1">{pkg.title}</h3>
                        <p className={`text-sm mb-6 ${pkg.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                            {pkg.subtitle}
                        </p>

                        <div className="space-y-3 mb-8">
                            {pkg.items.map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Check size={18} className={`mt-0.5 shrink-0 ${pkg.popular ? 'text-spa-gold' : 'text-spa-brown'}`} />
                                    <span className={`text-sm ${pkg.popular ? 'text-gray-100' : 'text-gray-600'}`}>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className={`pt-6 border-t ${pkg.popular ? 'border-white/10' : 'border-border/50'}`}>
                            <div className="flex items-end gap-3 mb-4">
                                <span className="font-serif text-3xl font-medium">Rp {pkg.price}</span>
                                {pkg.originalPrice && (
                                    <span className={`text-lg line-through mb-1 decoration-2 ${pkg.popular ? 'text-white/40 decoration-white/40' : 'text-muted-foreground decoration-muted-foreground/50'}`}>
                                        {pkg.originalPrice}
                                    </span>
                                )}
                            </div>
                            
                            <button className={`w-full py-3 rounded-xl font-medium transition-transform active:scale-95 text-sm uppercase tracking-wide ${
                                pkg.popular 
                                ? 'bg-spa-gold text-spa-brown hover:bg-white' 
                                : 'bg-spa-brown text-white hover:bg-spa-brown/90'
                            }`}>
                                Book Package
                            </button>
                        </div>
                    </motion.div>
                );
            })}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;