import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const menuData = {
  Dinner: [
    { 
      group: "LES HORS D'OEUVRES",
      items: [
        { name: "Oyster in half shell", price: "28" },
        { name: "Crabe Marie-Louise", price: "32" },
        { name: "Poireaux vinaigrette", price: "24" },
        { name: "Escargots en gelée", price: "26" }
      ]
    },
    {
      group: "LES GOURMANDISES",
      items: [
        { name: "Quenelle de brochet", price: "48" },
        { name: "Boudin blanc", price: "34" },
        { name: "Anguille fumée", price: "28" },
        { name: "Ris de veau", price: "42" }
      ]
    },
    {
      group: "LES PLATS",
      items: [
        { name: "Tout le Lapin", price: "56" },
        { name: "Filet de boeuf au poivre", price: "64" },
        { name: "Canard et cerises", price: "58" },
        { name: "Sole meunière", price: "68" }
      ]
    }
  ],
  Lunch: [
    { 
      group: "DEJEUNER",
      items: [
        { name: "Omelette aux fines herbes", price: "24" },
        { name: "Salade Niçoise", price: "28" }
      ]
    },
    {
      group: "LA CARTE",
      items: [
        { name: "Croque Monsieur", price: "26" },
        { name: "Steak Frites", price: "42" }
      ]
    },
    {
      group: "PLATS DU JOUR",
      items: [
        { name: "Poisson du Marché", price: "MP" },
        { name: "Plat du jour", price: "36" }
      ]
    }
  ],
  Breakfast: [
    { group: "EGGS", items: [{ name: "Eggs Benedict", price: "22" }, { name: "Omelette", price: "20" }] },
    { group: "SWEET", items: [{ name: "French Toast", price: "18" }, { name: "Crepes", price: "16" }] },
    { group: "SIDES", items: [{ name: "Croissant", price: "8" }, { name: "Fruit", price: "12" }] }
  ],
  Dessert: [
    { group: "SWEET", items: [{ name: "Mousse au Chocolat", price: "16" }] },
    { group: "CHEESE", items: [{ name: "Selection de Fromages", price: "24" }] },
    { group: "DIGESTIFS", items: [{ name: "Cognac", price: "18" }] }
  ],
  Beverage: [
    { group: "COCKTAILS", items: [{ name: "Negroni", price: "16" }] },
    { group: "WINE", items: [{ name: "Chardonnay", price: "18" }] },
    { group: "WATER", items: [{ name: "Evian", price: "10" }] }
  ]
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('Dinner');

  return (
    <div className="flex flex-col bg-coucou-cream">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
          alt="Le Coucou Interior"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="space-y-4"
          >
            <h1 className="text-7xl md:text-9xl font-serif lowercase italic tracking-tight">Le Coucou</h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Neon & Story Section */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl lowercase italic leading-tight text-coucou-red">
               A dream of <br />Classic Paris <br />in the heart <br />of New York.
            </h2>
            <div className="space-y-6 max-w-md">
              <p className="font-serif text-2xl italic leading-snug">
                Experience the elegance of traditional French cuisine reimagined.
              </p>
              <p className="text-coucou-text-muted text-sm leading-relaxed">
                Situated in the heart of SoHo, Le Coucou brings a refined sense of French gastronomy back to the city. From the open kitchen to the custom-made chandeliers, every detail is crafted to transport you to a world of sophisticated intimacy.
              </p>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden luxury-border">
            <img 
              src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2070&auto=format&fit=crop"
              alt="Le Coucou Neon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Staggered Grid (Fish & Bar) */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-8">
            <div className="aspect-[4/5] overflow-hidden luxury-border">
              <img src="https://images.unsplash.com/photo-1550966841-3ee5ad407354?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Dish" />
            </div>
            <p className="font-serif italic text-xl text-center">La Quenelle de Brochet</p>
          </div>
          <div className="space-y-8 md:translate-y-32">
            <div className="aspect-[4/5] overflow-hidden luxury-border">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Bar" />
            </div>
            <p className="font-serif italic text-xl text-center">L'Art de la Table</p>
          </div>
        </div>
      </section>

      {/* 4. Cuisine Section */}
      <section className="py-48 px-6 bg-white border-y border-black/5">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1 relative aspect-square max-w-md mx-auto luxury-border overflow-hidden">
             <img src="https://images.unsplash.com/photo-1626082895617-2c6de3476473?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Fine dining" />
          </div>
          <div className="order-1 lg:order-2 space-y-12">
            <h4 className="font-sans text-[10px] tracking-widest uppercase opacity-40 italic">Cuisine</h4>
            <h2 className="text-6xl md:text-8xl lowercase italic leading-[0.9]">The spirit of <br />Parisian grace.</h2>
            <Link href="/menu" className="pill-button-dark inline-block">
               Full Menù
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Interactive Menu Section */}
      <section className="py-32 px-6">
        <div className="max-w-screen-2xl mx-auto space-y-20">
          <div className="text-center space-y-12">
            <h2 className="text-6xl md:text-8xl font-serif lowercase italic tracking-tight text-coucou-teal">MENUS</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(menuData).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`pill-tab ${activeTab === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-x-24"
            >
              {menuData[activeTab].map((group, gidx) => (
                <div key={gidx} className="space-y-12">
                  <h4 className="font-sans text-[10px] tracking-[0.4em] uppercase text-coucou-teal font-semibold border-b border-coucou-teal/10 pb-4">
                    {group.group}
                  </h4>
                  <div className="space-y-10">
                    {group.items.map((item, iidx) => (
                      <div key={iidx} className="group cursor-default">
                        <div className="flex justify-between items-baseline gap-4 mb-1">
                          <p className="font-serif text-2xl lowercase italic text-coucou-teal group-hover:opacity-60 transition-opacity">
                            {item.name}
                          </p>
                          <span className="font-sans text-[9px] tracking-widest uppercase opacity-30 shrink-0">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 6. Larger Grid */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
         <div className="aspect-square luxury-border overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="G1" />
         </div>
         <div className="aspect-square luxury-border overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="G2" />
         </div>
         <div className="aspect-square luxury-border overflow-hidden">
            <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="G3" />
         </div>
      </section>

      {/* 7. Closing Interior Section */}
      <section className="py-48 px-6 text-center">
         <div className="max-w-4xl mx-auto space-y-16">
            <div className="aspect-video luxury-border overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Dining Room" />
            </div>
            <div className="space-y-8">
               <h4 className="font-sans text-[10px] tracking-widest uppercase opacity-40 italic">Atmosphere</h4>
               <h2 className="text-5xl md:text-7xl font-serif lowercase italic">Experience the dream.</h2>
               <Link href="/location" className="pill-button-dark inline-block">
                  Visit Us
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
