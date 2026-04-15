import Head from "next/head";
import { Search, MapPin, ArrowRight, Play, Star, Clock, Flame } from "lucide-react";
import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-pitaya-light">
      <Head>
        <title>Pitaya | Authentic Thai Street Food</title>
        <meta name="description" content="Authentic Thai Street Food prepared in front of your eyes. Find your nearest Pitaya restaurant." />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#FFF5E9]/50 -z-10"></div>
        
        {/* Abstract Background Illustrations (Representing the vibrant design) */}
        <div className="absolute top-20 right-[-10%] w-[60%] h-[80%] bg-contain bg-no-repeat opacity-20 -z-10 pointer-events-none" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070&auto=format&fit=crop')" }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm animate-bounce">
              <span className="flex h-2 w-2 rounded-full bg-pitaya-orange"></span>
              <span className="text-[10px] font-secular uppercase tracking-widest text-gray-400">Now at your home</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-secular leading-[0.9] text-pitaya-dark">
              IT'S <span className="text-pitaya-orange">WOK</span> <br />
              TIME!
            </h1>
            
            <p className="text-lg font-source text-gray-600 max-w-lg leading-relaxed">
              Discover the authentic flavors of Thailand. Fresh ingredients, high flames, and the soul of Bangkok street food served in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" className="px-10 py-5 text-lg">
                View the Menu
              </Button>
              <button className="flex items-center gap-3 px-8 py-4 font-secular uppercase tracking-tighter text-pitaya-dark hover:text-pitaya-orange transition-all">
                <span className="p-3 bg-white rounded-full shadow-md"><Play className="h-4 w-4 fill-current" /></span>
                Our Concept
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                   </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
                <p className="text-xs font-source text-gray-500">
                  <span className="font-bold text-pitaya-dark">2k+</span> happy street foodies
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 p-4 transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop" 
                alt="Pitaya Bowl"
                className="rounded-[40px] shadow-2xl border-8 border-white object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 flex items-center gap-4 animate-float">
                 <div className="bg-orange-100 p-3 rounded-2xl">
                    <Flame className="h-6 w-6 text-pitaya-orange" />
                 </div>
                 <div>
                    <p className="text-[10px] font-secular text-gray-400 uppercase tracking-widest">Spice Level</p>
                    <p className="font-secular text-pitaya-dark">VIBRANT HOT</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Restaurant Finder Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-secular text-pitaya-dark leading-tight">
              FIND YOUR NEAREST <br />
              <span className="text-pitaya-orange underline decoration-[6px] underline-offset-8">WOK STATION</span>
            </h2>
            <p className="text-gray-500 font-source">
              With over 100 locations, there's always a Pitaya near you. Enter your city to start your journey.
            </p>
          </div>

          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-0 bg-pitaya-orange opacity-10 blur-xl rounded-full group-hover:opacity-20 transition-all"></div>
            <div className="relative flex items-center p-2 bg-white border-2 border-gray-100 rounded-full shadow-lg">
              <div className="pl-6 text-gray-400">
                <MapPin className="h-5 w-5" />
              </div>
              <input 
                type="text" 
                placeholder="Where are you today?" 
                className="w-full px-4 py-4 focus:outline-none text-lg font-source"
              />
              <button className="bg-pitaya-dark text-white p-4 rounded-full hover:bg-pitaya-orange transition-all">
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-24 bg-pitaya-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
               <h3 className="text-3xl font-secular text-pitaya-dark tracking-tight">STREET FAVORITES</h3>
               <p className="text-gray-500 font-source">Our most loved bowls, perfected on the flame.</p>
            </div>
            <Link href="/menu">
              <button className="hidden sm:flex items-center gap-2 text-sm font-secular uppercase tracking-widest text-pitaya-orange border-b-2 border-pitaya-orange pb-1 hover:gap-4 transition-all">
                Explore Full Menu <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Pad Thai", desc: "The legendary classic with rice noodles and secret sauce.", price: "12.90" },
              { name: "Nua Kao", desc: "Tender beef wok-fried with crispy onions and Thai basil.", price: "14.50" },
              { name: "Red Curry", desc: "Creamy coconut milk with our spicy red curry paste.", price: "13.20" }
            ].map((dish, i) => (
              <div key={i} className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={`https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=2072&auto=format&fit=crop`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={dish.name}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-secular text-pitaya-dark">
                    NEW
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-secular text-pitaya-dark">{dish.name}</h4>
                    <span className="font-secular text-pitaya-orange">${dish.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm font-source leading-relaxed">
                    {dish.desc}
                  </p>
                  <Button variant="dark" className="w-full py-3 rounded-2xl group-hover:bg-pitaya-orange">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Dummy Link component since we are not using next/link for the explore button to avoid errors if not configured correctly in the environment
const Link = ({ children, href }) => <a href={href}>{children}</a>;
