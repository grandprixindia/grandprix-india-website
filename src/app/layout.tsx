import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { OrganizationSchema, LocalBusinessSchema } from '@/components/StructuredData';

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
  title: 'Grand Prix India Pvt Ltd | Grandprix (India) Private Limited',
  description: 'Grand Prix India Pvt Ltd - Leading motorsport and entertainment company in India. Grandprix (India) Private Limited delivers world-class racing events, Formula 1, MotoGP, and sports infrastructure since 2006.',
  keywords: 'Grand Prix India, Grand Prix India Pvt Ltd, Grandprix India, motorsport India, racing events India, Formula 1 India, MotoGP India, GPI, Grandprix (India) Private Limited',
  authors: [{ name: 'Grandprix (India) Private Limited' }],
  metadataBase: new URL('https://grandprixindia.in'),
  openGraph: {
    title: 'Grand Prix India Pvt Ltd | Grandprix (India) Private Limited',
    description: 'Grand Prix India Pvt Ltd - Leading motorsport and entertainment company in India. Grandprix (India) Private Limited delivers world-class racing events, Formula 1, MotoGP, and sports infrastructure since 2006.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Grand Prix India',
    images: [
      {
        url: '/logo-square.svg',
        width: 953,
        height: 953,
        alt: 'Grand Prix India Logo',
        type: 'image/svg+xml',
      },
      {
        url: '/assets/placeholders/hero-1.jpg',
        width: 1920,
        height: 1080,
        alt: 'Grand Prix India Pvt Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grand Prix India Pvt Ltd | Grandprix (India) Private Limited',
    description: 'Grand Prix India Pvt Ltd - Leading motorsport and entertainment company in India. Grandprix (India) Private Limited delivers world-class racing events, Formula 1, MotoGP, and sports infrastructure since 2006.',
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
        <link rel="icon" href="/logo-square.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logo-square.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="image_src" href="https://grandprixindia.in/logo-square.svg" />
        <meta property="og:logo" content="https://grandprixindia.in/logo-square.svg" />
        <meta name="twitter:logo" content="https://grandprixindia.in/logo-square.svg" />
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body>{children}</body>
    </html>
  );
}
