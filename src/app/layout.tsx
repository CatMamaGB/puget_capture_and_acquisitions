import '@/styles/globals.css';  
import { Inter } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CalendlyScript } from '@/components/CalendlyScript';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Puget Capture & Acquisition | Federal Contract Services',
  description: 'Helping companies confidently navigate the federal marketplace through GSA Schedules, contract management, and strategic guidance.',
  metadataBase: new URL('https://pugetca.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    other: {
      'msvalidate.01': '8ABD5D5CEAC22CB245001ED86F43BDDE',
    },
  },
  openGraph: {
    title: 'Puget Capture & Acquisition | Federal Contract Services',
    description: 'Helping companies confidently navigate the federal marketplace through GSA Schedules, contract management, and strategic guidance.',
    url: 'https://pugetca.com',
    siteName: 'Puget Capture & Acquisition',
    images: [
      {
        url: '/images/share-logo.png',
        width: 1200,
        height: 630,
        alt: 'Puget Capture & Acquisition - Federal Contracting and GSA Schedule Consulting Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puget Capture & Acquisition | Federal Contract Services',
    description: 'Helping companies confidently navigate the federal marketplace.',
    images: [{
      url: '/images/share-logo.png',
      alt: 'Puget Capture & Acquisition - Federal Contracting and GSA Schedule Consulting Services'
    }],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="PCA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-TileColor" content="#5489a9" />
        <meta name="theme-color" content="#5489a9" />
        <meta name="next-size-adjust" content="true" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
