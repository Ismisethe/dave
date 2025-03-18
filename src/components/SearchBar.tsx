'use client'

import { useRouter } from 'next/navigation'
import { SearchParams } from '@/types/search'

interface SearchBarProps {
  searchParams?: SearchParams
}

export default function SearchBar({ searchParams = {} }: SearchBarProps) {
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchTerm = formData.get('search') as string
    const params = new URLSearchParams(window.location.search)
    
    if (searchTerm) {
      params.set('search', searchTerm)
    } else {
      params.delete('search')
    }
    
    // Reset page when search changes
    params.delete('page')
    
    router.push(`/directory?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-2xl mx-auto">
      <input
        type="text"
        name="search"
        defaultValue={searchParams?.search || ''}
        placeholder="Search by business name, address, or borough..."
        className="w-full px-6 py-4 text-lg text-gray-900 bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Search
      </button>
    </form>
  )
} 