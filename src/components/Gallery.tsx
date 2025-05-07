'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

// Generate an array of 23 image paths
const allImages = Array.from({ length: 23 }, (_, i) => `/images/image${i + 1}.jpeg`);

// Shuffle and select 12 images
const shuffledImages = allImages.sort(() => 0.5 - Math.random());
const galleryItems: GalleryItem[] = shuffledImages.slice(0, 12).map((src, index) => ({
  id: index + 1,
  src,
  alt: `Project ${index + 1}`,
}));

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () => setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : galleryItems.length - 1));
  const handleNext = () => setSelectedIndex((prev) => (prev! < galleryItems.length - 1 ? prev! + 1 : 0));

  return (
    <div className="bg-gray-50 py-16 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div key={item.id} className="relative group cursor-pointer" onClick={() => handleImageClick(index)}>
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Viewer */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white hover:text-gray-300 text-3xl"
            aria-label="Close"
          >
            <X size={36} />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 text-white hover:text-gray-300 text-3xl"
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="max-w-3xl max-h-[80vh] mx-auto">
            <Image
              src={galleryItems[selectedIndex].src}
              alt={galleryItems[selectedIndex].alt}
              width={1000}
              height={800}
              className="rounded-lg object-contain w-full h-auto max-h-[80vh]"
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-6 text-white hover:text-gray-300 text-3xl"
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
