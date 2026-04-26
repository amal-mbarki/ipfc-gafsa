"use client";
import React from 'react';
import Image from 'next/image';

export default function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 95; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex justify-between items-center">
        
        {/* 1. Logo Section - عودة الحركة الاحترافية */}
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative">
            <Image 
              src="/logo.png" 
              alt="IPFC Gafsa" 
              width={65} 
              height={65} 
              className="object-contain transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-110"
              priority 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-[#8B0000] tracking-tighter leading-none">IPFC</span>
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mt-1">Gafsa Center</span>
          </div>
        </div>

        {/* 2. Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { name: 'Home', id: '#' },
            { name: 'A1 - C2 Courses', id: 'courses' },
            { name: 'Gallery', id: 'gallery' },
            { name: 'Business Hours', id: 'hours' }
          ].map((link) => (
            <a 
              key={link.name}
              href={link.id === '#' ? '#' : `#${link.id}`}
              onClick={(e) => link.id !== '#' && scrollToSection(e, link.id)}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#8B0000] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#8B0000] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* 3. Contact Actions - خط أغمق وأوضح */}
        <div className="flex items-center gap-8">
          <div className="hidden xl:flex flex-col items-end gap-1.5">
            <a 
              href="tel:+21699885883" 
              className="text-[17px] font-[1000] text-slate-950 tracking-tight hover:text-[#8B0000] transition-colors leading-none"
            >
              +216 99 885 883
            </a>
            <a 
              href="mailto:contact@ipfc.tn" 
              className="text-[12px] font-black text-slate-600 lowercase tracking-wide hover:text-[#8B0000] transition-all"
            >
              contact@ipfc.tn
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#register" 
              onClick={(e) => scrollToSection(e, 'register')}
              className="bg-[#8B0000] text-white px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl shadow-[#8B0000]/20 active:scale-95"
            >
              Register Now
            </a>
            
            <a 
              href="https://wa.me/21626260095" 
              target="_blank" 
              className="text-3xl hover:scale-125 transition-transform filter drop-shadow-md"
            >
              💬
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}