'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '@/config/images';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Free Consultation', href: '/free-consultation' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo with optimized fallback */}
          <Link 
            href="/" 
            aria-label="Homepage - Puget Capture & Acquisition"
            className="flex-shrink-0"
          >
            <div className="relative w-[280px] sm:w-[500px] h-[70px] sm:h-[120px]">
              <Image 
                src="/images/logo-horizontal.png"
                alt="Puget Capture & Acquisition"
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
                aria-label="Puget Capture & Acquisition logo"
                className="hidden text-2xl sm:text-3xl font-bold text-gray-800 absolute inset-0 flex items-center justify-center"
              >
                Puget Capture & Acquisition
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-700 hover:text-deepNavy transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button - Added aria-expanded */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu - Added aria-label and id */}
        {isOpen && (
          <nav 
            className="md:hidden py-4" 
            aria-label="Mobile navigation"
            id="mobile-menu"
          >
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-700 hover:text-deepNavy transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 