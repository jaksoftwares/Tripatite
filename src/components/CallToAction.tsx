// src/components/CallToActionSection.tsx
import React from "react";
import Link from "next/link";

const CallToActionSection: React.FC = () => {
  return (
    <section className="relative bg-blue-700 text-white py-20 overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url("/images/cta-bg.jpg")' }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed">
          Whether you&apos;re redesigning your home, office, or commercial space, <span className="font-semibold text-red-300">Tripatite Interiors</span> is here to bring your vision to life. Our expert designers are ready to work with you every step of the way.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact-us"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-red-600 hover:text-white"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
