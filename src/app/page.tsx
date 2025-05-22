import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Container } from '@/components/ui/Container';
import { CheckIcon } from '@heroicons/react/24/solid'
import Services from '@/components/Services'
import { notifyIndexNow } from '@/utils/indexNow';

export const metadata = {
  title: 'Federal Contracting Services & GSA Schedule Consulting | Puget Capture & Acquisition',
  description: 'Expert federal contracting services including GSA Schedule consulting, contract management, and federal advisory. Streamline your federal marketplace success.',
}

export default async function Home() {
  // You can test it here
  try {
    await notifyIndexNow('https://pugetca.com/services/contract-management');
  } catch (error) {
    console.error('Failed to notify IndexNow:', error);
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Puget Capture & Acquisition",
            "description": "Leading provider of federal contracting services, GSA Schedule consulting, and federal marketplace solutions",
            "url": "https://pugetca.com",
            "logo": "https://pugetca.com/images/logo-icon.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "info@pugetca.com"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://pugetca.com",
              "name": "Federal Contracting Services",
              "description": "Comprehensive federal contracting services and consulting"
            }
          })
        }}
      />
      
      {/* Banner */}
      <div className="bg-blue-600 p-4 text-white text-center">
        <Link href="/free-consultation" className="flex items-center justify-center space-x-2 hover:underline">
          <span className="text-lg font-semibold">Book Your Free Consultation Today!</span>
          <span className="text-xl">→</span>
        </Link>
      </div>

      <div className="w-full">
        {/* Hero Section */}
        <section className="relative w-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-background.png)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <Container>
            <div className="py-12 md:py-20">
              <div className="text-center relative z-10">
                <div className="backdrop-blur-sm bg-black/20 px-6 py-4 rounded-lg max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white mb-6">
                    Guiding You Through the Federal Marketplace
                  </h1>
                  <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
                    Expert guidance through federal contracting, GSA Schedule applications, and contract management—backed by 15+ years of acquisition expertise.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Services />

        {/* CTA Section */}
        <section className="w-full bg-blue-50">
          <Container>
            <div className="py-16 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <h3 className="text-xl mb-8">
                Schedule a Consultation
              </h3>
              <Link 
                href="/free-consultation"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
} 