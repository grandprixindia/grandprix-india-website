'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedTextMobileProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedTextMobile({ 
  text, 
  className = '', 
  delay = 0 
}: AnimatedTextMobileProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  // Simplified animation for mobile - just fade in
  const container = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const words = text.split(' ');

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
