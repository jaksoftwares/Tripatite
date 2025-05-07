'use client';

import { useState } from 'react';
import { products } from '@/constants/products';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : products.length - 1));
  const handleNext = () =>
    setSelectedIndex((prev) => (prev! < products.length - 1 ? prev! + 1 : 0));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('/products/spcflooring.jpg')] bg-cover bg-center h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10 text-center">
          Our Premium Products
        </h1>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 px-4 md:px-12 lg:px-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            Explore Our Collection
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <div className="relative w-full h-48 mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                <Link
                  href="/contact-us"
                  className="mt-auto bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-full transition-colors"
                  onClick={(e) => e.stopPropagation()} // prevents modal from opening when clicking the button
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need help choosing the perfect product?
          </h2>
          <p className="text-lg mb-8">
            Our team is ready to assist you in selecting the best solution for your space.
          </p>
          <Link
            href="/contact-us"
            className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
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

          <div className="max-w-4xl max-h-[80vh] mx-auto px-4 text-center">
            <Image
              src={products[selectedIndex].image}
              alt={products[selectedIndex].name}
              width={1200}
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
