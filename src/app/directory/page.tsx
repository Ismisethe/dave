import { Metadata } from 'next'
import { getBusiness } from '@/lib/api'
import { Business } from '@/types/business'
import BusinessCard from '@/components/BusinessCard'
import DirectoryFilters from '@/components/DirectoryFilters'
import Pagination from '@/components/Pagination'
import fs from 'fs/promises'
import path from 'path'

export const metadata: Metadata = {
  title: 'NYC Tow Truck Directory | Find Licensed Tow Truck Companies',
  description: 'Search and find licensed tow truck companies in New York City. Filter by borough, enrollment status, and more.',
  keywords: 'tow truck, NYC tow truck, licensed tow truck, DARP, ROTOW, New York City tow truck directory'
}

interface SearchParams {
  borough?: string
  darpStatus?: string
  rotowStatus?: string
  page?: string
  search?: string
}

async function getBusinesses(searchParams: SearchParams) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'businesses.json')
    const jsonData = await fs.readFile(filePath, 'utf8')
    const data = JSON.parse(jsonData)
    let businesses = data

    // Apply filters
    const borough = searchParams.borough
    const page = Number(searchParams.page) || 1
    const limit = 12
    const searchTerm = searchParams.search?.toLowerCase()

    if (borough) {
      businesses = businesses.filter((b: Business) => b.borough === borough)
    }

    // Apply search filter
    if (searchTerm) {
      businesses = businesses.filter((b: Business) => {
        const searchableFields = [
          b.businessName,
          b.dbaTradeName,
          b.buildingNumber,
          b.street,
          b.borough,
          b.zipCode
        ].filter(Boolean).map(field => field.toLowerCase())
        
        return searchableFields.some(field => field.includes(searchTerm))
      })
    }

    // Filter by enrollment status
    if (searchParams.darpStatus === 'ENROLLED' || searchParams.rotowStatus === 'ENROLLED') {
      businesses = businesses.filter((b: Business) => {
        if (searchParams.darpStatus === 'ENROLLED' && searchParams.rotowStatus === 'ENROLLED') {
          return b.darpEnrollmentStatus === 'ENROLLED' && b.rotowEnrollmentStatus === 'ENROLLED'
        } else if (searchParams.darpStatus === 'ENROLLED') {
          return b.darpEnrollmentStatus === 'ENROLLED'
        } else if (searchParams.rotowStatus === 'ENROLLED') {
          return b.rotowEnrollmentStatus === 'ENROLLED'
        }
        return true
      })
    }

    // Sort by business name
    businesses.sort((a: Business, b: Business) => a.businessName.localeCompare(b.businessName))

    const totalBusinesses = businesses.length
    const totalPages = Math.ceil(totalBusinesses / limit)
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit

    return {
      businesses: businesses.slice(startIndex, endIndex),
      totalPages,
      totalBusinesses
    }
  } catch (error) {
    console.error('Error loading businesses:', error)
    return {
      businesses: [],
      totalPages: 0,
      totalBusinesses: 0
    }
  }
}

export default async function DirectoryPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { businesses, totalPages } = await getBusinesses(searchParams)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          NYC Tow Truck Directory
        </h1>

        {searchParams.search && (
          <div className="mb-6 p-4 bg-white rounded-lg shadow-sm flex justify-between items-center">
            <p className="text-gray-700">
              Showing results for: <span className="font-semibold">{searchParams.search}</span>
            </p>
            <a
              href="/directory"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
            >
              Clear Search
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </a>
          </div>
        )}

        <div className="mb-8">
          <DirectoryFilters filters={{
            borough: typeof searchParams.borough === 'string' ? searchParams.borough : undefined,
            enrollmentStatus: searchParams.darpStatus === 'ENROLLED' && searchParams.rotowStatus === 'ENROLLED' ? 'BOTH' :
                            searchParams.darpStatus === 'ENROLLED' ? 'DARP' :
                            searchParams.rotowStatus === 'ENROLLED' ? 'ROTOW' : undefined
          }} />
        </div>

        {businesses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tow truck companies found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business: Business) => (
              <BusinessCard key={business.businessUniqueId} business={business} />
            ))}
          </div>
        )}

        <div className="mt-8">
          <Pagination currentPage={Number(searchParams.page) || 1} totalPages={totalPages} />
        </div>
      </div>
    </div>
  )
} 