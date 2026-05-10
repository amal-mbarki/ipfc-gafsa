"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF7] pt-24 md:pt-48 pb-20 md:pb-32 px-5 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header الـ Vision - Responsive & Dynamic */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[1] md:leading-[0.8] mb-8 md:mb-12">
            Our <span className="text-[#580303] not-italic opacity-30">Vision.</span>
          </h1>
          
          <p className="text-xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.2] md:leading-[1.1] max-w-4xl italic uppercase tracking-tighter">
            Establishing a new <span className="text-[#580303]">learning criterion</span> by shifting to active learning.
          </p>
        </motion.div>

        {/* الكرت الرئيسي للصورة - أبعاد مرنة */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] rounded-[35px] md:rounded-[60px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(88,3,3,0.15)] group"
        >
          <Image 
            src="/focus.jpg" 
            alt="IPFC Vision - Active Learning" 
            fill 
            className="object-cover transition-transform duration-[2.5s] group-hover:scale-105" 
            priority 
            sizes="100vw" 
          />
          {/* Layer إضاءة ملكيّة */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#580303]/30 via-transparent to-transparent opacity-60"></div>
          
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-10">
            <span className="text-white/90 font-[1000] text-[7px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.8em] italic bg-black/10 backdrop-blur-sm px-4 py-2 rounded-full">
              — International Training Standards
            </span>
          </div>
        </motion.div>

        {/* خلاصة الرؤية بالعربية - RTL Support */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          dir="rtl" 
          className="mt-16 md:mt-24 border-r-[6px] md:border-r-[12px] border-[#580303] pr-6 md:pr-12 py-4 md:py-8 bg-white/40 rounded-l-3xl shadow-sm"
        >
          <p className="text-xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.5] md:leading-tight italic tracking-tight">
            نطمح لتغيير قواعد التعليم في <span className="text-[#580303]">قفصة</span>، من التلقين السلبي إلى التعلم النشط الذي يفتح آفاق العالمية.
          </p>
        </motion.div>

      </div>
    </main>
  );
}
