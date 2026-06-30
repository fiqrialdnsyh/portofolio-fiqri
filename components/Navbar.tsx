"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  
  // Mengambil state bahasa dari Context
  const { lang, toggleLang } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-4 px-8 bg-[#15151e] border-b-2 border-black transition-all shadow-[0_4px_0_#000]">
      <div className="text-xl font-bold tracking-tighter text-[#FFD700] leading-none">
        FIQRI.
      </div>
      <div className="hidden md:flex items-center space-x-6 font-bold text-xs uppercase tracking-wide">
        <Link 
          href="/" 
          className={`${isActive('/') ? 'text-[#FFD700]' : 'text-white'} hover:text-[#FFD700] transition-colors`}
        >
          {lang === 'id' ? 'Beranda' : 'Home'}
        </Link>
        <Link 
          href="#prestasi" 
          className={`${isActive('/#prestasi') ? 'text-[#FFD700]' : 'text-white'} hover:text-[#FFD700] transition-colors`}
        >
          {lang === 'id' ? 'Prestasi' : 'Achievements'}
        </Link>
        <Link 
          href="#proyek" 
          className={`${isActive('/#proyek') ? 'text-[#FFD700]' : 'text-white'} hover:text-[#FFD700] transition-colors`}
        >
          {lang === 'id' ? 'Proyek' : 'Projects'}
        </Link>
        
        {/* Tombol Toggle Bahasa Aktif */}
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