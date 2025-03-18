'use client'

import { useRouter } from 'next/navigation'
import { SearchParams } from '@/types/search'

interface DirectoryFiltersProps {
  searchParams?: SearchParams
}

export default function DirectoryFilters({ searchParams = {} }: DirectoryFiltersProps) {
  const router = useRouter()

  const updateFilter = (key: string, value: string | undefined) => {
    const params = new URLSearchParams(window.location.search)
    
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }

    // Reset page when filters change
    params.delete('page')
    
    router.push(`/directory?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      
      {/* Borough Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Borough</h3>
        <select
          name="borough"
          defaultValue={searchParams?.borough || ''}
          onChange={(e) => updateFilter('borough', e.target.value || undefined)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">All Boroughs</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="Bronx">Bronx</option>
          <option value="Staten Island">Staten Island</option>
        </select>
      </div>

      {/* Certification Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Certifications</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="darpStatus"
              value="ENROLLED"
              defaultChecked={searchParams?.darpStatus === 'ENROLLED'}
              onChange={(e) => updateFilter('darpStatus', e.target.checked ? 'ENROLLED' : undefined)}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">DARP Certified</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="rotowStatus"
              value="ENROLLED"
              defaultChecked={searchParams?.rotowStatus === 'ENROLLED'}
              onChange={(e) => updateFilter('rotowStatus', e.target.checked ? 'ENROLLED' : undefined)}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">ROTOW Certified</span>
          </label>
        </div>
      </div>
    </div>
  )
} 