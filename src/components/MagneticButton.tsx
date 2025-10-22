'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export default function MagneticButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '' 
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary: 'bg-primary text-white hover:shadow-[0_20px_50px_rgba(182,152,73,0.5)] hover:scale-105',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-[0_20px_50px_rgba(182,152,73,0.3)]',
    ghost: 'border border-white/70 text-white hover:bg-white hover:text-dark hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)]'
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative inline-block"
    >
      <motion.button
        onClick={onClick}
        className={`
          relative px-8 py-4 font-medium rounded-sm 
          transition-all duration-300 overflow-hidden
          ${variantStyles[variant]}
          ${className}
        `}
        whileTap={{ scale: 0.95 }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}




