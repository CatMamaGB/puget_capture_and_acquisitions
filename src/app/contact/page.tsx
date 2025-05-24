import { Section } from '@/components/ui/Section';
import { ContactFormSection } from './ContactFormSection';
import Script from 'next/script';
import { COMPANY_NAME, COMPANY_URL } from '@/constants';

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": `Contact ${COMPANY_NAME}`,
            "url": `${COMPANY_URL}/contact`,
            "description": "Get in touch with our federal contracting experts. We help businesses navigate the federal marketplace successfully.",
            "mainEntity": {
              "@type": "Organization",
              "name": COMPANY_NAME,
              "contactPoint": [{
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@pugetca.com",
                "availableLanguage": "English",
                "areaServed": "United States"
              }],
              "potentialAction": {
                "@type": "ContactAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${COMPANY_URL}/contact`,
                  "inLanguage": "en-US",
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                  ]
                }
              }
            }
          })
        }}
      />
      
      <Section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-deepNavy mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Ready to explore federal contracting opportunities? Get in touch with our team.
          </p>

          <ContactFormSection />
        </div>
      </Section>
    </>
  );
} 