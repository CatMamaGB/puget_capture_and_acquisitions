import { COMPANY_NAME } from '@/constants';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pugetcapture.com';

export const siteMetadata = {
  title: COMPANY_NAME,
  description: 'Your Path to Federal Contracts Starts Here - Expert guidance for GSA Multiple Award Schedule and government contracting success.',
  siteUrl: baseUrl,
  ogImage: `${baseUrl}/og-image.jpg`,
  twitter: {
    handle: '@PugetCapture',
    cardType: 'summary_large_image',
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
    twitter: {
      card: siteMetadata.twitter.cardType,
      title: displayTitle,
      description,
      images: [siteMetadata.ogImage],
    },
  };
} 