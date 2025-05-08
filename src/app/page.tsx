import React from 'react';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-white to-fogGray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-deepNavy mb-6">
            Guiding You Into the Federal Marketplace
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Puget Capture & Acquisitions specializes in helping service-based businesses secure, 
            manage, and grow federal contracts through GSA Schedules and strategic guidance.
          </p>
          <Button as={Link} href="/contact" size="lg">
            Let's Get Started
          </Button>
        </div>
      </Section>
    </>
  );
} 