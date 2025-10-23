'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface MagneticButtonMobileProps {
  href: string;
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export default function MagneticButtonMobile({ 
  href, 
  variant = 'primary', 
  children, 
  className = '' 
}: MagneticButtonMobileProps) {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg overflow-hidden";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl",
    ghost: "border-2 border-white text-white hover:bg-white hover:text-dark backdrop-blur-sm"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Link 
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        <span className="relative z-10">{children}</span>
        
        {/* Simplified shimmer effect for mobile */}
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        )}
      </Link>
    </motion.div>
  );
}
