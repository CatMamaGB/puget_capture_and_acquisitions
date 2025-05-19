import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { CalendlyScript } from '@/components/CalendlyScript';
import '@/styles/globals.css';
import { Navbar } from '@/components/Navbar';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

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
        url: '/images/share-logo.png',
        width: 1200,
        height: 630,
        alt: 'Puget Capture & Acquisition Logo',
      },
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
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <CalendlyScript />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FSFBG0LJPH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FSFBG0LJPH');
          `}
        </Script>

        {/* Apple Metadata */}
        <meta name="apple-mobile-web-app-title" content="PCA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* PWA Manifest & Windows */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#5489a9" />
        <meta name="theme-color" content="#5489a9" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
