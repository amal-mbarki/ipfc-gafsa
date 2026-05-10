"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FCFAF7] flex flex-col items-center justify-center p-6">
      <div className="relative flex items-center justify-center">
        {/* Spinner خارجي فخم - يتحرك بهدوء */}
        <div className="w-20 h-20 md:w-28 md:h-28 border-[2px] border-slate-100 border-t-[#580303] rounded-full animate-spin [animation-duration:1.5s]"></div>
        
        {/* Spinner داخلي معاكس الاتجاه ليعطي طابع الـ Precision */}
        <div className="absolute w-12 h-12 md:w-16 md:h-16 border-[1px] border-transparent border-b-[#580303]/30 rounded-full animate-spin [animation-direction:reverse] [animation-duration:2s]"></div>
        
        <div className="absolute flex items-center justify-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#580303] rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="mt-12 text-center max-w-[250px] md:max-w-none">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[#580303] font-[1000] text-[9px] md:text-[11px] uppercase tracking-[0.5em] md:tracking-[0.8em] italic leading-loose"
        >
          IPFC GAFSA Gateway
        </motion.h2>
        
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-4 h-[1px] bg-slate-200"></span>
          <p className="text-slate-400 text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">
            Elite Standard
          </p>
          <span className="w-4 h-[1px] bg-slate-200"></span>
        </div>
      </div>

      {/* لمسة فنية سفلية */}
      <div className="absolute bottom-12 overflow-hidden">
        <p className="text-[6px] md:text-[8px] font-bold text-slate-300 uppercase tracking-[1em] translate-y-0 opacity-50">
          Since 2026
        </p>
      </div>
    </div>
  );
}