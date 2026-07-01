"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [activeSection, setActiveSection] = useState("beranda");

  // Logika Pelacak Scroll (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      // Mengambil semua elemen <section> yang memiliki atribut 'id'
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "beranda"; // Nilai bawaan jika di paling atas

      // Cek apakah layar sedang di-scroll
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        
        // Angka 200 adalah jarak offset. Jika layar mengenai 200px sebelum bagian atas section, navbar akan berganti
        if (window.scrollY >= sectionTop - 200) {
          currentSection = section.getAttribute("id") || "beranda";
        }
      });

      setActiveSection(currentSection);
    };

    // Mendaftarkan event pendeteksi scroll
    window.addEventListener("scroll", handleScroll);
    
    // Panggil sekali saat halaman pertama kali dimuat
    handleScroll();

    // Membersihkan event saat komponen ditutup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-4 px-8 bg-[#15151e] border-b-2 border-black transition-all shadow-[0_4px_0_#000]">
      <div className="text-xl font-bold tracking-tighter text-[#FFD700] leading-none">
        PORT<br/>FOLIO.
      </div>
      
      <div className="hidden md:flex items-center space-x-6 font-bold text-xs uppercase tracking-wide">
        
        {/* Tautan Beranda */}
        <Link 
          href="#beranda" 
          className={`${activeSection === 'beranda' ? 'text-[#FFD700]' : 'text-white'} hover:text-[#FFD700] transition-colors`}
        >
          {lang === 'id' ? 'Beranda' : 'Home'}
        </Link>
        
        {/* Tautan Prestasi */}
        <Link 
          href="#prestasi" 
          className={`${activeSection === 'prestasi' ? 'text-[#FFD700]' : 'text-white'} hover:text-[#FFD700] transition-colors`}
        >
          {lang === 'id' ? 'Prestasi' : 'Achievements'}
        </Link>
        
        {/* Tautan Proyek */}
        <Link 
          href="#proyek" 
          className={`${activeSection === 'proyek' ? 'text-[#FFD700]' : 'text-white'} hover:text-[#FFD700] transition-colors`}
        >
          {lang === 'id' ? 'Proyek' : 'Projects'}
        </Link>
        
        {/* Tombol Toggle Bahasa */}
        <button 
          onClick={toggleLang}
          className="bg-white text-black px-2 py-1 font-bold border-2 border-black text-[10px] hover:bg-[#FFD700] transition-all ml-2"
        >
          {lang === 'id' ? 'ID ⇄ EN' : 'EN ⇄ ID'}
        </button>
        
      </div>
    </nav>
  );
}