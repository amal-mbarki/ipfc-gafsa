import React from 'react';

export default function RegisterForm() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-[30px] shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        <div className="bg-[#8B0000] p-10 text-white md:w-1/3 text-right" dir="rtl">
          <h2 className="text-2xl font-black mb-4">سجل الآن</h2>
          <p className="text-sm opacity-80">اترك بياناتك وسنتواصل معك في أقرب وقت.</p>
        </div>
        <div className="p-10 md:w-2/3 text-right" dir="rtl">
          <div className="space-y-4">
            <input type="text" placeholder="الإسم واللقب" className="w-full p-4 border rounded-xl outline-none focus:border-[#8B0000]" />
            <input type="tel" placeholder="رقم الهاتف" className="w-full p-4 border rounded-xl outline-none focus:border-[#8B0000]" />
            <button className="w-full bg-[#8B0000] text-white py-4 rounded-xl font-bold hover:bg-black transition-all">إرسال الطلب</button>
          </div>
        </div>
      </div>
    </section>
  );
}