import React from 'react';
import Head from 'next/head';
import { Calendar, User, ArrowRight, Share2, Tag } from 'lucide-react';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const articles = [
  { id: 1, title: 'THE PITAYA STREET FESTIVAL IS BACK!', date: 'April 15, 2026', author: 'Team Pitaya', category: 'Events', excerpt: 'Join us for 7 days of celebration, 7 special dishes, and a lot of wok fire! Discover the program for our annual festival.', image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070' },
  { id: 2, title: 'NEW: THE BAO THAI BURGER', date: 'April 10, 2026', author: 'Chef Somjai', category: 'New Product', excerpt: 'Meet our latest fusion creation. Crispy chicken, sriracha mayo, and soft steamed bao buns. Limited time only!', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070' },
  { id: 3, title: 'OUR FIRST OPENING IN LONDON SOHO', date: 'March 28, 2026', author: 'Marketing', category: 'Opening', excerpt: 'Pitaya lands in the heart of London! Come and discover our new wok station on Brewer Street.', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070' },
  { id: 4, title: '5 SECRETS TO THE PERFECT PAD THAI', date: 'March 15, 2026', author: 'Kitchen Team', category: 'Recipes', excerpt: 'Our wok masters share their tips for achieving that perfect smoky flavor at home. Hint: it is all about the flame.', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=2072' },
  { id: 5, title: 'LOYALTY PROGRAM RE-DESIGNED', date: 'March 05, 2026', author: 'Loyalty Team', category: 'App', excerpt: 'More points, more rewards, and more Thai street food. Discover our new mobile app and start earning today.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070' },
  { id: 6, title: 'PITAYA COMMITS TO ZERO PLASTIC', date: 'February 20, 2026', author: 'CSR', category: 'Planet', excerpt: 'We are proud to announce that all our takeaway packaging is now 100% compostable. Towards a greener future.', image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070' },
];

const NewsPage = () => {
  return (
    <div className="bg-pitaya-light min-h-screen pt-20">
      <Head>
        <title>News & Stories | Pitaya Thai Street Food</title>
      </Head>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="order-2 lg:order-1 space-y-8"
              >
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-pitaya-orange text-xs font-secular uppercase tracking-widest">
                    <Tag className="h-3 w-3" /> Featured Story
                 </div>
                 <h1 className="text-5xl md:text-6xl font-secular text-pitaya-dark">THE PASSION BEHIND <span className="text-pitaya-orange">WOK FIRED</span> FLAVORS</h1>
                 <p className="text-gray-500 font-source leading-relaxed text-lg">
                    Discover how our chefs master the art of the wok to create that signature smoky flavor, known as 'Wok Hei'. A deep dive into the techniques that make Pitaya unique.
                 </p>
                 <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-source">
                       <Calendar className="h-4 w-4" /> April 18, 2026
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-source">
                       <User className="h-4 w-4" /> Chef Somjai
                    </div>
                 </div>
                 <Button variant="dark" className="px-10 py-4">Read Full Article</Button>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="order-1 lg:order-2 relative"
              >
                 <div className="bg-pitaya-orange absolute inset-0 rounded-[60px] blur-3xl opacity-10"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=2072" 
                   className="rounded-[50px] shadow-2xl relative z-10 w-full h-[500px] object-cover"
                   alt="Featured Artcle"
                 />
              </motion.div>
           </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl font-secular text-pitaya-dark">LATEST STORIES</h2>
            <div className="flex gap-4">
               {['All', 'Events', 'Openings', 'Food'].map((filter) => (
                 <button key={filter} className="hidden sm:block px-6 py-2 rounded-full border border-gray-200 text-xs font-secular uppercase tracking-tighter hover:bg-white hover:border-pitaya-orange transition-all">
                    {filter}
                 </button>
               ))}
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[40px] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                   <img 
                     src={post.image} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     alt={post.title}
                   />
                   <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-secular text-pitaya-dark uppercase">
                        {post.category}
                      </span>
                   </div>
                </div>
                <div className="p-10 space-y-4">
                   <div className="flex items-center gap-4 text-[10px] font-source text-gray-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                   </div>
                   <h3 className="text-xl font-secular text-pitaya-dark leading-tight group-hover:text-pitaya-orange transition-colors">
                      {post.title}
                   </h3>
                   <p className="text-gray-500 text-sm font-source leading-relaxed line-clamp-3">
                      {post.excerpt}
                   </p>
                   <div className="pt-6 flex justify-between items-center border-t border-gray-50">
                      <button className="flex items-center gap-1 text-xs font-secular uppercase tracking-tighter text-pitaya-dark hover:gap-3 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-pitaya-orange">
                         <Share2 className="h-4 w-4" />
                      </button>
                   </div>
                </div>
              </motion.article>
            ))}
         </div>

         <div className="mt-20 text-center">
            <Button variant="outline" className="px-12 py-5">Load More Stories</Button>
         </div>
      </section>
    </div>
  );
};

export default NewsPage;
