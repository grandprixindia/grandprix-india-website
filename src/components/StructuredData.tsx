export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grandprix (India) Private Limited",
    "alternateName": ["Grand Prix India", "Grand Prix India Pvt Ltd", "GPI", "Grandprix India"],
    "legalName": "Grandprix (India) Private Limited",
    "url": "https://grandprixindia.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://grandprixindia.in/logo.svg",
      "contentUrl": "https://grandprixindia.in/logo.svg",
      "caption": "Grand Prix India Logo"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://grandprixindia.in/logo.svg",
      "contentUrl": "https://grandprixindia.in/logo.svg",
      "caption": "Grand Prix India Logo"
    },
    "description": "Grand Prix India Pvt Ltd - Leading motorsport and entertainment company in India. Grandprix (India) Private Limited delivers world-class racing events, Formula 1, MotoGP, and sports infrastructure since 2006.",
    "foundingDate": "2006",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "148, Atlanta Tower, Jamnalal Bajaj Road",
      "addressLocality": "Nariman Point",
      "addressRegion": "Maharashtra",
      "postalCode": "400021",
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

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://grandprixindia.in/#organization",
    "name": "Grandprix (India) Private Limited",
    "alternateName": "Grand Prix India",
    "logo": {
      "@type": "ImageObject",
      "url": "https://grandprixindia.in/logo.svg",
      "contentUrl": "https://grandprixindia.in/logo.svg",
      "caption": "Grand Prix India Logo"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://grandprixindia.in/logo.svg",
      "contentUrl": "https://grandprixindia.in/logo.svg",
      "caption": "Grand Prix India Logo"
    },
    "url": "https://grandprixindia.in",
    "telephone": "",
    "email": "info@grandprixindia.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "148, Atlanta Tower, Jamnalal Bajaj Road",
      "addressLocality": "Nariman Point",
      "addressRegion": "Maharashtra",
      "postalCode": "400021",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "IN",
      "addressRegion": "Maharashtra",
      "addressLocality": "Mumbai"
    },
    "priceRange": "$$",
    "description": "Leading motorsport and entertainment company in India delivering world-class racing events, Formula 1, MotoGP, and sports infrastructure since 2006."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bharat Sadanand Shetty",
    "jobTitle": "Founder and Managing Director",
    "worksFor": {
      "@type": "Organization",
      "name": "Grandprix (India) Private Limited",
      "url": "https://grandprixindia.in"
    },
    "description": "Bharat Sadanand Shetty is the visionary Founder and Managing Director of Grandprix (India) Private Limited, a leading Mumbai-based company in the events, entertainment, and recreation industry."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbListSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProjectSchema({ project }: { project: { title: string; description: string; location: string; fullDescription?: string } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": project.title,
    "description": project.fullDescription || project.description,
    "location": {
      "@type": "Place",
      "name": project.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Maharashtra",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Grandprix (India) Private Limited",
      "alternateName": "Grand Prix India",
      "url": "https://grandprixindia.in"
    },
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

