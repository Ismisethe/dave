import React from 'react'
import Link from 'next/link'

export default function SeoContent() {
  return (
    <section className="py-16 bg-gray-50 rounded-2xl">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          New York Tow Trucks: Your Trusted Partner for Vehicle Recovery
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead mb-8">
            When you need reliable tow truck services in New York City, our directory connects you with licensed, professional operators who are ready to assist 24/7. Whether you're dealing with a breakdown, accident, or need vehicle transport, our listed companies provide comprehensive towing solutions across all five boroughs.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Emergency Towing Services in NYC</h3>
          <p className="mb-6">
            Our directory features tow truck companies that offer:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li>24/7 emergency response</li>
            <li>Heavy-duty towing capabilities</li>
            <li>Flatbed and wheel-lift services</li>
            <li>Long-distance towing</li>
            <li>Accident scene assistance</li>
            <li>Commercial vehicle recovery</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Types of Towing Services Available</h3>
          <p className="mb-6">
            Whether you're driving a compact car or operating a commercial vehicle, our listed companies provide specialized services including:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li>Light-duty towing for cars and SUVs</li>
            <li>Heavy-duty towing for trucks and buses</li>
            <li>Motorcycle towing</li>
            <li>RV and trailer towing</li>
            <li>Off-road recovery</li>
            <li>Long-distance transport</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Borough-Specific Services</h3>
          <p className="mb-6">
            Our directory covers all NYC boroughs with specialized services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link href="/directory?borough=Manhattan" className="text-blue-600 hover:text-blue-800">
              Manhattan Tow Truck Services →
            </Link>
            <Link href="/directory?borough=Brooklyn" className="text-blue-600 hover:text-blue-800">
              Brooklyn Tow Truck Services →
            </Link>
            <Link href="/directory?borough=Queens" className="text-blue-600 hover:text-blue-800">
              Queens Tow Truck Services →
            </Link>
            <Link href="/directory?borough=Bronx" className="text-blue-600 hover:text-blue-800">
              Bronx Tow Truck Services →
            </Link>
            <Link href="/directory?borough=Staten Island" className="text-blue-600 hover:text-blue-800">
              Staten Island Tow Truck Services →
            </Link>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Why Choose Our Directory?</h3>
          <ul className="list-disc pl-6 mb-8">
            <li>All listed companies are licensed and insured</li>
            <li>DARP and ROTOW certified operators</li>
            <li>Transparent pricing and service information</li>
            <li>24/7 availability across NYC</li>
            <li>Verified customer reviews and ratings</li>
            <li>Emergency response guarantees</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
            <p className="mb-4">
              If you're currently in need of towing services, use our search bar above to find the nearest available operator. For emergency situations, many of our listed companies offer priority response times.
            </p>
            <Link
              href="/directory"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Find Tow Services Now →
            </Link>
          </div>

          <div className="text-sm text-gray-600">
            <p className="mb-2">Popular search terms:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 rounded-full">24/7 tow truck NYC</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full">emergency towing Manhattan</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full">heavy duty towing Brooklyn</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full">cheap tow truck Queens</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full">DARP certified towing</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full">ROTOW tow services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 