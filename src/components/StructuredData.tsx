export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grandprix (India) Private Limited",
    "alternateName": "Grand Prix India",
    "url": "https://grandprixindia.com",
    "logo": "https://grandprixindia.com/logo.svg",
    "description": "Grand Prix India brings world-class racing experiences to India. Pioneering motorsport excellence since 2006.",
    "foundingDate": "2006",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/grandprixindia",
      "https://twitter.com/grandprixindia",
      "https://www.instagram.com/grandprixindia",
      "https://www.linkedin.com/company/grandprixindia"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProjectSchema({ project }: { project: { title: string; description: string; location: string } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": project.title,
    "description": project.description,
    "location": {
      "@type": "Place",
      "name": project.location,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Grandprix (India) Private Limited",
      "url": "https://grandprixindia.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

