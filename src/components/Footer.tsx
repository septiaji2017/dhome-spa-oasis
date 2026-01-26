import { motion } from 'framer-motion';
import { Instagram, MapPin, Heart, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#how-it-works', label: t('nav.how-it-works') },
    { href: '#about', label: t('nav.about') },
    { href: '#location', label: t('nav.location') },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="D'home Spa Logo"
                className="h-14 w-14 rounded-full object-cover border-2 border-primary-foreground/20"
              />
              <div>
                <h3 className="font-serif text-2xl font-medium">D'home Spa</h3>
                <p className="text-primary-foreground/60 text-sm tracking-widest">
                  {t('footer.tagline')}
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}    
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.instagram.com/dhomespaofficial_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/EexGPMAG27bGxPBy6?g_st=awb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  <MapPin size={20} />
                  <span>Location</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281280911224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  <Phone size={20} />
                  <span>Whatsapp</span>
                </a>
              </li>              
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            {t('footer.copyright')}
          </p>
          <motion.p
            className="flex items-center gap-2 text-primary-foreground/50 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Made with <Heart size={14} className="text-red-400" fill="currentColor" /> in Indonesia
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
