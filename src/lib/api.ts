import { Business } from '@/types/business'
import fs from 'fs/promises'
import path from 'path'

// This is a mock implementation. Replace with actual API call in production
export async function getBusiness(id: string): Promise<Business | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'businesses.json')
    const jsonData = await fs.readFile(filePath, 'utf8')
    const businesses: Business[] = JSON.parse(jsonData)
    
    const business = businesses.find(b => b.businessUniqueId === id)
    return business || null
  } catch (error) {
    console.error('Error loading business:', error)
    return null
  }
} 