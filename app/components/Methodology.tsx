"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Award } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Elite Assessment",
    desc: "We start with a professional evaluation to pinpoint your exact level according to CEFR standards.",
    icon: <Target className="w-6 h-6" />
  },
  {
    num: "02",
    title: "Immersion Training",
    desc: "100% interactive environment. You don't just learn the language; you live it through real-world scenarios.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    num: "03",
    title: "Official Certification",
    desc: "Preparation for ÖSD and IELTS exams with a focus on high-score strategies and success.",
    icon: <Award className="w-6 h-6" />
  }
];

export default function Methodology() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Header القسم - Royal Design */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[2px] bg-[#580303]"></span>
              <span className="text-[#580303] font-[1000] text-[10px] uppercase tracking-[0.5em]">
                The IPFC Way
              </span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-[1000] text-slate-900 tracking-tighter leading-[0.85] uppercase">
              Our Royal <br/> 
              <span className="text-[#580303] italic opacity-20">Framework.</span>
            </h2>
          </div>
          <p className="text-slate-400 font-black text-[11px] max-w-[280px] leading-relaxed uppercase tracking-[0.2em] border-l-4 border-[#580303]/10 pl-6 mb-4">
            A strategic approach to language mastery, designed for future professionals in Gafsa.
          </p>
        </div>

        {/* شبكة الخطوات - Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-slate-100 rounded-[4rem] overflow-hidden border border-slate-100 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)]">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white p-14 md:p-20 flex flex-col gap-12 hover:bg-[#580303] group transition-all duration-700 cursor-default relative overflow-hidden"
            >
              {/* أيقونة خفيفة في الخلفية تظهر عند الـ Hover */}
              <div className="absolute -right-8 -top-8 text-slate-50 group-hover:text-white/5 transition-colors duration-700 scale-[3] pointer-events-none">
                {step.icon}
              </div>

              <div className="flex justify-between items-start relative z-10">
                <span className="text-7xl font-[1000] text-slate-100 group-hover:text-white/20 transition-colors duration-700 tabular-nums italic">
                  {step.num}
                </span>
                <div className="text-[#580303] group-hover:text-white transition-colors duration-700">
                  {step.icon}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-[1000] text-slate-900 group-hover:text-white mb-6 transition-colors duration-700 uppercase tracking-tighter italic">
                  {step.title}
                </h3>
                <p className="text-slate-400 group-hover:text-white/80 text-sm leading-relaxed font-bold transition-colors duration-700 uppercase tracking-tight">
                  {step.desc}
                </p>
              </div>

              {/* خط تزييني سفلي */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#580303] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}