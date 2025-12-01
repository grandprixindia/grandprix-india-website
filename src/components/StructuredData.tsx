export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grandprix (India) Private Limited",
    "alternateName": ["Grand Prix India", "Grand Prix India Pvt Ltd", "GPI", "Grandprix India"],
    "legalName": "Grandprix (India) Private Limited",
    "url": "https://grandprixindia.in",
    "logo": "https://grandprixindia.in/logo.svg",
    "description": "Grand Prix India Pvt Ltd - Leading motorsport and entertainment company in India. Grandprix (India) Private Limited delivers world-class racing events, Formula 1, MotoGP, and sports infrastructure since 2006.",
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
      "url": "https://grandprixindia.in"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

