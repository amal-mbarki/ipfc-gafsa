"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: "Amira Ben Salah",
    role: "Medical Student",
    cert: "OSD B2",
    text: "I obtained my OSD B2 after eight months of work with IPFC. The rigor allowed me to pursue medicine in Vienna."
  },
  {
    name: "Mohamed Trabelsi",
    role: "Engineer",
    cert: "TOEFL iBT",
    text: "Score TOEFL 103. The preparation was surgical; every section was worked on without compromise."
  },
  {
    name: "Fatma Gharbi",
    role: "English Teacher",
    cert: "IELTS 7.5",
    text: "The teachers don't just teach, they listen. You leave the classes with a genuine desire to go further."
  },
  {
    name: "Ahmed Kassab",
    role: "Mechanical Eng",
    cert: "TestDaF",
    text: "Serious atmosphere but never heavy. The small groups change everything; we dare to speak."
  },
  {
    name: "Sana Mejri",
    role: "Sales Manager",
    cert: "TOEIC 890",
    text: "The TOEIC obtained at IPFC opened the doors to an international position. Direct and effective training."
  },
  {
    name: "Youssef Ben Ali",
    role: "Business Student",
    cert: "CILS B1",
    text: "I learned Italian through passion, but with a method. Result: CILS B1 in one year."
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#FCFAF7] overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header القسم - Elite Styling */}
        <div className="mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-[2px] bg-[#580303]"></span>
            <span className="text-[#580303] font-[1000] text-[10px] uppercase tracking-[0.5em]">Success Voices</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-[1000] text-slate-950 uppercase italic tracking-tighter leading-[0.85]">
            SUCCESS <br />
            <span className="text-[#580303] not-italic opacity-20">STORIES.</span>
          </h2>
        </div>

        {/* شبكة الشهادات - Masonry-like Feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-12 bg-white rounded-[45px] border border-slate-100 hover:border-[#580303]/10 transition-all duration-700 group hover:shadow-[0_40px_100px_-20px_rgba(88,3,3,0.1)] relative flex flex-col justify-between italic"
            >
              {/* أيقونة الاقتباس الخلفية */}
              <div className="absolute top-10 right-10 text-slate-50 group-hover:text-[#580303]/5 transition-colors duration-700">
                <Quote size={60} fill="currentColor" />
              </div>

              <div className="relative z-10">
                <span className="inline-block mb-8 text-[9px] font-[1000] text-[#580303] tracking-[0.3em] uppercase bg-[#580303]/5 px-4 py-2 rounded-xl not-italic">
                  {item.cert}
                </span>
                
                <p className="text-slate-900 font-[700] text-xl leading-[1.6] mb-10 tracking-tight">
                   &quot;{item.text}&quot;
                </p>
              </div>
              
              <div className="pt-8 border-t border-slate-50 relative z-10">
                <h4 className="font-[1000] text-slate-950 uppercase text-xs tracking-widest not-italic group-hover:text-[#580303] transition-colors">
                  {item.name}
                </h4>
                <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-tighter italic">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}