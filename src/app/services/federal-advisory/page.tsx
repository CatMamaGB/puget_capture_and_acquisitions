import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Script from 'next/script'

const features = [
  'Market Research & Opportunity Identification',
  'Strategic Capture Planning',
  'Partnering & Teaming Strategy',
  'Risk Mitigation Guidance',
  'Growth Strategy Development',
]

const benefits = [
  'Companies new to federal contracting',
  'Established contractors seeking growth',
  'Organizations needing strategic direction',
  'Businesses looking to expand their federal presence',
]

export default function FederalAdvisoryPage() {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Federal Advisory Services",
            "description": "Expert federal advisory services helping organizations navigate complex federal regulations and requirements.",
            "provider": {
              "@type": "Organization",
              "name": "Puget Capture & Acquisition"
            },
            "serviceType": "Federal Consulting",
            "areaServed": "United States"
          })
        }}
      />
      <Breadcrumbs />
      {/* Hero Banner */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900">Strategic Federal Advisory Services</h1>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Get expert guidance to help you position your business for long-term success 
            in the federal marketplace.
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4">
        {/* What's Included Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">What&apos;s Included</h2>
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start">
                <CheckIcon className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-gray-200" />

        {/* Who This Helps Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Who This Helps</h2>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start">
                <CheckIcon className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-gray-200" />

        {/* Why It Matters Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Why It Matters</h2>
          <p className="text-lg text-gray-700">
            Success in federal contracting requires strategic planning and market understanding. 
            Our advisory services help you make informed decisions, identify the right 
            opportunities, and develop effective strategies for sustainable growth in the 
            federal marketplace.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* FAQ Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you identify contract opportunities?
              </h3>
              <p className="text-lg text-gray-700">
                We use advanced market intelligence tools and industry expertise to identify 
                opportunities that align with your capabilities and growth objectives. Our 
                approach combines data analysis with strategic insight.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What makes a good teaming partner?
              </h3>
              <p className="text-lg text-gray-700">
                Successful teaming partnerships are built on complementary capabilities, 
                strong past performance, and cultural alignment. We help you identify and 
                evaluate potential partners that enhance your competitive position.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Ready to Develop Your Federal Strategy?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your federal market objectives and learn 
            how our advisory services can help you achieve them.
          </p>
          <Link 
            href="/free-consultation"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Book a Free Consultation
          </Link>
        </section>
      </main>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Federal Advisory Services',
  description: 'Expert federal advisory services helping organizations navigate complex federal regulations and compliance requirements.',
  openGraph: {
    title: 'Federal Advisory Services',
    description: 'Expert federal advisory services helping organizations navigate complex federal regulations and compliance requirements.',
  }
} 