import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-coucou-red text-white py-24 px-6">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Address */}
        <div className="space-y-4">
          <p className="font-serif italic text-xl">138 Lafayette St<br />New York, NY 10013</p>
          <p className="font-sans text-[10px] tracking-widest uppercase opacity-60">(212) 271-4252</p>
          <div className="pt-4">
            <button className="pill-button">Book a Table</button>
          </div>
        </div>

        {/* Discovery */}
        <div className="space-y-8">
          <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40">Discovery</h4>
          <ul className="space-y-4 font-serif text-xl lowercase italic">
            <li><Link href="/cuisine">Cuisine</Link></li>
            <li><Link href="/menu">Menù</Link></li>
            <li><Link href="/gift-cards">Gift Cards</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-8">
          <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40">Company</h4>
          <ul className="space-y-4 font-serif text-xl lowercase italic">
            <li><Link href="/press">Press</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/accessibility">Accessibility</Link></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="space-y-8">
          <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40">Keep in Touch</h4>
          <div className="space-y-6">
            <input 
              type="email" 
              placeholder="Email address"
              className="bg-transparent border-b border-white/30 w-full pb-2 font-serif italic text-lg outline-none focus:border-white transition-colors"
            />
            <button className="pill-button w-full">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 font-sans text-[9px] tracking-[0.4em] uppercase opacity-50">
        <p>© STARR RESTAURANTS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
