'use client';

import { services } from '@/constants/services';
import Link from 'next/link';

export default function ServicesPage() {
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
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
              >
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                <Link
                  href="/contact-us"
                  className="mt-auto bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-full transition-colors"
                >
                  Get a Quote
                </Link>
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

    </div>
  );
}
