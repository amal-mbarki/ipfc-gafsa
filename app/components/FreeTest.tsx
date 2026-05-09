"use client";
import React from 'react';
import { ArrowRight, GraduationCap, Sparkles } from 'lucide-react';

export default function FreeTest() {
  return (
    <section className="py-24 bg-[#faf9f6] font-sans overflow-hidden border-y border-slate-100 relative">
      {/* لمسة جمالية خفيفة في الخلفية */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#580303]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* 1. التسمية العلوية (Label) */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-[1px] w-8 bg-slate-200"></div>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 inline-flex items-center gap-2">
            <Sparkles size={12} className="text-[#D4AF37]" />
            Complimentary Service
          </span>
          <div className="h-[1px] w-8 bg-slate-200"></div>
        </div>

        {/* 2. العنوان: Modern, Extra Bold, and Italic (التركيز على الفخامة) */}
        <h2 className="text-5xl md:text-[85px] font-[1000] text-slate-950 mb-10 leading-[0.85] tracking-[ -0.05em] italic uppercase">
          Start with a <br />
          <span className="text-[#580303] drop-shadow-sm">Free Level Test.</span>
        </h2>

        {/* 3. الوصف المختصر */}
        <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-14 uppercase tracking-wide">
          A free placement test, a visit to our center, or a simple question. 
          <br className="hidden md:block" /> We are here to guide your international career.
        </p>

        {/* 4. الأزرار والتفاعل */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a 
            href="#register" 
            className="group relative px-12 py-6 bg-[#580303] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(88,3,3,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="relative z-10 flex items-center gap-4">
              <span className="text-white text-xs font-black uppercase tracking-[0.25em]">Book Your Test Now</span>
              <ArrowRight size={18} className="text-white group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            {/* تأثير ضوئي عند المرور (Hover Glow) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
          
          <div className="flex items-center gap-3 text-slate-400 py-2 border-b border-transparent hover:border-slate-200 transition-all cursor-default">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <GraduationCap size={20} className="text-[#580303]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Instant Results</span>
          </div>
        </div>

      </div>
    </section>
  );
}