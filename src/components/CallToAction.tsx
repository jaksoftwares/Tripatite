// src/components/CallToActionSection.tsx
import React from "react";
import Link from "next/link";

const CallToActionSection: React.FC = () => {
  return (
    <section className="relative bg-blue-600 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">Ready to Transform Your Space?</h2>
        <p className="text-lg mb-8">
          Whether you&apos;re looking to redesign your home, office, or commercial space, Tripatite Interiors is here to bring your vision to life.
          Our team of expert designers is ready to work with you every step of the way.
        </p>
        
        {/* CTA Button */}
        <Link
          href="/contact-us"
          className="inline-block bg-yellow-500 text-gray-800 py-3 px-8 rounded-lg font-semibold transition duration-300 hover:bg-yellow-400"
        >
          Get in Touch
        </Link>
      </div>

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("/images/cta-bg.jpg")' }}></div>
    </section>
  );
};

export default CallToActionSection;
