import React from 'react';
import Link from 'next/link';
import { Share2, Globe, Mail, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pitaya-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-secular text-4xl tracking-tighter text-white">
                PITAYA
                <span className="block text-xs leading-3 font-source font-bold text-pitaya-orange tracking-widest uppercase">
                  Thai Street Food
                </span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-source">
              Experience the authentic taste of Bangkok's bustling streets. Bold flavors, fresh ingredients, and the vibrant spirit of Thai street food.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pitaya-orange transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pitaya-orange transition-colors">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pitaya-orange transition-colors">
                <Info className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-secular uppercase tracking-widest text-sm mb-6 text-white opacity-50">Discovery</h4>
            <ul className="space-y-4 font-source text-sm text-gray-400">
              <li><Link href="/menu" className="hover:text-pitaya-orange transition-colors">The Menu</Link></li>
              <li><Link href="/locations" className="hover:text-pitaya-orange transition-colors">Find a Restaurant</Link></li>
              <li><Link href="/about" className="hover:text-pitaya-orange transition-colors">Our Concept</Link></li>
              <li><Link href="/loyalty" className="hover:text-pitaya-orange transition-colors">Loyalty Program</Link></li>
            </ul>
          </div>

          {/* Legal / Company */}
          <div>
            <h4 className="font-secular uppercase tracking-widest text-sm mb-6 text-white opacity-50">Company</h4>
            <ul className="space-y-4 font-source text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-pitaya-orange transition-colors">Contact Us</Link></li>
              <li><Link href="/franchise" className="hover:text-pitaya-orange transition-colors">Become a Franchisee</Link></li>
              <li><Link href="/legal" className="hover:text-pitaya-orange transition-colors">Legal Mentions</Link></li>
              <li><Link href="/privacy" className="hover:text-pitaya-orange transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-secular uppercase tracking-widest text-sm mb-6 text-white opacity-50">Keep in Touch</h4>
            <p className="text-gray-400 text-sm font-source">
              Subscribe to get news about our new recipes and openings!
            </p>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-gray-800 border-none rounded-full py-3 pl-12 pr-4 text-sm font-source focus:ring-2 focus:ring-pitaya-orange transition-all"
                />
              </div>
              <button className="w-full bg-pitaya-orange text-white py-3 rounded-full font-secular uppercase tracking-tight hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-xs font-source mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pitaya Thai Street Food. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-xs text-gray-500 font-source">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
