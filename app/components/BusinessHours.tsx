"use client";
import React from 'react';
import { Phone } from 'lucide-react';

export default function BusinessHours() {
  // 1. البيانات لازم تكون نصوص فقط (Plain Data)
  const schedule = [
    { day: "Monday — Friday", hours: "08:00 AM — 08:00 PM" },
    { day: "Saturday", hours: "08:00 AM — 05:00 PM" },
    { day: "Sunday", hours: "Closed", closed: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5 space-y-6">
        <div className="inline-block px-3 py-1 bg-slate-100 border-l-4 border-[#580303]">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-600">Time & Access</span>
        </div>
        <h2 className="text-5xl font-black text-slate-950 tracking-tighter leading-tight">
          Our <span className="font-serif italic text-[#580303]">Schedule.</span>
        </h2>
        <p className="text-slate-700 text-sm leading-relaxed max-w-xs font-medium">
          Experience elite training in Gafsa. Visit us during our operational hours.
        </p>
        <div className="pt-4 flex gap-4">
          <a href="tel:+21699885883" className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-900 hover:text-[#580303] hover:border-[#580303] transition-all">
            <Phone size={18} strokeWidth={2.5} />
          </a>
          <a href="https://facebook.com" target="_blank" className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-900 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
      </div>

      <div className="md:col-span-7">
        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
          <div className="space-y-8">
            {schedule.map((item, idx) => (
              <div key={idx} className="flex justify-between items-end border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                <div className="space-y-1">
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black">Days</p>
                  <p className="text-lg font-black text-slate-900 tracking-tight">{item.day}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black">Status</p>
                  <p className={`text-lg font-black ${item.closed ? 'text-slate-400 italic' : 'text-[#580303]'}`}>
                    {item.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}