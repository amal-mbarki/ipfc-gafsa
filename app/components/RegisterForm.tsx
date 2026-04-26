"use client";
import React, { useState } from 'react';

export default function RegisterForm() {
  const [loading, setLoading] = useState(true);

  return (
    <section id="register" className="py-24 bg-white selection:bg-white selection:text-[#8B0000]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#8B0000] rounded-[40px] md:rounded-[80px] overflow-hidden flex flex-col lg:flex-row shadow-[0_30px_100px_rgba(139,0,0,0.15)] border border-red-900/10">
          
          {/* Left Side: Information */}
          <div className="p-10 lg:p-20 text-white lg:w-5/12 flex flex-col justify-center relative overflow-hidden">
            {/* زخرفة خلفية خفيفة */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter relative z-10">
              Secure Your <br/> 
              <span className="text-red-200 italic">Future</span>
            </h2>
            
            <div className="space-y-10 relative z-10">
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/20 transition-all">
                  ✅
                </div>
                <p className="text-red-50 text-lg font-medium leading-tight pt-1">
                  Official enrollment for levels <span className="font-black text-white">A1 to C2</span>.
                </p>
              </div>
              
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/20 transition-all">
                  📍
                </div>
                <p className="text-red-50 text-lg font-medium leading-tight pt-1">
                  <span className="font-black text-white">Imm Trocadero</span>, Gafsa (Face Hôpital).
                </p>
              </div>

              <div className="pt-10 mt-10 border-t border-white/10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-300/60 mb-2">Support Line</p>
                <a href="tel:+21699885883" className="text-3xl font-black hover:text-red-200 transition-colors">
                  +216 99 885 883
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form Iframe */}
          <div className="lg:w-7/12 bg-slate-50 min-h-[600px] lg:min-h-[750px] relative">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10">
                <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-[#8B0000] border-r-transparent mb-4"></div>
                <p className="text-[#8B0000] font-black text-[10px] uppercase tracking-widest animate-pulse">Loading Elite Form...</p>
              </div>
            )}
            <iframe
              src="https://form.jotform.com/261144034940045"
              onLoad={() => setLoading(false)}
              className={`w-full h-full border-none transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}
              title="Registration Form"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}