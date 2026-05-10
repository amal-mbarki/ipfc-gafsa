"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FCFAF7] flex flex-col items-center justify-center px-6 text-center overflow-hidden relative">
      
      {/* خلفية تفاعلية ناعمة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,3,3,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* تأثير 404 العملاق */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[120px] sm:text-[180px] md:text-[300px] font-[1000] text-slate-950 leading-none tracking-tighter select-none"
        >
          404
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-[-40px] sm:mt-[-60px] md:mt-[-100px]"
        >
          <span className="text-[#580303] font-[1000] tracking-[0.4em] text-[8px] md:text-[10px] uppercase mb-4 block">
            Error - Page Not Found
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-[1000] text-slate-950 mb-8 italic uppercase tracking-tighter leading-tight">
            Oups! Page <span className="text-[#580303] not-italic opacity-40">Perdue.</span>
          </h2>
          
          <p dir="auto" className="text-slate-500 text-sm md:text-xl mb-12 max-w-lg mx-auto font-bold leading-relaxed px-4 opacity-80">
            Désolé، الصفحة التي تحاول الوصول إليها غير موجودة أو تم نقلها. <br className="hidden md:block"/>
            تأكد من الرابط أو ارجع للبداية.
          </p>

          {/* زر العودة بتصميم الـ Hero */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/" 
              className="inline-block bg-[#580303] text-white px-10 md:px-14 py-4 md:py-5 rounded-2xl md:rounded-[25px] font-[1000] text-sm md:text-base shadow-[0_25px_50px_-12px_rgba(88,3,3,0.3)] hover:bg-black transition-all duration-500 uppercase tracking-widest"
            >
              Back to Excellence
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Branding Footer */}
      <div className="absolute bottom-10 left-0 w-full opacity-20 px-4">
        <p className="text-[7px] md:text-[9px] font-[1000] uppercase tracking-[0.6em] text-slate-500">
          IPFC GAFSA • International Standard
        </p>
      </div>
    </main>
  );
}