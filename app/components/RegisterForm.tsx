import React from 'react';
import Script from 'next/script'; // استدعاء سكريبت نيكست جيس

export default function RegisterForm() {
  return (
    <section id="register" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* جهة المعلومات (اللون الأحمر الخاص بـ IPFC GAFSA) */}
          <div className="bg-[#8B0000] p-12 text-white md:w-2/5 flex flex-col justify-center text-right" dir="rtl">
            <h2 className="text-4xl font-black mb-6 leading-tight">سجل الآن واضمن مقعدك</h2>
            <p className="text-red-100 text-lg mb-8 leading-relaxed opacity-90">
              اترك معلوماتك وسيقوم فريق المركز بالاتصال بك في أقرب وقت لتحديد موعد اختبار المستوى وتأكيد التسجيل.
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

          {/* جهة الإستمارة: هنا نضع كود Jotform الذي نسختِه */}
          <div className="p-4 md:p-12 md:w-3/5 bg-white min-h-[500px] flex items-center justify-center">
            <div className="w-full">
              {/* هذا هو الكود الذي نسختِه من Jotform */}
              <Script 
                src="https://form.jotform.com/jsform/261144034940045" 
                strategy="afterInteractive"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}