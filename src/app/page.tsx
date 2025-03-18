import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar';
import { Business } from '@/types/business';
import fs from 'fs/promises';
import path from 'path';
import SeoContent from '@/components/SeoContent';

const images = [
  '/Images/towtruck4.webp',
  '/Images/towtruck.jpeg',
  '/Images/tow truck 7.jpeg',
  '/Images/tow truck 5.webp',
  '/Images/tow truck 3.jpeg',
  '/Images/tow truck 2.jpeg'
];

async function getFeaturedBusinesses(): Promise<Business[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'businesses.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    return data.slice(0, 6);
  } catch (error) {
    console.error('Error loading featured businesses:', error);
    return [];
  }
}

export default async function HomePage() {
  const featuredBusinesses = await getFeaturedBusinesses();

  return (
    <div>
      {/* Hero Section with Image */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/towtruck4.webp"
            alt="NYC Tow Truck Service"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50">
          <div className="flex flex-col items-center justify-center h-full text-white container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center leading-tight">
              NYC Tow Truck Directory: Find Authorized Towing Services Across New York 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl">
              New York&apos;s premier tow truck directory connecting drivers with licensed, professional towing services 24/7.
            </p>
            <div className="max-w-2xl w-full">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Companies Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured New York Tow Truck Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBusinesses.map((business, index) => (
              <div key={business.businessUniqueId} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="relative h-56">
                  <Image
                    src={images[index % images.length]}
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
                  <Link
                    href={`/business/${business.businessUniqueId}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full text-center font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            New York Tow Trucks - Comprehensive Towing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-xl overflow-hidden group">
              <Image
                src="/Images/tow truck 2.jpeg"
                alt="Heavy Duty Towing"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Heavy Duty Towing</h3>
                  <p className="text-gray-200 mb-4">Specialized equipment and expertise for commercial vehicle recovery throughout NYC.</p>
                  <Link href="/directory?service=heavy-duty" className="inline-block bg-white text-blue-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden group">
              <Image
                src="/Images/tow truck 3.jpeg"
                alt="Emergency Roadside Assistance"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">24/7 Emergency Assistance</h3>
                  <p className="text-gray-200 mb-4">Round-the-clock emergency services for all types of vehicles across NYC.</p>
                  <Link href="/directory?service=emergency" className="inline-block bg-white text-blue-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Borough Coverage Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            New York Tow Trucks - Five Borough Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <Link 
              href="/directory?borough=Manhattan"
              className="relative h-[300px] rounded-xl overflow-hidden group"
            >
              <Image
                src="/Images/towtruck4.webp"
                alt="Manhattan Towing"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-white mb-2">Manhattan</h3>
                  <p className="text-white/80">View Manhattan Towing Services →</p>
                </div>
              </div>
            </Link>
            <Link 
              href="/directory?borough=Brooklyn"
              className="relative h-[300px] rounded-xl overflow-hidden group"
            >
              <Image
                src="/Images/tow truck 5.webp"
                alt="Brooklyn Towing"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-white mb-2">Brooklyn</h3>
                  <p className="text-white/80">View Brooklyn Towing Services →</p>
                </div>
              </div>
            </Link>
            <Link 
              href="/directory?borough=Queens"
              className="relative h-[300px] rounded-xl overflow-hidden group"
            >
              <Image
                src="/Images/tow truck 7.jpeg"
                alt="Queens Towing"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-white mb-2">Queens</h3>
                  <p className="text-white/80">View Queens Towing Services →</p>
                </div>
              </div>
            </Link>
            <Link 
              href="/directory?borough=Bronx"
              className="relative h-[300px] rounded-xl overflow-hidden group"
            >
              <Image
                src="/Images/towtruck.jpeg"
                alt="Bronx Towing"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-white mb-2">Bronx</h3>
                  <p className="text-white/80">View Bronx Towing Services →</p>
                </div>
              </div>
            </Link>
            <Link 
              href="/directory?borough=Staten Island"
              className="relative h-[300px] rounded-xl overflow-hidden group col-span-1 md:col-span-2 lg:col-span-1"
            >
              <Image
                src="/Images/tow truck 2.jpeg"
                alt="Staten Island Towing"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-white mb-2">Staten Island</h3>
                  <p className="text-white/80">View Staten Island Towing Services →</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-900 text-white rounded-2xl">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <form
              action="https://formspree.io/f/hi@newyorktowtrucks.com"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="mt-8 text-center text-gray-400">
              <p>Have questions or suggestions? Contact us at:</p>
              <a href="mailto:hi@newyorktowtrucks.com" className="text-blue-400 hover:text-blue-300">
                hi@newyorktowtrucks.com
              </a>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <SeoContent />
      </div>
    </div>
  );
} 