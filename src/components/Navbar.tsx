'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // optional icons (install lucide-react if you want icons)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Tripatite Interiors
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact-us">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/about-us" onClick={toggleMenu}>About Us</Link>
            <Link href="/products" onClick={toggleMenu}>Products</Link>
            <Link href="/services" onClick={toggleMenu}>Services</Link>
            <Link href="/portfolio" onClick={toggleMenu}>Portfolio</Link>
            <Link href="/testimonials" onClick={toggleMenu}>Testimonials</Link>
            <Link href="/contact-us" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
