import { COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE } from '@/constants';

export function ServiceStructuredData({ 
  name, 
  description 
}: { 
  name: string; 
  description: string; 
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 