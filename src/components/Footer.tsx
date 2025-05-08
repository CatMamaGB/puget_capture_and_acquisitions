'use client';

import React from 'react';
import { COMPANY_NAME } from '@/constants';

const CONTACT_INFO = {
  brianna: 'bpirro@pugetca.com',
  josh: 'jhouseworth@pugetca.com'
};

export function Footer() {
  return (
    <footer className="bg-deepNavy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{COMPANY_NAME}</h3>
            <p className="text-fogGray">Guiding You Into the Federal Marketplace</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-fogGray">
              <li>
                <a href={`mailto:${CONTACT_INFO.brianna}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.brianna}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.josh}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.josh}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-fogGray">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 