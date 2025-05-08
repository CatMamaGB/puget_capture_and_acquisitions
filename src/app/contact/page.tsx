'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/ContactForm';
import { CONTACT_EMAIL } from '@/constants';

export default function ContactPage() {
  return (
    <>
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-deepNavy mb-8 text-center">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Ready to explore federal contracting opportunities? Get in touch with our team.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-deepNavy mb-4">Reach Out Directly</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Brianna Pirro</h3>
                  <a 
                    href={`mailto:${CONTACT_EMAIL.BRIANNA}`}
                    className="text-pugetBlue hover:text-deepNavy transition-colors"
                  >
                    {CONTACT_EMAIL.BRIANNA}
                  </a>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Josh Houseworth</h3>
                  <a 
                    href={`mailto:${CONTACT_EMAIL.JOSH}`}
                    className="text-pugetBlue hover:text-deepNavy transition-colors"
                  >
                    {CONTACT_EMAIL.JOSH}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-deepNavy mb-4">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
} 