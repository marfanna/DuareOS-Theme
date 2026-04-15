import React from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin, MessageCircle, Send, Globe, ChevronRight } from 'lucide-react';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="bg-pitaya-light min-h-screen pt-20">
      <Head>
        <title>Contact Us | Pitaya Thai Street Food</title>
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-secular text-pitaya-dark">GET IN <span className="text-pitaya-orange">TOUCH</span></h1>
              <p className="text-gray-500 font-source text-lg leading-relaxed">
                Have a question about our menu, interested in a franchise, or just want to say Hi? We are always listening.
              </p>
            </div>

            <div className="space-y-8">
               <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white rounded-3xl shadow-sm text-pitaya-orange group-hover:bg-pitaya-orange group-hover:text-white transition-all">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-secular text-pitaya-dark text-sm uppercase mb-1">Email Us</h4>
                    <p className="font-source text-gray-500">hello@pitaya.com</p>
                  </div>
               </div>

               <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white rounded-3xl shadow-sm text-pitaya-orange group-hover:bg-pitaya-orange group-hover:text-white transition-all">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-secular text-pitaya-dark text-sm uppercase mb-1">Call Us</h4>
                    <p className="font-source text-gray-500">+33 1 23 45 67 89</p>
                  </div>
               </div>

               <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white rounded-3xl shadow-sm text-pitaya-orange group-hover:bg-pitaya-orange group-hover:text-white transition-all">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-secular text-pitaya-dark text-sm uppercase mb-1">Headquarters</h4>
                    <p className="font-source text-gray-500">123 Wok Station Avenue, Paris, France</p>
                  </div>
               </div>
            </div>

            <div className="pt-12 border-t border-gray-200">
               <h4 className="font-secular text-pitaya-dark text-sm uppercase mb-6">Connect with the spirit</h4>
               <div className="flex gap-4">
                  {['Instagram', 'Facebook', 'LinkedIn', 'Twitter'].map((social) => (
                    <button key={social} className="px-6 py-2 rounded-full border border-gray-200 text-[10px] font-secular uppercase tracking-widest hover:border-pitaya-orange hover:text-pitaya-orange transition-all">
                      {social}
                    </button>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[50px] p-10 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10 space-y-8">
               <h3 className="text-3xl font-secular text-pitaya-dark">SEND A MESSAGE</h3>
               
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-secular text-gray-400 uppercase tracking-widest ml-4">Full Name</label>
                       <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-source focus:ring-2 focus:ring-pitaya-orange transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-secular text-gray-400 uppercase tracking-widest ml-4">Email Address</label>
                       <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-source focus:ring-2 focus:ring-pitaya-orange transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-secular text-gray-400 uppercase tracking-widest ml-4">Subject</label>
                    <select className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-source focus:ring-2 focus:ring-pitaya-orange transition-all appearance-none">
                       <option>Customer Support</option>
                       <option>Franchise Inquiry</option>
                       <option>Catering Request</option>
                       <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-secular text-gray-400 uppercase tracking-widest ml-4">Your Message</label>
                    <textarea rows="5" placeholder="Tell us what is on your mind..." className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-source focus:ring-2 focus:ring-pitaya-orange transition-all resize-none"></textarea>
                  </div>

                  <Button variant="primary" className="w-full py-5 text-lg flex items-center justify-center gap-3">
                    Send Message <Send className="h-5 w-5" />
                  </Button>
               </form>

               <p className="text-center text-[10px] text-gray-400 font-source italic">
                 By submitting this form, you agree to our Privacy Policy. We usually respond within 24 hours.
               </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Link Branding */}
      <section className="bg-pitaya-dark py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
            <div className="p-6 bg-pitaya-orange/10 rounded-full">
               <MessageCircle className="h-12 w-12 text-pitaya-orange" />
            </div>
            <h2 className="text-3xl font-secular text-white">CHECK OUR FAQ</h2>
            <p className="text-gray-400 font-source max-w-lg">
              Check out our Frequently Asked Questions for quick answers about our recipes, nutritional information, and loyalty program.
            </p>
            <button className="flex items-center gap-2 font-secular text-white hover:text-pitaya-orange transition-colors">
               GO TO FAQ <ChevronRight className="h-5 w-5" />
            </button>
         </div>
      </section>
    </div>
  );
};

export default ContactPage;
