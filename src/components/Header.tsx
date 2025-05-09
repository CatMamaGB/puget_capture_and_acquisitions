'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-white shadow-md py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-[500px] h-[120px]">
            <Image 
              src="/images/logo-horizontal.png"
              alt="Puget Capture & Acquisition logo" 
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>
        <nav className="hidden md:flex space-x-12">
          <Link 
            href="/" 
            className="text-lg font-medium text-gray-700 hover:text-deepNavy transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-lg font-medium text-gray-700 hover:text-deepNavy transition-colors"
          >
            About
          </Link>
          <Link 
            href="/services" 
            className="text-lg font-medium text-gray-700 hover:text-deepNavy transition-colors"
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            className="text-lg font-medium text-gray-700 hover:text-deepNavy transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
} 