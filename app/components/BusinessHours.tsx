"use client";
import React from 'react';
import { Clock, Phone, MapPin } from 'lucide-react';

export default function BusinessHours() {
  const schedule = [
    { day: "Monday — Friday", hours: "09:00 AM — 08:00 PM" },
    { day: "Saturday & Sunday", hours: "Closed", closed: true },
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Info */}
          <div className="md:col-span-5 space-y-8">
            <div className="inline-block px-3 py-1 bg-slate-100 border-l-4 border-[#580303]">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-600">Time & Access</span>
            </div>
            
            <h2 className="text-5xl font-black text-slate-950 tracking-tighter leading-tight">
              Our <span className="font-serif italic text-[#580303]">Schedule.</span>
            </h2>
            
            <p className="text-slate-700 text-base leading-relaxed max-w-xs font-medium">
              Experience elite training in Gafsa. Visit us during our operational hours.
            </p>
            
            <div className="pt-6 flex gap-5">
              <a href="tel:+21699885883" className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-900 hover:text-[#580303] hover:border-[#580303] transition-all duration-300">
                <Phone size={20} strokeWidth={2.5} />
              </a>
              <a href="https://facebook.com" className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-900 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Right Side: Mini Table */}
          <div className="md:col-span-7">
            <div className="bg-slate-50 p-10 md:p-14 rounded-[2.5rem] border-2 border-slate-100 shadow-sm">
              <div className="space-y-10">
                {schedule.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-end border-b-2 border-slate-200/60 pb-8 last:border-0 last:pb-0">
                    <div className="space-y-2">
                      <p className="text-[11px] uppercase tracking-widest text-slate-500 font-black">Days</p>
                      <p className="text-xl font-black text-slate-900 tracking-tight">{item.day}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <p className="text-[11px] uppercase tracking-widest text-slate-500 font-black text-right">Status</p>
                      <p className={`text-xl font-black ${item.closed ? 'text-slate-400 italic' : 'text-[#580303]'}`}>
                        {item.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer Address - تم تغميقه وتكبيره قليلاً */}
        <div className="mt-20 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.4em] text-slate-800 justify-center">
          <MapPin size={14} strokeWidth={3} className="text-[#580303]" />
          <span>Imm Trocadero, Gafsa</span>
        </div>
      </div>
    </section>
  );
}