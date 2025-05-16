'use client';

import { CheckCircle } from 'lucide-react';
import { ServiceStructuredData } from '@/components/StructuredData';
import { COMPANY_NAME } from '@/constants';
import dynamic from 'next/dynamic';

// Update the dynamic import
const CalendlyWidget = dynamic(
  () => import('@/components/CalendlyWidget'),
  { 
    loading: () => <p>Loading calendar...</p>,
    ssr: false
  }
);

const consultationBenefits = [
  'Assessing your readiness to work with the federal government',
  'Identifying relevant federal opportunities in your industry',
  'Exploring how to partner with GSA and other federal agencies',
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
              Is Your Business Ready for a Federal Contract?
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation with our federal acquisition experts.
            Get personalized guidance tailored to your business goals, including:
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