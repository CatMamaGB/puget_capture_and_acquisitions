import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import ConsultationForm from '@/components/ConsultationForm';

export const metadata: Metadata = {
  title: 'Free GSA Contract Consultation | Puget Capture & Acquisition',
  description: 'Schedule a free 30-minute consultation with our GSA contract experts to assess your business readiness and get personalized guidance.',
};

export default function ConsultationPage() {
  return (
    <div className="py-16 sm:py-20 w-full">
      <div className="space-y-8 w-full">
        <div className="text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 break-words">
            Is Your Business Ready for a GSA Contract?
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Schedule a free 30-minute consultation with our experts to get personalized guidance 
            and determine if your business is ready for a GSA Schedule contract.
          </p>
        </div>

        <div className="max-w-md mx-auto px-4">
          <ul className="space-y-4">
            {['Assess your business readiness', 
              'Get personalized guidance from GSA experts',
              'Understand the complete GSA contract process',
              'Learn about required documentation and next steps'
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-3 text-gray-700">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base flex-1">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-200 mx-4" />

        <div id="consultation-form" className="w-full max-w-md mx-auto px-4">
          <div className="bg-gradient-to-b from-blue-600 to-blue-700 p-1 rounded-xl">
            <div className="bg-white p-4 sm:p-6 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
                  Schedule Your Free Consultation
                </span>
              </h2>
              <ConsultationForm />
              <p className="text-xs sm:text-sm text-gray-500 text-center mt-4">
                We respect your privacy. Your information will never be shared or sold.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 