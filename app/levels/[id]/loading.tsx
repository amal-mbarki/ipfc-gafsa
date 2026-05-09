"use client";
import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FCFAF7] flex flex-col items-center justify-center p-4">
      <div className="relative">
        {/* Spinner يتأقلم حجمه حسب الجهاز: أصغر في التلفون وأكبر في الـ PC */}
        <div className="w-16 h-16 md:w-24 md:h-24 border-[3px] border-slate-100 border-t-[#580303] rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-[#580303]/5 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="mt-8 md:mt-12 text-center px-4">
        {/* العناوين تتأقلم مع حجم الشاشة */}
        <h2 className="text-[#580303] font-[1000] text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] animate-pulse italic leading-relaxed">
          IPFC GAFSA Gateway
        </h2>
        <p className="text-slate-400 text-[7px] md:text-[8px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mt-3 md:mt-4">
          Loading Excellence...
        </p>
      </div>
    </div>
  );
}