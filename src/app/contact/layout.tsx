import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Grand Prix India | Get in Touch | Mumbai Office',
  description: 'Contact Grand Prix India Pvt Ltd in Mumbai. Get in touch for media inquiries, partnerships, or general information. Located at 148, Atlanta Tower, Nariman Point, Mumbai.',
  keywords: 'Contact Grand Prix India, Grand Prix India email, motorsport company Mumbai, Grand Prix India address, Mumbai motorsport contact',
  openGraph: {
    title: 'Contact Grand Prix India | Get in Touch | Mumbai Office',
    description: 'Contact Grand Prix India Pvt Ltd in Mumbai. Get in touch for media inquiries, partnerships, or general information. Located at 148, Atlanta Tower, Nariman Point, Mumbai.',
    type: 'website',
    images: [
      {
        url: '/assets/placeholders/hero-1.jpg',
        width: 1920,
        height: 1080,
        alt: 'Contact Grand Prix India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Grand Prix India | Get in Touch | Mumbai Office',
    description: 'Contact Grand Prix India Pvt Ltd in Mumbai. Get in touch for media inquiries, partnerships, or general information. Located at 148, Atlanta Tower, Nariman Point, Mumbai.',
    images: ['/assets/placeholders/hero-1.jpg'],
  },
  alternates: {
    canonical: 'https://grandprixindia.in/contact/',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


