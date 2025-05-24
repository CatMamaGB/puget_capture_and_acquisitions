import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Script from 'next/script'

const features = [
  'Post-award Contract Support',
  'Modifications & Amendments',
  'Contract Performance Monitoring',
  'Audit Preparation Assistance',
  'Compliance Training & Support',
]

const benefits = [
  'Current GSA Schedule holders',
  'Federal contractors needing compliance support',
  'Companies managing multiple federal contracts',
  'Organizations seeking to maintain contract compliance',
]

export default function ContractManagementPage() {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Contract Management Services",
            "description": "Professional federal contract management services.",
            "provider": {
              "@type": "Organization",
              "name": "Puget Capture & Acquisition"
            },
            "serviceType": "Contract Management",
            "areaServed": "United States"
          })
        }}
      />
      <Breadcrumbs />
      {/* Hero Banner */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900">Contract Management Services</h1>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Maintain full compliance and minimize risk with our contract management services. 
            We help you stay compliant and maximize the value of your federal contracts.
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
            Proper contract management ensures compliance, reduces risks, and maximizes your 
            contract&apos;s potential. Our expertise helps you maintain good standing with federal 
            agencies while optimizing contract performance and value.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* FAQ Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What types of modifications do you handle?
              </h3>
              <p className="text-lg text-gray-700">
                We handle all types of modifications including administrative changes, 
                technical updates, and price adjustments. Our team ensures each modification 
                is properly prepared and submitted.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How often should contracts be reviewed?
              </h3>
              <p className="text-lg text-gray-700">
                We recommend quarterly reviews to ensure ongoing compliance and optimal 
                performance. Regular reviews help identify opportunities and address potential 
                issues early.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Ready to Optimize Your Contract Management?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your contract management needs and learn 
            how we can help you maintain compliance and maximize value.
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
  title: 'Contract Management Services',
  description: 'Professional contract management services to help federal contractors maintain compliance and optimize contract performance.',
  openGraph: {
    title: 'Contract Management Services',
    description: 'Professional contract management services to help federal contractors maintain compliance and optimize contract performance.',
  },
  alternates: {
    canonical: 'https://pugetca.com/services/contract-management'
  }
} 