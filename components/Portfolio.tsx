import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import Button from './Button';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { pushEvent } from '../services/analytics';
import { AnalyticsEvent, TrackingKey } from '../types';

interface PortfolioProps {
  onCtaClick: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onCtaClick }) => {
  return (
    <section id="selected-works" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-lux-black/10 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-lux-black mb-2">
              Selected Works
            </h2>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="hidden md:block"
          >
             <p className="text-xs uppercase tracking-widest text-lux-charcoal/50">Curated from 2023 - 2026</p>
          </motion.div>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
              onClick={() => pushEvent(AnalyticsEvent.PORTFOLIO_CLICK, { 
                [TrackingKey.PROJECT_TITLE]: item.title, 
                [TrackingKey.CATEGORY]: item.category 
              })}
            >
              <div className="overflow-hidden relative aspect-[3/4] mb-6">
                <div className="absolute inset-0 bg-lux-black/0 group-hover:bg-lux-black/20 transition-colors duration-700 z-10" />
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                   <span className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-lux-black">
                      <ArrowUpRight size={20} />
                   </span>
                </div>
              </div>
              
              <div className="flex flex-col border-t border-lux-black/10 pt-4">
                <span className="text-[10px] uppercase tracking-widest text-lux-gold mb-1">
                  {item.category}
                </span>
                <h3 className="text-2xl font-serif text-lux-black group-hover:text-lux-bronze transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Button 
            variant="outline"
            onClick={onCtaClick}
            className="min-w-[240px]"
          >
            View Full Archive
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;