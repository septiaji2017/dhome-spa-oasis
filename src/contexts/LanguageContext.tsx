import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface Translations {
  [key: string]: {
    id: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'cta.book-now': { id: 'Booking Sekarang', en: 'Book Now' },
  'service.time': { id: 'menit', en: 'min' },
  'footer.location': { id: 'Lokasi', en: 'Location'},
  'nav.home': { id: 'Beranda', en: 'Home' },
  'nav.services': { id: 'Layanan Kami', en: 'Our Services' },
  'nav.pricing': { id: 'Harga', en: 'Pricing' },
  'nav.about': { id: 'Mengapa Memilih Kami', en: 'Why Choose Us' },
  'nav.contact': { id: 'Kontak', en: 'Contact' },
  'nav.how-it-works': { id: 'Cara Pemesanan', en: 'How to Book'},
  'nav.location': { id: 'Kunjungi Kami', en: 'Visit Us'},  

  // Location
  'location.subtitle': { 
    id: 'KUNJUNGI KAMI', 
    en: 'VISIT US' 
  },
  'location.title': { 
    id: 'Lokasi Spa', 
    en: 'Our Location' 
  },
  'location.desc': { 
    id: 'Ingin perawatan langsung di tempat? Silakan datang ke lokasi kami yang nyaman dan tenang.', 
    en: 'Prefer treatment at our place? Visit our comfortable and serene location.' 
  },
  'location.address': { 
    id: 'Blk. A No.31, Margaasih, Kec. Margaasih, Kabupaten Bandung, Jawa Barat 40215', 
    en: 'Blk. A No.31, Margaasih, Kec. Margaasih, Kabupaten Bandung, Jawa Barat 40215' 
  },
  'location.btn': { 
    id: 'Buka Google Maps', 
    en: 'Open Google Maps' 
  },

  // Hero
  'hero.subtitle': { id: 'Spa & Massage Service', en: 'Spa & Massage Service' },
  'hero.title1': { id: 'Relax', en: 'Relax' },
  'hero.title2': { id: 'Refresh', en: 'Refresh' },
  'hero.title3': { id: 'Recharge', en: 'Recharge' },
  'hero.description': {
    id: 'Nikmati perawatan spa & massage profesional dalam kenyamanan rumah Anda bersama D\'home Spa',
    en: 'Experience professional spa & massage treatments in the comfort of your home with D\'home Spa'
  },
  'hero.scroll': {id: 'Gulir', en: 'Scroll'},
  'hero.cta.secondary': { id: 'Lihat Layanan', en: 'View Services' },
  'hero.homeService': { id: 'Layanan ke Rumah', en: 'Home Service' },

  // Services
  'services.subtitle': { id: 'Layanan Kami', en: 'Our Services' },
  'services.title': { id: 'Perawatan Premium untuk Anda', en: 'Premium Treatments for You' },
  'services.description': {
    id: 'Kami menyediakan berbagai pilihan perawatan spa dan massage yang dirancang untuk membantu Anda rileks dan menyegarkan tubuh serta pikiran',
    en: 'We offer a variety of spa and massage treatments designed to help you relax and refresh your body and mind'
  },

  // Process / How It Works Section
  'process.subtitle': { id: 'Langkah Mudah', en: 'Easy Steps' },
  'process.title': { id: 'Cara Pemesanan', en: 'How to Book' },
  'process.desc': { id: 'Nikmati relaksasi tanpa ribet hanya dalam 4 langkah mudah.', en: 'Enjoy hassle-free relaxation in just 4 simple steps.' },

  // Step 1
  'step.1.title': { id: 'Pilih Layanan', en: 'Choose Service' },
  'step.1.desc': { id: 'Tentukan perawatan yang tubuh Anda butuhkan dari menu kami.', en: 'Decide which treatment your body needs from our menu.' },

  // Step 2
  'step.2.title': { id: 'Hubungi Kami', en: 'Contact Us' },
  'step.2.desc': { id: 'Klik tombol WhatsApp untuk terhubung dengan admin kami.', en: 'Click the WhatsApp button to connect with our admin.' },

  // Step 3
  'step.3.title': { id: 'Konfirmasi', en: 'Confirmation' },
  'step.3.desc': { id: 'Tentukan jadwal waktu dan lokasi Anda.', en: 'Set your preferred time schedule and location.' },

  // Step 4
  'step.4.title': { id: 'Relaksasi', en: 'Relaxation' },
  'step.4.desc': { id: 'Terapis kami akan datang dan memanjakan Anda.', en: 'Our therapist will arrive and pamper you.' },

  // Service Items
  'service.fullbody': { id: 'Pijat Seluruh Tubuh', en: 'Full Body Massage' },
  'service.fullbody.desc': {
    id: 'Pijat seluruh tubuh untuk menghilangkan stres dan ketegangan otot',
    en: 'Full body massage to relieve stress and muscle tension'
  },
  'service.reflexology': { id: 'Pijat & Refleksi', en: 'Massage & Reflexology' },
  'service.reflexology.desc': {
    id: 'Kombinasi pijat tubuh dengan refleksi untuk kesehatan optimal',
    en: 'Combination of body massage with reflexology for optimal health'
  },
  'service.facial': { id: 'Pijat & Totok Wajah', en: 'Massage & Facial Treatment' },
  'service.facial.desc': {
    id: 'Pijat tubuh dikombinasikan dengan perawatan wajah tradisional',
    en: 'Body massage combined with traditional facial treatment'
  },
  'service.scrub': { id: 'Pijat & Lulur Tubuh', en: 'Massage & Body Scrub' },
  'service.scrub.desc': {
    id: 'Pijat dengan eksfoliasi untuk kulit halus dan bersinar',
    en: 'Massage with exfoliation for smooth and glowing skin'
  },
  'service.kerokan': { id: 'Pijat & Kerokan', en: 'Massage & Scraping' },
  'service.kerokan.desc': {
    id: 'Pijat dengan terapi kerokan tradisional Indonesia',
    en: 'Massage with traditional Indonesian scraping therapy'
  },
  'service.boreh': { id: 'Pijat & Boreh', en: 'Massage & Boreh' },
  'service.boreh.desc': {
    id: 'Pijat dengan masker tradisional Bali untuk sirkulasi darah',
    en: 'Massage with traditional Balinese body mask for circulation'
  },
  'service.footreflexology': { id: 'Pijat & Refleksi Kaki', en: 'Massage & Foot Reflexology' },
  'service.footreflexology.desc': {
    id: 'Pijat tubuh dengan fokus refleksi pada kaki',
    en: 'Body massage with focus on foot reflexology'
  },

  // Pricing
  'pricing.subtitle': { id: 'Daftar Harga', en: 'Price List' },
  'pricing.title': { id: 'Investasi untuk Kesehatan Anda', en: 'Investment for Your Health' },
  'pricing.description': {
    id: 'Harga terjangkau untuk perawatan berkualitas premium',
    en: 'Affordable prices for premium quality treatments'
  },
  'pricing.service': { id: 'Layanan', en: 'Service' },
  'pricing.90min': { id: '90 Menit', en: '90 Minutes' },
  'pricing.120min': { id: '120 Menit', en: '120 Minutes' },
  'pricing.popular': { id: 'Populer', en: 'Popular' },

  // About
  'about.subtitle': { id: 'Mengapa Memilih Kami', en: 'Why Choose Us' },
  'about.title': { id: 'Kenyamanan Spa di Rumah Anda', en: 'Spa Comfort at Your Home' },
  'about.description': {
    id: 'D\'home Spa menghadirkan pengalaman spa profesional langsung ke rumah Anda, memberikan kenyamanan dan relaksasi tanpa perlu keluar rumah',
    en: 'D\'home Spa brings professional spa experience directly to your home, providing comfort and relaxation without leaving your house'
  },
  'about.feature1.title': { id: 'Terapis Profesional', en: 'Professional Therapists' },
  'about.feature1.desc': {
    id: 'Tim terapis berpengalaman dan terlatih untuk memberikan perawatan terbaik',
    en: 'Experienced and trained therapist team to provide the best care'
  },
  'about.feature2.title': { id: 'Layanan ke Rumah', en: 'Home Service' },
  'about.feature2.desc': {
    id: 'Nikmati perawatan spa dalam kenyamanan rumah Anda sendiri',
    en: 'Enjoy spa treatments in the comfort of your own home'
  },
  'about.feature3.title': { id: 'Produk Premium', en: 'Premium Products' },
  'about.feature3.desc': {
    id: 'Menggunakan produk spa berkualitas tinggi dan aman untuk kulit',
    en: 'Using high quality spa products that are safe for skin'
  },
  'about.feature4.title': { id: 'Harga Terjangkau', en: 'Affordable Prices' },
  'about.feature4.desc': {
    id: 'Perawatan premium dengan harga yang ramah di kantong',
    en: 'Premium treatments at pocket-friendly prices'
  },

  // CTA
  'cta.title': { id: 'Siap untuk Rileks?', en: 'Ready to Relax?' },
  'cta.description': {
    id: 'Hubungi kami sekarang dan rasakan pengalaman spa terbaik di rumah Anda',
    en: 'Contact us now and experience the best spa at your home'
  },
  'cta.button': { id: 'Hubungi via Instagram', en: 'Contact via Instagram' },
  'cta.location': { id: 'Lihat Lokasi', en: 'View Location' },
  'cta.trust1': { id: 'Jenis Layanan', en: 'Services'},
  'cta.trust2': { id: 'Mulai Dari', en: 'Starts From'},
  'cta.trust3': { id: 'Layanan ke Rumah', en: 'Home Service'},

  // Footer
  'footer.tagline': {
    id: 'Relax • Refresh • Recharge',
    en: 'Relax • Refresh • Recharge'
  },
  'footer.description': {
    id: 'Layanan spa & massage profesional langsung ke rumah Anda',
    en: 'Professional spa & massage service directly to your home'
  },
  'footer.quickLinks': { id: 'Link Cepat', en: 'Quick Links' },
  'footer.contact': { id: 'Kontak', en: 'Contact' },
  'footer.followUs': { id: 'Ikuti Kami', en: 'Follow Us' },
  'footer.copyright': {
    id: '© 2026 D\'home Spa & Massage. Hak cipta dilindungi.',
    en: '© 2026 D\'home Spa & Massage. All rights reserved.'
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
