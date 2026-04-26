"use client";
import React, { useState, useEffect } from 'react';

export default function RegisterForm() {
  const [loading, setLoading] = useState(true);

  // كود إضافي لضمان أن الفورم يتنفس وما يتقصش في التلفون
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data === 'string' && e.data.includes("setHeight")) {
        const parts = e.data.split(":");
        const height = parts[1] + "px";
        const iframe = document.getElementById("JotFormIFrame-261144034940045");
        if (iframe) iframe.style.height = height;
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section id="register" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#580303] rounded-[40px] md:rounded-[60px] overflow-hidden flex flex-col lg:flex-row shadow-[0_40px_100px_rgba(88,3,3,0.18)] border border-slate-100">
          
          <div className="p-10 lg:p-16 text-white lg:w-5/12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
            
            <div className="relative z-10">
              <span className="text-red-300/80 font-black tracking-[0.3em] text-[10px] uppercase mb-6 block">
                Official Admission 2026
              </span>
              <h2 className="text-5xl md:text-6xl font-[1000] mb-8 leading-[0.9] tracking-tighter">
                Secure Your <br/> 
                <span className="text-white italic opacity-90">Future.</span>
              </h2>
              
              <div className="space-y-8 mt-12">
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center shrink-0 border border-white/10 text-sm">✅</div>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">Official Enrollment</p>
                    <p className="text-red-100/60 text-sm mt-1 font-medium">For levels A1 to C2.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center shrink-0 border border-white/10 text-sm">📍</div>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">IPFC Gafsa HQ</p>
                    <p className="text-red-100/60 text-sm mt-1 font-medium">Imm Trocadero, Face Hôpital.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 mt-12 border-t border-white/10 relative z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-300/60 mb-2">Registration Assistance</p>
              <a href="tel:+21699885883" className="text-2xl font-black hover:text-red-300 transition-colors">
                +216 99 885 883
              </a>
            </div>
          </div>

          <div className="lg:w-7/12 bg-white min-h-[600px] lg:min-h-[800px] relative">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20">
                <div className="w-12 h-12 border-4 border-slate-100 border-t-[#580303] rounded-full animate-spin"></div>
                <p className="text-[#580303] font-black text-[9px] uppercase tracking-[0.5em] mt-6 animate-pulse">Loading Form...</p>
              </div>
            )}
            
            <iframe
              id="JotFormIFrame-261144034940045"
              title="Formulaire d'inscription IPFC Gafsa"
              src="https://form.jotform.com/261144034940045"
              onLoad={() => setLoading(false)}
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen; payment"
              className={`w-full h-full border-none transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}
              style={{ minWidth: '100%', height: '800px' }}
              scrolling="no" // غيرناها لـ no لأن الـ useEffect سيتكفل بالطول
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}