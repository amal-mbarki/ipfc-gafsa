const languages = [
  { name: 'الألمانية', code: 'DE', desc: 'للدراسة والعمل في ألمانيا' },
  { name: 'الإنجليزية', code: 'EN', desc: 'لغة التواصل العالمي' },
  { name: 'الفرنسية', code: 'FR', desc: 'لغة الثقافة والآداب' },
  { name: 'الإيطالية', code: 'IT', desc: 'لغة الفن والموضة' },
];

export default function Languages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center mb-12 text-gray-900">لغاتنا المتميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {languages.map((lang) => (
            <div key={lang.code} className="p-8 border border-gray-100 rounded-3xl hover:border-[#8B0000] hover:shadow-2xl transition-all group cursor-pointer">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#8B0000] font-bold mb-4 group-hover:bg-[#8B0000] group-hover:text-white transition-colors">
                {lang.code}
              </div>
              <h3 className="text-xl font-bold mb-2">{lang.name}</h3>
              <p className="text-gray-500 text-sm">{lang.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}