
"use client"

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company Info with Logo */}
        <div className="flex flex-col items-start">
          <Image
            src="/logo.png"
            alt="Tripatite Interiors Logo"
            width={120}
            height={120}
            className="mb-3 object-contain"
            priority
          />
          <h2 className="text-2xl font-bold text-white mb-2">Tripatite Interiors</h2>
          <p className="text-sm max-w-sm">
            Transforming spaces with elegance and creativity.  
            Your dream interiors, our passion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
            <li><Link href="/products" className="hover:underline">Products</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link href="/contact-us" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
          <p className="text-sm mb-2">
            Email: <a href="mailto:info@tripatiteinteriors.com" className="hover:underline">info@tripatiteinteriors.com</a>
          </p>
          <p className="text-sm">
            Phone: <a href="tel:+254712345678" className="hover:underline">+254 712 345 678</a>
          </p>

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4">
            <a href="https://facebook.com" className="text-white hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Tripatite Interiors. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
