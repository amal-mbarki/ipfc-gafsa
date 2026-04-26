const languages = [
  { name: 'German', levels: 'A1 ➔ B2', desc: 'Full preparation for Ausbildung and professional careers in Germany.' },
  { name: 'English', levels: 'A1 ➔ B2', desc: 'Official center for TOEIC and IELTS international certifications.' },
  { name: 'French', levels: 'A1 ➔ B2', desc: 'Master the language of global culture and professional excellence.' },
  { name: 'Italian', levels: 'A1 ➔ B2', desc: 'Unlock new academic and career horizons in Italy.' },
];

export default function Languages() {
  return (
    <section id="courses" className="py-32 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-[#8B0000] font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
            Elite Academic Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-6 tracking-tighter">
            Comprehensive Language Tracks
          </h2>
          <div className="w-12 h-1 bg-[#8B0000] mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {languages.map((lang) => (
            <div 
              key={lang.name} 
              className="group bg-white p-10 rounded-[45px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(139,0,0,0.1)] hover:border-[#8B0000]/30 hover:-translate-y-3 transition-all duration-500 text-center relative overflow-hidden"
            >
              {/* لمسة حمراء خفيفة تظهر عند الـ Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#8B0000] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="text-[#8B0000] font-black text-[10px] mb-6 bg-red-50 py-2 px-5 rounded-full inline-block tracking-widest uppercase">
                {lang.levels}
              </div>
              
              <h3 className="text-2xl font-black text-gray-950 mb-4 group-hover:text-[#8B0000] transition-colors italic uppercase tracking-tighter">
                {lang.name}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {lang.desc}
              </p>

              {/* سهم صغير يظهر عند الـ Hover يعطي انطباع بالتفاعل */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[#8B0000] text-xs font-black tracking-widest uppercase">Learn More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}