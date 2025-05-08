'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-deepNavy mb-8 text-center">Our Services</h1>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Comprehensive support for your federal contracting journey, from initial market 
            entry to long-term growth and compliance.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
} 