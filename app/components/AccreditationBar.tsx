"use client";
import React from 'react';
import { motion } from 'framer-motion';

// القائمة الرسمية للاعتمادات
const certifications = [
  "TOEIC 2 Skills", "TOEIC 4 Skills", "TOEFL Junior", "TOEFL Primary", 
  "ÖSD", "onSET", "dMAT", "TestAS", "IELTS Registration"
];

export default function AccreditationBar() {
  return (
    <section className="relative w-full bg-[#faf9f6] py-6 md:py-12 border-y border-[#580303]/10 overflow-hidden">
      
      {/* 1. العنوان: تحسين الحجم للهواتف */}
      <div className="flex justify-center mb-4 md:mb-10 px-4 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[9px] md:text-[13px] font-black tracking-[0.2em] md:tracking-[0.4em] text-[#580303] uppercase italic cursor-default"
        >
          Official Accreditation
        </motion.span>
      </div>

      {/* 2. شريط الحركة (The Slider) */}
      <div className="relative flex items-center overflow-hidden h-10 md:h-16">
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            duration: 25, // تسريع الحركة قليلاً لتبدو أنعم في الجوال
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex items-center gap-6 md:gap-16 whitespace-nowrap"
        >
          {[...certifications, ...certifications].map((cert, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-12">
              <span className="text-[10px] md:text-sm font-bold tracking-widest text-[#580303]/70 uppercase">
                {cert}
              </span>
              <span className="text-[#D4AF37] text-xs md:text-lg select-none">✦</span>
            </div>
          ))}
        </motion.div>

        {/* 3. تأثير التلاشي (Fading): تقليله في الجوال حتى لا يغطي النص */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-40 bg-gradient-to-r from-[#faf9f6] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-40 bg-gradient-to-l from-[#faf9f6] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}