"use client";
import React from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';

export default function FreeTest() {
  return (
    <section className="py-24 bg-[#FCFAf7] font-sans overflow-hidden border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Top Label - حافظنا عليه كيم هو */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-[1px] w-8 bg-slate-200"></div>
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400">
            Complimentary Service
          </span>
          <div className="h-[1px] w-8 bg-slate-200"></div>
        </div>

        {/* العنوان: تبديل الخط ليكون Modern, Bold, and Italic كيم الصورة الأولى */}
        <h2 className="text-6xl md:text-[90px] font-black text-slate-950 mb-10 leading-[0.85] tracking-tighter italic uppercase">
          Start with a <br />
          <span className="text-[var(--color-royal-red)]">Free Level Test.</span>
        </h2>

        {/* الوصف - حافظنا على نفس النص */}
        <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12 opacity-80">
          A free placement test, a visit to our center, or a simple question. 
          We are here to guide your international career.
        </p>

        {/* الزر والأيقونة - نفس الـ Structure */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="#register" 
            className="group relative px-10 py-5 bg-[var(--color-royal-red)] rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(88,3,3,0.2)]"
          >
            <div className="relative z-10 flex items-center gap-3">
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Book Your Test Now</span>
              <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </a>
          
          <div className="flex items-center gap-2 text-slate-400">
            <GraduationCap size={18} className="opacity-50" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Instant Results</span>
          </div>
        </div>

      </div>
    </section>
  );
}