'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_NAME, NAVIGATION } from '@/constants';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-deepNavy">
            {COMPANY_NAME}
          </Link>
          <div className="hidden md:flex space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-deepNavy transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 