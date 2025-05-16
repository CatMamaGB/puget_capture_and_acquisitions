'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/ContactForm';
import { CONTACT_EMAIL } from '@/constants';

export default function ContactPage() {
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
    <>
      <Section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-deepNavy mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Ready to explore federal contracting opportunities? Get in touch with our team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
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

            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-deepNavy mb-4">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
} 