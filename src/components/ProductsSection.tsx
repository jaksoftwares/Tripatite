'use client';

import { products } from '@/constants/products'; // Import the static product data

export default function ProductsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img src={product.image} alt={product.name} className="mx-auto h-40 w-40 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
