import React, { useRef } from 'react';
import Button from './Button';
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { pushEvent } from '../services/analytics';
import { AnalyticsEvent, TrackingKey } from '../types';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url("${import.meta.env.BASE_URL}hero.jpeg")`,
          }}
        />
        <div className="absolute inset-0 bg-lux-black/20" /> 
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <span className="inline-block text-white/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 border-b border-white/30 pb-2">
            Architecture & Interiors
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[0.9] tracking-tight">
            Designing the <br/>
            <span className="italic font-light text-lux-stone">Eternal</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-white/90 font-light text-sm md:text-base leading-relaxed mb-12 tracking-wide">
            We curate spaces where silence meets substance. <br/>
            A harmonious dialogue between raw material and refined living.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button 
              variant="primary" 
              onClick={() => {
                pushEvent(AnalyticsEvent.CTA_CLICK, { [TrackingKey.LABEL]: 'inquire_hero' });
                onCtaClick();
              }}
              className="min-w-[200px]"
            >
              Request Consultation
            </Button>
            <Button 
              variant="outline" 
              className="text-white border-white/30 hover:bg-white/10 min-w-[200px]"
              onClick={() => {
                pushEvent(AnalyticsEvent.CTA_CLICK, { [TrackingKey.LABEL]: 'view_collection_hero' });
                document.getElementById('selected-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Collection
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
