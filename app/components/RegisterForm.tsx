import React from 'react';

export default function RegisterForm() {
  return (
    <section id="register" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* الحاوية الرئيسية للإستمارة */}
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* جهة المعلومات (اللون الأحمر الخاص بالمركز) */}
          <div className="bg-[#8B0000] p-12 text-white md:w-2/5 flex flex-col justify-center text-right" dir="rtl">
            <h2 className="text-4xl font-black mb-6 leading-tight">سجل الآن واضمن مقعدك</h2>
            <p className="text-red-100 text-lg mb-8 leading-relaxed opacity-90">
              اترك معلوماتك وسيقوم فريق IPFC GAFSA بالاتصال بك في أقرب وقت لتحديد موعد اختبار المستوى وتأكيد التسجيل.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 justify-start">
                <span>✅ شهادات معترف بها</span>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <span>✅ أساتذة أكفاء</span>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <span>✅ مرافقة لملفات الـ Ausbildung</span>
              </li>
            </ul>
          </div>

          {/* جهة الإستمارة (Form) */}
          <form className="p-12 md:w-3/5 space-y-6 text-right bg-white" dir="rtl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-3 text-gray-700">الإسم واللقب</label>
                <input 
                  type="text" 
                  placeholder="أدخل إسمك الكامل" 
                  className="w-full p-4 border border-gray-100 rounded-2xl outline-none focus:border-[#8B0000] bg-gray-50 transition-all focus:ring-4 focus:ring-red-50" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3 text-gray-700">رقم الهاتف</label>
                <input 
                  type="tel" 
                  placeholder="216 -- --- ---" 
                  className="w-full p-4 border border-gray-100 rounded-2xl outline-none focus:border-[#8B0000] bg-gray-50 transition-all focus:ring-4 focus:ring-red-50" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-3 text-gray-700">اللغة أو الدورة المطلوبة</label>
              <select className="w-full p-4 border border-gray-100 rounded-2xl outline-none focus:border-[#8B0000] bg-gray-50 transition-all appearance-none cursor-pointer focus:ring-4 focus:ring-red-50">
                <option>الألمانية (Deutsch - B1/B2)</option>
                <option>الإنجليزية (English)</option>
                <option>الفرنسية (Français)</option>
                <option>الإيطالية (Italiano)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-3 text-gray-700">رسالة إضافية (إختياري)</label>
              <textarea 
                placeholder="هل لديك أي استفسار؟" 
                rows={3}
                className="w-full p-4 border border-gray-100 rounded-2xl outline-none focus:border-[#8B0000] bg-gray-50 transition-all focus:ring-4 focus:ring-red-50"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#8B0000] text-white py-5 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-xl shadow-red-900/20 active:scale-95"
            >
              تأكيد التسجيل الآن
            </button>
            <p className="text-center text-gray-400 text-xs">
              سيتم التعامل مع بياناتكم بكل سرية وأمان.
            </p>
          </form>

        </div>
      </div>
    </section>
  );
}