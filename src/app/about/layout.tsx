import type { Metadata } from 'next';
import { PersonSchema, BreadcrumbListSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'About Grand Prix India Pvt Ltd | Our Story Since 2006',
  description: 'Learn about Grand Prix India Pvt Ltd - Grandprix (India) Private Limited. Discover our journey since 2006, our founder Bharat Sadanand Shetty, and our vision for motorsport excellence in India.',
  keywords: 'About Grand Prix India, Grandprix India history, motorsport company India, Bharat Sadanand Shetty, Grand Prix India founder, motorsport events India',
  openGraph: {
    title: 'About Grand Prix India Pvt Ltd | Our Story Since 2006',
    description: 'Learn about Grand Prix India Pvt Ltd - Grandprix (India) Private Limited. Discover our journey since 2006, our founder Bharat Sadanand Shetty, and our vision for motorsport excellence in India.',
    type: 'website',
    images: [
      {
        url: '/assets/placeholders/about-company.jpg',
        width: 1920,
        height: 1080,
        alt: 'Grand Prix India About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Grand Prix India Pvt Ltd | Our Story Since 2006',
    description: 'Learn about Grand Prix India Pvt Ltd - Grandprix (India) Private Limited. Discover our journey since 2006, our founder Bharat Sadanand Shetty, and our vision for motorsport excellence in India.',
    images: ['/assets/placeholders/about-company.jpg'],
  },
  alternates: {
    canonical: 'https://grandprixindia.in/about/',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

