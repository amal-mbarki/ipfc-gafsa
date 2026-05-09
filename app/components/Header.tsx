"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [isLevelsOpen, setIsLevelsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const levels = [
    { name: 'A1', color: 'bg-orange-400' },
    { name: 'A2', color: 'bg-yellow-400' },
    { name: 'B1', color: 'bg-lime-500' },
    { name: 'B2', color: 'bg-green-600' },
    { name: 'C1', color: 'bg-sky-400' },
    { name: 'C2', color: 'bg-slate-950' },
  ];

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
      scrolled ? 'bg-white/90 backdrop-blur-2xl shadow-lg py-2' : 'bg-white py-4 md:py-6'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* 1. Logo Section - Interactive Rotation on Hover */}
        <Link href="/" className="flex items-center gap-2 md:gap-4 group cursor-pointer">
          <motion.div 
            // هنا التعديل: يدور فقط عند وضع الفأرة أو اللمس
            whileHover={{ 
              rotate: 360, 
              scale: 1.1 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeInOut" 
            }}
            className="relative w-12 h-12 md:w-16 md:h-16"
          >
            <Image 
              src="/logo.png" 
              alt="IPFC Gafsa" 
              fill
              sizes="(max-width: 768px) 48px, 64px"
              className="object-contain"
              priority 
            />
          </motion.div>
          <div className="flex flex-col border-l-2 border-slate-100 pl-2 md:pl-4">
            <span className="text-xl md:text-3xl font-[1000] text-[#580303] tracking-tighter leading-none italic uppercase">IPFC</span>
            <span className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.4em] mt-1">Gafsa Elite</span>
          </div>
        </Link>

        {/* 2. Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          <Link href="/" className="nav-item">Home</Link>
          
          <div className="relative" onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)}>
            <button className="nav-item flex items-center gap-2 outline-none uppercase italic">
              About <ChevronDown size={12} className={`transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isAboutOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-3xl p-6 border border-slate-50 flex flex-col gap-2 mt-2"
                >
                  <Link href="/vision" className="drop-item">Our Vision</Link>
                  <Link href="/mission" className="drop-item">Our Mission</Link>
                  <Link href="/framework" className="drop-item">CEFR Framework</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative" onMouseEnter={() => setIsLevelsOpen(true)} onMouseLeave={() => setIsLevelsOpen(false)}>
            <button className="nav-item flex items-center gap-2 outline-none uppercase italic text-[#580303]">
              Levels <ChevronDown size={12} className={`transition-transform duration-300 ${isLevelsOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isLevelsOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] bg-white shadow-2xl rounded-3xl p-6 border border-slate-50 grid grid-cols-2 gap-3 mt-2"
                >
                  {levels.map((lvl) => (
                    <Link key={lvl.name} href={`/levels/${lvl.name.toLowerCase()}`} className="flex items-center gap-3 p-3 hover:bg-[#580303]/5 rounded-2xl transition-all group/item">
                      <span className={`w-8 h-8 rounded-xl ${lvl.color} flex items-center justify-center text-[10px] text-white font-black shadow-lg uppercase`}>{lvl.name}</span>
                      <span className="text-[11px] font-black uppercase text-slate-500 group-hover/item:text-[#580303]">Level {lvl.name}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#courses" className="nav-item">Courses</Link>
        </nav>

        {/* 3. Actions & Mobile Toggle */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden xl:flex flex-col items-end gap-1 border-r border-slate-100 pr-6 text-[#580303]">
            <a href="tel:+21699885883" className="flex items-center gap-2 text-lg font-[1000] text-slate-900 tracking-tighter hover:text-[#580303] transition-colors leading-none italic">
              <Phone size={14} className="text-[#580303]" />
              +216 99 885 883
            </a>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Admissions Open</span>
          </div>

          <Link 
            href="/#register" 
            className="hidden sm:block bg-[#580303] text-white px-5 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-black transition-all shadow-lg active:scale-95"
          >
            Register Now
          </Link>

          <button 
            className="lg:hidden p-2 text-[#580303]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[70px] bg-white z-[90] lg:hidden p-8 flex flex-col gap-6"
          >
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black uppercase text-[#580303]">Home</Link>
            <Link href="/#courses" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black uppercase text-[#580303]">Courses</Link>
            <div className="h-[1px] bg-slate-100 w-full my-2" />
            <a href="tel:+21699885883" className="flex items-center gap-4 text-xl font-black text-slate-900 italic">
              <Phone size={20} className="text-[#580303]" />
              +216 99 885 883
            </a>
            <Link 
              href="/#register" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-[#580303] text-white p-6 rounded-2xl text-center font-black uppercase tracking-widest shadow-xl"
            >
              Register Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-item {
          @apply text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#580303] transition-all relative py-2 cursor-pointer;
        }
        .nav-item::after {
          content: '';
          @apply absolute bottom-0 left-0 w-0 h-[3px] bg-[#580303] transition-all duration-300 rounded-full;
        }
        .nav-item:hover::after {
          @apply w-full;
        }
        .drop-item {
          @apply text-[11px] font-black uppercase tracking-widest text-slate-400 p-4 hover:bg-[#580303]/5 hover:text-[#580303] rounded-[1.2rem] transition-all italic;
        }
      `}</style>
    </header>
  );
}