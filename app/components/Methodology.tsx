"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Award } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Elite Assessment",
    desc: "We start with a professional evaluation to pinpoint your exact level according to CEFR standards.",
    icon: <Target className="w-6 h-6 md:w-8 md:h-8" />
  },
  {
    num: "02",
    title: "Immersion Training",
    desc: "100% interactive environment. You don't just learn the language; you live it through real-world scenarios.",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />
  },
  {
    num: "03",
    title: "Official Certification",
    desc: "Preparation for ÖSD and IELTS exams with a focus on high-score strategies and success.",
    icon: <Award className="w-6 h-6 md:w-8 md:h-8" />
  }
];

export default function Methodology() {
  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header القسم - Royal Design */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-24 gap-8 md:gap-12 text-center lg:text-left">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-4 md:mb-6"
            >
              <span className="w-8 md:w-12 h-[2px] bg-[#580303]"></span>
              <span className="text-[#580303] font-[1000] text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em]">
                The IPFC Way
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-8xl font-[1000] text-slate-900 tracking-tighter leading-[1] md:leading-[0.85] uppercase">
              Our Royal <br className="hidden md:block" /> 
              <span className="text-[#580303] italic opacity-20 md:opacity-20">Framework.</span>
            </h2>
          </div>
          <p className="text-slate-400 font-black text-[10px] md:text-[11px] max-w-[280px] leading-relaxed uppercase tracking-[0.15em] md:tracking-[0.2em] border-t-2 lg:border-t-0 lg:border-l-4 border-[#580303]/10 pt-4 lg:pt-0 lg:pl-6">
            A strategic approach to language mastery, designed for professionals.
          </p>
        </div>

        {/* شبكة الخطوات - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] md:gap-[2px] bg-slate-100 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-slate-100 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)]">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-10 md:p-20 flex flex-col gap-8 md:gap-12 hover:bg-[#580303] group transition-all duration-700 cursor-default relative overflow-hidden"
            >
              {/* أيقونة الخلفية - صغرتها شوية للجوال */}
              <div className="absolute -right-4 -top-4 md:-right-8 -top-8 text-slate-50 group-hover:text-white/5 transition-colors duration-700 scale-[2.5] md:scale-[3] pointer-events-none">
                {step.icon}
              </div>

              <div className="flex justify-between items-start relative z-10">
                <span className="text-5xl md:text-7xl font-[1000] text-slate-100 group-hover:text-white/20 transition-colors duration-700 tabular-nums italic leading-none">
                  {step.num}
                </span>
                <div className="text-[#580303] group-hover:text-white transition-colors duration-700">
                  {step.icon}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-3xl font-[1000] text-slate-900 group-hover:text-white mb-3 md:mb-6 transition-colors duration-700 uppercase tracking-tighter italic">
                  {step.title}
                </h3>
                <p className="text-slate-400 group-hover:text-white/80 text-[11px] md:text-sm leading-relaxed font-bold transition-colors duration-700 uppercase tracking-tight">
                  {step.desc}
                </p>
              </div>

              {/* خط التزييني السفلي */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#580303] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}