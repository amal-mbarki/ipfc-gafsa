"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#580303] py-12 md:py-24 px-6 text-white border-t border-red-950 relative overflow-hidden">
      
      {/* تأثير فني خلفي */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#ffffff05_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. أزرار التواصل السريع - تحسين الحجم للجوال */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center mb-12 md:mb-24">
          
          {/* الهاتف الرسمي */}
          <a 
            href="tel:+21699885883" 
            className="group flex items-center gap-4 md:gap-5 bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-[25px] md:rounded-[35px] hover:bg-white/10 hover:border-white/30 transition-all duration-500 w-full md:w-auto shadow-2xl"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white text-[#580303] rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
              <Phone className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col pr-4 md:pr-10 text-left">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-red-300/60">Official Line</span>
              <span className="text-xl md:text-2xl font-[1000] italic tracking-tighter uppercase">+216 99 885 883</span>
            </div>
          </a>

          {/* واتساب */}
          <a 
            href="https://wa.me/21699885883" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 md:gap-5 bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-[25px] md:rounded-[35px] hover:bg-white/10 hover:border-white/30 transition-all duration-500 w-full md:w-auto shadow-2xl"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 bg-[#25D366] text-white rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg shadow-green-500/20">
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col pr-4 md:pr-10 text-left">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-red-300/60">Fast Support</span>
              <span className="text-xl md:text-2xl font-[1000] italic tracking-tighter uppercase">WhatsApp</span>
            </div>
          </a>
        </div>

        {/* 2. شبكة المعلومات - تحسين المسافات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12 md:mb-20 text-center md:text-left border-y border-white/10 py-10 md:py-16">
          
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl font-[1000] italic tracking-tighter uppercase">IPFC GAFSA</h3>
            <p className="text-red-100/60 text-xs md:text-sm leading-relaxed font-medium max-w-xs mx-auto md:mx-0 uppercase tracking-wide">
              Leading the way in global language mastery. Excellence in training.
            </p>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-red-300/50">Headquarters</h4>
            <div className="font-black italic text-base md:text-lg leading-snug space-y-1">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-red-400" />
                Imm Trocadero, Gafsa
              </p>
              <span className="text-[10px] md:text-xs text-red-200/40 not-italic font-bold uppercase tracking-widest">Facing the Hospital | 2nd Floor</span>
            </div>
            <a 
              href="https://maps.google.com/?q=IPFC+Gafsa" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[9px] md:text-[10px] font-black text-white hover:text-red-200 transition-colors underline decoration-red-900 underline-offset-8"
            >
              FIND US ON MAPS <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-red-300/50">Explore</h4>
            <ul className="text-xs md:text-sm font-black space-y-3 md:space-y-4 italic uppercase tracking-tighter">
              <li><Link href="/#courses" className="hover:text-red-200 transition-all">Language Tracks</Link></li>
              <li><Link href="/#register" className="hover:text-red-200 transition-all">Enroll Now</Link></li>
              <li><Link href="/#gallery" className="hover:text-red-200 transition-all">Elite Gallery</Link></li>
            </ul>
          </div>
        </div>

        {/* 3. حقوق الملكية */}
        <div className="text-center pt-2">
           <p className="text-red-300/20 text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.6em]">
             © 2026 IPFC GAFSA | PRESTIGE EDUCATION EXCELLENCE
           </p>
        </div>
      </div>
    </footer>
  );
}