import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onOpenReservation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Cuisine', href: '/cuisine' },
    { name: 'Menù', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Location', href: '/location' },
    { name: 'Private Events', href: '/events' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-coucou-red text-white z-50">
      <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Hamburger */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="p-2 hover:opacity-50 transition-opacity"
        >
          <Menu className="h-6 w-6 stroke-[1.5px]" />
        </button>

        {/* Center: Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <svg viewBox="0 0 100 40" className="h-12 w-auto fill-white">
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="font-serif italic text-3xl lowercase">
              Le Coucou
            </text>
          </svg>
        </Link>

        {/* Right: Book Button */}
        <button 
          onClick={onOpenReservation}
          className="pill-button"
        >
          Book a Table
        </button>
      </div>

      {/* Mobile/Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-coucou-cream z-[60] flex flex-col pt-32 px-12"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-7 left-8 p-2 hover:opacity-50 transition-opacity"
            >
              <X className="h-6 w-6 stroke-[1.5px]" />
            </button>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-serif text-5xl lowercase hover:italic transition-all w-fit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto mb-12 flex flex-col gap-4">
              <p className="font-sans text-[10px] tracking-widest uppercase opacity-50">Find Us</p>
              <p className="font-serif italic text-xl">138 Lafayette St, New York, NY 10013</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
