import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo Section - Optimized with Priority */}
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="IPFC Gafsa" 
            width={50} 
            height={50} 
            className="object-contain hover:scale-105 transition-transform"
            priority // ضمان تحميل اللوجو أول شيء لتحسين الأداء
          />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black text-[#8B0000] tracking-tighter">IPFC</span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">Gafsa Center</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.15em] text-gray-500">
          <a href="#" className="hover:text-[#8B0000] transition-all relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B0000] transition-all group-hover:w-full"></span>
          </a>
          <a href="#courses" className="hover:text-[#8B0000] transition-all relative group">
            A1 - B2 Courses
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B0000] transition-all group-hover:w-full"></span>
          </a>
          <a href="#register" className="text-[#8B0000] font-black hover:scale-105 transition-transform">
            Register Now
          </a>
        </nav>

        {/* Contact Actions */}
        <div className="flex items-center gap-4">
          {/* WhatsApp Icon for Quick Global Support */}
          <a 
            href="https://wa.me/21626260095" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block text-2xl hover:scale-110 transition-transform filter drop-shadow-sm"
            aria-label="Contact on WhatsApp"
          >
            💬
          </a>
          
          {/* Direct Call Button */}
          <a 
            href="tel:+21699885883" 
            className="bg-[#8B0000] text-white px-5 py-2 rounded-full font-black text-[12px] tracking-wider hover:bg-black transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            +216 99 885 883
          </a>
        </div>
      </div>
    </header>
  );
}