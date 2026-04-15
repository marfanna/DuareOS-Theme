import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="bg-coucou-cream min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-screen-xl mx-auto space-y-8">
          <h4 className="font-sans text-[10px] tracking-[0.4em] uppercase opacity-40">The Narrative</h4>
          <h1 className="text-6xl md:text-9xl font-serif lowercase italic tracking-tighter">About Le Coucou</h1>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-32">
        <div className="max-w-screen-2xl mx-auto aspect-[21/9] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale brightness-75"
            alt="Le Coucou Story"
          />
        </div>
      </section>

      {/* The Visionaries */}
      <section className="py-32 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl lowercase italic leading-tight">The Vision of <br />Daniel Rose & <br />Stephen Starr</h2>
            <div className="space-y-6 text-coucou-text-muted leading-relaxed">
              <p>
                Le Coucou marks the triumphant return of celebrated chef Daniel Rose to his native shores after building an acclaimed culinary empire in Paris. In partnership with visionary restaurateur Stephen Starr, Le Coucou reimagines the grandeur of classic French dining for a modern New York audience.
              </p>
              <p>
                From the moment it opened its doors in SoHo, the restaurant has set a new standard for sophistication, earning a Michelin star and the James Beard Award for Best New Restaurant. It is a place where tradition meets innovation, and where the art of the table is celebrated in every detail.
              </p>
            </div>
          </div>
          <div className="bg-white p-12 luxury-border space-y-12">
             <div className="space-y-4">
               <h4 className="font-sans text-[10px] tracking-widest uppercase opacity-40 italic">Interior Design</h4>
               <h3 className="text-4xl font-serif lowercase italic">Roman and Williams</h3>
             </div>
             <p className="text-coucou-text-muted italic leading-relaxed">
               "The interior of Le Coucou is a masterwork of design, crafted by the renowned Roman and Williams. Whitewashed brick, custom-made chandeliers, and the iconic open kitchen create an atmosphere that is both grand and intimate—a box within a box that captures the dreamscape of a Parisian night."
             </p>
             <div className="aspect-video overflow-hidden">
               <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" alt="Interior Detail" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* The Bird Logo Story */}
      <section className="bg-white py-32 px-6 border-y border-black/5">
        <div className="max-w-screen-md mx-auto text-center space-y-12">
          <div className="flex justify-center">
            <div className="h-24 w-24 flex items-center justify-center border border-black/10 rounded-full">
               <span className="font-serif italic text-4xl text-coucou-red lowercase">lc</span>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-serif lowercase italic">Le Symbole du Coucou</h2>
            <p className="text-coucou-text-muted leading-relaxed text-lg">
              The iconic bird logo, a playful yet refined symbol, represents the spirit of the restaurant—a traveler that finds its home in the most unexpected places. It is a nod to Chef Daniel Rose's journey and the universal language of hospitality that welcomes every guest into our "nest."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
