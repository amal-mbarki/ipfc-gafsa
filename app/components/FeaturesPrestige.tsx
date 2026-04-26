import React from 'react';

const eliteFeatures = [
  {
    number: "01",
    title: "Global",
    subtitle: "Accreditation",
    desc: "Certifications recognized by the state and worldwide (ÖSD, IELTS, TOEIC).",
  },
  {
    number: "02",
    title: "Educational",
    subtitle: "Excellence",
    desc: "An expert teaching staff dedicated to your academic and professional success.",
  },
  {
    number: "03",
    title: "Career",
    subtitle: "Guidance",
    desc: "Full support for your Ausbildung projects and international career paths.",
  }
];

export default function FeaturesPrestige() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-royal-red font-black tracking-[0.5em] text-[10px] uppercase mb-6 block">
              The Gold Standard
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-gray-950 tracking-tighter uppercase italic leading-[0.85]">
              Elite <br />
              <span className="text-royal-red">Experience</span>
            </h2>
          </div>
          <p className="text-slate-400 font-bold text-sm max-w-[240px] leading-relaxed border-l-4 border-prestige-gold pl-6 hidden md:block">
            IPFC GAFSA provides prestige training for future global leaders.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eliteFeatures.map((feature) => (
            <div 
              key={feature.number} 
              className="group bg-white p-12 rounded-[40px] border border-slate-100 hover:border-prestige-gold/30 hover:shadow-[0_30px_60px_-15px_rgba(88,3,3,0.08)] transition-all duration-700 relative overflow-hidden"
            >
              <span className="absolute -top-4 -right-4 text-9xl font-black text-slate-950 opacity-[0.03] group-hover:text-prestige-gold group-hover:opacity-[0.07] transition-all duration-700">
                {feature.number}
              </span>

              <div className="relative z-10">
                <div className="mb-12">
                  <h3 className="text-slate-950 text-3xl font-black uppercase italic tracking-tighter leading-none">
                    {feature.title} <br />
                    <span className="text-royal-red">{feature.subtitle}</span>
                  </h3>
                </div>
                
                <p className="text-slate-600 font-medium leading-relaxed text-[15px] mb-10 group-hover:text-slate-900 transition-colors">
                  {feature.desc}
                </p>

                {/* الخط السفلي يولي ذهبي في الـ Hover */}
                <div className="w-12 h-1.5 bg-slate-100 group-hover:w-24 group-hover:bg-prestige-gold transition-all duration-700 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner - Deep Red & Gold Link */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-10 bg-royal-red p-12 md:p-20 rounded-[60px] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-prestige-gold/5 rounded-full -mr-64 -mt-64 blur-3xl"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">
              Ready for the World?
            </h4>
            <p className="text-white/70 font-black uppercase tracking-[0.3em] text-[11px]">
              IPFC Gafsa: Your Gateway to Excellence.
            </p>
          </div>

          <a 
            href="#register" 
            className="relative z-10 bg-white text-royal-red px-16 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-prestige-gold hover:text-white transition-all duration-500 shadow-2xl"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}