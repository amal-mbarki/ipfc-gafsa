"use client";
import React, { use } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';

// قاعدة البيانات الخاصة بالمستويات - IPFC Gafsa Premium
const levelsData = {
  a1: {
    title: "Level A1",
    desc: "Le point de départ idéal pour maîtriser les bases de la langue. Ce niveau vous permet de comprendre et d'utiliser des expressions quotidiennes simples.",
    color: "#580303",
    forms: ["Cours Intensif A1", "Préparation Examens A1", "Formation Communication Base"]
  },
  a2: {
    title: "Level A2",
    desc: "Renforcez vos acquis et commencez à communiquer sur des sujets familiers. Parfait pour ceux qui veulent une autonomie de base.",
    color: "#580303",
    forms: ["Cours Standard A2", "Atelier de Grammaire A2", "Session de Conversation"]
  },
  b1: {
    title: "Level B1",
    desc: "Devenez un utilisateur indépendant. Apprenez à gérer la plupart des situations linguistiques rencontrées en voyage ou au travail.",
    color: "#580303",
    forms: ["B1 Professionnel", "Préparation DELF/Goethe B1", "Immersion Linguistique"]
  },
  b2: {
    title: "Level B2",
    desc: "Le niveau d'élite pour l'Ausbildung et les études supérieures. Maîtrisez des arguments complexes et parlez avec fluidité.",
    color: "#580303",
    forms: ["B2 Ausbildung Special", "Advanced Grammar Masterclass", "Business Language B2"]
  }
};

export default function LevelPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  // تصحيح النوع البرمجي لـ TypeScript لضمان عدم وجود خطأ أحمر
  const rawId = (resolvedParams?.id as string)?.toLowerCase() || 'a1';
  const id = rawId in levelsData ? (rawId as keyof typeof levelsData) : 'a1';
  
  const data = levelsData[id];

  return (
    <main key={id} className="min-h-screen bg-[#FCFAF7] pt-32 md:pt-48 pb-20 md:pb-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Hero Card: التصميم الفاخر مع Border جانبي ديناميكي */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[35px] md:rounded-[50px] p-8 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border-l-[10px] md:border-l-[16px] relative overflow-hidden italic"
          style={{ borderLeftColor: data.color }}
        >
          {/* أيقونة الخلفية: تظهر في الأجهزة الكبيرة فقط */}
          <div className="absolute top-0 right-0 w-40 h-40 md:w-80 md:h-80 opacity-[0.02] pointer-events-none translate-x-1/4 -translate-y-1/4 hidden sm:block">
             <GraduationCap size={400} />
          </div>

          <span className="text-[8px] md:text-[10px] font-[1000] uppercase tracking-[0.4em] md:tracking-[0.6em] mb-6 md:mb-8 block not-italic" style={{ color: data.color }}>
             — IPFC GAFSA PREMIUM SELECTION
          </span>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-[1000] text-slate-950 mb-6 md:mb-10 uppercase tracking-tighter leading-[0.8]">
            {data.title}
          </h1>
          
          <p dir="auto" className="text-slate-500 text-lg md:text-2xl font-bold leading-relaxed max-w-3xl tracking-tight opacity-80">
            {data.desc}
          </p>
        </motion.div>

        {/* شبكة الدورات (Nos Formations) */}
        <div className="mt-16 md:mt-24">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-none">
                Nos <span style={{ color: data.color }}>Formations</span>
            </h2>
            <div className="h-[2px] w-20 md:flex-grow bg-slate-200/50"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {data.forms.map((f, index) => (
              <motion.div 
                key={f} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="group bg-white p-8 md:p-12 rounded-[35px] md:rounded-[45px] shadow-sm border border-slate-100 hover:shadow-[0_40px_100px_-20px_rgba(88,3,3,0.15)] hover:-translate-y-2 md:hover:-translate-y-3 transition-all duration-700 cursor-pointer italic relative overflow-hidden"
              >
                 <div className="flex justify-between items-start mb-6 md:mb-8 relative z-10">
                   <h3 className="text-2xl md:text-3xl font-[1000] text-slate-950 group-hover:text-[#580303] transition-colors duration-500 uppercase tracking-tighter leading-[0.9]">
                     {f}
                   </h3>
                   <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-[#FCFAF7] text-slate-300 group-hover:bg-[#580303] group-hover:text-white transition-all duration-500 shadow-inner">
                     <ShieldCheck size={24} className="md:w-[28px]" />
                   </div>
                 </div>
                 
                 <div className="flex items-center gap-3 relative z-10">
                    <p className="text-[#580303] font-[1000] text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                       Accrédité par IPFC International
                    </p>
                    <motion.div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                      <ArrowRight size={14} className="text-[#580303]" />
                    </motion.div>
                 </div>

                 {/* خط أنيميشن أسفل الكارت */}
                 <div className="absolute bottom-0 left-0 w-0 h-1 md:h-2 bg-[#580303] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}