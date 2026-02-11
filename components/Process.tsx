import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-lux-stone/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-2xl">
          <span className="text-lux-bronze text-xs font-bold tracking-widest uppercase mb-4 block">The Atelier</span>
          <h2 className="text-4xl md:text-5xl font-serif text-lux-black">
            From abstraction to <br/> reality.
          </h2>
        </div>

        <div className="border-t border-lux-black/10">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-lux-black/10 py-12 flex flex-col md:flex-row gap-8 md:items-start hover:bg-white/40 transition-colors duration-500 px-4"
            >
              <div className="md:w-1/4">
                <span className="text-4xl font-serif text-lux-black/20 group-hover:text-lux-gold transition-colors duration-500">
                  0{index + 1}
                </span>
              </div>
              <div className="md:w-1/3">
                <h3 className="text-2xl font-serif text-lux-black mb-2">{step.title}</h3>
              </div>
              <div className="md:w-1/3">
                <p className="text-sm font-light leading-relaxed text-lux-charcoal/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;