import React from 'react';
import { pushEvent } from '../services/analytics';
import { AnalyticsEvent } from '../types';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  fullWidth?: boolean;
  analyticsLabel?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  analyticsLabel,
  className = '',
  onClick,
  icon,
  ...props 
}) => {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (analyticsLabel) {
      pushEvent(AnalyticsEvent.CTA_CLICK, { label: analyticsLabel });
    }
    if (onClick) onClick(e);
  };

  const baseClasses = "relative inline-flex items-center justify-center uppercase tracking-widest-plus text-xs font-semibold transition-all duration-500 ease-out group overflow-hidden";
  const paddingClasses = "py-4 px-8";

  // Variant Styles
  const variants = {
    // Primary: Solid Bronze, Slide to Gold
    primary: `bg-lux-bronze text-white hover:bg-lux-gold border border-lux-bronze hover:border-lux-gold`,
    
    // Secondary: Solid Gold, Slide to Dark
    secondary: `bg-lux-gold text-white hover:bg-lux-black border border-lux-gold hover:border-lux-black`,
    
    // Outline: Minimal border
    outline: `bg-transparent text-lux-black border border-lux-black/20 hover:border-lux-bronze hover:text-lux-bronze`,
    
    // Text: No border, underline effect
    text: `bg-transparent text-lux-black hover:text-lux-gold px-0 py-2`,
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${variant !== 'text' ? paddingClasses : ''} ${widthClass} ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
      </span>
    </button>
  );
};

export default Button;