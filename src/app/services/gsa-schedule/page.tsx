import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Script from 'next/script'

const features = [
  'GSA Schedule Eligibility Review',
  'Proposal Preparation & Document Collection',
  'Compliance Support',
  'GSA eOffer Submission Guidance',
]

const benefits = [
  'Commercial businesses seeking to enter the federal marketplace',
  'Companies looking to expand their federal contracting opportunities',
  'Organizations needing guidance through the GSA Schedule process',
]

export default function GSASchedulePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "How long does the GSA Schedule process take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typically 3-6 months from preparation to award, depending on complexity and your organization's readiness. Our expertise helps streamline the process."
              }
            }, {
              "@type": "Question",
              "name": "What are the eligibility requirements?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Generally, two years of business history and strong financial health are basic requirements. We'll help you assess your readiness and prepare documentation."
              }
            }]
          })
        }}
      />
      <Breadcrumbs />
      {/* Hero Banner */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900">GSA Schedule Services</h1>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Expert guidance through GSA Schedule preparation, submission, and maintenance. 
            We help you navigate the complex process with confidence.
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
            A GSA Schedule contract opens doors to billions in federal spending, providing a 
            streamlined way to sell to government agencies. Our expertise ensures you navigate 
            this complex process successfully and maintain compliance throughout the contract lifecycle.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* FAQ Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How long does the GSA Schedule process take?
              </h3>
              <p className="text-lg text-gray-700">
                Typically 3-6 months from preparation to award, depending on complexity and 
                your organization's readiness. Our expertise helps streamline the process.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What are the eligibility requirements?
              </h3>
              <p className="text-lg text-gray-700">
                Generally, two years of business history and strong financial health are basic requirements. 
                We'll help you assess your readiness and prepare documentation.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your GSA Schedule needs and learn how 
            we can help you succeed in the federal marketplace.
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
  title: 'GSA Schedule Consulting Services',
  description: 'Expert GSA Schedule consulting services to help you navigate the GSA Schedule application process, maintain compliance, and maximize your contract success.',
  openGraph: {
    title: 'GSA Schedule Consulting Services',
    description: 'Expert GSA Schedule consulting services to help you navigate the GSA Schedule application process.',
  }
} 