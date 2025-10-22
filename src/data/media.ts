export interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  url: string;
  thumbnail: string;
  alt: string;
  caption?: string;
  videoUrl?: string;
}

export const mediaItems: MediaItem[] = [
  {
    id: 'gallery-1',
    type: 'photo',
    url: '/assets/placeholders/gallery-1.jpg',
    thumbnail: '/assets/placeholders/gallery-1.jpg',
    alt: 'Racing car on track at high speed',
    caption: 'Speed and precision in perfect harmony',
  },
  {
    id: 'gallery-2',
    type: 'photo',
    url: '/assets/placeholders/gallery-2.jpg',
    thumbnail: '/assets/placeholders/gallery-2.jpg',
    alt: 'Race track from aerial view',
    caption: 'World-class racing infrastructure',
  },
  {
    id: 'gallery-3',
    type: 'video',
    url: '/assets/placeholders/gallery-3.jpg',
    thumbnail: '/assets/placeholders/gallery-3.jpg',
    alt: 'Grand Prix India highlight reel',
    caption: 'Experience the thrill',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'gallery-4',
    type: 'photo',
    url: '/assets/placeholders/gallery-4.jpg',
    thumbnail: '/assets/placeholders/gallery-4.jpg',
    alt: 'Racing team celebrating victory',
    caption: 'Celebrating motorsport excellence',
  },
  {
    id: 'gallery-5',
    type: 'photo',
    url: '/assets/placeholders/gallery-5.jpg',
    thumbnail: '/assets/placeholders/gallery-5.jpg',
    alt: 'Close-up of racing car details',
    caption: 'Engineering perfection',
  },
  {
    id: 'gallery-6',
    type: 'photo',
    url: '/assets/placeholders/gallery-6.jpg',
    thumbnail: '/assets/placeholders/gallery-6.jpg',
    alt: 'Racing event crowd atmosphere',
    caption: 'Passionate fans experiencing the excitement',
  },
  {
    id: 'gallery-7',
    type: 'photo',
    url: '/assets/placeholders/gallery-7.jpg',
    thumbnail: '/assets/placeholders/gallery-7.jpg',
    alt: 'Sunset racing scene',
    caption: 'Golden hour on the track',
  },
  {
    id: 'gallery-8',
    type: 'photo',
    url: '/assets/placeholders/gallery-8.jpg',
    thumbnail: '/assets/placeholders/gallery-8.jpg',
    alt: 'Pit crew in action',
    caption: 'Teamwork and precision timing',
  },
];

