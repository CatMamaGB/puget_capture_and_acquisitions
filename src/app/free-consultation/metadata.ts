import { Metadata } from 'next';
import { COMPANY_NAME, COMPANY_URL } from '@/constants';

export const metadata: Metadata = {
  title: `Free GSA Contract Consultation | ${COMPANY_NAME}`,
  description: 'Schedule a free 30-minute consultation with our GSA contract experts to assess your business readiness and get personalized guidance.',
  openGraph: {
    title: `Free GSA Contract Consultation | ${COMPANY_NAME}`,
    description: 'Schedule a free 30-minute consultation with our GSA contract experts to assess your business readiness and get personalized guidance.',
    type: 'website',
    url: `${COMPANY_URL}/free-consultation`,
    siteName: COMPANY_NAME,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free GSA Contract Consultation | ${COMPANY_NAME}`,
    description: 'Schedule a free 30-minute consultation with our GSA contract experts.',
  },
  alternates: {
    canonical: `${COMPANY_URL}/free-consultation`
  }
}; 