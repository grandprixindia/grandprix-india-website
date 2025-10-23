'use client';

import { useDevice } from '@/hooks/useDevice';
import HomePageMobile from './pageMobile';
import HomePageLaptop from './pageLaptop';

export default function HomePage() {
  const { isMobile, isTablet, isLaptop, isLoaded } = useDevice();

  // Show loading state until device is detected
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Render mobile version for mobile and tablet devices
  if (isMobile || isTablet) {
    return <HomePageMobile />;
  }

  // Render laptop version for desktop devices
  return <HomePageLaptop />;
}