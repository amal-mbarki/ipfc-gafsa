"use client";
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function ContactActions() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center py-6 md:py-10 px-4">
      
      {/* 1. زر الاتصال الهاتفي */}
      <a 
        href="tel:+21699885883" 
        className="group flex items-center gap-4 md:gap-5 bg-white border border-slate-100 p-4 md:p-5 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-[#580303]/10 hover:border-[#580303]/20 transition-all duration-500 w-full max-w-[340px] md:w-[320px]"
      >
        <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-2xl md:rounded-3xl flex items-center justify-center text-[#580303] group-hover:bg-[#580303] group-hover:text-white group-hover:rotate-[15deg] transition-all duration-500 shadow-inner">
          {/* التصحيح هنا: نستخدم الحجم الأصغر ونكبره في الـ md عبر className */}
          <Phone className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </div>
        
        <div className="flex flex-col">
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#580303] transition-colors">Official Line</span>
          <span className="text-xl md:text-2xl font-[1000] text-slate-900 tracking-tighter italic">+216 99 885 883</span>
        </div>
      </a>

      {/* 2. زر الواتساب */}
      <a 
        href="https://wa.me/21699885883" 
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 md:gap-5 bg-white border border-slate-100 p-4 md:p-5 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-500/20 transition-all duration-500 w-full max-w-[340px] md:w-[320px]"
      >
        <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-2xl md:rounded-3xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white group-hover:rotate-[-15deg] transition-all duration-500 shadow-inner">
          {/* نفس التصحيح للأيقونة الثانية */}
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </div>
        
        <div className="flex flex-col">
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-green-500 transition-colors">Fast Support</span>
          <span className="text-xl md:text-2xl font-[1000] text-slate-900 tracking-tighter italic">WhatsApp</span>
        </div>
      </a>

    </div>
  );
}