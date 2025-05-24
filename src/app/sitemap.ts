import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pugetca.com'
  
  // You could maintain specific last modified dates for each page
  const pages = [
    {
      url: baseUrl,
      lastModified: new Date('2024-03-21'), // Update with actual last modified date
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2024-03-21'), // Update with actual last modified date
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2024-03-20'), // Update with actual last modified date
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/gsa-schedule`,
      lastModified: new Date('2024-03-20'), // Update with actual last modified date
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/federal-advisory`,
      lastModified: new Date('2024-03-20'), // Update with actual last modified date
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/contract-management`,
      lastModified: new Date('2024-03-20'), // Update with actual last modified date
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2024-03-21'), // Update with actual last modified date
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/free-consultation`,
      lastModified: new Date('2024-03-21'), // Update with actual last modified date
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  return pages
}
