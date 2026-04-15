import React from 'react';

const CuisinePage = () => {
  return (
    <div className="bg-coucou-cream min-h-screen pt-32 pb-32 px-6">
      <div className="max-w-screen-xl mx-auto space-y-32">
        {/* Intro */}
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-9xl font-serif lowercase italic tracking-tighter">La Cuisine</h1>
          <p className="font-serif text-3xl italic text-coucou-burgundy max-w-2xl mx-auto">
            "We serve classic French cuisine with the spirit of New York."
          </p>
        </div>

        {/* Highlight 1: Tradition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square overflow-hidden luxury-border">
             <img src="https://images.unsplash.com/photo-1626082895617-2c6de3476473?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Sourcing" />
          </div>
          <div className="space-y-12">
            <h4 className="font-sans text-[10px] tracking-widest uppercase opacity-40 italic">L'héritage</h4>
            <h2 className="text-6xl font-serif lowercase italic leading-tight">Honoring the <br />Grand Table</h2>
            <div className="space-y-6 text-coucou-text-muted leading-relaxed max-w-lg">
              <p>
                Our cuisine is a conversation with history. We celebrate the techniques and flavors that have defined French gastronomy for centuries, from perfectly executed sauces to the most delicate pastries.
              </p>
              <p>
                Chef Daniel Rose brings a deeply personal perspective, infusing these timeless traditions with the energy and vibrancy of the modern dining scene. The result is an experience that feels both familiar and entirely new.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight 2: Ingredients */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-12 text-right flex flex-col items-end">
            <h4 className="font-sans text-[10px] tracking-widest uppercase opacity-40 italic">Le Produit</h4>
            <h2 className="text-6xl font-serif lowercase italic leading-tight">The Purity of <br />The Ingredient</h2>
            <div className="space-y-6 text-coucou-text-muted leading-relaxed max-w-lg">
              <p>
                Everything begins with the ingredient. We source the finest seasonal produce, meats, and seafood from trusted purveyors who share our commitment to quality and sustainability.
              </p>
              <p>
                Whether it's the iconic rabbit dish or the simplest vegetable preparation, the goal is always to reveal the essence of the ingredient in its most pure and delicious form.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-square overflow-hidden luxury-border">
             <img src="https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Technique" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuisinePage;
