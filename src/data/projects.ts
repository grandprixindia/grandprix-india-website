export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  status: 'Planned' | 'In Development';
  location: string;
  imageUrl: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 'motogp',
    title: 'MotoGP',
    description: 'Premier motorcycle Grand Prix racing in Maharashtra.',
    fullDescription: 'MotoGP event programming planned as part of the wider motorsport ecosystem in Maharashtra, delivering world-class racing and fan experiences.',
    status: 'Planned',
    location: 'Maharashtra, India',
    imageUrl: '/assets/placeholders/project-1.jpg',
  },
  {
    id: 'aquabike',
    title: 'Aquabike Race',
    description: 'High-intensity personal watercraft racing.',
    fullDescription: 'Aquabike racing events envisioned along suitable waterfronts, combining spectacle, safety and international standards.',
    status: 'Planned',
    location: 'Maharashtra, India',
    imageUrl: '/assets/placeholders/project-3.jpg',
  },
  {
    id: 'f1-h2o',
    title: 'F1 H2O',
    description: 'International powerboat world championship racing.',
    fullDescription: 'F1 H2O powerboat racing to extend the motorsport calendar into aquatic disciplines within Maharashtra.',
    status: 'Planned',
    location: 'Maharashtra, India',
    imageUrl: '/assets/placeholders/project-4.jpg',
  },
  {
    id: 'msv',
    title: 'Motor Sport Village (MSV)',
    description: 'A one-of-a-kind integrated sports and entertainment complex for world-class events.',
    fullDescription: 'Motor Sport Village (MSV) is envisioned as an integrated sports and entertainment destination designed to host national and international sporting events, with a special focus on high-octane formats like F1, MotoGP, and NASCAR. MSV will anchor a broader multi-sport ecosystem in Maharashtra with best-in-class infrastructure and guest experience.',
    status: 'In Development',
    location: 'Maharashtra, India',
    imageUrl: '/assets/placeholders/project-5.jpg',
    images: ['/assets/placeholders/project-5.jpg'],
  },
  {
    id: 'mumbai-eye',
    title: 'Mumbai Eye (Giant Observation Wheel)',
    description: 'An iconic giant ferris wheel inspired by the London Eye.',
    fullDescription: 'The Mumbai Eye is planned as a landmark observation wheel creating a new symbol for the city\'s skyline. Positioned within the larger entertainment-first vision, it will offer panoramic views, premium hospitality pods, and year-round activation programming.',
    status: 'Planned',
    location: 'Maharashtra, India',
    imageUrl: '/assets/placeholders/project-2.jpg',
    images: ['/assets/placeholders/project-2.jpg'],
  },
  {
    id: 'vacation-homes',
    title: 'Vacation Homes',
    description: 'Premium stay experiences integrated with the sports and entertainment ecosystem.',
    fullDescription: 'Curated vacation homes designed to complement MSV and associated attractions, offering premium hospitality, privacy, and seamless access to events, training, and leisure activities within the destination.',
    status: 'Planned',
    location: 'Maharashtra, India',
    imageUrl: '/assets/placeholders/project-6.jpg',
    images: ['/assets/placeholders/project-6.jpg'],
  },
  {
    id: 'sports-academy',
    title: 'Sports Academy',
    description: 'A multi-sport academy nurturing next-gen Indian talent with world-class coaching.',
    fullDescription: 'A high-performance academy spanning motorsport and complementary disciplines, combining international coaching standards, technology-led training, and grassroots pathways to develop future champions.',
    status: 'In Development',
    location: 'Maharashtra, India',
    imageUrl: '/assets/placeholders/project-7.jpg',
    images: ['/assets/placeholders/project-7.jpg'],
  },
  {
    id: 'monster-truck-races',
    title: 'Monster Truck Races',
    description: 'Spectacular, family-friendly motorsport entertainment events.',
    fullDescription: 'Adrenaline-fueled monster truck race events adding spectacle to the calendar—engineered for safety, showmanship, and fan engagement. Programming will include demos, meet-and-greets, and immersive fan zones.',
    status: 'Planned',
    location: 'Maharashtra, India',
    imageUrl: '/assets/placeholders/project-8.jpg',
    images: ['/assets/placeholders/project-8.jpg'],
  },
];

