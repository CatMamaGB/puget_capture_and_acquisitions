import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteMetadata } from '@/config/metadata';
import '@/styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'Your Company Name | Professional Services',
    template: '%s | Your Company Name'
  },
  description: 'Professional consulting services specializing in federal advisory, GSA schedule, and contract management',
  openGraph: {
    title: 'Your Company Name',
    description: 'Professional consulting services',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
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
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-blue-600"
        >
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
          <Header />
          <main id="main-content" className="flex-grow w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 