import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center overflow-hidden relative">
      {/* نفس الـ Background Animation اللي في الـ Hero متاعك */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#58030305_0%,transparent_70%)] animate-pulse"></div>

      <div className="relative z-10">
        {/* الـ 404 بستايل برستيج باهت */}
        <h1 className="text-[120px] md:text-[200px] font-black text-gray-950 opacity-[0.03] leading-none tracking-tighter">
          404
        </h1>

        <div className="mt-[-40px] md:mt-[-60px]">
          <span className="text-royal-red font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
            Error - Page Not Found
          </span>
          
          <h2 className="text-3xl md:text-5xl font-black text-gray-950 mb-6 italic uppercase tracking-tighter">
            Oups! Page <span className="text-royal-red text-shadow-sm">Perdue</span>
          </h2>
          
          <p className="text-gray-500 text-lg mb-12 max-w-md mx-auto font-medium leading-relaxed">
            Désolé أمل، الصفحة اللي تلوج عليها مش موجودة. <br/>
            تأكد من الرابط أو ارجع للصفحة الرئيسية.
          </p>

          {/* نفس ستايل الزر اللي استعملتيه في الـ Hero */}
          <Link 
            href="/" 
            className="inline-block bg-royal-red text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-black hover:-translate-y-2 transition-all duration-500"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer بسيط للـ 404 */}
      <div className="absolute bottom-10 left-0 w-full opacity-20">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
          IPFC GAFSA • Excellence 2026
        </p>
      </div>
    </main>
  );
}