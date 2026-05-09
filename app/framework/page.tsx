"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Monitor, Globe } from 'lucide-react';

const steps = [
  { 
    title: "Active Learning", 
    desc: "Moving away from passive memorization to interactive engagement and real-world practice.",
    icon: <Sparkles className="w-6 h-6" />
  },
  { 
    title: "Modern Tech", 
    desc: "Integrating digital tools and multimedia to accelerate the language acquisition process.",
    icon: <Monitor className="w-6 h-6" />
  },
  { 
    title: "Global Standards", 
    desc: "Curriculums strictly aligned with the Common European Framework of Reference for Languages (CEFR).",
    icon: <Globe className="w-6 h-6" />
  }
];

export default function FrameworkPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-48 pb-20 px-8 text-white relative overflow-hidden">
      {/* تأثيرات إضاءة خلفية خفيفة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,#58030315_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#580303] font-[1000] text-[10px] uppercase tracking-[0.6em] mb-8 block"
          >
            Redefining Language Education in Gafsa
          </motion.span>
          <h1 className="text-7xl md:text-9xl font-[1000] italic uppercase tracking-tighter mb-8 leading-[0.8] italic">
            The <span className="text-[#580303] not-italic opacity-40">Framework.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className="p-12 bg-white/[0.02] border border-white/5 rounded-[50px] hover:bg-[#580303]/10 hover:border-[#580303]/20 transition-all duration-700 group relative overflow-hidden italic"
            >
              {/* أيقونة تفاعلية */}
              <div className="mb-10 text-white/20 group-hover:text-[#580303] transition-colors duration-500">
                {step.icon}
              </div>

              <span className="text-white/5 text-7xl font-[1000] absolute top-8 right-8 group-hover:text-[#580303]/10 transition-colors duration-700 not-italic">
                0{index + 1}
              </span>

              <h3 className="text-2xl font-[1000] mb-6 uppercase tracking-tight text-white group-hover:text-[#580303] transition-colors leading-none">
                {step.title}
              </h3>
              <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-sm font-bold uppercase tracking-tight transition-colors duration-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Branding Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-48 pt-12 border-t border-white/5"
        >
          <p className="text-[10px] font-[1000] tracking-[0.5em] uppercase text-white/20 italic">
            IPFC Gafsa • Excellence in Every Word
          </p>
        </motion.div>

      </div>
    </main>
  );
}