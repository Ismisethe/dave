export default function BusinessPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Business Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">NYC Emergency Towing</h2>
          <p className="text-gray-600 mb-4">24/7 Emergency towing service in NYC</p>
          <p className="text-sm text-gray-500">Manhattan • (212) 555-0123</p>
        </div>
      </div>
    </div>
  )
} 