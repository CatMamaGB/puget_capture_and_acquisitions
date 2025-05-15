'use client';

import Script from 'next/script';

export function CalendlyScript() {
  return (
    <Script 
      id="calendly-script"
      src="https://assets.calendly.com/assets/external/widget.js" 
      strategy="afterInteractive"
    />
  );
} 