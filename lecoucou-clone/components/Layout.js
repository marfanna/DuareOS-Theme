import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReservationModal from './ReservationModal';
import Head from 'next/head';

const Layout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-coucou-cream text-foreground selection:bg-coucou-burgundy selection:text-white">
      <Head>
        <title>Le Coucou | Fine French Dining in New York</title>
        <meta name="description" content="Classic French cuisine in a beautiful, modern New York setting by Daniel Rose and Stephen Starr." />
      </Head>
      
      <Navbar onOpenReservation={() => setIsModalOpen(true)} />
      
      <main className="pt-20">
        {children}
      </main>
      
      <Footer />
      
      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Layout;
