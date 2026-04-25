import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="IPFC Gafsa" 
            width={60} 
            height={60} 
            className="object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black text-[#8B0000]">IPFC</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Gafsa Center</span>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-xs font-black uppercase tracking-widest text-gray-600">
          <a href="#" className="hover:text-[#8B0000] transition-colors">Home</a>
          <a href="#courses" className="hover:text-[#8B0000] transition-colors">A1 - B2 Courses</a>
          <a href="#register" className="text-[#8B0000] hover:underline">Register Now</a>
        </nav>

        <a href="tel:+21699885883" className="bg-[#8B0000] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-black transition-all">
          99 885 883
        </a>
      </div>
    </header>
  );
}