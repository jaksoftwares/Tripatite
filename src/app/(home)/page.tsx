'use client';

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import Gallery from '@/components/Gallery';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4">
        <ServicesSection />
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4">
        <ProductsSection />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="container mx-auto px-4">
        <Gallery />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4">
        <TestimonialsSlider />
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 mb-10">
        <ContactForm />
      </section>
    </div>
  );
}
