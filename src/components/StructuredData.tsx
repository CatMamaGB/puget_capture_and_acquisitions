import { ReactNode } from 'react';

export function ServiceStructuredData({ 
  name, 
  description 
}: { 
  name: string; 
  description: string; 
}): ReactNode {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Puget Capture & Acquisition',
      email: 'info@pugetca.com',
      url: 'https://www.pugetca.com',
    },
    url: 'https://www.pugetca.com/free-consultation',
    areaServed: 'United States',
    serviceType: 'GSA Contract Consultation'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 