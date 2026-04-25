import React from 'react'; // Added correctly to solve the missing import issue

export default function Footer() {
  return (
    <footer className="bg-[#8B0000] py-20 px-10 text-white border-t border-red-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        
        {/* Brand & Mission */}
        <div>
          <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase italic">
            IPFC GAFSA
          </h3>
          <p className="text-red-100 text-sm leading-relaxed font-medium">
            Gafsa elite training center specializing in international language mastery. 
            Providing comprehensive courses from A1 to B2 to guarantee your professional global success.
          </p>
        </div>
        
        {/* Navigation */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-red-300">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
            <li>
              <a href="#" className="hover:text-black transition-colors">About Center</a>
            </li>
            <li>
              <a href="#courses" className="hover:text-black transition-colors">A1 - B2 Courses</a>
            </li>
            <li>
              <a href="#register" className="hover:text-black transition-colors">Enrollment</a>
            </li>
          </ul>
        </div>

        {/* Headquarters & Contact */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-red-300">
            Headquarters
          </h4>
          <p className="font-bold mb-4 italic tracking-tight flex items-center gap-2">
            📍 Imm Trocadero (Face Hôpital), Gafsa
          </p>
          <div className="bg-white/10 p-4 rounded-2xl border border-white/10 inline-block">
            <p className="text-xs font-bold uppercase tracking-widest text-red-200 mb-1">Direct Support</p>
            <p className="font-black text-2xl text-white">+216 99 885 883</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-[9px] text-red-300 font-black uppercase tracking-[0.5em]">
          © 2026 IPFC GAFSA | Elite Education Excellence
        </p>
      </div>
    </footer>
  );
}