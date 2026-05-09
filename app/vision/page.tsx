"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF7] pt-32 md:pt-48 pb-20 md:pb-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header الـ Vision - متجاوب */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[0.8] mb-8 md:mb-12">
            Our <span className="text-[#580303] not-italic opacity-30">Vision.</span>
          </h1>
          
          <p className="text-xl sm:text-3xl md:text-5xl font-black text-slate-800 leading-[1.1] max-w-4xl italic uppercase tracking-tighter">
            Establishing a new <span className="text-[#580303]">learning criterion</span> by shifting to active learning.
          </p>
        </motion.div>

        {/* الكرت الرئيسي للصورة - أبعاد مرنة لكل الأجهزة */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] rounded-[35px] md:rounded-[60px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(88,3,3,0.2)] group"
        >
          <Image 
            src="/focus.jpg" 
            alt="IPFC Vision - Active Learning" 
            fill 
            className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
            priority 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#580303]/20 via-transparent to-transparent opacity-60"></div>
          
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
            <span className="text-white/80 font-[1000] text-[8px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.8em] italic">
              — International Training Standards
            </span>
          </div>
        </motion.div>

        {/* خلاصة الرؤية بالعربية - دعم كامل للـ RTL */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          dir="rtl" 
          className="mt-12 md:mt-20 border-r-4 md:border-r-8 border-[#580303] pr-6 md:pr-10"
        >
          <p className="text-xl md:text-4xl font-black text-slate-900 leading-relaxed italic">
            نطمح لتغيير قواعد التعليم في قفصة، من التلقين السلبي إلى التعلم النشط الذي يفتح آفاق العالمية.
          </p>
        </motion.div>

      </div>
    </main>
  );
}

