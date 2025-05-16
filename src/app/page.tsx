import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Container } from '@/components/ui/Container';
import { CheckIcon } from '@heroicons/react/24/solid'

export default function HomePage() {
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
            "description": "Federal consulting services provider",
            "url": "https://www.pugetca.com",
            "logo": "https://www.pugetca.com/images/logo-icon.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "info@pugetca.com"
            }
          })
        }}
      />
      <main>
        <div className="w-full">
          {/* Hero Section */}
          <section 
            className="relative w-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/hero-background.png)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <Container>
              <div className="py-12 md:py-20">
                <div className="text-center relative z-10">
                  <div className="backdrop-blur-sm bg-black/20 px-6 py-4 rounded-lg max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white mb-6">
                      Guiding You Through the Federal Marketplace
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
                      We help companies navigate federal contracts
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* CTA Section */}
          <section className="w-full bg-blue-50">
            <Container>
              <div className="py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl mb-8">
                  Book a free consultation with our GSA contract experts to assess your readiness.
                </p>
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
      </main>
    </>
  );
} 