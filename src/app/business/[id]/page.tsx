import { Metadata } from 'next'
import { getBusiness } from '@/lib/api'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Business } from '@/types/business'
import fs from 'fs/promises'
import path from 'path'

interface BusinessPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BusinessPageProps): Promise<Metadata> {
  const business = await getBusiness(params.id);
  
  if (!business) {
    return {
      title: 'Business Not Found',
      description: 'The requested tow truck business could not be found.'
    }
  }

  return {
    title: `${business.businessName} | NYC Tow Truck Service`,
    description: `Contact ${business.businessName} for professional towing services in ${business.borough}, NYC. Licensed tow truck company offering 24/7 emergency towing and roadside assistance.`,
    openGraph: {
      title: `${business.businessName} | NYC Tow Truck Service`,
      description: `Contact ${business.businessName} for professional towing services in ${business.borough}, NYC. Licensed tow truck company offering 24/7 emergency towing and roadside assistance.`,
    }
  }
}

export async function generateStaticParams() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'businesses.json')
    const jsonData = await fs.readFile(filePath, 'utf8')
    const businesses = JSON.parse(jsonData)
    
    return businesses.map((business: Business) => ({
      id: business.businessUniqueId
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function BusinessPage({ params }: BusinessPageProps) {
  const business = await getBusiness(params.id);

  if (!business) {
    notFound();
  }

  const address = `${business.buildingNumber} ${business.street}, ${business.borough}, NY ${business.zipCode}`
  const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(address)}`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(address)}&zoom=15&maptype=roadmap`

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {business.businessName}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-2 text-gray-600">
                  <p>
                    {business.buildingNumber} {business.street}
                    {business.unit && `, ${business.unit}`}
                  </p>
                  <p>
                    {business.borough}, NY {business.zipCode}
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0C6.478 0 3.618 2.86 3.618 6.382c0 4.788 6.382 13.618 6.382 13.618s6.382-8.83 6.382-13.618C16.382 2.86 13.522 0 10 0zm0 9.573a3.191 3.191 0 110-6.382 3.191 3.191 0 010 6.382z" />
                    </svg>
                    View on Google Maps
                  </a>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.873l6.436 6.437a.75.75 0 01-1.06 1.06L11 6.995v9.255a.75.75 0 01-1.5 0V6.995L5.124 11.37a.75.75 0 01-1.06-1.06L10 3.873z" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Service Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 mb-2">Program Enrollment:</p>
                    <div className="flex flex-wrap gap-2">
                      {business.darpEnrollmentStatus === 'ENROLLED' && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          DARP Program
                        </span>
                      )}
                      {business.rotowEnrollmentStatus === 'ENROLLED' && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          ROTOW Program
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">License Information:</p>
                    <p className="text-sm text-gray-500">
                      License #{business.licenseNumber}
                      <br />
                      Status: {business.licenseStatus}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src={embedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
            <Link href="/directory" className="text-blue-600 hover:text-blue-800">
              ← Back to Directory
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 