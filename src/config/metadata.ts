import { COMPANY_NAME } from '@/constants';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pugetca.com';

export const siteMetadata = {
  title: COMPANY_NAME,
  description: 'Your Path to Federal Contracts Starts Here – Expert guidance for GSA Schedules and government contracting success.',
  siteUrl: baseUrl,
  ogImage: `${baseUrl}/og-image.jpg`,
  social: {
    linkedin: 'https://www.linkedin.com/company/pugetca',
  },
};

export function generateMetadata(
  title?: string,
  description: string = siteMetadata.description
) {
  const displayTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title;

  return {
    title: displayTitle,
    description,
    openGraph: {
      title: displayTitle,
      description,
      url: siteMetadata.siteUrl,
      siteName: siteMetadata.title,
      images: [
        {
          url: siteMetadata.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
} 