"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // أضفنا هذا السطر المهم

const customGalleryOrder = [
  '/a6.jpg', '/a1.jpg', '/a2.jpg', '/a3.jpg', '/a5.jpg', 
  '/a7.jpg', '/a8.jpg', '/a9.jpg', '/a10.jpg', '/a11.jpg', 
  '/a12.jpg', '/a13.jpg', '/a14.jpg', '/a15.jpg', '/a16.jpg', 
  '/a17.jpg', '/a18.jpg'
];

export default function InteractiveGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % customGalleryOrder.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + customGalleryOrder.length) % customGalleryOrder.length);
  };

  return (
    <section className="py-24 bg-slate-50 min-h-screen flex items-center justify-center overflow-hidden selection:bg-[#580303] selection:text-white">
      <div className="max-w-6xl w-full px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        <div className="md:w-1/3 space-y-6 text-left">
          <div className="flex items-center gap-3">
             <span className="w-8 h-[1.5px] bg-[#580303]"></span>
             <span className="text-[#580303] text-[11px] font-black uppercase tracking-[0.3em]">Premium Spaces</span>
          </div>
          <h2 className="text-slate-900 text-5xl md:text-7xl font-[900] tracking-tighter leading-none uppercase italic">
            IPFC <br /> <span className="text-[#580303] not-italic text-6xl md:text-8xl">Spaces.</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed font-medium">
            اكتشف بيئة التعلم الراقية في قلب قفصة. حيث تجتمع الحداثة مع النجاح الأكاديمي.
          </p>
          <button 
            onClick={() => setIsOpen(true)}
            className="group bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold text-sm flex items-center gap-4 hover:bg-[#580303] transition-all duration-500 shadow-xl active:scale-95"
          >
            Explore Gallery 
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

        <div className="relative md:w-2/3 w-full h-[550px] bg-white rounded-[50px] border border-slate-200 flex items-center justify-center p-4 md:p-6 group shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}>
          </div>

          <div className="relative z-10 w-full h-full rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 bg-white transition-all duration-700">
            
            {!isOpen ? (
              <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsOpen(true)}>
                <Image 
                  src="/a18.jpg" 
                  fill // تجعل الصورة تغطي الإطار بالكامل
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                  alt="IPFC Experience"
                  priority // لجعل صورة الواجهة تتحمل بسرعة قصوى
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <div className="bg-white/90 backdrop-blur-md border border-slate-200 text-slate-900 px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#580303] hover:text-white transition-all duration-500 shadow-lg">
                      Open Gallery
                    </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full animate-in fade-in zoom-in-95 duration-700">
                <Image 
                  key={currentIndex}
                  src={customGalleryOrder[currentIndex]} 
                  fill
                  className="object-cover animate-in fade-in duration-1000"
                  alt="Gallery Image"
                />
                
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between z-20">
                  <button 
                    onClick={prevImage}
                    className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-[#580303] hover:text-white transition-all shadow-lg"
                  >
                    ←
                  </button>
                  <button 
                    onClick={nextImage}
                    className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-[#580303] hover:text-white transition-all shadow-lg"
                  >
                    →
                  </button>
                </div>

                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-8 bg-white/90 backdrop-blur-md text-slate-400 hover:text-[#580303] p-2 rounded-xl transition-colors shadow-sm z-30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>

                <div className="absolute bottom-8 left-8 flex items-center gap-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-100 shadow-sm z-30">
                    <div className="h-[2px] w-8 bg-[#580303]"></div>
                    <span className="text-slate-900 font-black text-[10px] tracking-[0.3em]">
                      {String(currentIndex + 1).padStart(2, '0')} / {customGalleryOrder.length}
                    </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}