'use client';

import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './ui/Container';

// Define the company name directly in the component for now
const COMPANY_NAME = 'Puget Capture & Acquisition';

const navigation = {
  main: [
    // ... existing links ...
    { name: 'Free Consultation', href: '/free-consultation' },
  ],
  // ... rest of the navigation object ...
};

export function Footer() {
  return (
    <footer className="bg-[#0c1b39] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 max-w-6xl mx-auto">
          <div className="flex flex-col space-y-8 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <div className="md:col-span-5 md:col-start-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/logo-icon.png"
                    alt=""
                    role="presentation"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.querySelector('img')?.classList.add('hidden');
                        parent.querySelector('span')?.classList.remove('hidden');
                      }
                    }}
                  />
                  <span
                    role="img"
                    aria-label="Puget Capture & Acquisition icon"
                    className="hidden w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  >
                    P
                  </span>
                </div>
                <div>
                  <strong className="block font-bold text-lg text-white">
                    Puget Capture & Acquisition
                  </strong>
                  <p className="text-sm text-gray-400">
                    Simplifying Federal Contracts for Growing Businesses
                  </p>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col space-y-2">
                <a 
                  href="mailto:info@pugetca.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@pugetca.com
                </a>
                <a
                  href="https://www.linkedin.com/company/puget-capture-acquisition/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                  aria-label="Visit our LinkedIn page"
                >
                  <FaLinkedin className="text-2xl text-gray-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-2">
              <h2 className="text-white font-semibold mb-4">Quick Links</h2>
              <nav aria-label="Quick links">
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/free-consultation" className="text-gray-400 hover:text-white transition-colors">Free Consultation</Link></li>
                </ul>
              </nav>
            </div>

            {/* Services Column */}
            <div className="md:col-span-2">
              <h2 className="text-white font-semibold mb-4">Services</h2>
              <nav aria-label="Services">
                <ul className="space-y-2">
                  <li><Link href="/services#gsa-schedule" className="text-gray-400 hover:text-white transition-colors">GSA Schedule</Link></li>
                  <li><Link href="/services#contract-management" className="text-gray-400 hover:text-white transition-colors">Contract Management</Link></li>
                  <li><Link href="/services#federal-advisory" className="text-gray-400 hover:text-white transition-colors">Federal Advisory</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-4">
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Puget Capture & Acquisition. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 