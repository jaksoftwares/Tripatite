// src/components/OurProcessSection.tsx
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa"; // Check circle icon for each process step

const OurProcessSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">Our Process</h2>
        <p className="text-lg text-gray-600 mb-12">
          At Tripatite Interiors, we follow a well-defined and thorough process to ensure every project is executed flawlessly. From initial concept to final touches, we ensure excellence at every step.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FaRegCheckCircle className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Consultation</h3>
            <p className="text-gray-600">
              We begin with a detailed consultation to understand your needs, preferences, and vision for the space. We take time to listen and gather insights to create the perfect design plan.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FaRegCheckCircle className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Design Concept</h3>
            <p className="text-gray-600">
              After understanding your needs, we present a creative design concept, including 3D models and mood boards to bring your vision to life. We ensure the design reflects your style and functionality requirements.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FaRegCheckCircle className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Implementation</h3>
            <p className="text-gray-600">
              With the design approved, our team moves forward with the implementation. We carefully manage the project, ensuring high-quality materials, timely execution, and the perfect execution of all design elements.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FaRegCheckCircle className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Final Touches</h3>
            <p className="text-gray-600">
              After completing the implementation, we ensure every detail is refined. We carefully select accessories, furniture, and final elements to give the space its complete, polished look.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FaRegCheckCircle className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Handover</h3>
            <p className="text-gray-600">
              Once the project is complete, we conduct a final review to ensure everything meets our high standards and your expectations. We then hand over the project to you, ready for you to enjoy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
