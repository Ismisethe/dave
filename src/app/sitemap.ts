import { MetadataRoute } from 'next'

// This is a mock implementation. Replace with actual data in production
const mockBusinesses = [
  {
    businessUniqueId: 'BA-1114442-2022',
    businessName: 'Sample Tow Truck Company 1'
  },
  {
    businessUniqueId: 'BA-1226103-2022',
    businessName: 'Sample Tow Truck Company 2'
  }
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://newyorktowtrucks.com'

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/directory`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
  ]

  // Dynamic routes for businesses
  const businessRoutes = mockBusinesses.map((business) => ({
    url: `${baseUrl}/business/${business.businessUniqueId}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...businessRoutes]
} 