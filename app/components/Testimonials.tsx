"use client";
import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Amira Ben Salah",
      role: "Medical Student",
      cert: "OSD B2",
      text: "I obtained my OSD B2 after eight months of work with IPFC. The rigor allowed me to pursue medicine in Vienna."
    },
    {
      name: "Mohamed Trabelsi",
      role: "Engineer",
      cert: "TOEFL iBT",
      text: "Score TOEFL 103. The preparation was surgical; every section was worked on without compromise."
    },
    {
      name: "Fatma Gharbi",
      role: "English Teacher",
      cert: "IELTS 7.5",
      text: "The teachers dont just teach, they listen. You leave the classes with a genuine desire to go further."
    },
    {
      name: "Ahmed Kassab",
      role: "Mechanical Eng",
      cert: "TestDaF",
      text: "Serious atmosphere but never heavy. The small groups change everything; we dare to speak."
    },
    {
      name: "Sana Mejri",
      role: "Sales Manager",
      cert: "TOEIC 890",
      text: "The TOEIC obtained at IPFC opened the doors to an international position. Direct and effective training."
    },
    {
      name: "Youssef Ben Ali",
      role: "Business Student",
      cert: "CILS B1",
      text: "I learned Italian through passion, but with a method. Result: CILS B1 in one year."
    }
  ];

  return (
    <section className="py-24 bg-[#FCFAf7]" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-[1000] text-slate-950 uppercase italic tracking-tighter leading-none">
            SUCCESS <span className="text-[#580303] not-italic">STORIES</span>
          </h2>
          <div className="h-2 w-32 bg-[#580303] mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div key={index} className="p-10 bg-white border-2 border-slate-100 rounded-[30px] hover:border-[#580303] transition-all duration-300">
              <span className="inline-block mb-6 text-[10px] font-black text-[#580303] tracking-widest uppercase bg-red-50 px-3 py-1 rounded">
                {item.cert}
              </span>
              
              <p className="text-slate-950 font-[800] italic text-lg leading-relaxed mb-8">
                &quot;{item.text}&quot;
              </p>
              
              <div className="pt-6 border-t border-slate-50">
                <h4 className="font-[1000] text-slate-950 uppercase text-sm">{item.name}</h4>
                <p className="text-[11px] text-[#580303] font-bold mt-1 uppercase italic tracking-tighter">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}