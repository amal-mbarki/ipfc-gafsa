const languages = [
  { name: 'German', levels: 'A1 ➔ C2', desc: 'Full preparation for Ausbildung and work in Germany.' },
  { name: 'English', levels: 'A1 ➔ C2', desc: 'Official TOEIC and IELTS certification center.' },
  { name: 'French', levels: 'A1 ➔ C2', desc: 'Master the language of culture and professional success.' },
  { name: 'Italian', levels: 'A1 ➔ C2', desc: 'Unlock new academic and career horizons in Italy.' },
];

export default function Languages() {
  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Comprehensive Language Tracks</h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Full Mastery from A1 to C2 Levels</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {languages.map((lang) => (
            <div key={lang.name} className="bg-white p-8 rounded-[40px] border border-gray-100 hover:border-[#8B0000] transition-all group shadow-sm hover:shadow-xl text-center">
              <div className="text-[#8B0000] font-black text-xs mb-4 bg-red-50 py-2 px-4 rounded-full inline-block">
                {lang.levels}
              </div>
              <h3 className="text-2xl font-black mb-3">{lang.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{lang.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}