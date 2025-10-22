import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { OrganizationSchema } from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Grand Prix India - Pioneering Motorsport Excellence',
  description: 'Grand Prix India brings world-class racing experiences to India. Pioneering motorsport excellence since 2006.',
  keywords: 'Grand Prix India, motorsport, racing, India, GPI, Formula racing',
  authors: [{ name: 'Grandprix (India) Private Limited' }],
  metadataBase: new URL('https://grandprixindia.com'),
  openGraph: {
    title: 'Grand Prix India - Pioneering Motorsport Excellence',
    description: 'Grand Prix India brings world-class racing experiences to India. Pioneering motorsport excellence since 2006.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Grand Prix India',
    images: [
      {
        url: '/assets/placeholders/hero-1.jpg',
        width: 1920,
        height: 1080,
        alt: 'Grand Prix India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grand Prix India - Pioneering Motorsport Excellence',
    description: 'Grand Prix India brings world-class racing experiences to India. Pioneering motorsport excellence since 2006.',
    images: ['/assets/placeholders/hero-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <OrganizationSchema />
      </head>
      <body>{children}</body>
    </html>
  );
}
