import React from 'react'
import Link from 'next/link'

export default function SeoContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            New York Tow Truck Services: Your Complete Guide to NYC Towing
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead mb-6">
              Looking for reliable tow truck services in New York City? Our comprehensive directory connects you with licensed, professional towing companies across all five boroughs - Manhattan, Brooklyn, Queens, Bronx, and Staten Island.
            </p>

            <h3 className="text-2xl font-semibold mb-4">24/7 Emergency Towing Services in NYC</h3>
            <p className="mb-6">
              Whether you need emergency roadside assistance, heavy-duty towing, or vehicle recovery services, our directory features DARP and ROTOW-certified tow truck operators ready to help 24/7. All listed companies are fully licensed and insured, ensuring safe and reliable service throughout New York City.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Types of Towing Services Available</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Emergency roadside assistance</li>
              <li>Heavy-duty towing for commercial vehicles</li>
              <li>Flatbed towing services</li>
              <li>Motorcycle towing</li>
              <li>Long-distance towing</li>
              <li>Accident recovery services</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Borough-Specific Towing Services</h3>
            <p className="mb-6">
              Our directory covers all NYC boroughs with specialized towing services:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><Link href="/directory?borough=Manhattan" className="text-blue-600 hover:text-blue-800">Manhattan Tow Truck Services</Link> - Available throughout Midtown, Downtown, and Upper Manhattan</li>
              <li><Link href="/directory?borough=Brooklyn" className="text-blue-600 hover:text-blue-800">Brooklyn Tow Truck Services</Link> - Covering all neighborhoods from Williamsburg to Coney Island</li>
              <li><Link href="/directory?borough=Queens" className="text-blue-600 hover:text-blue-800">Queens Tow Truck Services</Link> - Serving from Long Island City to Far Rockaway</li>
              <li><Link href="/directory?borough=Bronx" className="text-blue-600 hover:text-blue-800">Bronx Tow Truck Services</Link> - Available in all Bronx neighborhoods</li>
              <li><Link href="/directory?borough=Staten Island" className="text-blue-600 hover:text-blue-800">Staten Island Tow Truck Services</Link> - Covering the entire borough</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Why Choose Our Directory?</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Verified and licensed tow truck operators</li>
              <li>DARP and ROTOW certified companies</li>
              <li>24/7 emergency service availability</li>
              <li>Transparent pricing and service information</li>
              <li>Customer reviews and ratings</li>
              <li>Easy-to-use search and filter options</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Need Immediate Assistance?</h3>
              <p className="mb-4">
                Browse our directory to find the nearest tow truck service in your area. All listed companies are available 24/7 for emergency assistance.
              </p>
              <Link 
                href="/directory" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Find Tow Truck Services Near You →
              </Link>
            </div>

            <div className="text-sm text-gray-600">
              <p className="mb-2">Popular search terms: NYC tow truck, New York towing service, emergency tow truck, 24/7 towing, heavy duty towing, roadside assistance, vehicle recovery, DARP certified towing, ROTOW certified towing</p>
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 