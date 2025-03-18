import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | NYC Tow Truck Directory',
  description: 'Learn about the DARP and ROTOW programs, and how they regulate tow truck companies in New York City.',
  keywords: 'DARP, ROTOW, tow truck regulations, NYC tow truck, tow truck programs',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About NYC Tow Truck Directory</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            The NYC Tow Truck Directory is your trusted resource for finding licensed and authorized tow truck companies in New York City. We&apos;ve partnered with the Department of Consumer and Worker Protection (DCWP) to provide accurate, up-to-date information about tow truck operators who are &quot;DARP&quot; (Direct Access Response Program) and &quot;ROTOW&quot; (Response to On-Street Towing Operations) certified.
          </p>
        </section>

        <section id="darp" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">DARP Program</h2>
          <p className="text-gray-600 mb-6">
            Our directory features companies that are &quot;DARP&quot; certified, meaning they&apos;ve been authorized to respond to emergency towing requests from the NYPD.
          </p>
          <p className="text-gray-600 mb-4">
            The Directed Accident Response Program (DARP) is a city-regulated program that ensures tow truck companies follow proper procedures when responding to accidents. Companies enrolled in DARP must:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Respond to accidents within a specified time frame</li>
            <li>Follow standardized pricing guidelines</li>
            <li>Maintain proper insurance coverage</li>
            <li>Keep detailed records of all tows</li>
            <li>Provide clear documentation to customers</li>
          </ul>
          <p className="text-gray-600">
            When you see a company marked as "DARP Enrolled" in our directory, it means they have met these requirements and are authorized to respond to accidents in NYC.
          </p>
        </section>

        <section id="rotow" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">ROTOW Program</h2>
          <p className="text-gray-600 mb-6">
            We&apos;re committed to maintaining the most current and accurate information about tow truck companies in NYC.
          </p>
          <p className="text-gray-600 mb-4">
            The Removal of Towed Vehicles (ROTOW) program regulates how tow truck companies handle and store towed vehicles. Companies enrolled in ROTOW must:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Maintain a secure storage facility</li>
            <li>Provide 24/7 access to stored vehicles</li>
            <li>Follow standardized release procedures</li>
            <li>Keep detailed records of stored vehicles</li>
            <li>Comply with pricing regulations</li>
          </ul>
          <p className="text-gray-600">
            Companies marked as "ROTOW Enrolled" in our directory have met these requirements and are authorized to store towed vehicles in NYC.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How to Use This Directory</h2>
          <p className="text-gray-600 mb-4">
            Our directory provides several ways to find the tow truck company you need:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Search by company name or location</li>
            <li>Filter by borough</li>
            <li>Filter by program enrollment (DARP/ROTOW)</li>
            <li>View detailed information about each company</li>
            <li>Get directions to company locations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            If you have questions about tow truck services or need to file a complaint, we're here to help.
          </p>
          <div className="space-y-4">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <p className="text-gray-600">
              You can also file a complaint directly with the NYC Department of Consumer Affairs at{' '}
              <a href="https://www1.nyc.gov/site/dca/consumers/file-complaint.page" className="text-blue-600 hover:text-blue-800">
                nyc.gov/dca
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 