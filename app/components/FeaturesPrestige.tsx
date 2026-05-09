"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Gem } from 'lucide-react';

const features = [
  {
    title: "Official Accreditation",
    desc: "A globally recognized partner for ÖSD and IELTS certifications, ensuring your future success.",
    icon: <Award size={32} strokeWidth={1.5} />,
    color: "#580303"
  },
  {
    title: "Modern Ecosystem",
    desc: "High-tech classrooms and a professional environment designed for deep focus and excellence.",
    icon: <Gem size={32} strokeWidth={1.5} />,
    color: "#D4AF37"
  },
  {
    title: "Elite Expertise",
    desc: "A curriculum built by international experts to prepare local leaders for global opportunities.",
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    color: "#580303"
  }
];

export default function FeaturesPrestige() {
  return (
    <section className="py-24 bg-[#080808] text-white overflow-hidden relative">
      {/* تأثير ضوئي خفيف في الخلفية */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#58030310_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              {/* Icon Container - فخم ومنظم */}
              <div className="mb-8 relative">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[10deg] shadow-2xl"
                  style={{ backgroundColor: `${feature.color}20`, color: feature.color, border: `1px solid ${feature.color}40` }}
                >
                  {feature.icon}
                </div>
                {/* تأثير توهج خلف الأيقونة عند الـ Hover */}
                <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Title with Custom Prestige Border */}
              <h3 className="text-xl font-black uppercase tracking-tighter italic border-l-2 border-[#580303] pl-5 mb-5 transition-all group-hover:border-[#D4AF37]">
                {feature.title}
              </h3>

              {/* Description - تحسين مقروئية النص */}
              <p className="text-white/40 text-[10px] md:text-[11px] font-bold leading-relaxed uppercase tracking-[0.2em] max-w-[280px]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}