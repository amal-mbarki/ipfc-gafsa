"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AccreditationBar from './components/AccreditationBar'; 
import Languages from './components/Languages'; 
import Methodology from './components/Methodology';
import FeaturesPrestige from './components/FeaturesPrestige';
import Testimonials from './components/Testimonials';
import InteractiveGallery from './components/InteractiveGallery';
import FreeTest from './components/FreeTest';
import RegisterForm from './components/RegisterForm';
import BusinessHours from './components/BusinessHours'; 
import Newsletter from './components/Newsletter';
import ContactCard from './components/ContactCard';

export default function Home() {
  const floatingWords = ["EXCELLENCE", "SUCCESS", "GAFSA", "FUTURE", "PRESTIGE", "OFFICIAL"];
  const [bgIndex, setBgIndex] = useState(0);
  const [activeWord, setActiveWord] = useState(0);

  const gradients = [
    "radial-gradient(circle at center, #580303 0%, #050505 100%)",
    "radial-gradient(circle at top right, #300101 0%, #050505 100%)",
    "radial-gradient(circle at bottom left, #4a0202 0%, #000000 100%)"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % gradients.length);
      setActiveWord((prev) => (prev + 1) % floatingWords.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white antialiased selection:bg-[#580303] selection:text-white overflow-x-hidden"> 
      
      {/* 1. DYNAMIC HERO SECTION */}
      <section 
        className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden transition-all duration-[3000ms] ease-in-out" 
        style={{ 
          background: gradients[bgIndex],
          clipPath: "polygon(0 0, 100% 0, 100% 98%, 0% 100%)" 
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={floatingWords[activeWord]}
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 0.05, scale: 1.1, y: 0 }}
            exit={{ opacity: 0, scale: 1.4 }}
            transition={{ duration: 3 }}
            className="absolute text-[25vw] md:text-[15vw] font-[1000] text-white pointer-events-none select-none z-0 whitespace-nowrap"
          >
            {floatingWords[activeWord]}
          </motion.span>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-6 py-20 md:py-0">
          <motion.span 
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white/40 font-black tracking-[0.3em] md:tracking-[0.5em] text-[7px] md:text-[11px] uppercase mb-6 md:mb-10 block italic"
          >
            IPFC Gafsa Premium Expertise
          </motion.span>

          <h1 className="text-[40px] sm:text-6xl md:text-[110px] font-[1000] text-white mb-8 md:mb-12 leading-[1.1] md:leading-[0.82] tracking-tighter uppercase">
            Your Future <br className="hidden md:block" /> Begins 
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#a81a1a] italic block mt-2 md:mt-4"
            >
              Globally
            </motion.span>
          </h1>

          <div className="flex justify-center items-center">
             <motion.a 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               href="#register" 
               className="w-full md:w-auto bg-[#580303] text-white px-10 md:px-14 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg shadow-2xl transition-all uppercase tracking-widest"
             >
               Enroll Now
             </motion.a>
          </div>
        </div>

        {/* Floating Stats - Visible on PC, adjusted for clarity */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-5 z-20">
          {[
            { label: "Levels", val: "A1 → C2" },
            { label: "Accredited", val: "13+" },
            { label: "Official", val: "100%" }
          ].map((stat, i) => (
            <motion.div key={i} className="bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-[2rem] text-center w-32">
              <p className="text-white font-black text-xl">{stat.val}</p>
              <p className="text-white/30 text-[7px] uppercase tracking-widest mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. ACCREDITATION BAR - Visual Bridge */}
      <div className="-mt-10 md:-mt-16 relative z-30 transform -rotate-1 scale-[1.01] md:scale-[1.02]">
        <AccreditationBar />
      </div>

      {/* 3. CORE CONTENT SECTIONS - Improved Spacing */}
      <div className="space-y-20 md:space-y-40">
        <div id="courses" className="pt-16 md:pt-32"><Languages /></div>
        <Methodology /> 
        <div id="features"><FeaturesPrestige /></div>
        <Testimonials /> 
        <div id="gallery" className="px-4"><InteractiveGallery /></div>
        <FreeTest /> 
        <div id="register" className="pt-16 md:pt-32 px-4"><RegisterForm /></div>
      </div>
      
      {/* 4. CALL TO ACTION */}
      <section className="w-full bg-[#580303] py-20 md:py-32 px-6 mt-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-12 relative z-10">
          <div className="space-y-4">
            <h2 className="text-white text-3xl md:text-7xl font-[1000] tracking-tighter italic uppercase leading-none">
              Exclusive <br className="hidden md:block" /> in Gafsa
            </h2>
            <p className="text-white/60 font-bold tracking-[0.1em] text-[9px] md:text-sm uppercase italic">
              Elite Training • International Degrees • Global Success
            </p>
          </div>
          <a href="#register" className="shrink-0 px-12 py-5 bg-white text-[#580303] rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform">
            Start Journey
          </a>
        </div>
      </section>

      {/* 5. CONTACT & HOURS - Pro Layout */}
      <section id="hours" className="py-20 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="bg-white border border-slate-50 rounded-[40px] md:rounded-[80px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row">
            <div className="w-full lg:w-[45%] bg-[#050505] p-8 md:p-16 flex items-center justify-center">
              <ContactCard />
            </div>
            <div className="w-full lg:w-[55%] p-10 md:p-24 bg-white flex items-center">
              <div className="w-full">
                <BusinessHours />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter /> 
    </main>
  );
}