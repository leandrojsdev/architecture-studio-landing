import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { pushEvent } from '../services/analytics';
import { AnalyticsEvent, TrackingKey } from '../types';

interface HeaderProps {
  onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? 'py-4 bg-lux-cream/80 backdrop-blur-md border-b border-lux-black/5' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="z-50 relative group">
            <h1 className={`font-serif text-2xl tracking-widest font-bold transition-colors duration-300 ${
              menuOpen || isScrolled ? 'text-lux-black' : 'text-lux-cream'
            }`}>
              L'ATELIER<span className="text-lux-gold">.</span>
            </h1>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {['Philosophy', 'Selected Works', 'Process'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  pushEvent(AnalyticsEvent.CTA_CLICK, { [TrackingKey.LABEL]: `nav_link_${item.toLowerCase().replace(' ', '_')}` });
                  scrollTo(item.toLowerCase().replace(' ', '-'));
                }}
                className={`text-xs uppercase tracking-widest-plus transition-colors hover:text-lux-gold ${
                  isScrolled ? 'text-lux-charcoal' : 'text-lux-cream'
                }`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => {
                pushEvent(AnalyticsEvent.CTA_CLICK, { [TrackingKey.LABEL]: 'inquire_nav' });
                onCtaClick();
              }}
              className={`px-6 py-2 border text-xs uppercase tracking-widest-plus transition-all duration-500 ${
                isScrolled 
                  ? 'border-lux-charcoal/20 text-lux-charcoal hover:bg-lux-charcoal hover:text-white' 
                  : 'border-lux-cream/20 text-lux-cream hover:bg-lux-cream hover:text-lux-black'
              }`}
            >
              Inquire
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden z-50 transition-colors duration-300 ${
              menuOpen || isScrolled ? 'text-lux-black' : 'text-lux-cream'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-lux-cream z-40 flex flex-col items-center justify-center space-y-8"
          >
            {['Philosophy', 'Selected Works', 'Process'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className="text-2xl font-serif text-lux-black hover:text-lux-gold italic"
              >
                {item}
              </button>
            ))}
            <div className="pt-8">
              <button 
                onClick={() => { onCtaClick(); setMenuOpen(false); }}
                className="text-xs uppercase tracking-widest-plus border-b border-lux-black pb-1"
              >
                Start Your Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
