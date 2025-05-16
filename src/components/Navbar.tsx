'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact-us' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClasses = (href: string) =>
    `relative transition-all duration-200 ease-in-out px-2 py-1 text-[1.05rem] font-semibold tracking-wide
     hover:text-red-600 hover:-translate-y-[2px] hover:underline underline-offset-8 decoration-[2px]
     ${
       pathname === href
         ? 'text-blue-700 underline underline-offset-8 decoration-[2px]'
         : 'text-gray-800'
     }`;

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between pl-0 pr-4 py-3 md:py-5">
        {/* Logo */}
    <Link href="/" className="flex items-center space-x-3">
    <Image
      src="/logo.png"
      alt="Tripatite Interiors Logo"
      width={130}
      height={110}
      className="object-contain"
      priority
    />
    {/* <span className="text-2xl font-bold text-red-600 tracking-tight">
      Tripatite Interiors
    </span> */}
  </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClasses(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Get a Quote Button */}
          <Link
            href="/get-a-quote"
            className="ml-4 bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-red-600 transition-all duration-200"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} className="text-blue-700" /> : <Menu size={28} className="text-blue-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col items-center space-y-4 py-4 text-[1.05rem] font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClasses(item.href)}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-a-quote"
              className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition-all duration-200"
              onClick={toggleMenu}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
