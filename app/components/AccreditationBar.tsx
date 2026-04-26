"use client";
import React from 'react';

const certifications = [
  "IELTS", "ÖSD", "TOEIC", "TFI", "TestDaF", 
  "TestAS", "onSET", "GAST", "dMAT", "AMIDEAST", 
  "British Council", "Telc", "Goethe"
];

export default function AccreditationBar() {
  return (
    <div className="bg-[#0a0a0a] py-8 overflow-hidden border-y border-white/5 relative shadow-2xl">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

      <div className="animate-infinite-scroll flex items-center gap-20 whitespace-nowrap">
        {[...certifications, ...certifications].map((cert, index) => (
          <div key={index} className="flex items-center gap-20">
            <span className="text-white font-black italic text-3xl tracking-tighter uppercase opacity-90 hover:text-prestige-gold transition-all duration-500 cursor-default">
              {cert}
            </span>
            {/* النجمة توة بالذهبي البرستيج */}
            <span className="text-prestige-gold text-2xl font-serif">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}