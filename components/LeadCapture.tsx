import React, { useState } from 'react';
import Button from './Button';
import { LeadFormData, AnalyticsEvent, TrackingKey } from '../types';
import { pushEvent } from '../services/analytics';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LeadCapture: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    contact: '',
    projectType: 'Residential',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (value && formData[name as keyof LeadFormData] === '') {
      pushEvent(AnalyticsEvent.FORM_START, { [TrackingKey.FIELD]: name });
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct Mailto Link
    const subject = `New Inquiry: ${formData.projectType} - ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AContact: ${formData.contact}%0D%0ACity: ${formData.city}%0D%0AType: ${formData.projectType}`;
    const mailtoLink = `mailto:${import.meta.env.VITE_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Simulate network delay for UX
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setIsSuccess(true);
      pushEvent(AnalyticsEvent.FORM_SUBMIT, { 
        [TrackingKey.PROJECT_TYPE]: formData.projectType,
        [TrackingKey.LOCATION]: formData.city
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-lux-black text-lux-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lux-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
              Start the <br/> Conversation.
            </h2>
            <p className="text-white/60 font-light mb-12 max-w-md leading-relaxed">
              We accept a limited number of commissions per year to ensure the highest level of dedication to each project.
            </p>

            <div className="space-y-2 mb-12">
               <p className="text-xs uppercase tracking-widest text-lux-gold">Studio</p>
               <p className="font-serif text-2xl">New York &bull; Paris &bull; Milan</p>
            </div>

            <Button 
               variant="text" 
               className="text-white hover:text-lux-gold p-0"
               onClick={() => {
                 pushEvent(AnalyticsEvent.WHATSAPP_CLICK);
                 window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`, '_blank');
               }}
               icon={<ArrowRight size={16} />}
            >
              Contact via WhatsApp
            </Button>
          </div>

          {/* Form */}
          <div className="bg-white/5 p-10 backdrop-blur-sm border border-white/10">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-16 h-16 rounded-full bg-lux-gold flex items-center justify-center text-lux-black mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Received</h3>
                <p className="text-white/60">We will be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-widest text-lux-gold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-lux-gold outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-widest text-lux-gold mb-2">Contact</label>
                    <input
                      type="text"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-lux-gold outline-none transition-colors"
                      placeholder="Email or Phone"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-widest text-lux-gold mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-lux-gold outline-none transition-colors"
                        placeholder="Project Location"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-widest text-lux-gold mb-2">Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-lux-gold outline-none transition-colors appearance-none"
                      >
                         <option className="bg-lux-black" value="Residential">Residential</option>
                         <option className="bg-lux-black" value="Commercial">Commercial</option>
                         <option className="bg-lux-black" value="Hospitality">Hospitality</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  variant="primary"
                  disabled={isSubmitting}
                  className="mt-8"
                >
                  {isSubmitting ? 'Opening Email...' : 'Inquire Now'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
