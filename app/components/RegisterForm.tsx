"use client";
import React, { useState } from 'react';

export default function RegisterForm() {
  const [loading, setLoading] = useState(true);

  return (
    <section id="register" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#8B0000] rounded-[60px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          
          <div className="p-12 lg:p-20 text-white lg:w-5/12 flex flex-col justify-center">
            <h2 className="text-5xl font-black mb-10 leading-tight">Secure Your <br/> Professional Future</h2>
            
            <div className="space-y-10">
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">✅</div>
                <p className="text-red-50 text-lg font-medium leading-snug">
                  Official enrollment for all levels from **A1 to B2**.
                </p>
              </div>
              
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">📍</div>
                <p className="text-red-50 text-lg font-medium leading-snug">
                  Located at **Imm Trocadero**, Gafsa (Facing the Hospital).
                </p>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-red-300 mb-2">Support Line</p>
                <p className="text-3xl font-black">+216 99 885 883</p>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 bg-slate-100 min-h-[650px] relative">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-10">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8B0000]"></div>
              </div>
            )}
            <iframe
              src="https://form.jotform.com/261144034940045"
              onLoad={() => setLoading(false)}
              className="w-full h-full border-none"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}