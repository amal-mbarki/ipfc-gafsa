"use client";
import React from 'react';

export default function ContactActions() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
      {/* زر الاتصال الهاتفي */}
      <a 
        href="tel:+21699885883" 
        className="group flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#8B0000] transition-all duration-500 w-full md:w-auto"
      >
        <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-xl group-hover:bg-[#8B0000] group-hover:scale-110 transition-all duration-500">
          📞
        </div>
        <div className="flex flex-col pr-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-[#8B0000]">Official Line</span>
          <span className="text-xl font-black text-gray-950 italic">99 885 883</span>
        </div>
      </a>

      {/* زر الواتساب التفاعلي */}
      <a 
        href="https://wa.me/21699885883" 
        target="_blank"
        className="group flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-3xl shadow-sm hover:shadow-xl hover:border-green-500 transition-all duration-500 w-full md:w-auto"
      >
        <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-xl group-hover:bg-green-500 group-hover:scale-110 transition-all duration-500">
          💬
        </div>
        <div className="flex flex-col pr-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-green-500">Fast Support</span>
          <span className="text-xl font-black text-gray-950 italic">WhatsApp</span>
        </div>
      </a>
    </div>
  );
}