'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useMobile } from '@/hooks/useMobile';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card3D({ children, className = '' }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  
  // Only enable 3D effects on desktop
  if (isMobile) {
    return (
      <div className={`relative h-full ${className}`}>
        {children}
      </div>
    );
  }

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

  // Reduced rotation angles for better performance
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['3deg', '-3deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-3deg', '3deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative h-full ${className}`}
    >
      <div className="h-full" style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
}




