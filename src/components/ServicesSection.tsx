'use client';

import { services } from '@/constants/services'; // Import static services data

export default function ServicesSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img src={service.icon} alt={service.title} className="mx-auto h-16 w-16 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
