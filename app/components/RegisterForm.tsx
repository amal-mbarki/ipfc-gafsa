"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';

/**
 * IPFC GAFSA - Secure Registration Form 2026
 * Optimized for Next.js & JotForm Integration
 */
export default function RegisterForm() {
  const [loading, setLoading] = useState(true);

  // لضمان التوافق مع JotForm وتعديل الطول تلقائياً
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data === 'string' && e.data.includes("setHeight")) {
        const parts = e.data.split(":");
        const height = parts[1] + "px";
        const iframe = document.getElementById("JotFormIFrame-261144034940045") as HTMLIFrameElement;
        if (iframe) iframe.style.height = height;
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section id="register" className="py-16 md:py-32 bg-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#580303] rounded-[40px] md:rounded-[70px] overflow-hidden flex flex-col lg:flex-row shadow-[0_50px_120px_-20px_rgba(88,3,3,0.25)] border border-white/5 italic">
          
          {/* الجانب الأيسر - معلومات التواصل (Premium Dark Side) */}
          <div className="p-8 md:p-12 lg:p-24 text-white lg:w-5/12 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#580303] to-[#3a0202]">
            {/* تأثيرات بصرية خلفية */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute -bottom-20 -left-20 w-40 md:w-80 h-40 md:h-80 bg-white/5 rounded-full blur-[60px] md:blur-[100px]"></div>
            
            <div className="relative z-10 space-y-8 md:space-y-12">
              <div>
                <span className="text-white/40 font-[1000] tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[10px] uppercase mb-4 md:mb-8 block not-italic">
                  Official Admission 2026
                </span>
                <h2 className="text-4xl md:text-8xl font-[1000] mb-6 md:mb-10 leading-[1] md:leading-[0.85] tracking-tighter uppercase">
                  Secure <br/> 
                  <span className="text-white/30 italic">Your Future.</span>
                </h2>
              </div>
              
              <div className="space-y-6 md:space-y-10">
                <div className="flex gap-4 md:gap-6 items-start group">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white group-hover:text-[#580303] transition-all duration-500">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-white font-[1000] text-lg md:text-xl uppercase tracking-tighter italic leading-none md:leading-normal">Official Enrollment</p>
                    <p className="text-white/50 text-[11px] md:text-sm mt-1 md:mt-2 font-bold uppercase tracking-tight">Full levels from A1 to C2</p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6 items-start group">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white group-hover:text-[#580303] transition-all duration-500">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-white font-[1000] text-lg md:text-xl uppercase tracking-tighter italic leading-none md:leading-normal">IPFC Gafsa HQ</p>
                    <p className="text-white/50 text-[11px] md:text-sm mt-1 md:mt-2 font-bold uppercase tracking-tight">Imm Trocadero, Face Hôpital.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 mt-10 md:pt-16 md:mt-16 border-t border-white/10 relative z-10">
              <p className="text-[8px] md:text-[10px] font-[1000] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/30 mb-2 md:mb-4 not-italic">Registration Assistance</p>
              <a href="tel:+21699885883" className="text-2xl md:text-3xl font-[1000] hover:text-white/70 transition-colors tracking-tighter italic">
                +216 99 885 883
              </a>
            </div>
          </div>

          {/* الجانب الأيمن - الـ Iframe (Clean White Side) */}
          <div className="lg:w-7/12 bg-white min-h-[600px] md:min-h-[700px] lg:min-h-[900px] relative">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20 p-8">
                <div className="w-12 h-12 md:w-16 md:h-16 border-[4px] md:border-[6px] border-slate-50 border-t-[#580303] rounded-full animate-spin"></div>
                <p className="text-[#580303] font-[1000] text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] mt-8 md:mt-10 animate-pulse italic text-center">Connecting to Secure Gateway...</p>
              </div>
            )}
            
            <iframe
              id="JotFormIFrame-261144034940045"
              title="Formulaire d'inscription IPFC Gafsa"
              src="https://form.jotform.com/261144034940045"
              onLoad={() => setLoading(false)}
              allow="geolocation; microphone; camera; fullscreen; payment"
              className={`w-full border-none transition-all duration-1000 ${loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
              style={{ minWidth: '100%', height: '800px', minHeight: '600px' }}
              scrolling="no"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}