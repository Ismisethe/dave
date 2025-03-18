'use client'

import { useRouter, useSearchParams } from 'next/navigation'

interface DirectoryFiltersProps {
  filters: {
    borough?: string
    enrollmentStatus?: 'DARP' | 'ROTOW' | 'BOTH'
  }
}

export default function DirectoryFilters({ filters }: DirectoryFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilter = (key: string, value: string | undefined) => {
    const params = new URLSearchParams(searchParams.toString())
    
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
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="borough" className="block text-sm font-medium text-gray-700 mb-2">
            Borough
          </label>
          <select
            id="borough"
            value={filters.borough || ''}
            onChange={(e) => updateFilter('borough', e.target.value || undefined)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">All Boroughs</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Staten Island">Staten Island</option>
          </select>
        </div>

        <div>
          <label htmlFor="enrollment" className="block text-sm font-medium text-gray-700 mb-2">
            Program Enrollment
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="darp"
                checked={searchParams.get('darpStatus') === 'ENROLLED'}
                onChange={(e) => updateFilter('darpStatus', e.target.checked ? 'ENROLLED' : undefined)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="darp" className="ml-2 text-sm text-gray-700">
                DARP
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rotow"
                checked={searchParams.get('rotowStatus') === 'ENROLLED'}
                onChange={(e) => updateFilter('rotowStatus', e.target.checked ? 'ENROLLED' : undefined)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="rotow" className="ml-2 text-sm text-gray-700">
                ROTOW
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 