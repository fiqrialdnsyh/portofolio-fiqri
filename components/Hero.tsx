"use client";
import { useState, useEffect, MouseEvent } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();

  // Teks berdasarkan bahasa
  const textId = "Memadukan keahlian pengembangan perangkat lunak (Full-Stack & UI/UX) dengan rekam jejak kepemimpinan operasional dari nol hingga level provinsi.";
  const textEn = "Combining software development expertise (Full-Stack & UI/UX) with a proven track record of operational leadership from the ground up to the provincial level.";
  const fullText = lang === 'id' ? textId : textEn;

  const [displayedText, setDisplayedText] = useState("");

  // Efek mengetik yang merespons perubahan bahasa
  useEffect(() => {
    let index = 0;
    setDisplayedText(""); 
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 40);
    
    return () => clearInterval(timer);
  }, [lang, fullText]);

  // Logika Cahaya Senter
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative pt-12 pb-32 px-6 min-h-[85vh] flex items-center border-b-2 border-black overflow-hidden">
      <div className="absolute inset-0 bg-grid z-0 opacity-50"></div>
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
        
        {/* KOLOM KIRI */}
        <div className="flex-1">
          <h1 className="text-7xl md:text-8xl font-black text-[#FFD700] leading-none mb-4 uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            FIQRI<br/>ALDIANSYAH
          </h1>
          <h2 className="text-xl md:text-3xl font-bold bg-white text-black inline-block px-4 py-2 mb-6 neo-border uppercase">
            Full-Stack Developer & UI/UX Designer
          </h2>
          
          <div className="flex gap-4 mb-8">
            <a href="https://www.instagram.com/fqr.aldnsyh_/" target="_blank" rel="noreferrer" className="bg-[#F4F1E1] text-black w-12 h-12 flex items-center justify-center neo-border neo-shadow hover:bg-[#FFD700] hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/in/fiqri-aldiansyah-245101294/" target="_blank" rel="noreferrer" className="bg-[#F4F1E1] text-black w-12 h-12 flex items-center justify-center neo-border neo-shadow hover:bg-[#FFD700] hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/fiqrialdnsyh" target="_blank" rel="noreferrer" className="bg-[#F4F1E1] text-black w-12 h-12 flex items-center justify-center neo-border neo-shadow hover:bg-[#FFD700] hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>

          <p className="text-lg max-w-xl text-gray-300 mb-10 leading-relaxed font-medium min-h-[90px] md:min-h-[120px]">
            {displayedText}
            <span className="animate-pulse font-bold text-[#FFD700]">|</span>
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#FFD700] text-black px-8 py-4 font-bold text-lg neo-border neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
              {lang === 'id' ? 'Lihat Proyek' : 'View Projects'}
            </button>
            <a 
              href="mailto:aldiansyahfiqri1@gmail.com"
              className="bg-white text-black px-8 py-4 font-bold text-lg neo-border neo-shadow hover:bg-[#F4F1E1] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center justify-center"
            >
                {lang === 'id' ? 'Hubungi Saya' : 'Contact Us'}
            </a>
          </div>
        </div>

        {/* KOLOM KANAN */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative group w-72 h-80 md:w-80 md:h-[420px] cursor-pointer">
            <div className="absolute inset-0 bg-[#FFD700] neo-border translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-300 ease-out"></div>
            <div 
              className="absolute inset-0 bg-[#15151e] neo-border overflow-hidden z-10 flex items-center justify-center"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img src="/foto-profil.jpg" alt="Foto Profil" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none z-10 transition-opacity duration-300"></div>
              <div 
                className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
                style={{
                  opacity: isHovered ? 1 : 0,
                  background: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.25), transparent 80%)`
                }}
              ></div>
              <div className="absolute bottom-6 right-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-30">
                <div className="bg-[#FFD700] text-black rounded-full p-4 shadow-[0_8px_16px_rgba(0,0,0,0.6)] hover:scale-110 hover:bg-white transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}