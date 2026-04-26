import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#8B0000] py-24 px-6 text-white border-t border-red-900 relative overflow-hidden">
      {/* لمسة فنية خلفية (خفيفة جداً) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#ffffff05_0%,transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. قسم التواصل التفاعلي - بألوان متناسقة مع الخلفية الحمراء */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-24">
          {/* زر الهاتف */}
          <a 
            href="tel:+21699885883" 
            className="group flex items-center gap-5 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-[35px] hover:bg-white/10 hover:border-white/30 transition-all duration-500 w-full md:w-auto"
          >
            <div className="w-14 h-14 bg-white text-[#8B0000] rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-500 shadow-xl">
              📞
            </div>
            <div className="flex flex-col pr-10 text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-300">Official Line</span>
              <span className="text-2xl font-black italic tracking-tighter">99 885 883</span>
            </div>
          </a>

          {/* زر الواتساب */}
          <a 
            href="https://wa.me/21626260095" 
            target="_blank"
            className="group flex items-center gap-5 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-[35px] hover:bg-white/10 hover:border-white/30 transition-all duration-500 w-full md:w-auto"
          >
            <div className="w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-500 shadow-xl">
              💬
            </div>
            <div className="flex flex-col pr-10 text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-300">WhatsApp</span>
              <span className="text-2xl font-black italic tracking-tighter">Get Support</span>
            </div>
          </a>
        </div>

        {/* 2. الروابط والمعلومات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-center md:text-left border-y border-white/10 py-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-black italic tracking-tighter uppercase">IPFC GAFSA</h3>
            <p className="text-red-100/70 text-sm leading-relaxed font-medium max-w-xs mx-auto md:mx-0">
              Leading the way in global language mastery. 
              Excellence in training, prestige in certification.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-300">Headquarters</h4>
            <p className="font-black italic text-lg leading-snug">
              📍 Imm Trocadero, Gafsa <br/>
              <span className="text-sm text-red-200/60 not-italic font-medium">Facing the Hospital</span>
            </p>
            <a 
              href="http://maps.google.com/?q=IPFC+Gafsa" 
              target="_blank"
              className="inline-block text-[10px] font-black text-white hover:text-red-200 transition-colors underline decoration-red-400 underline-offset-8"
            >
              FIND US ON MAPS
            </a>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-300">Explore</h4>
            <ul className="text-sm font-bold space-y-4 italic uppercase tracking-tighter">
              <li><a href="#courses" className="hover:text-red-200 transition-colors">Language Tracks</a></li>
              <li><a href="#register" className="hover:text-red-200 transition-colors">Enroll Now</a></li>
            </ul>
          </div>
        </div>

        {/* 3. الحقوق */}
        <div className="text-center pt-4">
           <p className="text-red-300/40 text-[9px] font-black uppercase tracking-[0.6em]">
             © 2026 IPFC GAFSA | PRESTIGE EDUCATION EXCELLENCE
           </p>
        </div>
      </div>
    </footer>
  );
}