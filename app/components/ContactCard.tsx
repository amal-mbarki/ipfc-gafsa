"use client";
import React from 'react';
import { MapPin, Phone, Mail, Navigation, ArrowUpRight } from 'lucide-react';

export default function ContactCard() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=IPFC+Gafsa+Trocadero";

  return (
    <div className="bg-white rounded-[45px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(88,3,3,0.1)] border border-slate-100 w-full max-w-md mx-auto group">
        
        {/* 1. الجزء العلوي (Header) - أسود ملكي */}
        <div className="bg-slate-950 p-10 text-white relative overflow-hidden">
          {/* تأثير بصري خلفي (Decoration) */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#580303] rounded-full blur-[80px] opacity-20"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-white/40 font-black tracking-[0.4em] text-[10px] uppercase mb-2">Main Branch</p>
              <h3 className="text-4xl font-[1000] tracking-tighter italic group-hover:translate-x-2 transition-transform duration-500">Gafsa</h3>
            </div>
            <div className="bg-[#580303] p-4 rounded-[20px] border border-white/10 shadow-lg shadow-black/20">
               <MapPin size={24} className="text-white" />
            </div>
          </div>
        </div>

        {/* 2. تفاصيل الاتصال */}
        <div className="p-10 space-y-8 text-left">
          
          {/* العنوان مع تفاصيل واضحة */}
          <div className="flex gap-6 items-start group/loc">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover/loc:bg-[#580303]/5 transition-colors">
                  <Navigation size={18} className="text-slate-400 group-hover/loc:text-[#580303] transition-colors" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-[15px] leading-relaxed">
                    Environment Street, Opposite Sidi Bou Yahya Hospital
                </p>
                <p className="text-[#580303] font-black text-xs uppercase tracking-widest mt-1">
                   Trocadero Building, 2nd Floor
                </p>
              </div>
          </div>

          {/* التواصل السريع: هاتف وإيميل */}
          <div className="border-y border-slate-50 py-9 space-y-7">
              <div className="flex items-center gap-6 group/info">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover/info:bg-[#580303] transition-all duration-300">
                    <Phone size={18} className="text-[#580303] group-hover:text-white" />
                  </div>
                  <p className="text-lg font-[1000] text-slate-950 tracking-tighter italic">+216 99 885 883</p>
              </div>
              
              <div className="flex items-center gap-6 group/info">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover/info:bg-[#580303] transition-all duration-300">
                    <Mail size={18} className="text-[#580303] group-hover:text-white" />
                  </div>
                  <p className="text-lg font-[1000] text-slate-950 tracking-tighter">contact@ipfc.tn</p>
              </div>
          </div>

          {/* زر الخريطة - Luxury Style */}
          <a 
            href={mapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-5 bg-[#580303] text-white rounded-[22px] font-black text-center text-sm uppercase tracking-widest hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-red-900/10"
          >
            Get Directions
            <ArrowUpRight size={18} />
          </a>
        </div>
    </div>
  );
}