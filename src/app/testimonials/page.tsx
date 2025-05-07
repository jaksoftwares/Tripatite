'use client';

import { testimonials } from '@/constants/testimonials';
import Image from 'next/image';

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-[url('/testimonials/hero-testimonial.jpg')] bg-cover bg-center h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10 text-center">
          What Our Clients Say
        </h1>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-12 lg:px-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            Client Testimonials
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8">
            Join our list of happy clients. Get in touch today!
          </p>
          <a
            href="/contact-us"
            className="bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}
