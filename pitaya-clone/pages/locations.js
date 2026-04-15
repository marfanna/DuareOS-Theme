import React, { useState } from 'react';
import Head from 'next/head';
import { Search, MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const locations = [
  { id: 1, name: 'Pitaya Paris 11 - Bastille', address: '12 Rue de la Roquette, 75011 Paris', phone: '+33 1 43 57 89 22', hours: '11:30 - 23:00', lat: 48.8534, lng: 2.3688 },
  { id: 2, name: 'Pitaya Lyon - Bellecour', address: '22 Rue de la République, 69002 Lyon', phone: '+33 4 78 42 15 63', hours: '12:00 - 22:30', lat: 45.7578, lng: 4.8351 },
  { id: 3, name: 'Pitaya Bordeaux - Centre', address: '5 Rue du Temple, 33000 Bordeaux', phone: '+33 5 56 44 12 11', hours: '11:00 - 23:30', lat: 44.8378, lng: -0.5792 },
  { id: 4, name: 'Pitaya London - Soho', address: '45 Brewer St, London W1F 9TF', phone: '+44 20 7437 1234', hours: '11:30 - 23:00', lat: 51.5113, lng: -0.1345 },
  { id: 5, name: 'Pitaya Madrid - Sol', address: 'Calle Mayor, 1, 28013 Madrid', phone: '+34 91 522 1234', hours: '12:00 - 23:00', lat: 40.4168, lng: -3.7038 },
];

const LocationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const filteredLocations = locations.filter(loc => 
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    loc.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen flex flex-col pt-20">
      <Head>
        <title>Restaurants | Pitaya Thai Street Food</title>
      </Head>

      <div className="flex-grow flex flex-col lg:flex-row overflow-hidden">
        {/* Sidebar: List of Restaurants */}
        <aside className="w-full lg:w-[450px] bg-white border-r border-gray-100 flex flex-col h-full overflow-hidden">
          <div className="p-8 space-y-6">
            <h1 className="text-4xl font-secular text-pitaya-dark">OUR <span className="text-pitaya-orange">WOK</span> STATIONS</h1>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Find a restaurant near you..." 
                className="w-full pl-10 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm font-source focus:ring-2 focus:ring-pitaya-orange transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-grow overflow-y-auto no-scrollbar px-8 pb-8 space-y-4">
            <p className="text-[10px] font-secular text-gray-400 uppercase tracking-widest px-2">
              {filteredLocations.length} RESTAURANTS FOUND
            </p>
            {filteredLocations.map((loc) => (
              <motion.div
                key={loc.id}
                whileHover={{ x: 5 }}
                onClick={() => setSelectedLocation(loc)}
                className={`p-6 rounded-[32px] cursor-pointer transition-all border-2 ${
                  selectedLocation?.id === loc.id 
                  ? 'bg-pitaya-orange border-pitaya-orange text-white shadow-lg shadow-orange-200' 
                  : 'bg-white border-gray-50 hover:bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`font-secular text-lg leading-tight ${selectedLocation?.id === loc.id ? 'text-white' : 'text-pitaya-dark'}`}>
                    {loc.name}
                  </h3>
                  <MapPin className={`h-5 w-5 ${selectedLocation?.id === loc.id ? 'text-white' : 'text-pitaya-orange'}`} />
                </div>
                <div className={`space-y-2 text-xs font-source ${selectedLocation?.id === loc.id ? 'text-orange-50' : 'text-gray-500'}`}>
                  <p className="flex items-center gap-2"><Phone className="h-3 w-3" /> {loc.phone}</p>
                  <p className="flex items-center gap-2"><Clock className="h-3 w-3" /> Open until {loc.hours}</p>
                </div>
                {selectedLocation?.id === loc.id && (
                  <div className="flex gap-2 mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                     <button className="flex-grow py-2 bg-white text-pitaya-orange rounded-full text-[10px] font-secular uppercase tracking-tighter hover:bg-opacity-95 transition-all">
                       Order Here
                     </button>
                     <button className="p-2 border border-white/30 rounded-full hover:bg-white/10">
                        <Navigation className="h-4 w-4" />
                     </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </aside>

        {/* Map View Placeholder */}
        <main className="flex-grow bg-[#E5E7EB] relative overflow-hidden min-h-[400px]">
           {/* Simple Map Placeholder with Markers */}
           <div className="absolute inset-0 bg-cover bg-center opacity-50 grayscale contrast-125" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074')" }}>
           </div>
           
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Simulated Markers */}
                {filteredLocations.map((loc) => (
                  <motion.div
                    key={loc.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute cursor-pointer"
                    style={{ 
                      top: `${((loc.lat - 40) / 15) * 100}%`, 
                      left: `${((loc.lng + 5) / 10) * 100}%` 
                    }}
                    onClick={() => setSelectedLocation(loc)}
                  >
                     <div className={`relative group`}>
                        <div className={`p-1 rounded-full shadow-xl transition-all ${selectedLocation?.id === loc.id ? 'scale-125 z-20' : 'scale-100 z-10'}`}>
                           <div className={`bg-pitaya-orange h-8 w-8 rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg`}>
                              <span className="text-[10px] font-secular">P</span>
                           </div>
                        </div>
                        {/* Tooltip */}
                        <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-white rounded-lg shadow-xl border border-gray-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}>
                           <p className="font-secular text-[10px] text-pitaya-dark uppercase">{loc.name}</p>
                        </div>
                     </div>
                  </motion.div>
                ))}
              </div>
           </div>

           {/* Mobile Floating Action */}
           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:hidden">
              <Button variant="dark" className="shadow-2xl">
                View List View
              </Button>
           </div>
        </main>
      </div>
    </div>
  );
};

export default LocationsPage;
