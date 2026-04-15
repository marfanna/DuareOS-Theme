import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Flame, Leaf, Zap, Heart } from 'lucide-react';
import Button from '@/components/Button';

const ConceptPage = () => {
  return (
    <div className="bg-pitaya-light min-h-screen">
      <Head>
        <title>Our Concept | Pitaya Thai Street Food</title>
      </Head>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-pitaya-dark">
        <div className="absolute inset-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=2072" 
             className="w-full h-full object-cover"
             alt="Wok Cooking"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pitaya-dark/80"></div>
        <div className="relative z-10 text-center max-w-4xl px-4">
           <motion.h1 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-6xl md:text-8xl font-secular text-white tracking-tighter"
           >
             THE <span className="text-pitaya-orange">SOUL</span> OF BANGKOK
           </motion.h1>
           <p className="mt-6 text-xl text-gray-300 font-source italic">
             "Where the flame meets the freshness, and tradition meets the street."
           </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-secular text-pitaya-dark">
              BEYOND <span className="text-pitaya-orange">COOKING</span>, <br />
              IT'S AN EXPERIENCE
            </h2>
            <p className="text-gray-600 font-source leading-relaxed">
              At Pitaya, we don't just serve food. we bring the energy, the smells, and the vibrant atmosphere of Thai night markets to your neighborhood. Every wok is tossed with passion, every ingredient is chosen for its quality, and every bowl tells a story.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="p-3 bg-orange-100 rounded-2xl w-fit">
                   <Flame className="h-6 w-6 text-pitaya-orange" />
                </div>
                <h4 className="font-secular text-pitaya-dark uppercase text-sm">Flash Fried</h4>
                <p className="text-xs text-gray-500 font-source">Preserving nutrients and flavors through high-heat wok cooking.</p>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-green-100 rounded-2xl w-fit">
                   <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-secular text-pitaya-dark uppercase text-sm">Ultra Fresh</h4>
                <p className="text-xs text-gray-500 font-source">Daily arrivals of crisp vegetables and premium proteins.</p>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-purple-100 rounded-2xl w-fit">
                   <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-secular text-pitaya-dark uppercase text-sm">Instant Power</h4>
                <p className="text-xs text-gray-500 font-source">Wholesome ingredients that fuel your lifestyle, served fast.</p>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-red-100 rounded-2xl w-fit">
                   <Heart className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-secular text-pitaya-dark uppercase text-sm">Made with Love</h4>
                <p className="text-xs text-gray-500 font-source">A family of passionate chefs and foodies at your service.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-pitaya-orange absolute -inset-4 rounded-[60px] transform rotate-3 opacity-10"></div>
            <img 
               src="https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070" 
               className="rounded-[50px] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
               alt="Cooking Process"
            />
          </div>
        </div>
      </section>

      {/* Stats / Impact */}
      <section className="bg-pitaya-dark py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Restaurants', value: '150+' },
              { label: 'Wok Masters', value: '600' },
              { label: 'Happy Guests', value: '1M+' },
              { label: 'Years of Spirit', value: '14' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-5xl font-secular text-pitaya-orange">{stat.value}</p>
                <p className="text-xs font-source text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-2xl mx-auto space-y-8 px-4">
           <h3 className="text-4xl font-secular text-pitaya-dark">JOIN THE REVOLUTION</h3>
           <p className="text-gray-600 font-source">
             Interested in bringing the Thai Street Food vibe to your city? Explore our franchise opportunities and become part of our growing family.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="px-12 py-5">Apply Now</Button>
              <Button variant="secondary" className="px-12 py-5">Download Brochure</Button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptPage;
