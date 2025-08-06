'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from "@/app/Images/plogo.png"

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Services' },
  { href: '#', label: 'Portfolio' },
  { href: '#', label: 'Contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition duration-300">
              <Image src={logo} width={70} alt='logo'/>
            </a>
          </div>

          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow">
              Login
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-sm border-t">
          <div className="px-4 pt-4 pb-2 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
