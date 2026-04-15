import React, { useState } from 'react';
import Head from 'next/head';
import { Search, Info, Plus, ChevronRight } from 'lucide-react';
import Button from '@/components/Button';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'woks', name: 'Woks' },
  { id: 'noodles', name: 'Noodles' },
  { id: 'salads', name: 'Salads' },
  { id: 'sides', name: 'Sides & Extras' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'desserts', name: 'Desserts' },
];

const menuItems = [
  { id: 1, category: 'woks', name: 'Pad Thai', description: 'Rice noodles, egg, bean sprouts, peanuts, and our secret tamarind sauce.', price: '12.90', image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070' },
  { id: 2, category: 'woks', name: 'Nua Kao', description: 'Tender beef wok-fried with rice, crispy onions, and Thai basil.', price: '14.50', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070' },
  { id: 3, category: 'noodles', name: 'Sieuw Beef', description: 'Wide rice noodles, beef, broccoli, and sweet soy sauce.', price: '13.90', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=2072' },
  { id: 4, category: 'salads', name: 'Thai Salad', description: 'Fresh greens, mango, peanuts, and a zesty lime dressing.', price: '10.50', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000' },
  { id: 5, category: 'sides', name: 'Chicken Satay', description: 'Grilled chicken skewers with creamy peanut sauce.', price: '6.50', image: 'https://images.unsplash.com/photo-1626777553732-4730635e9854?q=80&w=2000' },
  { id: 6, category: 'desserts', name: 'Mango Sticky Rice', description: 'Sweet sticky rice with fresh mango and coconut milk.', price: '7.20', image: 'https://images.unsplash.com/photo-1621801306185-9a4891694f79?q=80&w=2000' },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-pitaya-light min-h-screen">
      <Head>
        <title>Menu | Pitaya Thai Street Food</title>
      </Head>

      {/* Hero / Header */}
      <section className="bg-pitaya-dark text-white pt-32 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-secular mb-6"
          >
            OUR <span className="text-pitaya-orange">STREET</span> MENU
          </motion.h1>
          <p className="max-w-2xl mx-auto text-gray-400 font-source italic">
            "Every dish is a journey. From the vibrant markets of Bangkok to your plate."
          </p>
        </div>
      </section>

      {/* Category Nav & Search */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
            {/* Scrollable Categories */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 px-6 py-2 rounded-full text-xs font-secular uppercase tracking-tighter transition-all ${
                    activeCategory === cat.id 
                    ? 'bg-pitaya-orange text-white' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search a dish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm font-source focus:ring-2 focus:ring-pitaya-orange transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-secular text-pitaya-dark">
                      🔥 POPULAR
                    </span>
                  </div>
                  <button className="absolute bottom-6 right-6 bg-pitaya-orange text-white p-3 rounded-2xl shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Plus className="h-6 w-6" />
                  </button>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-[10px] font-secular text-pitaya-orange uppercase tracking-widest mb-1">
                          {categories.find(c => c.id === item.category)?.name}
                        </p>
                        <h3 className="text-2xl font-secular text-pitaya-dark">{item.name}</h3>
                    </div>
                    <span className="font-secular text-xl text-pitaya-dark">${item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm font-source leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <button className="flex items-center gap-1 text-xs font-source text-gray-400 hover:text-pitaya-dark transition-colors">
                      <Info className="h-4 w-4" /> Nutrition Info
                    </button>
                    <button className="flex items-center gap-1 text-xs font-secular uppercase tracking-tighter text-pitaya-dark hover:text-pitaya-orange group/btn">
                      More Details <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-secular text-gray-400">NO DISHES FOUND</h3>
            <p className="text-gray-500 font-source mt-2">Try searching for something else!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default MenuPage;
