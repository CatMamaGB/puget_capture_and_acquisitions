'use client';

import React from 'react';
import { Service } from '@/types';
import Link from 'next/link';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className = '' }: ServiceCardProps) {
  return (
    <article 
      className={`rounded-lg bg-white shadow-md p-6 transition-all hover:shadow-lg ${className}`}
      aria-labelledby={`service-title-${service.id}`}
    >
      {service.icon && (
        <div className="mb-4" aria-hidden="true">
          <span className="text-evergreen text-2xl">{service.icon}</span>
        </div>
      )}
      
      <h3 
        id={`service-title-${service.id}`}
        className="text-xl font-semibold text-deepNavy mb-3"
      >
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-4">{service.description}</p>
      
      <ul className="space-y-2 mb-6" aria-label="Service benefits">
        {service.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="text-evergreen mr-2" aria-hidden="true">•</span>
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        href={`/services#${service.id}`}
        className="inline-block bg-evergreen text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
      </Link>
    </article>
  );
} 