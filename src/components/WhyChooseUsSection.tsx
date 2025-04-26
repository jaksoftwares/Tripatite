// src/components/WhyChooseUsSection.tsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // You can use React Icons for interactive visuals

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mb-12">
          At Tripatite Interiors, we are dedicated to transforming spaces into
          functional, beautiful environments that enhance the quality of life. Here’s why we stand out:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FaCheckCircle className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovative Designs</h3>
            <p className="text-gray-600">
              Our designs are at the forefront of innovation, combining functionality with aesthetics.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FaCheckCircle className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Our team of professionals brings years of experience in creating spaces that inspire.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FaCheckCircle className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer-Centric</h3>
            <p className="text-gray-600">
              We prioritize our clients&apos; needs and work closely with them to bring their visions to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
