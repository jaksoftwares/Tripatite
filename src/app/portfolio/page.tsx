'use client';

import { projects } from '@/constants/projects';
import Image from 'next/image';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-[url('/images/hero.jpg')] bg-cover bg-center h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10 text-center">
          Our Portfolio
        </h1>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-16 px-4 md:px-12 lg:px-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            Recent Projects
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition group"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-lg mb-8">
            Get in touch today to start your own dream project with us.
          </p>
          <a
            href="/contact-us"
            className="bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Lets&apos; Talk
          </a>
        </div>
      </section>

    </div>
  );
}
