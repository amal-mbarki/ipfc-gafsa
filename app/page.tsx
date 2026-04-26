import React from 'react';
import Header from './components/Header';
import AccreditationBar from './components/AccreditationBar';
import Languages from './components/Languages'; 
import Methodology from './components/Methodology';
import FeaturesPrestige from './components/FeaturesPrestige';
import Testimonials from './components/Testimonials';
import InteractiveGallery from './components/InteractiveGallery';
import FreeTest from './components/FreeTest';  
import RegisterForm from './components/RegisterForm';
import BusinessHours from './components/BusinessHours';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white antialiased selection:bg-[#580303] selection:text-white"> 
      
      {/* 1. Header & Navigation */}
      <Header />
      
      {/* 2. Hero Section */}
      <section className="relative pt-56 pb-32 bg-white text-center px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#580303,transparent_70%)] opacity-[0.03]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="text-slate-400 font-black tracking-[0.4em] text-[10px] uppercase mb-10 block">
            IPFC Gafsa Premium Expertise
          </span>
          
          <h1 className="text-6xl md:text-[95px] font-[900] text-slate-950 mb-10 leading-[0.9] tracking-tighter">
            Your Future Begins <br/> 
            <span className="text-[#580303] italic uppercase">With a Global Degree</span>
          </h1>
          
          <div className="flex justify-center items-center gap-10">
             <a 
               href="#register" 
               className="bg-[#580303] text-white px-16 py-6 rounded-2xl font-black text-xl shadow-2xl hover:bg-black hover:-translate-y-1 transition-all duration-500"
             >
               Enroll Now
             </a>
          </div>
        </div>
      </section>

      <AccreditationBar />

      {/* 4. Statistics Section */}
      <section className="bg-slate-50/30 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Accreditations</p>
            <p className="text-7xl font-[900] italic tracking-tighter text-slate-950">13<span className="text-slate-200">+</span></p>
          </div>
          <div className="space-y-2 md:border-x border-slate-100 px-4">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Languages</p>
            <p className="text-7xl font-[900] italic tracking-tighter text-slate-950">04</p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Alumni</p>
            <p className="text-7xl font-[900] italic tracking-tighter text-slate-950">1k<span className="text-slate-200">+</span></p>
          </div>
        </div>
      </section>

      {/* 5. Sections with IDs */}
      <div id="courses">
        <Languages />
      </div>

      <Methodology /> 
      
      <div id="features">
        <FeaturesPrestige />
      </div>

      <Testimonials /> 

      <div id="gallery">
        <InteractiveGallery /> 
      </div>
      
      <FreeTest /> 
      
      <div id="register" className="pt-20">
        <RegisterForm />
      </div>
      
      <div id="hours">
        <BusinessHours /> 
      </div>
      
      <Footer />
    </main>
  );
}