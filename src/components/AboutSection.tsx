// src/components/AboutSection.tsx

import { FC } from "react";
import { FaBullseye, FaUsers, FaHeart } from "react-icons/fa"; // Using react-icons for professional icons
import Image from "next/image";
import { companyInfo } from "@/constants/aboutUs"; 

const AboutSection: FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg text-gray-500">{companyInfo.companyOverview}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <FaBullseye className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="mt-2 text-gray-600">{companyInfo.mission}</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <FaHeart className="text-4xl text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
            <p className="mt-2 text-gray-600">{companyInfo.vision}</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <FaUsers className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Core Values</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              {companyInfo.coreValues.map((value, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-sm mr-2">✓</span> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-extrabold text-gray-900">Our Team</h3>
          <p className="mt-2 text-lg text-gray-500">Meet the talented professionals behind Tripatite Interiors.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {companyInfo.teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
              <p className="mt-2 text-sm text-gray-600">{member.role}</p>
              <p className="mt-2 text-sm text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
