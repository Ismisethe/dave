"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Business } from '@/types/business'
import BusinessImageGallery from './BusinessImageGallery'
import Image from 'next/image'

interface BusinessCardProps {
  business: Business
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const [mapError, setMapError] = useState(false)

  const getEnrollmentStatusColor = (status: string) => {
    switch (status) {
      case 'ENROLLED':
        return 'bg-green-100 text-green-800'
      case 'NOT_ENROLLED':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getEnrollmentStatusText = (status: string) => {
    switch (status) {
      case 'ENROLLED':
        return 'Enrolled'
      case 'NOT_ENROLLED':
        return 'Not Enrolled'
      default:
        return 'Unknown'
    }
  }

  const address = `${business.buildingNumber} ${business.street}${business.unit ? `, ${business.unit}` : ''}, ${business.borough}, NY ${business.zipCode}`
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(address)}&zoom=15&maptype=roadmap`
  const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(address)}`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`

  const handleMapError = () => {
    setMapError(true)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src="/Images/towtruck.jpeg"
          alt={business.businessName}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white mb-1">{business.businessName}</h3>
          <p className="text-gray-200">{business.borough}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          {business.darpEnrollmentStatus === 'ENROLLED' && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              DARP Certified
            </span>
          )}
          {business.rotowEnrollmentStatus === 'ENROLLED' && (
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              ROTOW Certified
            </span>
          )}
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-gray-600">
            <span className="font-medium">Address:</span> {business.buildingNumber} {business.street}, {business.borough}, NY {business.zipCode}
          </p>
          {business.phone && (
            <p className="text-gray-600">
              <span className="font-medium">Phone:</span> {business.phone}
            </p>
          )}
        </div>

        <Link
          href={`/business/${business.businessUniqueId}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full text-center font-medium"
        >
          View Details →
        </Link>
      </div>
    </div>
  )
} 