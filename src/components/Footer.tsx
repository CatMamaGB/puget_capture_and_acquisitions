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
      <Container>
        <div className="py-8 max-w-6xl mx-auto">
          {/* Main Content - 3 columns on desktop */}
          <div className="flex flex-col space-y-8 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            {/* Company Info Column */}
            <div className="md:col-span-5 md:col-start-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/images/logo-icon.png" 
                  alt={`${COMPANY_NAME} Logo Icon`}
                  width={40} 
                  height={40} 
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="font-bold text-lg text-white">{COMPANY_NAME}</h4>
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
                >
                  <FaLinkedin className="text-2xl text-gray-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-2">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/free-consultation" className="text-gray-400 hover:text-white transition-colors">Free Consultation</Link></li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="md:col-span-2">
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services#gsa-schedule" className="text-gray-400 hover:text-white transition-colors">GSA Schedule</Link></li>
                <li><Link href="/services#contract-management" className="text-gray-400 hover:text-white transition-colors">Contract Management</Link></li>
                <li><Link href="/services#federal-advisory" className="text-gray-400 hover:text-white transition-colors">Federal Advisory</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-4">
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Puget Capture & Acquisition. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
} 