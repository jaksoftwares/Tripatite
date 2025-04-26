// src/components/TeamSection.tsx
import React from "react";
import { companyInfo } from "@/constants/aboutUs"; // Adjust this path based on your file structure

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
        <p className="text-lg text-gray-600 mb-12">
          Our team of talented professionals is dedicated to delivering high-quality, innovative, and personalized interior design solutions. Get to know the experts behind Tripatite Interiors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {companyInfo.teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-lg text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
