import { ServiceStructuredData } from '@/components/StructuredData';
import { ConsultationForm } from './ConsultationForm';

export default function ConsultationPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <ServiceStructuredData 
        name="Free GSA Contract Consultation"
        description="30-minute consultation with GSA contract experts to assess your business readiness and provide personalized guidance for obtaining a GSA Schedule contract. Our experts at Puget Capture & Acquisition will help evaluate your readiness for federal contracting and guide you through the GSA Schedule process."
      />
      
      <section className="w-full max-w-7xl mx-auto px-4 py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Is Your Business Ready for a Federal Contract?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation with our federal acquisition experts.
            Get personalized guidance tailored to your business goals, including:
          </p>
        </div>

        <ConsultationForm />
      </section>
    </main>
  );
} 