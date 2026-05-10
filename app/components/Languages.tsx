"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe2, Award, Briefcase, ArrowRight } from 'lucide-react';

const languages = [
  { 
    name: 'German', 
    levels: 'A1 ➔ C2', 
    desc: 'Full preparation for Ausbildung and career success in Germany.',
    icon: <GraduationCap className="w-6 h-6 md:w-7 md:h-7" />,
    popular: true 
  },
  { 
    name: 'English', 
    levels: 'A1 ➔ C2', 
    desc: 'Official TOEIC and IELTS preparation for global opportunities.',
    icon: <Globe2 className="w-6 h-6 md:w-7 md:h-7" />,
    popular: false
  },
  { 
    name: 'French', 
    levels: 'A1 ➔ C2', 
    desc: 'Master the language of culture and professional success.',
    icon: <Award className="w-6 h-6 md:w-7 md:h-7" />,
    popular: false
  },
  { 
    name: 'Italian', 
    levels: 'A1 ➔ C2', 
    desc: 'Unlock new academic and career horizons in Italy.',
    icon: <Briefcase className="w-6 h-6 md:w-7 md:h-7" />,
    popular: false
  },
];

export default function Languages() {
  return (
    <section id="courses" className="py-16 md:py-32 bg-white relative overflow-hidden">
      {/* خلفية فنية */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#580303 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header القسم - مصلح للجوال */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8 text-center lg:text-left">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 md:w-10 h-[2px] bg-[#580303]"></span>
              <span className="text-[#580303] text-[8px] md:text-[10px] font-[1000] uppercase tracking-[0.3em] md:tracking-[0.5em]">Our Programs</span>
            </div>
            <h2 className="text-slate-900 text-4xl md:text-7xl font-[1000] tracking-tighter leading-none uppercase italic">
              Elite <span className="text-[#580303] not-italic">Tracks.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] max-w-[280px] mx-auto lg:mx-0 leading-relaxed border-t-2 lg:border-t-0 lg:border-l-2 border-slate-100 pt-4 lg:pt-0 lg:pl-6">
            Full Mastery from A1 to C2 Levels with Certified Experts.
          </p>
        </div>

        {/* شبكة اللغات - تحسين الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {languages.map((lang, index) => (
            <motion.div 
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white p-8 md:p-10 rounded-[35px] md:rounded-[45px] border border-slate-100 hover:border-[#580303]/20 transition-all duration-700 group hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              {lang.popular && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#580303] text-white text-[7px] md:text-[8px] font-black uppercase px-3 py-1 rounded-full tracking-tighter italic z-10">
                  Most Popular
                </div>
              )}

              {/* Icon Area */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#580303] group-hover:text-white transition-all duration-500 mb-6 md:mb-8">
                {lang.icon}
              </div>

              {/* Levels Tag */}
              <div className="text-[#580303] font-[1000] text-[9px] md:text-[10px] mb-3 md:mb-4 bg-[#580303]/5 py-1.5 px-4 md:py-2 md:px-5 rounded-lg md:rounded-xl inline-block uppercase tracking-widest italic">
                {lang.levels}
              </div>

              <h3 className="text-xl md:text-2xl font-[1000] text-slate-900 mb-3 md:mb-4 uppercase tracking-tighter italic group-hover:text-[#580303] transition-colors">
                {lang.name}
              </h3>
              
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                {lang.desc}
              </p>

              {/* سهم التفاعل - يظهر دائماً في الموبايل لسهولة النقر */}
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-50 flex justify-end opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 lg:translate-y-4 lg:group-hover:translate-y-0">
                <span className="text-[#580303] font-black text-[9px] md:text-[10px] uppercase tracking-widest flex items-center gap-2">
                  View Levels <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}