import Header from './components/Header';
import Languages from './components/Languages';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white"> {/* تم تغيير الخلفية للأبيض ليكون الموقع منور */}
      <Header />
      
      {/* Hero Section - Premium White & Red Theme */}
      <section className="relative pt-48 pb-32 bg-white text-center px-6 overflow-hidden">
        {/* إضاءة حمراء خفيفة جداً في الخلفية لإعطاء عمق بدون سواد */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#8B000005_0%,transparent_70%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Badge - IPFC GAFSA PREMIUM */}
          <span className="text-[#8B0000] font-black tracking-[0.3em] text-xs uppercase mb-8 block italic">
            IPFC Gafsa Premium
          </span>

          {/* العنوان الرئيسي بالإنجليزية */}
          <h1 className="text-6xl md:text-[90px] font-black text-gray-950 mb-10 leading-[0.95] tracking-tighter">
            Your Future Begins <br/> 
            <span className="text-[#8B0000] italic uppercase">With a Global Degree</span>
          </h1>

          {/* الوصف المترجم للإنجليزية */}
          <p className="text-gray-500 text-lg md:text-xl mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
            Master over <span className="text-[#8B0000] font-bold">13 internationally accredited certifications</span> (ÖSD, TOEIC, IELTS). 
            We are your leading partner in Gafsa for professional success abroad.
          </p>

          {/* أزرار الفعل - ألوان زاهية ومنورة */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a 
              href="#register" 
              className="bg-[#8B0000] text-white px-14 py-5 rounded-2xl font-black text-xl shadow-xl shadow-red-900/20 hover:bg-red-700 hover:-translate-y-1 transition-all"
            >
              Enroll Now
            </a>
            
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Official Hotline</span>
              <a href="tel:+21699885883" className="text-2xl font-black text-gray-950 hover:text-[#8B0000] transition-colors tracking-tight">
                99 885 883
              </a>
            </div>
          </div>
        </div>

        {/* قسم بسيط للشركاء لزيادة المصداقية */}
        <div className="mt-28 pt-12 border-t border-gray-50 max-w-4xl mx-auto opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex flex-wrap justify-center gap-12 md:gap-20 font-black text-gray-400 text-2xl italic uppercase tracking-tighter">
              <span>ÖSD</span>
              <span>IELTS</span>
              <span>TOEIC</span>
              <span>TEF/TCF</span>
           </div>
        </div>
      </section>

      <Languages />
      <RegisterForm />
      <Footer />
    </main>
  );
}