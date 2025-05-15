'use client';

import { InlineWidget } from 'react-calendly';

export default function CalendlyWidget() {
  return (
    <InlineWidget 
      url="https://calendly.com/pugetca/30min" 
      styles={{
        height: '850px'
      }}
    />
  );
} 