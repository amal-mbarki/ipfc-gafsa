"use client";
import React from 'react';

const steps = [
  {
    title: "Level Assessment",
    desc: "A personal interview and a written test to determine your precise CEFR level, from A1 to C2."
  },
  {
    title: "Tailored Program",
    desc: "We build your path: objectives, schedule, target certification, and learning methods."
  },
  {
    title: "Premium Courses",
    desc: "Small groups of 6 to 10 people, qualified teachers, and pedagogical support from top publishers."
  },
  {
    title: "Mock Exam",
    desc: "Midway through, a full simulation in real exam conditions to ensure your readiness."
  },
  {
    title: "Official Certification",
    desc: "You take your official international certification in our premises, an authorized exam center."
  }
];

export default function Methodology() {
  return (
    <section className="py-32 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section - Inspired by the Clean Layout */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-slate-200"></div>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-400">
              Our Methodology
            </span>
            <div className="h-[1px] w-12 bg-slate-200"></div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] uppercase italic">
            Five steps, <br />
            <span className="text-[var(--color-royal-red)] not-italic">One Degree.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto mt-10 text-slate-500 text-lg font-medium leading-relaxed italic opacity-80">
            From your first word to your official certification: a structured, rigorous, and human-centered path to success.
          </p>
        </div>

        {/* Steps Grid - Ultra Clean & Organized */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-slate-100">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="pt-12 pb-16 px-6 border-b md:border-b-0 md:border-r border-slate-100 last:border-0 group hover:bg-[#FCFAf7] transition-all duration-500"
            >
              <span className="text-[10px] font-black text-[var(--color-royal-red)] mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">
                PHASE 0{index + 1}
              </span>
              <h3 className="text-xl font-black italic uppercase tracking-tighter text-slate-950 mb-6 leading-tight">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}