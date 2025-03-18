import fs from 'fs/promises'
import path from 'path'
import { Business } from '@/types/business'
import { SearchParams } from '@/types/search'

export async function getBusinesses(searchParams: SearchParams) {
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
        ].filter((field): field is string => field !== undefined).map(field => field.toLowerCase())
        
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
      currentPage: page,
      totalBusinesses
    }
  } catch (error) {
    console.error('Error loading businesses:', error)
    return {
      businesses: [],
      totalPages: 0,
      currentPage: 1,
      totalBusinesses: 0
    }
  }
}

export async function getBusiness(id: string): Promise<Business | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'businesses.json')
    const jsonData = await fs.readFile(filePath, 'utf8')
    const data = JSON.parse(jsonData)
    
    const business = data.find((b: Business) => b.businessUniqueId === id)
    return business || null
  } catch (error) {
    console.error('Error loading business:', error)
    return null
  }
} 