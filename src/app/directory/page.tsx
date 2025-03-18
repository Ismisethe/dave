import { Metadata } from 'next'
import { getBusinesses } from '@/lib/api'
import { SearchParams } from '@/types/search'
import { Business } from '@/types/business'
import DirectoryFilters from '@/components/DirectoryFilters'
import BusinessCard from '@/components/BusinessCard'
import Pagination from '@/components/Pagination'
import SearchBar from '@/components/SearchBar'
import SeoContent from '@/components/SeoContent'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'NYC Tow Truck Directory | Find Licensed Tow Truck Companies',
  description: 'Search and find licensed tow truck companies in New York City. Filter by borough, enrollment status, and more.',
  keywords: 'tow truck, NYC tow truck, licensed tow truck, DARP, ROTOW, New York City tow truck directory'
}

interface Props {
  searchParams: SearchParams
}

export default async function DirectoryPage({ searchParams }: Props) {
  const { businesses, totalPages, currentPage } = await getBusinesses(searchParams)

  // Group businesses by borough
  const businessesByBorough = businesses.reduce((acc: Record<string, Business[]>, business: Business) => {
    const borough = business.borough
    if (!acc[borough]) {
      acc[borough] = []
    }
    acc[borough].push(business)
    return acc
  }, {})

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">NYC Tow Truck Directory</h1>
          <p className="text-gray-600">
            Find licensed tow truck companies in New York City. Filter by borough and certification status.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Suspense fallback={<div>Loading filters...</div>}>
              <DirectoryFilters searchParams={searchParams} />
            </Suspense>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <Suspense fallback={<div>Loading search...</div>}>
                <SearchBar searchParams={searchParams} />
              </Suspense>
            </div>

            {/* Businesses by Borough */}
            <div className="space-y-8">
              {Object.entries(businessesByBorough).map(([borough, boroughBusinesses]) => (
                <div key={borough} className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{borough}</h2>
                  <div className="space-y-4">
                    {(boroughBusinesses as Business[]).map((business: Business) => (
                      <BusinessCard key={business.businessUniqueId} business={business} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  searchParams={searchParams}
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-12">
          <SeoContent />
        </div>
      </div>
    </div>
  )
} 