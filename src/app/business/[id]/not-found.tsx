import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Not Found</h2>
          <p className="text-gray-600 mb-8">
            The business you're looking for doesn't exist or has been removed from our directory.
          </p>
          <Link
            href="/directory"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Directory
          </Link>
        </div>
      </div>
    </div>
  )
} 