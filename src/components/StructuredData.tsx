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
      url: 'https://pugetca.com',
    },
    url: 'https://pugetca.com/free-consultation',
    areaServed: 'United States',
    serviceType:[
    'GSA Contract Consultation',
    'Contract Management',
    'Federal Advisory Services',
    'Federal Contract Management',
    'GSA Schedule Management',
    'GSA Schedule Consulting'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 