import React from 'react';

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
          
          {/* Quick Support Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            {/* زر الواتساب للرقم 26 */}
            <a 
              href="https://wa.me/21626260095" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white text-[10px] font-black uppercase px-4 py-2 rounded-full transition-all tracking-widest shadow-lg"
            >
              WhatsApp Support
            </a>
            <a 
              href="https://goo.gl/maps/YOUR_LINK" // حطي رابط الماب هنا
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-red-900 text-[10px] font-black uppercase px-4 py-2 rounded-full transition-all tracking-widest hover:bg-red-100 shadow-lg"
            >
              Google Maps
            </a>
          </div>
        </div>
        
        {/* Navigation */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-red-300">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
            <li><a href="#" className="hover:text-red-200 transition-colors">About Center</a></li>
            <li><a href="#courses" className="hover:text-red-200 transition-colors">A1 - B2 Courses</a></li>
            <li><a href="#register" className="hover:text-red-200 transition-colors">Enrollment</a></li>
          </ul>
        </div>

        {/* Headquarters & Contact - الزوز أرقام هنا */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-red-300">
            Headquarters
          </h4>
          <p className="font-bold mb-4 italic tracking-tight flex items-center gap-2 text-sm">
            📍 Imm Trocadero (Face Hôpital), Gafsa
          </p>
          <div className="bg-white/10 p-6 rounded-2xl border border-white/10 inline-block w-full">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-200 mb-3">Direct Contact</p>
            <div className="space-y-3">
              <div>
                <p className="text-[9px] uppercase font-black text-red-300">Administration</p>
                <p className="font-black text-xl text-white">+216 99 885 883</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <p className="text-[9px] uppercase font-black text-red-300">WhatsApp & Global</p>
                <p className="font-black text-xl text-white">+216 26 260 095</p>
              </div>
            </div>
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