import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('Dinner');

  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Beverage'];

  const menuData = {
    Dinner: {
      sections: [
        {
          title: 'HORS D’ŒUVRES',
          items: [
            { name: 'Oysters in half shell', description: 'Beauchastel, Atlantic coast', price: '28' },
            { name: 'Crabe Marie-Louise', description: 'peekytoe crab, avocado, daikon', price: '32' },
            { name: 'Escargots en gelée', description: 'snails in garlic butter, sourdough', price: '26' },
            { name: 'Poireaux vinaigrette', description: 'leeks with hazelnuts and egg', price: '24' },
          ]
        },
        {
          title: 'POISSONS ET VIANDES',
          items: [
            { name: 'Quenelle de brochet', description: 'pike mousse, lobster sauce, mushrooms', price: '48' },
            { name: 'Tout le Lapin', description: 'all of the rabbit, marinated and braised', price: '56' },
            { name: 'Filet de boeuf au poivre', description: 'beef filet, green peppercorns, potato puree', price: '64' },
            { name: 'Canard et cerises', description: 'roast duck, cherries, foie gras sausage', price: '58' },
          ]
        }
      ]
    },
    Lunch: {
      sections: [
        {
          title: 'PLATS DU JOUR',
          items: [
            { name: 'Omelette aux fines herbes', description: 'classic french omelette, green salad', price: '24' },
            { name: 'Salade Niçoise', description: 'tuna, green beans, olives, egg', price: '28' },
            { name: 'Croque Monsieur', description: 'ham, gruyere, bechamel, sourdough', price: '26' },
          ]
        }
      ]
    }
  };

  const currentMenu = menuData[activeTab] || menuData['Dinner'];

  return (
    <div className="pt-20 lg:pt-32 pb-32 px-6 bg-coucou-cream min-h-screen">
      <div className="max-w-screen-xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center space-y-12">
          <h1 className="text-6xl md:text-8xl font-serif lowercase italic tracking-tight">Menù</h1>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`font-sans text-[10px] tracking-[0.3em] uppercase transition-all pb-2 border-b ${activeTab === cat ? 'border-black opacity-100' : 'border-transparent opacity-30 hover:opacity-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-24"
          >
            {currentMenu.sections.map((section, sidx) => (
              <div key={sidx} className="space-y-16">
                <div className="text-center">
                  <h3 className="font-sans text-[11px] tracking-[0.5em] uppercase opacity-40 mb-2">— {section.title} —</h3>
                </div>
                
                <div className="space-y-12">
                  {section.items.map((item, iidx) => (
                    <div key={iidx} className="flex flex-col items-center text-center space-y-3">
                      <div className="flex items-baseline gap-4 w-full">
                        <div className="h-[1px] flex-1 bg-black/5" />
                        <h4 className="font-serif text-3xl lowercase italic whitespace-nowrap">{item.name}</h4>
                        <div className="h-[1px] flex-1 bg-black/5" />
                      </div>
                      <p className="font-serif text-lg italic opacity-60 max-w-lg">{item.description}</p>
                      <span className="font-sans text-[10px] tracking-widest uppercase opacity-40">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <div className="text-center pt-20 border-t border-black/5">
          <p className="font-serif italic text-xl opacity-40">
            "Prices and availability are subject to seasonal change."
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
