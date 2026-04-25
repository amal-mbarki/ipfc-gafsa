import Header from './components/Header';
import Languages from './components/Languages';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* قسم الـ Hero - التعديل الأساسي هنا */}
      <section className="relative py-10 px-4 md:py-20 md:px-10 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* الصورة: صغرنا حجمها في التليفون (h-[300px]) وبدّلنا ترتيبها (order-first) باش تطلع هي الأولى */}
          <div className="flex-1 w-full relative order-first md:order-last">
            <div className="relative w-full h-[300px] md:h-[450px] rounded-[30px] md:rounded-[50px] overflow-hidden border-4 md:border-8 border-white shadow-2xl rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500">
               <Image 
                src="/hero-img.jpg" 
                alt="Studying at IPFC Gafsa" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            {/* الديكور الأحمر اللي ورا الصورة صغرناه في التليفون */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-20 h-20 md:w-32 md:h-32 bg-[#8B0000] rounded-3xl -z-10 animate-pulse opacity-20"></div>
          </div>

          {/* النص: رديناه في الوسط في التليفون (text-center) وفي اليمين في الكمبيوتر (md:text-right) */}
          <div className="flex-1 text-center md:text-right" dir="rtl">
            <span className="bg-red-100 text-[#8B0000] px-3 py-1 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 inline-block">
              أفضل مركز لغات في قفصة 📍
            </span>
            
            {/* حجم الخط ولى ديناميكي: text-4xl في الصغير و 7xl في الكبير */}
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-tight md:leading-[1.1] mb-6 md:mb-8">
              إتقن لغة <br />
              <span className="text-[#8B0000]">إفتح آفاقك</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 font-medium mb-8 md:mb-10 leading-relaxed px-2 md:px-0">
              انضم إلى IPFC GAFSA، المركز الأول في قفصة لتحضير شهادات اللغة الألمانية B1/B2 ومرافقتكم في مشاريع الـ Ausbildung والعمل في الخارج.
            </p>
            
            <div className="flex justify-center md:justify-end">
              <a href="#register" className="w-full md:w-auto bg-[#8B0000] text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl shadow-red-900/20">
                ابدأ الآن
              </a>
            </div>
          </div>

        </div>
      </section>

      <Languages />
      <RegisterForm />
      <Footer />
    </main>
  );
}