import Header from './components/Header';
import Languages from './components/Languages';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. رأس الصفحة - Header */}
      <Header />
      
      {/* 2. قسم الترحيب - Hero Section */}
      <section className="relative py-20 px-6 md:px-10 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          {/* الصورة التعبيرية على اليسار */}
          <div className="flex-1 w-full relative">
            <div className="relative w-full h-[450px] rounded-[50px] overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               {/* تأكدي أن الصورة موجودة في مجلد public بنفس هذا الاسم */}
               <Image 
                src="/hero-img.jpg" 
                alt="Studying at IPFC Gafsa" 
                fill 
                className="object-cover"
              />
            </div>
            {/* لمسة فنية وراء الصورة */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#8B0000] rounded-3xl -z-10 animate-pulse opacity-20"></div>
          </div>

          {/* النص والترحيب على اليمين */}
          <div className="flex-1 text-right" dir="rtl">
            <span className="bg-red-100 text-[#8B0000] px-4 py-1 rounded-full text-sm font-bold mb-6 inline-block">
              أفضل مركز لغات في قفصة 📍
            </span>
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
              إتقن لغة <br />
              <span className="text-[#8B0000]">إفتح آفاقك</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium mb-10 leading-relaxed">
              انضم إلى IPFC GAFSA، المركز الأول في قفصة لتحضير شهادات اللغة الألمانية B1/B2 ومرافقتكم في مشاريع الـ Ausbildung والعمل في الخارج.
            </p>
            <div className="flex gap-4 justify-end">
              {/* زر ينقل المستخدم مباشرة للإستمارة لوطّة */}
              <a href="#register" className="bg-[#8B0000] text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl shadow-red-900/20">
                ابدأ الآن
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. قسم اللغات - Languages */}
      <Languages />

      {/* 4. قسم التسجيل - Register Form (تأكدي من إضافة id="register" في ملف المكون) */}
      <RegisterForm />

      {/* 5. تذييل الصفحة - Footer */}
      <Footer />
    </main>
  );
}