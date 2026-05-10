"use client";
import React, { use } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';

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
  const rawId = (resolvedParams?.id as string)?.toLowerCase() || 'a1';
  const id = rawId in levelsData ? (rawId as keyof typeof levelsData) : 'a1';
  const data = levelsData[id];

  return (
    <main key={id} className="min-h-screen bg-[#FCFAF7] pt-24 md:pt-48 pb-16 md:pb-32 px-5 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Hero Card - Optimized for Mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[30px] md:rounded-[50px] p-8 md:p-20 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.05)] border-l-[8px] md:border-l-[16px] relative overflow-hidden italic"
          style={{ borderLeftColor: data.color }}
        >
          {/* Background Icon - Smaller on mobile */}
          <div className="absolute top-0 right-0 w-32 h-32 md:w-80 md:h-80 opacity-[0.03] md:opacity-[0.02] pointer-events-none translate-x-1/4 -translate-y-1/4">
             <GraduationCap size={200} className="md:w-[400px] md:h-[400px]" />
          </div>

          <span className="text-[7px] md:text-[10px] font-[1000] uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-8 block not-italic" style={{ color: data.color }}>
              — IPFC GAFSA PREMIUM
          </span>
          
          <h1 className="text-4xl sm:text-7xl md:text-9xl font-[1000] text-slate-950 mb-4 md:mb-10 uppercase tracking-tighter leading-[1] md:leading-[0.8]">
            {data.title}
          </h1>
          
          <p dir="auto" className="text-slate-500 text-sm md:text-2xl font-bold leading-relaxed max-w-2xl tracking-tight opacity-90">
            {data.desc}
          </p>
        </motion.div>

        {/* Formations Grid */}
        <div className="mt-12 md:mt-24">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-row items-center gap-4 mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-none whitespace-nowrap">
                Nos <span style={{ color: data.color }}>Formations</span>
            </h2>
            <div className="h-[1px] md:h-[2px] flex-grow bg-slate-200"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            {data.forms.map((f, index) => (
              <motion.div 
                key={f} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="group bg-white p-7 md:p-12 rounded-[25px] md:rounded-[45px] shadow-sm border border-slate-50 hover:shadow-[0_30px_70px_-15px_rgba(88,3,3,0.12)] transition-all duration-700 cursor-pointer italic relative overflow-hidden"
              >
                 <div className="flex justify-between items-start mb-6 md:mb-8 relative z-10">
                   <h3 className="text-xl md:text-3xl font-[1000] text-slate-950 group-hover:text-[#580303] transition-colors duration-500 uppercase tracking-tighter leading-[1.1] md:leading-[0.9] max-w-[70%]">
                     {f}
                   </h3>
                   <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-[#FCFAF7] text-slate-300 group-hover:bg-[#580303] group-hover:text-white transition-all duration-500 shadow-inner shrink-0">
                     <ShieldCheck className="w-5 h-5 md:w-7 md:h-7" />
                   </div>
                 </div>
                 
                 <div className="flex items-center gap-3 relative z-10">
                    <p className="text-[#580303] font-[1000] text-[8px] md:text-[10px] tracking-[0.2em] uppercase opacity-60">
                        Accrédité par IPFC
                    </p>
                    <ArrowRight size={12} className="text-[#580303] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                 </div>

                 {/* Royal Line Hover */}
                 <div className="absolute bottom-0 left-0 w-0 h-[3px] md:h-[5px] bg-[#580303] group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}