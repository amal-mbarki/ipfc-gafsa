"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Heart, Globe } from 'lucide-react';

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF7] pt-32 md:pt-48 pb-20 md:pb-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header القسم - متجاوب مع كل الشاشات */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[0.8] mb-8 md:mb-12">
            Our <span className="text-[#580303] not-italic opacity-30">Mission.</span>
          </h1>
          
          <div dir="rtl" className="border-r-4 md:border-r-8 border-[#580303] pr-4 md:pr-8 py-2 md:py-4 mb-10 md:mb-16">
            <p className="text-xl sm:text-3xl md:text-5xl font-black text-slate-800 leading-tight">
              مهمتنا تمكين أبناء قفصة من اللغات العالمية بأساليب حديثة ومعايير دولية.
            </p>
          </div>
        </motion.div>

        {/* الصورة الرئيسية - الارتفاع يتغير حسب الجهاز */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] rounded-[30px] md:rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] mb-16 md:mb-24 group"
        >
          <Image 
            src="/a1.jpg" 
            alt="IPFC Gafsa Mission" 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-110" 
            priority 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#580303]/40 to-transparent"></div>
        </motion.div>

        {/* قيم المهمة - توزيع مرن (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {[
            { 
              icon: <Target className="w-6 h-6 md:w-8 md:h-8" />, 
              title: "Objectif B2", 
              desc: "تحضير شامل لمستويات B2 و Ausbildung لضمان نجاحكم في الخارج." 
            },
            { 
              icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />, 
              title: "Accompagnement", 
              desc: "نحن لا ندرّس فقط، بل نرافق كل طالب في رحلته الشخصية والمهنية." 
            },
            { 
              icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />, 
              title: "Standards CEFR", 
              desc: "مناهجنا مطابقة تماماً للإطار الأوروبي الموحد للغات." 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 bg-white rounded-[30px] md:rounded-[40px] border border-slate-100 hover:border-[#580303]/10 transition-all italic group shadow-sm hover:shadow-xl"
            >
              <div className="text-[#580303] mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-[1000] uppercase mb-3 md:mb-4 text-slate-950 tracking-tighter italic">
                {item.title}
              </h3>
              <p dir="rtl" className="text-slate-500 font-bold leading-relaxed text-base md:text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}