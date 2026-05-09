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
    <main className="bg-white antialiased selection:bg-[#580303] selection:text-white"> 
      
      {/* 1. DYNAMIC HERO SECTION */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-[3000ms] ease-in-out pb-20" 
        style={{ 
          background: gradients[bgIndex],
          clipPath: "polygon(0 0, 100% 0, 100% 92%, 0% 100%)" 
        }}
      >
        <AnimatePresence>
          <motion.span
            key={floatingWords[activeWord]}
            initial={{ opacity: 0, scale: 0.5, x: 100 }}
            animate={{ opacity: 0.1, scale: 1.5, x: -100 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 3 }}
            className="absolute text-[15vw] font-black text-white pointer-events-none select-none z-0"
          >
            {floatingWords[activeWord]}
          </motion.span>
        </AnimatePresence>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white/40 font-black tracking-[0.4em] text-[10px] uppercase mb-10 block"
          >
            IPFC Gafsa Premium Expertise
          </motion.span>

          <h1 className="text-6xl md:text-[95px] font-[1000] text-white mb-10 leading-[0.85] tracking-tighter">
            Your Future Begins <br/> 
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#a81a1a] italic uppercase"
            >
              With a Global Degree
            </motion.span>
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
             <motion.a 
               whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(88,3,3,0.4)" }}
               whileTap={{ scale: 0.95 }}
               href="#register" 
               className="bg-[#580303] text-white px-16 py-6 rounded-2xl font-black text-xl shadow-2xl transition-all duration-500"
             >
               Enroll Now
             </motion.a>
          </div>
        </div>

        {/* Floating Stats Sidebar */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-20">
          {[
            { label: "Levels", val: "A1 → C2" },
            { label: "Accredited", val: "13+" },
            { label: "Official", val: "100%" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-[2rem] text-center w-36"
            >
              <p className="text-white font-black text-2xl">{stat.val}</p>
              <p className="text-white/30 text-[8px] uppercase tracking-widest mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. ACCREDITATION BAR (MAYLA / SKEWED) */}
      {/* هنا قمنا بإضافة الميلان (rotate) ليعطي نفس شكل الصورة التي طلبتِها */}
      <div className="-mt-24 relative z-30 transform -rotate-1 md:-rotate-2 origin-center">
        <AccreditationBar />
      </div>

      {/* 3. CORE CONTENT */}
      {/* أضفنا pt-20 لتعويض الميلان ومنع التداخل مع المحتوى الذي يليه */}
      <div id="courses" className="pt-20"><Languages /></div>
      <Methodology /> 
      <div id="features"><FeaturesPrestige /></div>
      <Testimonials /> 
      <div id="gallery"><InteractiveGallery /></div>
      <FreeTest /> 
      <div id="register" className="pt-20"><RegisterForm /></div>
      
      {/* 4. CALL TO ACTION */}
      <section className="w-full bg-[#580303] py-20 px-6 relative overflow-hidden flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-white text-4xl md:text-6xl font-[1000] tracking-tighter italic mb-4">
              Exclusive Branch in Gafsa
            </h2>
            <p className="text-white/60 font-bold tracking-[0.2em] text-xs md:text-sm uppercase italic">
              Elite Language Training • International Certifications • Premium Expertise
            </p>
          </div>
          <a href="#register" className="px-12 py-5 bg-white text-[#580303] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl">
            Enroll Today
          </a>
        </div>
      </section>

      {/* 5. CONTACT & HOURS */}
      <section id="hours" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-slate-100 rounded-[3.5rem] shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-[40%] bg-[#080808] p-4 flex items-center justify-center">
              <ContactCard />
            </div>
            <div className="lg:w-[60%] p-12 lg:p-20 bg-white">
              <BusinessHours />
            </div>
          </div>
        </div>
      </section>

      <Newsletter /> 
    </main>
  );
} 