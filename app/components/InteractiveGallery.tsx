"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, X, Maximize2 } from 'lucide-react';

const customGalleryOrder = [
  '/a6.jpg', '/a1.jpg', '/a2.jpg', '/a3.jpg', '/a5.jpg', 
  '/a7.jpg', '/a8.jpg', '/a9.jpg', '/a10.jpg', '/a11.jpg', 
  '/a12.jpg', '/a13.jpg', '/a14.jpg', '/a15.jpg', '/a16.jpg', 
  '/a17.jpg', '/a18.jpg'
];

export default function InteractiveGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % customGalleryOrder.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + customGalleryOrder.length) % customGalleryOrder.length);
  };

  return (
    <section className="py-32 bg-[#FCFAf7] min-h-screen flex items-center justify-center overflow-hidden selection:bg-[#580303] selection:text-white relative">
      
      {/* خلفية فنية خفيفة */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #580303 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl w-full px-8 flex flex-col lg:flex-row items-center gap-20 relative z-10">
        
        {/* 1. النص التعريفي (Premium Typography) */}
        <div className="lg:w-1/3 space-y-8 text-left">
          <div className="flex items-center gap-4">
             <span className="w-12 h-[2px] bg-[#580303]"></span>
             <span className="text-[#580303] text-[10px] font-black uppercase tracking-[0.5em]">Our Environment</span>
          </div>
          
          <h2 className="text-slate-900 text-6xl md:text-8xl font-[1000] tracking-tighter leading-[0.85] uppercase italic">
            IPFC <br /> 
            <span className="text-[#580303] not-italic drop-shadow-sm">Spaces.</span>
          </h2>
          
          <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-sm uppercase tracking-tight">
            Explore our elite learning environment in Gafsa. Where modern design meets academic excellence.
          </p>

          <button 
            onClick={() => setIsOpen(true)}
            className="group bg-[#580303] text-white px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-6 hover:bg-black transition-all duration-500 shadow-2xl shadow-[#580303]/20 active:scale-95"
          >
            Explore Gallery 
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </div>

        {/* 2. إطار المعرض (The Showcase) */}
        <div className="relative lg:w-2/3 w-full h-[650px] bg-white rounded-[60px] border border-slate-100 flex items-center justify-center p-4 md:p-8 group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]">
          
          <div className="relative z-10 w-full h-full rounded-[45px] overflow-hidden shadow-2xl bg-slate-50">
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="relative w-full h-full group cursor-pointer" 
                  onClick={() => setIsOpen(true)}
                >
                  <Image 
                    src="/a18.jpg" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    alt="IPFC Gafsa Interior"
                    priority 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                  
                  {/* زر الفتح العائم */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-xl p-6 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 size={24} className="text-[#580303]" />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="relative w-full h-full"
                >
                  <Image 
                    key={currentIndex}
                    src={customGalleryOrder[currentIndex]} 
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    alt={`Elite Space ${currentIndex + 1}`}
                  />
                  
                  {/* أزرار التنقل الزجاجية */}
                  <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
                    <button 
                      onClick={prevImage}
                      className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-[#580303] transition-all shadow-2xl pointer-events-auto active:scale-90"
                    >
                      <ArrowLeft size={24} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-[#580303] transition-all shadow-2xl pointer-events-auto active:scale-90"
                    >
                      <ArrowRight size={24} />
                    </button>
                  </div>

                  {/* زر الإغلاق الذكي */}
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-10 right-10 bg-black/20 hover:bg-[#580303] backdrop-blur-md text-white p-3 rounded-2xl transition-all z-30 active:scale-90"
                  >
                    <X size={20} />
                  </button>

                  {/* مؤشر الأرقام المودرن */}
                  <div className="absolute bottom-10 left-10 flex items-center gap-6 bg-black/20 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 shadow-2xl z-30">
                      <div className="h-[2px] w-12 bg-white/30 relative overflow-hidden">
                        <motion.div 
                          className="absolute inset-0 bg-white"
                          initial={{ x: "-100%" }}
                          animate={{ x: "0%" }}
                          key={currentIndex}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                      <span className="text-white font-[1000] text-xs tracking-[0.4em] italic">
                        {String(currentIndex + 1).padStart(2, '0')} / {customGalleryOrder.length}
                      </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}