'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from './ui/Container';
import Image from 'next/image';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Free Consultation', href: '/free-consultation' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Add a spacer div to prevent content from going under fixed nav */}
      <div className="h-[72px]" />
      
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <Container>
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/logo-icon.png"
                alt="Puget Capture & Acquisition Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-lg font-bold text-[#0c1b39]">Puget Capture & Acquisition</span>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#0c1b39] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-[#0c1b39] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </nav>
    </>
  );
} 