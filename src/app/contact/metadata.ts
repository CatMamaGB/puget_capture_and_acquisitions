import { Metadata } from 'next';
import { COMPANY_NAME, COMPANY_URL } from '@/constants';

export const metadata: Metadata = {
  title: `Contact Us | ${COMPANY_NAME}`,
  description: 'Get in touch with our federal contracting experts. We help businesses navigate the federal marketplace successfully.',
  openGraph: {
    title: `Contact Us | ${COMPANY_NAME}`,
    description: 'Get in touch with our federal contracting experts. We help businesses navigate the federal marketplace successfully.',
    type: 'website',
    url: `${COMPANY_URL}/contact`,
    siteName: COMPANY_NAME,
    locale: 'en_US',
  },
  alternates: {
    canonical: `${COMPANY_URL}/contact`
  }
}; 