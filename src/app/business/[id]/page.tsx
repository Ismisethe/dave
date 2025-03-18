import { Metadata } from 'next'
import { getBusiness } from '@/lib/api'
import { Business } from '@/types/business'
import fs from 'fs/promises'
import path from 'path'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const business = await getBusiness(params.id)
  
  if (!business) {
    return {
      title: 'Business Not Found - NYC Tow Truck Directory',
      description: 'The requested business could not be found in our directory.',
    }
  }
  
  return {
    title: `${business.businessName} - NYC Tow Truck Directory`,
    description: `View details about ${business.businessName}, a licensed tow truck company in ${business.borough}, New York City.`,
  }
}

export async function generateStaticParams() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'businesses.json')
    const jsonData = await fs.readFile(filePath, 'utf8')
    const data = JSON.parse(jsonData)
    
    return data.map((business: Business) => ({
      id: business.businessUniqueId,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function BusinessPage({ params }: Props) {
  const business = await getBusiness(params.id)

  if (!business) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64 bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                {business.businessName}
              </h1>
            </div>
          </div>
          
          <div className="p-8">
            {business.dbaTradeName && (
              <p className="text-gray-600 text-sm mb-6 italic">
                DBA: {business.dbaTradeName}
              </p>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <svg className="h-4 w-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Location
                  </h3>
                  <p className="text-gray-600">
                    {business.buildingNumber} {business.street}
                    {business.unit && `, ${business.unit}`}
                  </p>
                  <p className="text-gray-600">
                    {business.borough}, NY {business.zipCode}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <svg className="h-4 w-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    License Information
                  </h3>
                  <p className="text-gray-600">
                    License #{business.licenseNumber}
                    <br />
                    Status: <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      business.licenseStatus === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {business.licenseStatus}
                    </span>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <svg className="h-4 w-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Program Enrollment
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                      business.darpEnrollmentStatus === 'ENROLLED' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      DARP: {business.darpEnrollmentStatus}
                    </span>
                    <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                      business.rotowEnrollmentStatus === 'ENROLLED' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      ROTOW: {business.rotowEnrollmentStatus}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <svg className="h-4 w-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Community Information
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Community Board: {business.communityBoard}
                    <br />
                    Council District: {business.councilDistrict}
                    <br />
                    Police Precinct: {business.policePrecinct}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Map Location</h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(`${business.buildingNumber} ${business.street}, ${business.borough}, NY ${business.zipCode}`)}`}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Contact Information</h3>
                  <p className="text-gray-600">
                    <strong>Address:</strong><br />
                    {business.buildingNumber} {business.street}
                    {business.unit && `, ${business.unit}`}<br />
                    {business.borough}, NY {business.zipCode}
                  </p>
                  {business.phone && (
                    <p className="text-gray-600 mt-2">
                      <strong>Phone:</strong> {business.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 