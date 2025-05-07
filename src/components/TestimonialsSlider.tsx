'use client';

import { testimonials } from '@/constants/testimonials'; // Import the static testimonial data
import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg max-w-xs mx-auto hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={24}
                  height={24}
                  className="mx-auto h-24 w-24 rounded-full object-cover"
                />
              </div>
              <p className="text-gray-600 italic mb-4">{testimonial.feedback}</p>
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
