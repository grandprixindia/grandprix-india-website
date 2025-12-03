import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Future Projects | Grand Prix India Motorsport Events & Infrastructure',
  description: 'Explore Grand Prix India\'s future projects including MotoGP, F1 H2O, Motor Sport Village (MSV), Mumbai Eye, Sports Academy, and more. Discover world-class motorsport events and infrastructure in India.',
  keywords: 'Grand Prix India projects, MotoGP India, F1 H2O India, Motor Sport Village MSV, motorsport infrastructure India, racing events India, Formula 1 India projects',
  openGraph: {
    title: 'Future Projects | Grand Prix India Motorsport Events & Infrastructure',
    description: 'Explore Grand Prix India\'s future projects including MotoGP, F1 H2O, Motor Sport Village (MSV), Mumbai Eye, Sports Academy, and more. Discover world-class motorsport events and infrastructure in India.',
    type: 'website',
    images: [
      {
        url: '/assets/placeholders/project-1.jpg',
        width: 1920,
        height: 1080,
        alt: 'Grand Prix India Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Future Projects | Grand Prix India Motorsport Events & Infrastructure',
    description: 'Explore Grand Prix India\'s future projects including MotoGP, F1 H2O, Motor Sport Village (MSV), Mumbai Eye, Sports Academy, and more. Discover world-class motorsport events and infrastructure in India.',
    images: ['/assets/placeholders/project-1.jpg'],
  },
  alternates: {
    canonical: 'https://grandprixindia.in/projects/',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


