import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="relative z-10">
        <div className="mb-12 flex justify-center">
          <Image 
            src="/logo.png" 
            alt="IPFC Gafsa" 
            width={80} 
            height={80} 
            className="object-contain opacity-20"
          />
        </div>
        <h1 className="text-[100px] font-black text-[#8B0000] leading-none opacity-10">404</h1>
        <div className="mt-[-20px]">
          <h2 className="text-2xl font-black text-gray-950 mb-4 uppercase italic">Page Not Found</h2>
          <Link 
            href="/"
            className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-xl font-black hover:bg-black transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}