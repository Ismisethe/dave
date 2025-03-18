"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const images = [
  '/Images/towtruck.jpeg',
  '/Images/tow truck 2.jpeg',
  '/Images/tow truck 3.jpeg',
  '/Images/towtruck4.webp',
  '/Images/tow truck 5.webp',
  '/Images/tow truck 7.jpeg'
]

export default function BusinessImageGallery() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [error, setError] = useState(false)

  const handleImageError = () => {
    setError(true)
  }

  if (error) {
    return (
      <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Image not available</p>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt="Tow Truck Service"
          fill
          className="object-cover"
          priority={selectedImage === 0}
          onError={handleImageError}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedImage ? 'bg-white w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 