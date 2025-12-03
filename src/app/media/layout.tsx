import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media & Gallery | Grand Prix India Motorsport Photos & Videos',
  description: 'View Grand Prix India\'s media gallery featuring motorsport photos, racing event videos, and highlights from our projects. Experience the speed, precision, and luxury of motorsport excellence.',
  keywords: 'Grand Prix India gallery, motorsport photos India, racing event videos, MotoGP images, Formula 1 India media, motorsport photography',
  openGraph: {
    title: 'Media & Gallery | Grand Prix India Motorsport Photos & Videos',
    description: 'View Grand Prix India\'s media gallery featuring motorsport photos, racing event videos, and highlights from our projects. Experience the speed, precision, and luxury of motorsport excellence.',
    type: 'website',
    images: [
      {
        url: '/assets/placeholders/gallery-1.jpg',
        width: 1920,
        height: 1080,
        alt: 'Grand Prix India Media Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media & Gallery | Grand Prix India Motorsport Photos & Videos',
    description: 'View Grand Prix India\'s media gallery featuring motorsport photos, racing event videos, and highlights from our projects. Experience the speed, precision, and luxury of motorsport excellence.',
    images: ['/assets/placeholders/gallery-1.jpg'],
  },
  alternates: {
    canonical: 'https://grandprixindia.in/media/',
  },
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



