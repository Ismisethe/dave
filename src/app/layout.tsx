import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'New York Tow Truck Near Me | Find Licensed Towing Services',
  description: 'Search and find licensed tow truck companies in New York City. 24/7 emergency towing, heavy-duty towing, and roadside assistance across all five boroughs.',
  keywords: 'tow truck near me, NYC tow truck, licensed tow truck, DARP, ROTOW, New York towing services, emergency towing NYC, 24/7 towing NYC, heavy duty towing NYC',
  metadataBase: new URL('https://newyorktowtrucks.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#0066cc'
      }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'New York Tow Truck Near Me | Find Licensed Towing Services',
    description: 'Search and find licensed tow truck companies in New York City. 24/7 emergency towing, heavy-duty towing, and roadside assistance across all five boroughs.',
    url: 'https://newyorktowtrucks.com',
    siteName: 'New York Tow Trucks',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New York Tow Truck Near Me | Find Licensed Towing Services',
    description: 'Search and find licensed tow truck companies in New York City. 24/7 emergency towing services available.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-site-verification-here',
    other: {
      'msvalidate.01': 'add-your-bing-site-verification-here',
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                '@id': 'https://newyorktowtrucks.com/#organization',
                name: 'New York Tow Trucks',
                description: 'Comprehensive directory of licensed tow truck companies in New York City, offering 24/7 emergency towing and roadside assistance.',
                url: 'https://newyorktowtrucks.com',
                logo: 'https://newyorktowtrucks.com/logo.png',
                areaServed: {
                  '@type': 'City',
                  name: 'New York City',
                  containsPlace: [
                    {
                      '@type': 'Borough',
                      name: 'Manhattan'
                    },
                    {
                      '@type': 'Borough',
                      name: 'Brooklyn'
                    },
                    {
                      '@type': 'Borough',
                      name: 'Queens'
                    },
                    {
                      '@type': 'Borough',
                      name: 'Bronx'
                    },
                    {
                      '@type': 'Borough',
                      name: 'Staten Island'
                    }
                  ]
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'hi@newyorktowtrucks.com',
                  contactType: 'customer service'
                },
                sameAs: [
                  'https://autoloanpayoffcalculator.org',
                  'https://popularaitools.ai',
                  'https://asphaltcostcalculator.com',
                  'https://teethwhiteningtoothpaste.store',
                  'https://top5aimarketingtools.com',
                  'https://bestaitoolsdirectory.org',
                  'https://arbitragebettingcalculator.com'
                ]
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Emergency Towing Services NYC',
                serviceType: 'Towing Service',
                provider: {
                  '@type': 'LocalBusiness',
                  '@id': 'https://newyorktowtrucks.com/#organization'
                },
                areaServed: {
                  '@type': 'City',
                  name: 'New York City'
                },
                description: '24/7 emergency towing and roadside assistance services across all NYC boroughs',
                availableChannel: {
                  '@type': 'ServiceChannel',
                  serviceUrl: 'https://newyorktowtrucks.com/directory',
                  servicePhone: 'Available through directory'
                },
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Towing Services',
                  itemListElement: [
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Heavy Duty Towing'
                      }
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Emergency Roadside Assistance'
                      }
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Low Clearance Towing'
                      }
                    }
                  ]
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                url: 'https://newyorktowtrucks.com',
                name: 'New York Tow Trucks',
                description: 'Find licensed tow truck companies in New York City',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://newyorktowtrucks.com/directory?search={search_term_string}'
                  },
                  'query-input': 'required name=search_term_string'
                }
              }
            ])
          }}
        />
      </head>
      <body suppressHydrationWarning className={`font-sans antialiased`}>
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                New York Tow Truck Near Me
              </Link>
              <div className="space-x-6">
                <Link href="/directory" className="text-gray-600 hover:text-blue-600">
                  Directory
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="min-h-screen bg-gray-50">
          {children}
        </main>

        <footer>
          <section className="bg-gray-900 text-white p-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">About New York Tow Trucks</h2>
                  <p className="text-gray-300 mb-4">
                    New York Tow Trucks is your comprehensive directory for professional towing services across all five boroughs. 
                    We connect drivers with licensed, insured, and reliable towing companies 24/7.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Whether you need emergency roadside assistance, heavy-duty towing, or specialized vehicle transport in NYC, 
                    our directory helps you find the right service provider quickly and efficiently.
                  </p>
                  <div className="mt-6">
                    <p className="text-gray-400">Contact us at:</p>
                    <a href="mailto:hi@newyorktowtrucks.com" className="text-blue-400 hover:text-blue-300">
                      hi@newyorktowtrucks.com
                    </a>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-6">Partner Sites</h2>
                  <ul className="space-y-3 text-gray-300">
                    <li>
                      <a href="https://autoloanpayoffcalculator.org" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener">
                        Auto Loan Payoff Calculator
                      </a>
                    </li>
                    <li>
                      <a href="https://popularaitools.ai" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener">
                        Popular AI Tools Directory
                      </a>
                    </li>
                    <li>
                      <a href="https://asphaltcostcalculator.com" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener">
                        Asphalt Cost Calculator
                      </a>
                    </li>
                    <li>
                      <a href="https://teethwhiteningtoothpaste.store" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener">
                        Teeth Whitening Products
                      </a>
                    </li>
                    <li>
                      <a href="https://top5aimarketingtools.com" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener">
                        Top 5 AI Marketing Tools
                      </a>
                    </li>
                    <li>
                      <a href="https://bestaitoolsdirectory.org" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener">
                        Best AI Tools Directory
                      </a>
                    </li>
                    <li>
                      <a href="https://arbitragebettingcalculator.com" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener">
                        Arbitrage Betting Calculator
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} New York Tow Trucks. All rights reserved.</p>
              </div>
            </div>
          </section>
        </footer>
      </body>
    </html>
  )
} 