"use client";
import React from 'react';
import { ArrowRight, GraduationCap, Sparkles } from 'lucide-react';

export default function FreeTest() {
  return (
    <section className="py-16 md:py-24 bg-[#faf9f6] font-sans overflow-hidden border-y border-slate-100 relative">
      {/* لمسة جمالية خفيفة في الخلفية */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#580303]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* 1. التسمية العلوية (Label) */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-10">
          <div className="h-[1px] w-6 md:w-8 bg-slate-200"></div>
          <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-slate-400 inline-flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            Complimentary Service
          </span>
          <div className="h-[1px] w-6 md:w-8 bg-slate-200"></div>
        </div>

        {/* 2. العنوان: مصلح للجوال ليكون واضحاً وغير متداخل */}
        <h2 className="text-4xl md:text-[85px] font-[1000] text-slate-950 mb-6 md:mb-10 leading-[1] md:leading-[0.85] tracking-[-0.02em] md:tracking-[-0.05em] italic uppercase">
          Start with a <br className="hidden md:block" />
          <span className="text-[#580303] drop-shadow-sm"> Free Level Test.</span>
        </h2>

        {/* 3. الوصف المختصر */}
        <p className="max-w-2xl mx-auto text-slate-500 text-sm md:text-lg font-medium leading-relaxed mb-10 md:mb-14 uppercase tracking-wide px-2">
          A free placement test or a visit to our center. 
          <br className="hidden md:block" /> We are here to guide your international career.
        </p>

        {/* 4. الأزرار والتفاعل */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <a 
            href="#register" 
            className="group relative w-full md:w-auto px-8 md:px-12 py-5 md:py-6 bg-[#580303] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(88,3,3,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="relative z-10 flex items-center justify-center gap-4">
              <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.25em]">Book Your Test Now</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
          
          <div className="flex items-center gap-3 text-slate-400 py-2">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-[#580303]" />
            </div>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Instant Results</span>
          </div>
        </div>

      </div>
    </section>
  );
}