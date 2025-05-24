'use client';

import { CheckCircle } from 'lucide-react';
import dynamic from 'next/dynamic';

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

export function ConsultationForm() {
  return (
    <div className="space-y-8 sm:space-y-12">
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
  );
} 