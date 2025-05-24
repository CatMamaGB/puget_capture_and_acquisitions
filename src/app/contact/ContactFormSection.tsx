'use client';

import React, { useState } from 'react';
import { ContactForm } from '@/components/ContactForm';

export function ContactFormSection() {
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // your form data
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      // Handle success
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-start mt-12">
      <div className="bg-gray-50 p-8 rounded-xl shadow-md flex-1 max-w-2xl">
        <h2 className="text-2xl font-semibold text-deepNavy mb-4">Send Us a Message</h2>
        <ContactForm />
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>

      <div className="md:w-64">
        <h2 className="text-2xl font-semibold text-deepNavy mb-4">Contact Our Team</h2>
        <div className="space-y-4">
          <div>
            <a 
              href="mailto:info@pugetca.com"
              className="text-pugetBlue hover:text-deepNavy transition-colors text-lg"
            >
              info@pugetca.com
            </a>
            <p className="text-gray-600 mt-2">
              We typically respond within 24 business hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 