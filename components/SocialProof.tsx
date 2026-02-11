import React from 'react';
import { SOCIAL_PROOF_LOGOS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-10 border-b border-stone-100 bg-stone-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-stone-400 mb-6">
          Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
          {SOCIAL_PROOF_LOGOS.map((logo, idx) => (
            <div key={idx} className="text-xl md:text-2xl font-serif font-bold text-stone-400">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;