import React from 'react';
import { pushEvent } from '../services/analytics';
import { AnalyticsEvent, TrackingKey } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lux-cream py-12 border-t border-lux-black/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif font-bold text-lux-black text-lg">L'ATELIER.</p>
        </div>
        
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-lux-charcoal/60">
           {['Instagram', 'LinkedIn', 'Pinterest'].map((social) => (
             <a 
               key={social}
               href="#" 
               className="hover:text-lux-gold transition-colors"
               onClick={() => pushEvent(AnalyticsEvent.SOCIAL_CLICK, { [TrackingKey.PLATFORM]: social })}
             >
               {social}
             </a>
           ))}
        </div>

        <div className="text-[10px] text-lux-charcoal/40 uppercase tracking-widest">
          © {new Date().getFullYear()} L'Atelier
        </div>
      </div>
    </footer>
  );
};

export default Footer;