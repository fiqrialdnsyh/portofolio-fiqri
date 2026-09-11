"use client";
import { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const achievementCategories = [
  {
    id: "akademik",
    number: "01",
    title: { id: "Fondasi & Akademik", en: "Foundation & Academics" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
    ),
    items: [
      {
        title: { id: "Lulusan Terbaik", en: "Best Graduate" },
        subtitle: { id: "SMK AL-HIKMAH KALIREJO Tahun 2022.", en: "SMK Al-Hikmah Kalirejo, 2022." },
        detail: { 
          id: "Meraih predikat lulusan terbaik tingkat sekolah dengan pencapaian nilai akademik tertinggi pada angkatan 2022.", 
          en: "Achieved the best graduate predicate at the school level with the highest academic grades in the class of 2022." 
        },
        hasCert: true,
        certLabel: "Sertifikat",
        certUrl: "/sertifikat-lulusan-terbaik.pdf", 
        hasPhoto: false,
      },
      {
        title: { id: "Juara 1 Desain Poster", en: "1st Place Poster Design" },
        subtitle: { id: "Lomba Tingkat Universitas (LKA Unila 2021).", en: "University Level Competition (LKA Unila 2021)." },
        detail: { 
          id: "Meraih juara pertama dalam kompetisi desain poster tingkat universitas yang diselenggarakan oleh LKA Universitas Lampung.", 
          en: "Won first place in the university-level poster design competition organized by LKA Universitas Lampung." 
        },
        hasCert: true,
        certLabel: "Sertifikat",
        certUrl: "/sertifikat-poster.pdf",
        hasPhoto: false,
      },
      {
        title: { id: "Skor TOEFL ITP 540", en: "TOEFL ITP Score 540" },
        subtitle: { id: "ITERA English Proficiency Test (InciTe), 2026.", en: "ITERA English Proficiency Test (InciTe), 2026." },
        detail: { 
          id: "Mencapai skor 540 pada pengujian kemampuan bahasa Inggris TOEFL ITP yang diselenggarakan oleh UPT Bahasa ITERA.", 
          en: "Achieved a score of 540 on the TOEFL ITP English proficiency test organized by UPT Bahasa ITERA." 
        },
        hasCert: true,
        certLabel: "Sertifikat",
        certUrl: "/INCITE.pdf",
        hasPhoto: false,
      }
    ]
  },
  {
    id: "kepemimpinan",
    number: "02",
    title: { id: "Kepemimpinan & Organisasi", en: "Leadership & Organization" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ),
    items: [
      {
        title: { id: "Humas FOPI Provinsi Lampung", en: "Public Relations, FOPI Lampung" },
        subtitle: { id: "Mengelola komunikasi strategis dan informasi federasi (Hingga 2027).", en: "Managing strategic communication and federation information (Until 2027)." },
        detail: { 
          id: "Bertanggung jawab atas komunikasi publik, penyebaran informasi, dan relasi media untuk Federasi Olahraga Petanque Indonesia (FOPI) Provinsi Lampung.", 
          en: "Responsible for public communication, information dissemination, and media relations for the Indonesian Petanque Sports Federation (FOPI) Lampung Province." 
        },
        hasCert: true,
        certLabel: "SK Pengurus",
        certUrl: "/SKFOPI.pdf",
        hasPhoto: false,
      },
      {
        title: { id: "Founder & Ketua Umum", en: "Founder & President" },
        subtitle: { id: "UKM Petanque tingkat institusi (2023-2025).", en: "Institutional Petanque Club (2023-2025)." },
        detail: { 
          id: "Mendirikan dan memimpin Unit Kegiatan Mahasiswa (UKM) Petanque di ITERA, membangun fondasi organisasi, dan merintis program pembinaan atlet mahasiswa.", 
          en: "Founded and led the Petanque Student Activity Unit at ITERA, building the organizational foundation and pioneering student athlete development programs." 
        },
        hasCert: true,
        certLabel: "SK Organisasi",
        certUrl: "/SKPETANQUE.pdf",
        hasPhoto: false,
      },
      {
        title: { id: "Ketua Pelaksana Teknis", en: "Technical Committee Chair" },
        subtitle: { id: "Itera Olympic Cabor Petanque, antar-fakultas (2024).", en: "Itera Olympic Petanque, inter-faculty (2024)." },
        detail: { 
          id: "Memimpin pelaksanaan teknis dan operasional pertandingan cabang olahraga Petanque pada ajang Itera Olympic tingkat fakultas tahun 2024.", 
          en: "Led the technical and operational execution of the Petanque sports matches at the 2024 inter-faculty Itera Olympic event." 
        },
      },
      {
        title: { id: "Pengalaman Manajerial", en: "Managerial Experience" },
        subtitle: { id: "Ketua OSIS SMK & Wakil Ketua OSIS SMP.", en: "President of High School Student Council." },
        detail: { 
          id: "Memiliki rekam jejak kepemimpinan sejak masa sekolah sebagai Ketua OSIS di tingkat SMK dan Wakil Ketua OSIS di tingkat SMP, mengelola berbagai program kesiswaan.", 
          en: "Has a track record of leadership since school days as President of the Student Council at the Vocational High School level and Vice President at the Junior High School level." 
        },
        hasCert: false,
        hasPhoto: false,
      }
    ]
  },
  {
    id: "daerah",
    number: "03",
    title: { id: "Prestasi Daerah", en: "Regional Achievements" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    ),
    items: [
      {
        title: { id: "Juara 1 Single Man", en: "1st Place Single Man" },
        subtitle: { id: "Kejurda Petanque Provinsi Lampung 2025.", en: "Provincial Petanque Championship 2025." },
        detail: { 
          id: "Meraih medali emas pada kategori Single Man di Kejuaraan Daerah Petanque Provinsi Lampung tahun 2025.", 
          en: "Won the gold medal in the Single Man category at the 2025 Lampung Province Petanque Championship." 
        },
        hasCert: true,
        certLabel: "Sertifikat",
        certUrl: "/juara1.pdf",
        hasPhoto: true,
        photoUrl: "/foto.jpg",
      },
      {
        title: { id: "Juara 2 Triple Mix", en: "2nd Place Triple Mix" },
        subtitle: { id: "POMPROV Lampung 2025.", en: "Provincial Student Sports Week 2025." },
        detail: { 
          id: "Meraih medali perak pada kategori Triple Mix mewakili ITERA dalam ajang Pekan Olahraga Mahasiswa Provinsi (POMPROV) Lampung 2025.", 
          en: "Won the silver medal in the Triple Mix category representing ITERA at the 2025 Lampung Provincial Student Sports Week (POMPROV)." 
        },
        hasCert: true,
        certLabel: "Sertifikat",
        certUrl: "/fiqri-triple.jpeg",
        hasPhoto: true,
        photoUrl: "/pomprov.JPG",
      },
      {
        title: { id: "Juara 3 Shooting Man", en: "3rd Place Shooting Man" },
        subtitle: { id: "Kejurda Petanque Provinsi Lampung 2025.", en: "Provincial Petanque Championship 2025." },
        detail: { 
          id: "Meraih medali perunggu pada kategori Shooting Man di Kejuaraan Daerah Petanque Provinsi Lampung tahun 2025.", 
          en: "Won the bronze medal in the Shooting Man category at the 2025 Lampung Province Petanque Championship." 
        },
        hasCert: true,
        certLabel: "Sertifikat",
        certUrl: "/juara3s.pdf",
        hasPhoto: true,
        photoUrl: "/foto.jpg",
      }
    ]
  },
  {
    id: "nasional",
    number: "04",
    title: { id: "Skala Nasional", en: "National Scale" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    ),
    items: [
      {
        title: { id: "Ketua Pelaksana Teknis", en: "Committee Chair" },
        subtitle: { id: "Kumabat Cup Petanque Open (Dies Natalis ke-11 ITERA), turnamen berskala nasional 2025.", en: "Kumabat Cup Petanque Open (ITERA 11th Anniversary), national-scale tournament 2025." },
        detail: { 
          id: "Menjadi Ketua Pelaksana Teknis dalam mengelola jalannya turnamen Petanque berskala nasional (Kumabat Cup Open) dalam rangka Dies Natalis ke-11 ITERA.", 
          en: "Served as the Technical Organizing Chair managing the national-scale Petanque tournament (Kumabat Cup Open) for ITERA's 11th Anniversary." 
        },
        hasCert: false,
        hasPhoto: true,
        photoUrl: "/kumabat.jpg",
      },
      {
        title: { id: "Finalis BK PON 2023", en: "Finalist BK PON 2023" },
        subtitle: { id: "Babak Kualifikasi Pekan Olahraga Nasional (PON) Cabang Petanque.", en: "National Sports Week (PON) Qualification Round." },
        detail: { 
          id: "Berkompetisi hingga babak finalis pada Babak Kualifikasi Pekan Olahraga Nasional (BK PON) tahun 2023 mewakili provinsi untuk cabang olahraga Petanque.", 
          en: "Competed up to the finalist round in the 2023 National Sports Week Qualification Round (BK PON) representing the province for Petanque." 
        },
        hasCert: true,
        certLabel: "Sertifikat",
        certUrl: "/FIQRIBKPON.pdf",
        hasPhoto: true,
        photoUrl: "/bkpon.jpg",
      },
      {
        title: { id: "Juara 1 Double Man", en: "1st Place Double Man" },
        subtitle: { id: "Exhibition Antar Universitas se-Provinsi Lampung.", en: "Inter-University Exhibition." },
        detail: { 
          id: "Meraih juara pertama pada kategori Double Man dalam ajang pertandingan eksibisi Petanque antar universitas se-Provinsi Lampung.", 
          en: "Won first place in the Double Man category in the inter-university Petanque exhibition match across Lampung Province." 
        },
        hasCert: true,
        certLabel: "Sertifikat",
        certUrl: "/unila2023.pdf",
        hasPhoto: true,
        photoUrl: "/juara1u.png",
      },
      {
        title: { id: "Panitia Seleksi Atlet", en: "Athlete Selection Committee" },
        subtitle: { id: "Pra-PON Triathlon 2023, FTI Provinsi Lampung.", en: "Pra-PON Triathlon 2023, FTI Lampung." },
        detail: { 
          id: "Terlibat aktif sebagai panitia seleksi teknis untuk menyaring atlet Triathlon perwakilan Provinsi Lampung menuju Pra-PON 2023.", 
          en: "Actively involved as a technical selection committee member to screen Triathlon athletes representing Lampung Province for the 2023 Pre-PON." 
        },
      }
    ]
  }
];

export default function Achievements() {
  const { lang } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedItem]);

  const closeModal = () => setSelectedItem(null);

  return (
    <section id="prestasi" className="py-24 bg-[#FFD700] border-b-4 border-black px-6 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="bg-[#15151e] text-white text-center py-5 mb-16 neo-border max-w-2xl mx-auto shadow-[8px_8px_0px_#000000]">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-[#FFD700]">
              {lang === 'id' ? 'Riwayat & Prestasi' : 'History & Achievements'}
            </h2>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementCategories.map((category, index) => (
            <FadeIn key={category.id} delay={(index + 1) * 100}>
              <div className="bg-[#F4F1E1] text-black p-6 neo-border neo-shadow flex flex-col h-full group hover:bg-white transition-colors duration-300">
                <div className="w-full bg-[#15151e] text-[#FFD700] py-4 flex justify-center neo-border mb-4 shadow-[4px_4px_0px_#000000]">
                  {category.icon}
                </div>
                <span className="text-4xl font-black text-black/20 group-hover:text-[#15151e] transition-colors mb-1">{category.number}</span>
                <h4 className="font-black text-xl mb-4 uppercase leading-tight border-b-4 border-black pb-2">
                  {lang === 'id' ? category.title.id : category.title.en}
                </h4>
                <ul className="text-xs flex flex-col list-none font-bold text-gray-800 flex-1">
                  {category.items.map((item, i) => (
                    <li 
                      key={i} 
                      onClick={() => setSelectedItem(item)}
                      className="flex items-start gap-2 border-b-2 border-black/10 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0 cursor-pointer hover:bg-[#FFD700]/30 rounded p-2 -ml-2 transition-all hover:translate-x-1"
                    >
                      <span className="text-black mt-0.5">✦</span>
                      <div className="flex flex-col gap-1">
                        <strong className="text-black text-[13px] leading-tight hover:underline decoration-2 underline-offset-2">
                          {lang === 'id' ? item.title.id : item.title.en}
                        </strong>
                        <span className="font-medium leading-snug">
                          {lang === 'id' ? item.subtitle.id : item.subtitle.en}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* MODAL POP-UP NEO-BRUTALISM */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative w-full max-w-3xl max-h-[95vh] flex flex-col bg-[#F4F1E1] border-4 border-black shadow-[12px_12px_0px_#000000] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Window Header Bar */}
            <div className="bg-black text-white px-4 py-3 flex justify-between items-center border-b-4 border-black shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
              </div>
              <span className="font-bold tracking-widest uppercase text-xs text-[#FFD700]">
                {lang === 'id' ? 'Detail Informasi' : 'Information Detail'}
              </span>
              <button 
                onClick={closeModal}
                className="font-black text-white hover:text-red-500 transition-colors"
                aria-label="Close"
              >
                [ X ]
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 md:p-10">
              
              <div className="mb-8 border-b-4 border-black pb-6">
                <h3 className="text-3xl md:text-5xl font-black uppercase text-black leading-none mb-4">
                  {lang === 'id' ? selectedItem.title.id : selectedItem.title.en}
                </h3>
                <div className="inline-block bg-[#FFD700] border-2 border-black px-3 py-1 font-bold text-sm uppercase">
                  {lang === 'id' ? selectedItem.subtitle.id : selectedItem.subtitle.en}
                </div>
              </div>

              {/* Foto Dokumentasi dengan efek rotasi brutalist */}
              {selectedItem.hasPhoto && (
                <div className="mb-8">
                  <div className="w-full bg-white border-4 border-black p-2 md:p-4 shadow-[8px_8px_0px_#000000] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src={selectedItem.photoUrl} 
                      alt={lang === 'id' ? 'Dokumentasi' : 'Documentation'} 
                      className="w-full h-auto max-h-[400px] object-cover border-2 border-black" 
                    />
                  </div>
                </div>
              )}

              {/* Box Deskripsi */}
              <div className="mb-8 bg-white border-4 border-black p-5 md:p-7 shadow-[6px_6px_0px_#000000]">
                <h4 className="font-black text-xl mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#FFD700] border-2 border-black inline-block"></span>
                  {lang === 'id' ? 'Deskripsi' : 'Description'}
                </h4>
                <p className="text-gray-800 font-medium leading-relaxed text-base md:text-lg">
                  {lang === 'id' ? selectedItem.detail.id : selectedItem.detail.en}
                </p>
              </div>

              {/* Tombol Aksi */}
              <div className="flex flex-wrap gap-4 pt-2">
                {selectedItem.hasCert && (
                  <a 
                    href={selectedItem.certUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#FFD700] text-black px-6 py-4 font-black uppercase text-sm border-4 border-black shadow-[6px_6px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all focus:outline-none"
                  >
                    {lang === 'id' ? `Lihat ${selectedItem.certLabel}` : `View ${selectedItem.certLabel}`}
                  </a>
                )}
                {/* Tombol sekunder jika pengguna ingin menutup modal dari bawah */}
                <button 
                  onClick={closeModal}
                  className="flex-none bg-black text-white px-8 py-4 font-black uppercase text-sm border-4 border-black shadow-[6px_6px_0px_#FFD700] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all focus:outline-none"
                >
                  {lang === 'id' ? 'Tutup' : 'Close'}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}