"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FCFAF7] flex flex-col items-center justify-center px-6 text-center overflow-hidden relative">
      
      {/* Background Animation متناسق مع الـ Creamy Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(88,3,3,0.05)_0%,transparent_70%)] animate-pulse"></div>

      <div className="relative z-10">
        {/* الـ 404 بستايل ضخم يتصاغر في التلفون */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-[120px] sm:text-[180px] md:text-[250px] font-black text-slate-950 leading-none tracking-tighter"
        >
          404
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-[-30px] sm:mt-[-50px] md:mt-[-80px]"
        >
          <span className="text-royal-red font-black tracking-[0.4em] text-[8px] md:text-[10px] uppercase mb-4 block">
            Error - Page Not Found
          </span>
          
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-slate-950 mb-6 italic uppercase tracking-tighter">
            Oups! Page <span className="text-royal-red">Perdue</span>
          </h2>
          
          <p dir="auto" className="text-slate-500 text-base md:text-lg mb-12 max-w-md mx-auto font-medium leading-relaxed px-4">
            Désolé أمل، الصفحة اللي تلوج عليها مش موجودة. <br className="hidden md:block"/>
            تأكد من الرابط أو ارجع للصفحة الرئيسية.
          </p>

          {/* زر الرجوع بستايل فخم متناسق مع الـ Hero */}
          <Link 
            href="/" 
            className="inline-block bg-royal-red text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg shadow-[0_20px_40px_-10px_rgba(88,3,3,0.3)] hover:bg-slate-950 hover:-translate-y-2 transition-all duration-500 uppercase tracking-tight"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>

      {/* Footer بسيط للـ 404 */}
      <div className="absolute bottom-10 left-0 w-full opacity-30 px-4">
        <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-slate-400">
          IPFC GAFSA • Excellence 2026
        </p>
      </div>
    </main>
  );
}