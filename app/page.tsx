import Header from './components/Header';
import Languages from './components/Languages';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white selection:bg-[#8B0000] selection:text-white"> 
      <Header />
      
      {/* Hero Section - Premium White & Red Theme */}
      <section className="relative pt-56 pb-32 bg-white text-center px-6 overflow-hidden">
        {/* إضاءة حمراء خفيفة جداً في الخلفية لإعطاء عمق بدون سواد */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#8B000008_0%,transparent_70%)] animate-pulse"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Badge - IPFC GAFSA PREMIUM */}
          <span className="text-[#8B0000] font-black tracking-[0.4em] text-[10px] uppercase mb-10 block italic animate-bounce-slow">
            IPFC Gafsa Premium Expertise
          </span>

          {/* العنوان الرئيسي - تم تقريب الحروف لزيادة الهيبة */}
          <h1 className="text-6xl md:text-[95px] font-black text-gray-950 mb-10 leading-[0.9] tracking-tighter">
            Your Future Begins <br/> 
            <span className="text-[#8B0000] italic uppercase drop-shadow-sm">With a Global Degree</span>
          </h1>

          {/* الوصف المترجم */}
          <p className="text-gray-500 text-lg md:text-xl mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
            Master over <span className="text-[#8B0000] font-bold">13 internationally accredited certifications</span> (ÖSD, TOEIC, IELTS). 
            We are your leading partner in Gafsa for professional success abroad.
          </p>

          {/* أزرار الفعل - مع تأثير الـ Glow */}
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <a 
              href="#register" 
              className="group relative bg-[#8B0000] text-white px-16 py-6 rounded-2xl font-black text-xl shadow-[0_20px_50px_rgba(139,0,0,0.2)] hover:bg-black hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Enroll Now</span>
              {/* لمعة داخل الزر عند التحويم */}
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
            
            <div className="flex flex-col items-center sm:items-start group cursor-pointer">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 group-hover:text-[#8B0000] transition-colors">Official Hotline</span>
              <a href="tel:+21699885883" className="text-2xl font-black text-gray-950 group-hover:tracking-tighter transition-all duration-300">
                +216 99 885 883
              </a>
            </div>
          </div>
        </div>

        {/* قسم الشركاء - منظّم بلمسة راقية */}
        <div className="mt-36 pt-16 border-t border-gray-50 max-w-5xl mx-auto opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em] mb-10">Accredited by Global Institutions</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 font-black text-gray-300 text-3xl italic uppercase tracking-tighter">
              <span className="hover:text-[#8B0000] transition-colors">ÖSD</span>
              <span className="hover:text-[#8B0000] transition-colors">IELTS</span>
              <span className="hover:text-[#8B0000] transition-colors">TOEIC</span>
              <span className="hover:text-[#8B0000] transition-colors">TEF/TCF</span>
            </div>
        </div>
      </section>

      <Languages />
      <RegisterForm />
      <Footer />
    </main>
  );
}