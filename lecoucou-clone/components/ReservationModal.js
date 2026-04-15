import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Calendar, Clock, ChevronRight } from 'lucide-react';

const ReservationModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-xl h-fit max-h-[90vh] bg-coucou-cream z-[101] overflow-hidden shadow-2xl"
          >
            <div className="bg-coucou-burgundy p-8 text-white flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-serif lowercase italic mb-1">Book your table</h2>
                <p className="text-[10px] tracking-widest uppercase opacity-60">Le Coucou New York</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-10 space-y-8">
              {/* Party Size */}
              <div className="space-y-4">
                <label className="flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-coucou-text-muted">
                  <Users className="h-3 w-3" /> Party Size
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button 
                      key={num}
                      className={`flex-1 aspect-square border ${num === 2 ? 'bg-coucou-burgundy text-white border-coucou-burgundy' : 'border-black/10 hover:border-black'} transition-all flex items-center justify-center font-serif text-xl`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-coucou-text-muted">
                    <Calendar className="h-3 w-3" /> Date
                  </label>
                  <div className="w-full border-b border-black/10 py-2 flex justify-between items-center font-serif text-xl cursor-not-allowed">
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    <ChevronRight className="h-4 w-4 opacity-30" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-coucou-text-muted">
                    <Clock className="h-3 w-3" /> Time (Lunch)
                  </label>
                  <div className="w-full border-b border-black/10 py-2 flex justify-between items-center font-serif text-xl cursor-not-allowed">
                    12:30 PM
                    <ChevronRight className="h-4 w-4 opacity-30" />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-coucou-red text-white py-5 font-serif text-2xl lowercase hover:bg-opacity-90 transition-all shadow-lg active:scale-[0.98]">
                Find a table
              </button>

              <div className="pt-4 text-center">
                <p className="text-[10px] tracking-widest uppercase opacity-40">Powered by Resy Mockup</p>
              </div>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;
