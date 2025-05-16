'use client';

import { InlineWidget } from 'react-calendly';

export function CalendlyWidget() {
  return (
    <div className="calendly-inline-widget" style={{ minHeight: '700px' }}>
      <InlineWidget
        url="https://calendly.com/your-calendly-url"  // Replace with your actual Calendly URL
        styles={{
          height: '700px',
          width: '100%',
        }}
      />
    </div>
  );
}

// Add a default export as well
export default CalendlyWidget; 