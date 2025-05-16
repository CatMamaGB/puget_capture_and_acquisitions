import Script from 'next/script'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Puget Capture & Acquisition',
  description: 'Guiding you through the federal marketplace with clarity and confidence.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body>{children}</body>
    </html>
  )
} 