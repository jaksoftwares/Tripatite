'use client';

import { useState } from 'react';
import { products } from '@/constants/products';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductsSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : products.length - 1));
  const handleNext = () =>
    setSelectedIndex((prev) => (prev! < products.length - 1 ? prev! + 1 : 0));

  return (
    <div className="py-16 bg-white relative">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            aria-label="Close"
          >
            <X size={36} />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 text-white hover:text-gray-300"
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="max-w-3xl max-h-[80vh] mx-auto px-4 text-center">
            <Image
              src={products[selectedIndex].image}
              alt={products[selectedIndex].name}
              width={1000}
              height={800}
              className="rounded-lg object-contain w-full h-auto max-h-[80vh]"
            />
            <h3 className="text-white text-xl font-semibold mt-4">{products[selectedIndex].name}</h3>
            <p className="text-gray-300 mt-2">{products[selectedIndex].description}</p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-6 text-white hover:text-gray-300"
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
