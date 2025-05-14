import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Puget Capture & Acquisition | Federal Contracting Experts',
  description: 'Helping companies confidently navigate the federal marketplace through GSA Schedules, contract management, and strategic guidance.',
  metadataBase: new URL('https://pugetca.com'),
  openGraph: {
    title: 'Puget Capture & Acquisition',
    description: 'Helping companies confidently navigate the federal marketplace through GSA Schedules, contract management, and strategic guidance.',
    url: 'https://pugetca.com',
    siteName: 'Puget Capture & Acquisition',
    images: [
      {
        url: '/images/share-logo.png', // Make sure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: 'Puget Capture & Acquisition Logo'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puget Capture & Acquisition',
    description: 'Helping companies confidently navigate the federal marketplace.',
    images: ['/images/share-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 