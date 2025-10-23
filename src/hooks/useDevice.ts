'use client';

import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'laptop';

export function useDevice() {
  const [deviceType, setDeviceType] = useState<DeviceType>('laptop');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        const userAgent = navigator.userAgent;
        
        // Check for mobile devices
        const isMobileDevice = width < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        
        // Check for tablets
        const isTabletDevice = width >= 768 && width < 1024 && /iPad|Android/i.test(userAgent);
        
        // Laptop/Desktop
        const isLaptopDevice = width >= 1024 || (!isMobileDevice && !isTabletDevice);
        
        if (isMobileDevice) {
          setDeviceType('mobile');
          setIsMobile(true);
          setIsTablet(false);
          setIsLaptop(false);
        } else if (isTabletDevice) {
          setDeviceType('tablet');
          setIsMobile(false);
          setIsTablet(true);
          setIsLaptop(false);
        } else {
          setDeviceType('laptop');
          setIsMobile(false);
          setIsTablet(false);
          setIsLaptop(true);
        }
        setIsLoaded(true);
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return {
    deviceType,
    isMobile,
    isTablet,
    isLaptop,
    isLoaded,
  };
}
