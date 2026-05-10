"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#580303] rounded-[40px] md:rounded-[60px] p-10 md:p-28 text-center text-white shadow-[0_50px_100px_-20px_rgba(88,3,3,0.3)] relative overflow-hidden"
        >
          {/* لمسة فنية في الخلفية */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>

          <div className="relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-white/60 font-[1000] text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-6 md:mb-8 block"
            >
              Get Exclusive Updates
            </motion.span>
            
            <h2 className="text-4xl md:text-7xl font-[1000] mb-6 md:mb-10 tracking-[-0.02em] md:tracking-[-0.05em] leading-[1] md:leading-[0.9] uppercase italic">
              Stay <br className="md:hidden" /> <span className="text-white/30">Connected.</span>
            </h2>
            
            <p className="text-white/80 mb-10 md:mb-14 max-w-xl mx-auto text-[11px] md:text-base font-bold uppercase tracking-wide leading-relaxed px-4">
              Subscribe to receive the latest exam dates, course openings, and exclusive offers from IPFC Gafsa.
            </p>

            <form 
              className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-2xl mx-auto bg-white/5 md:bg-white/5 p-2 md:p-3 rounded-[30px] md:rounded-[35px] border border-white/10 backdrop-blur-md" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input 
                type="email" 
                placeholder="ENTER YOUR EMAIL" 
                className="flex-1 px-6 md:px-10 py-5 md:py-6 rounded-[22px] md:rounded-[28px] bg-white/10 md:bg-transparent outline-none text-white placeholder:text-white/30 font-black text-[10px] tracking-widest uppercase"
                required 
              />
              <button 
                type="submit" 
                className="group px-8 md:px-12 py-5 md:py-6 bg-white text-[#580303] font-[1000] rounded-[22px] md:rounded-[28px] text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-black hover:text-white flex items-center justify-center gap-3 shadow-xl active:scale-95"
              >
                Join Now
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            
            <p className="mt-8 text-white/40 text-[8px] md:text-[9px] font-black uppercase tracking-widest">
              No spam. Just elite opportunities for your future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}