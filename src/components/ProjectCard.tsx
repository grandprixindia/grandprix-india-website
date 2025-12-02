'use client';

interface ProjectCardProps {
  title: string;
  description: string;
  status: 'Planned' | 'In Development';
  location: string;
  imageUrl: string;
  onClick: () => void;
  statusLabel: string;
  viewLabel: string;
}

export default function ProjectCard({
  title,
  description,
  location,
  imageUrl,
  onClick,
  viewLabel,
}: ProjectCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-2xl border border-gray-100 hover:border-primary/40 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label={`${title} project image`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow leading-relaxed">{description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{location}</span>
        </div>
        <button
          className="text-primary font-medium hover:underline flex items-center group/btn"
        >
          {viewLabel}
          <svg className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
