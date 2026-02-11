import React from 'react';
import { motion } from 'framer-motion';
import BalanceSculpture from './BalanceSculpture';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-40 bg-lux-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-lux-gold text-xs font-bold tracking-widest uppercase mb-4 block">The Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-lux-black mb-8 leading-none">
              Beauty in <br/><span className="italic text-lux-bronze">Balance.</span>
            </h2>
            
            <div className="space-y-6 text-lux-charcoal/70 font-light leading-loose text-sm md:text-base">
              <p>
                True luxury is not about excess, but about the absence of friction. It is the feeling of entering a room and knowing, instinctively, that everything is exactly where it should be.
              </p>
              <p>
                Our studio integrates architectural rigor with interior softness. We do not just build houses; we compose environments that age with grace, serving as the backdrop for your legacy.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                { label: "Holistic", desc: "Architecture & Interiors as one." },
                { label: "Bespoke", desc: "Furniture designed for the space." }
              ].map((item, i) => (
                <div key={i} className="border-l border-lux-gold/30 pl-6">
                  <h4 className="font-serif text-xl text-lux-black mb-2">{item.label}</h4>
                  <p className="text-xs text-lux-charcoal/60 uppercase tracking-wide">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3D Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative h-[500px] w-full"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-lux-stone/50 to-transparent rounded-full blur-3xl opacity-50" />
             <div className="relative z-10 h-full w-full grayscale opacity-80 hover:grayscale-0 transition-all duration-1000">
                <BalanceSculpture />
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Philosophy;