'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function ConsultationForm() {
  const calendarEl = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || document.querySelector('.calendly-inline-widget')) {
      return;
    }

    const initCalendly = () => {
      if (window.Calendly && calendarEl.current && !initialized.current) {
        try {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/pugetca/30min',
            parentElement: calendarEl.current,
            prefill: {},
            utm: {},
            styles: {
              height: '1000px',
              minWidth: '320px'
            }
          });
          initialized.current = true;
        } catch (error) {
          console.error('Error initializing Calendly:', error);
        }
      } else {
        setTimeout(initCalendly, 500);
      }
    };

    initCalendly();

    return () => {
      initialized.current = false;
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div 
        ref={calendarEl} 
        className="focus:outline-none focus:ring-0 bg-white"
        style={{
          width: '100%',
          height: '1000px',
          overflow: 'hidden',
          outline: 'none',
          border: 'none',
          boxShadow: 'none',
          background: 'white'
        }}
      />
    </div>
  );
} 