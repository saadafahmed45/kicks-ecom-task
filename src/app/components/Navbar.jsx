'use client';

import React, { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b-2 border-gray-200 rounded-2xl">
      {/* Desktop and Mobile Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Left: Navigation Links (Desktop Only) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-gray-700 transition">
            New Drops 🔥
          </a>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-gray-700 transition">
              Men
            </button>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-gray-700 transition">
              Women
            </button>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none">
          <h1 className="text-2xl md:text-3xl font-bold">KICKS</h1>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="hover:text-gray-700 transition">
            <FiSearch size={20} />
          </button>
          <button className="hover:text-gray-700 transition">
            <FiUser size={20} />
          </button>
          <button className="relative hover:text-gray-700 transition">
            <FiShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:text-gray-700 transition"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-gray-50">
          <div className="flex flex-col gap-4 px-4 py-4">
            <a href="#" className="text-sm font-medium hover:text-gray-700 transition">
              New Drops 🔥
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-700 transition">
              Men
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-700 transition">
              Women
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;