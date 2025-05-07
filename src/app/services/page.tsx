'use client';

import { useState } from 'react';
import { services } from '@/constants/services';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openViewer = (index: number) => setSelectedIndex(index);
  const closeViewer = () => setSelectedIndex(null);
  const next = () =>
    setSelectedIndex((prev) => (prev! < services.length - 1 ? prev! + 1 : 0));
  const prev = () =>
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : services.length - 1));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('/products/carpet-tiles.jpg')] bg-cover bg-center h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10 text-center">
          Our Professional Services
        </h1>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-12 lg:px-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            What We Offer
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col overflow-hidden cursor-pointer"
                onClick={() => openViewer(index)}
              >
                <div className="relative w-full h-40">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 items-center text-center">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                  <Link
                    href="/contact-us"
                    className="mt-auto bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-full transition-colors"
                    onClick={(e) => e.stopPropagation()} // Prevents modal opening on button click
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8">
            Let&apos;s work together to create stunning interiors that truly reflect your style.
          </p>
          <Link
            href="/contact-us"
            className="bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeViewer}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            aria-label="Close"
          >
            <X size={36} />
          </button>

          <button
            onClick={prev}
            className="absolute left-6 text-white hover:text-gray-300"
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="max-w-4xl max-h-[80vh] px-4 text-center">
            <Image
              src={services[selectedIndex].icon}
              alt={services[selectedIndex].title}
              width={1200}
              height={800}
              className="rounded-lg object-contain w-full h-auto max-h-[80vh]"
            />
            <h3 className="text-white text-xl font-semibold mt-4">
              {services[selectedIndex].title}
            </h3>
            <p className="text-gray-300 mt-2">{services[selectedIndex].description}</p>
          </div>

          <button
            onClick={next}
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
