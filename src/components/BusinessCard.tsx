"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Business } from '@/types/business'
import BusinessImageGallery from './BusinessImageGallery'

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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-white text-center px-4">
            {business.businessName}
          </h2>
        </div>
      </div>

      <div className="p-6">
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
                Status: <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getEnrollmentStatusColor(business.licenseStatus)}`}>
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
                <span className={`px-3 py-1 text-sm rounded-full font-medium ${getEnrollmentStatusColor(business.darpEnrollmentStatus)}`}>
                  DARP: {getEnrollmentStatusText(business.darpEnrollmentStatus)}
                </span>
                <span className={`px-3 py-1 text-sm rounded-full font-medium ${getEnrollmentStatusColor(business.rotowEnrollmentStatus)}`}>
                  ROTOW: {getEnrollmentStatusText(business.rotowEnrollmentStatus)}
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

            <div className="flex gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C6.478 0 3.618 2.86 3.618 6.382c0 4.788 6.382 13.618 6.382 13.618s6.382-8.83 6.382-13.618C16.382 2.86 13.522 0 10 0zm0 9.573a3.191 3.191 0 110-6.382 3.191 3.191 0 010 6.382z" />
                </svg>
                View on Maps
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.873l6.436 6.437a.75.75 0 01-1.06 1.06L11 6.995v9.255a.75.75 0 01-1.5 0V6.995L5.124 11.37a.75.75 0 01-1.06-1.06L10 3.873z" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              {mapError ? (
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">Map not available</p>
                </div>
              ) : (
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  onError={handleMapError}
                />
              )}
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <BusinessImageGallery />
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <Link
            href={`/business/${business.businessUniqueId}`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Full Details
            <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 