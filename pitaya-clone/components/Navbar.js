import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, ChevronDown, Menu, X, ShoppingBag } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-secular text-2xl tracking-tighter text-pitaya-dark">
                PITAYA
                <span className="block text-[8px] leading-3 font-source font-bold text-pitaya-orange tracking-widest uppercase">
                  Thai Street Food
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/locations" className="text-sm font-secular uppercase tracking-tighter text-gray-700 hover:text-pitaya-orange transition-colors">
              Restaurants
            </Link>
            <Link href="/about" className="text-sm font-secular uppercase tracking-tighter text-gray-700 hover:text-pitaya-orange transition-colors">
              Concept
            </Link>
            <Link href="/blog" className="text-sm font-secular uppercase tracking-tighter text-gray-700 hover:text-pitaya-orange transition-colors">
              News
            </Link>
            <Link href="/menu" className="text-sm font-secular uppercase tracking-tighter text-gray-700 hover:text-pitaya-orange transition-colors">
              Menu
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-grow max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MapPin className="h-4 w-4 text-pitaya-orange" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border-2 border-gray-100 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:border-pitaya-orange text-sm font-source transition-all"
                placeholder="Enter a city or address..."
              />
              <button className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <Search className="h-4 w-4 text-gray-400 hover:text-pitaya-orange transition-colors" />
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-gray-600 hover:text-pitaya-orange transition-colors">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <Button variant="primary">Order Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <button className="text-gray-600">
               <ShoppingBag className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 absolute w-full left-0 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link
              href="/locations"
              className="block px-3 py-4 text-base font-secular uppercase tracking-tighter text-gray-700 border-b border-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Restaurants
            </Link>
            <Link
              href="/about"
              className="block px-3 py-4 text-base font-secular uppercase tracking-tighter text-gray-700 border-b border-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Concept
            </Link>
            <Link
              href="/menu"
              className="block px-3 py-4 text-base font-secular uppercase tracking-tighter text-gray-700 border-b border-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <div className="pt-4 px-3">
              <Button variant="primary" className="w-full py-4">Order Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
