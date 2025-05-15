import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import { ServiceStructuredData } from '@/components/StructuredData';
import { COMPANY_NAME, COMPANY_URL } from '@/constants';
import dynamic from 'next/dynamic';

// Dynamically import Calendly component with ssr disabled
const CalendlyWidget = dynamic(
  () => import('@/components/CalendlyWidget'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: `Free GSA Contract Consultation | ${COMPANY_NAME}`,
  description: 'Schedule a free 30-minute consultation with our GSA contract experts to assess your business readiness and get personalized guidance.',
  openGraph: {
    title: `Free GSA Contract Consultation | ${COMPANY_NAME}`,
    description: 'Schedule a free 30-minute consultation with our GSA contract experts to assess your business readiness and get personalized guidance.',
    type: 'website',
    url: `${COMPANY_URL}/free-consultation`,
    siteName: COMPANY_NAME,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free GSA Contract Consultation | ${COMPANY_NAME}`,
    description: 'Schedule a free 30-minute consultation with our GSA contract experts.',
  },
  alternates: {
    canonical: `${COMPANY_URL}/free-consultation`
  }
};

const consultationBenefits = [
  'Assess your business readiness',
  'Get personalized guidance from GSA experts',
  'Understand the complete GSA contract process',
  'Learn about required documentation and next steps'
];

export default function ConsultationPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <ServiceStructuredData 
        name="Free GSA Contract Consultation"
        description="30-minute consultation with GSA contract experts to assess your business readiness and provide personalized guidance for obtaining a GSA Schedule contract. Our experts at Puget Capture & Acquisition will help evaluate your readiness for federal contracting and guide you through the GSA Schedule process."
      />
      
      <section className="w-full max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="space-y-8 sm:space-y-12">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Is Your Business Ready for a GSA Contract?
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule a free 30-minute consultation with our experts to get personalized guidance 
              and determine if your business is ready for a GSA Schedule contract.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="max-w-xl mx-auto">
            <ul className="space-y-3">
              {consultationBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Calendly Section */}
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-center text-2xl font-bold mb-6">
              Schedule Your Free Consultation
            </h2>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              <CalendlyWidget />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 