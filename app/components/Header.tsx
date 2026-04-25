import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 md:px-10 py-4 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      
      {/* جهة اللوغو */}
      <div className="flex items-center gap-3">
        <Image 
          src="/logo.png" 
          alt="IPFC Gafsa Logo" 
          width={60} 
          height={60} 
          className="object-contain"
        />
        <div className="flex flex-col text-right" dir="rtl">
          <span className="text-xl font-black text-[#8B0000] leading-none tracking-tighter uppercase">IPFC</span>
          <span className="text-[10px] font-bold text-gray-400 tracking-[0.1em] uppercase">Gafsa Center</span>
        </div>
      </div>
      
      {/* المنيو - ربطناه بالـ Sections */}
      <nav className="hidden md:flex gap-8 text-sm font-bold text-gray-700">
        <a href="#" className="hover:text-[#8B0000] transition-colors">الرئيسية</a>
        {/* هوني ربطناه بـ #register اللي عملناه في النقطة 5 */}
        <a href="#register" className="hover:text-[#8B0000] transition-colors">سجل الآن</a>
        <a href="#" className="hover:text-[#8B0000] transition-colors">عن المركز</a>
      </nav>

      {/* زر الاتصال - رديناه يطلب الرقم طول كي تنزل عليه من التليفون */}
      <a 
        href="tel:76000000" 
        className="bg-[#8B0000] text-white px-5 py-2 rounded-xl font-bold text-sm shadow-lg shadow-red-900/20 cursor-pointer hover:bg-black transition-all"
      >
        76 000 000
      </a>
    </header>
  );
}