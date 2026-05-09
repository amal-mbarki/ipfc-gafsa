"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe2, Award, Briefcase } from 'lucide-react';

const languages = [
  { 
    name: 'German', 
    levels: 'A1 ➔ C2', 
    desc: 'Full preparation for Ausbildung and career success in Germany.',
    icon: <GraduationCap size={24} />,
    popular: true 
  },
  { 
    name: 'English', 
    levels: 'A1 ➔ C2', 
    desc: 'Official TOEIC and IELTS preparation for global opportunities.',
    icon: <Globe2 size={24} />,
    popular: false
  },
  { 
    name: 'French', 
    levels: 'A1 ➔ C2', 
    desc: 'Master the language of culture and professional success.',
    icon: <Award size={24} />,
    popular: false
  },
  { 
    name: 'Italian', 
    levels: 'A1 ➔ C2', 
    desc: 'Unlock new academic and career horizons in Italy.',
    icon: <Briefcase size={24} />,
    popular: false
  },
];

export default function Languages() {
  return (
    <section id="courses" className="py-32 bg-white relative overflow-hidden">
      {/* خلفية فنية هادئة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#580303 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        
        {/* Header القسم */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-[#580303]"></span>
              <span className="text-[#580303] text-[10px] font-[1000] uppercase tracking-[0.5em]">Our Programs</span>
            </div>
            <h2 className="text-slate-900 text-5xl md:text-7xl font-[1000] tracking-tighter leading-none uppercase italic">
              Elite <span className="text-[#580303] not-italic">Tracks.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] max-w-[250px] leading-relaxed border-l-2 border-slate-100 pl-6">
            Full Mastery from A1 to C2 Levels with Certified Experts.
          </p>
        </div>

        {/* شبكة اللغات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <motion.div 
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white p-10 rounded-[45px] border border-slate-100 hover:border-[#580303]/20 transition-all duration-700 group hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              {/* Popular Badge للغة الألمانية */}
              {lang.popular && (
                <div className="absolute top-6 right-6 bg-[#580303] text-white text-[8px] font-black uppercase px-3 py-1 rounded-full tracking-tighter italic">
                  Most Popular
                </div>
              )}

              {/* Icon Area */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#580303] group-hover:text-white transition-all duration-500 mb-8">
                {lang.icon}
              </div>

              {/* Levels Tag */}
              <div className="text-[#580303] font-[1000] text-[10px] mb-4 bg-[#580303]/5 py-2 px-5 rounded-xl inline-block uppercase tracking-widest italic">
                {lang.levels}
              </div>

              <h3 className="text-2xl font-[1000] text-slate-900 mb-4 uppercase tracking-tighter italic group-hover:text-[#580303] transition-colors">
                {lang.name}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {lang.desc}
              </p>

              {/* سهم صغير يظهر عند الـ Hover */}
              <div className="mt-8 pt-8 border-t border-slate-50 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <span className="text-[#580303] font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                  View Levels <span className="text-lg">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}