'use client';

import React from 'react';
import { COMPANY_NAME } from '@/constants';

const CONTACT_INFO = {
  brianna: 'bpirro@pugetca.com',
  josh: 'jhouseworth@pugetca.com'
};

export function Footer() {
  return (
    <footer className="bg-[#0c1b39] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold text-white text-lg">{COMPANY_NAME}</h4>
          <p className="text-gray-300 mt-2">Simplifying Federal Contracts for Growing Businesses</p>
        </div>
        <div>
          <h4 className="font-semibold text-white text-lg">Contact Us</h4>
          <p className="text-gray-300 mt-2">info@pugetca.com</p>
          <p className="text-gray-300 italic">LinkedIn: Coming Soon</p>
        </div>
      </div>
      <hr className="my-6 border-gray-600" />
      <p className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </p>
    </footer>
  );
} 