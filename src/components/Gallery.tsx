'use client';

import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: '/images/project-1.jpg', alt: 'Project 1' },
  { id: 2, src: '/images/project-2.jpg', alt: 'Project 2' },
  { id: 3, src: '/images/project-3.jpg', alt: 'Project 3' },
  { id: 4, src: '/images/project-4.jpg', alt: 'Project 4' },
  { id: 5, src: '/images/project-5.jpg', alt: 'Project 5' },
  { id: 6, src: '/images/project-6.jpg', alt: 'Project 6' },
];

export default function Gallery() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative group">
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
    </div>
  );
}
