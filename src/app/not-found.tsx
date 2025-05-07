// src/app/not-found.tsx
"use client";
import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa"; // Home icon

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center py-16">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-6xl font-bold text-red-600 mb-6">404</h1>
        <p className="text-xl font-semibold mb-4">Oops! Page Not Found</p>
        <p className="text-gray-700 mb-6">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved. It could be a broken link, or you may have typed the address incorrectly.
        </p>

        {/* CTA Button to return to Home */}
        <Link
          href="/"
          className="inline-flex items-center bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold transition duration-300 hover:bg-blue-500"
        >
          <FaHome className="mr-2" />
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
