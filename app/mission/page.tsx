"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Heart, Globe } from 'lucide-react';

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF7] pt-24 md:pt-48 pb-20 md:pb-32 px-5 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header القسم - متجاوب */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 text-left"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[1] md:leading-[0.8] mb-6 md:mb-12">
            Our <span className="text-[#580303] not-italic opacity-30">Mission.</span>
          </h1>
          
          <div dir="rtl" className="border-r-[6px] md:border-r-[12px] border-[#580303] pr-5 md:pr-10 py-3 md:py-6 mb-10 md:mb-16 bg-white/50 backdrop-blur-sm rounded-l-2xl">
            <p className="text-xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.4] md:leading-tight tracking-tight">
              مهمتنا تمكين أبناء قفصة من اللغات العالمية بأساليب حديثة ومعايير دولية.
            </p>
          </div>
        </motion.div>

        {/* الصورة الرئيسية - الارتفاع يتغير حسب الجهاز */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[250px] sm:h-[450px] md:h-[600px] rounded-[35px] md:rounded-[60px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(88,3,3,0.15)] mb-12 md:mb-24 group"
        >
          <Image 
            src="/a1.jpg" 
            alt="IPFC Gafsa Mission" 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-105" 
            priority 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#580303]/50 via-transparent to-transparent opacity-60"></div>
        </motion.div>

        {/* قيم المهمة - توزيع Grid متجاوب */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {[
            { 
              icon: <Target className="w-7 h-7 md:w-9 md:h-9" />, 
              title: "Objectif B2", 
              desc: "تحضير شامل لمستويات B2 و Ausbildung لضمان نجاحكم المهني والدراسي في الخارج." 
            },
            { 
              icon: <Heart className="w-7 h-7 md:w-9 md:h-9" />, 
              title: "Accompagnement", 
              desc: "نحن لا ندرّس فقط، بل نرافق كل طالب في رحلته الشخصية لضمان اندماجه التام." 
            },
            { 
              icon: <Globe className="w-7 h-7 md:w-9 md:h-9" />, 
              title: "Standards CEFR", 
              desc: "مناهجنا وبرامجنا التدريبية مطابقة تماماً للإطار الأوروبي الموحد للغات." 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 bg-white rounded-[30px] md:rounded-[45px] border border-slate-50 hover:border-[#580303]/10 transition-all italic group shadow-sm hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              <div className="text-[#580303] mb-5 md:mb-8 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-[1000] uppercase mb-4 text-slate-950 tracking-tighter italic leading-none">
                {item.title}
              </h3>
              <p dir="rtl" className="text-slate-500 font-bold leading-relaxed text-base md:text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                {item.desc}
              </p>
              
              {/* لمسة فنية سفلية */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#580303]/5 rounded-tl-[100%] translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}