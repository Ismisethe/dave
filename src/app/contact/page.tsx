import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | NYC Tow Truck Directory',
  description: 'Get in touch with us or file a complaint about a tow truck company in New York City.',
  keywords: 'contact, complaints, tow truck complaints, NYC tow truck, file complaint',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions about our directory or need help finding a tow truck company? We're here to help.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="complaint">File a Complaint</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">File a Complaint</h2>
            <p className="text-gray-600 mb-6">
              If you've had a negative experience with a tow truck company, you can file a complaint with the NYC Department of Consumer Affairs.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium mb-2">NYC Department of Consumer Affairs</h3>
              <p className="text-gray-600 mb-4">
                File a complaint online or contact them directly:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>Website: <a href="https://www1.nyc.gov/site/dca/consumers/file-complaint.page" className="text-blue-600 hover:text-blue-800">nyc.gov/dca</a></li>
                <li>Phone: 311</li>
                <li>Email: complaints@dca.nyc.gov</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Important Information</h3>
              <p className="text-gray-600 mb-4">
                When filing a complaint, please have the following information ready:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Company name and license number</li>
                <li>Date and time of the incident</li>
                <li>Location of the incident</li>
                <li>Details about what happened</li>
                <li>Any documentation or receipts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">What is DARP?</h3>
              <p className="text-gray-600">
                DARP (Directed Accident Response Program) is a city-regulated program that ensures tow truck companies follow proper procedures when responding to accidents. Learn more on our{' '}
                <Link href="/about#darp" className="text-blue-600 hover:text-blue-800">
                  About page
                </Link>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">What is ROTOW?</h3>
              <p className="text-gray-600">
                ROTOW (Removal of Towed Vehicles) regulates how tow truck companies handle and store towed vehicles. Learn more on our{' '}
                <Link href="/about#rotow" className="text-blue-600 hover:text-blue-800">
                  About page
                </Link>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">How do I find a tow truck company?</h3>
              <p className="text-gray-600">
                Use our{' '}
                <Link href="/directory" className="text-blue-600 hover:text-blue-800">
                  directory
                </Link>{' '}
                to search by location, company name, or program enrollment status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 