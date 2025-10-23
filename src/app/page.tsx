'use client';

import { useDevice } from '@/hooks/useDevice';
import HomePageMobile from './pageMobile';
import HomePageLaptop from './pageLaptop';

export default function HomePage() {
  const { isMobile, isTablet, isLaptop } = useDevice();

  // Render mobile version for mobile and tablet devices
  if (isMobile || isTablet) {
    return <HomePageMobile />;
  }

  // Render laptop version for desktop devices
  return <HomePageLaptop />;
}