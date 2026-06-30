"use client";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function Achievements() {
  const { lang } = useLanguage();

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
          
          {/* CARD 1: AKADEMIK */}
          <FadeIn delay={100}>
            <div className="bg-[#F4F1E1] text-black p-6 neo-border neo-shadow flex flex-col h-full group hover:bg-white transition-colors duration-300">
              <div className="w-full bg-[#15151e] text-[#FFD700] py-4 flex justify-center neo-border mb-4 shadow-[4px_4px_0px_#000000]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
              </div>
              <span className="text-4xl font-black text-black/20 group-hover:text-[#15151e] transition-colors mb-1">01</span>
              <h4 className="font-black text-xl mb-4 uppercase leading-tight border-b-4 border-black pb-2">
                {lang === 'id' ? 'Fondasi & Akademik' : 'Foundation & Academics'}
              </h4>
              <ul className="text-xs flex flex-col list-none font-bold text-gray-800 flex-1">
                <li className="flex items-start gap-2 border-b-2 border-black/10 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                  <span className="text-black mt-0.5">✦</span>
                  <div className="flex flex-col gap-1">
                    <strong className="text-black text-[13px] leading-tight">
                      {lang === 'id' ? 'Lulusan Terbaik' : 'Best Graduate'}
                    </strong>
                    <span className="font-medium leading-snug">
                      {lang === 'id' ? 'SMK AL-HIKMAH KALIREJO Tahun 2022.' : 'SMK Al-Hikmah Kalirejo, 2022.'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2 border-b-2 border-black/10 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                  <span className="text-black mt-0.5">✦</span>
                  <div className="flex flex-col gap-1">
                    <strong className="text-black text-[13px] leading-tight">
                      {lang === 'id' ? 'Juara 1 Desain Poster' : '1st Place Poster Design'}
                    </strong>
                    <span className="font-medium leading-snug">
                      {lang === 'id' ? 'Lomba Tingkat Universitas (LKA Unila 2021).' : 'University Level Competition (LKA Unila 2021).'}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* CARD 2: KEPEMIMPINAN */}
          <FadeIn delay={200}>
            <div className="bg-[#F4F1E1] text-black p-6 neo-border neo-shadow flex flex-col h-full group hover:bg-white transition-colors duration-300">
              <div className="w-full bg-[#15151e] text-[#FFD700] py-4 flex justify-center neo-border mb-4 shadow-[4px_4px_0px_#000000]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <span className="text-4xl font-black text-black/20 group-hover:text-[#15151e] transition-colors mb-1">02</span>
              <h4 className="font-black text-xl mb-4 uppercase leading-tight border-b-4 border-black pb-2">
                {lang === 'id' ? 'Kepemimpinan & Organisasi' : 'Leadership & Organization'}
              </h4>
              <ul className="text-xs flex flex-col list-none font-bold text-gray-800 flex-1">
                <li className="flex items-start gap-2 border-b-2 border-black/10 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                  <span className="text-black mt-0.5">✦</span>
                  <div className="flex flex-col gap-1">
                    <strong className="text-black text-[13px] leading-tight">
                      {lang === 'id' ? 'Humas FOPI Provinsi Lampung' : 'Public Relations, FOPI Lampung'}
                    </strong>
                    <span className="font-medium leading-snug">
                      {lang === 'id' ? 'Mengelola komunikasi strategis dan informasi federasi (Hingga 2027).' : 'Managing strategic communication and federation information (Until 2027).'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2 border-b-2 border-black/10 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                  <span className="text-black mt-0.5">✦</span>
                  <div className="flex flex-col gap-1">
                    <strong className="text-black text-[13px] leading-tight">
                      {lang === 'id' ? 'Founder & Ketua Umum' : 'Founder & President'}
                    </strong>
                    <span className="font-medium leading-snug">
                      {lang === 'id' ? 'UKM Petanque tingkat institusi (2023-2025).' : 'Institutional Petanque Club (2023-2025).'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2 border-b-2 border-black/10 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                  <span className="text-black mt-0.5">✦</span>
                  <div className="flex flex-col gap-1">
                    <strong className="text-black text-[13px] leading-tight">
                      {lang === 'id' ? 'Pengalaman Manajerial' : 'Managerial Experience'}
                    </strong>
                    <span className="font-medium leading-snug">
                      {lang === 'id' ? 'Ketua OSIS SMK & Wakil Ketua OSIS SMP.' : 'President of High School Student Council.'}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* CARD 3: KEJUARAAN DAERAH */}
          <FadeIn delay={300}>
            <div className="bg-[#F4F1E1] text-black p-6 neo-border neo-shadow flex flex-col h-full group hover:bg-white transition-colors duration-300">
              <div className="w-full bg-[#15151e] text-[#FFD700] py-4 flex justify-center neo-border mb-4 shadow-[4px_4px_0px_#000000]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <span className="text-4xl font-black text-black/20 group-hover:text-[#15151e] transition-colors mb-1">03</span>
              <h4 className="font-black text-xl mb-4 uppercase leading-tight border-b-4 border-black pb-2">
                {lang === 'id' ? 'Prestasi Daerah' : 'Regional Achievements'}
              </h4>
              <ul className="text-xs flex flex-col list-none font-bold text-gray-800 flex-1">
                <li className="flex items-start gap-2 border-b-2 border-black/10 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                  <span className="text-black mt-0.5">✦</span>
                  <div className="flex flex-col gap-1">
                    <strong className="text-black text-[13px] leading-tight">
                      {lang === 'id' ? 'Juara 1 Single Man' : '1st Place Single Man'}
                    </strong>
                    <span className="font-medium leading-snug">
                      {lang === 'id' ? 'Kejurda Petanque Provinsi Lampung 2025.' : 'Provincial Petanque Championship 2025.'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2 border-b-2 border-black/10 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                  <span className="text-black mt-0.5">✦</span>
                  <div className="flex flex-col gap-1">
                    <strong className="text-black text-[13px] leading-tight">
                      {lang === 'id' ? 'Juara 2 Triple Mix' : '2nd Place Triple Mix'}
                    </strong>
                    <span className="font-medium leading-snug">
                      {lang === 'id' ? 'POMPROV Lampung 2025.' : 'Provincial Student Sports Week 2025.'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2 border-b-2 border-black/10 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                  <span className="text-black mt-0.5">✦</span>
                  <div className="flex flex-col gap-1">
                    <strong className="text-black text-[13px] leading-tight">
                      {lang === 'id' ? 'Juara 3 Shooting Man' : '3rd Place Shooting Man'}
                    </strong>
                    <span className="font-medium leading-snug">
                      {lang === 'id' ? 'Kejurda Petanque Provinsi Lampung 2025.' : 'Provincial Petanque Championship 2025.'}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* CARD 4: PRESTASI NASIONAL */}
          <FadeIn delay={400}>
            <div className="bg-[#F4F1E1] text-black p-6 neo-border neo-shadow flex flex-col h-full group hover:bg-white transition-colors duration-300">
              <div className="w-full bg-[#15151e] text-[#FFD700] py-4 flex justify-center neo-border mb-4 shadow-[4px_4px_0px_#000000]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <span className="text-4xl font-black text-black/20 group-hover:text-[#15151e] transition-colors mb-1">04</span>
              <h4 className="font-black text-xl mb-4 uppercase leading-tight border-b-4 border-black pb-2">
                {lang === 'id' ? 'Skala Nasional' : 'National Scale'}
              </h4>
              <ul className="text-xs flex flex-col list-none font-bold text-gray-800 flex-1">
                <li className="flex items-start gap-2 border-b-2 border-black/10 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                  <span className="text-black mt-0.5">✦</span>
                  <div className="flex flex-col gap-1">
                    <strong className="text-black text-[13px] leading-tight">
                      {lang === 'id' ? 'Finalis BK PON 2023' : 'Finalist BK PON 2023'}
                    </strong>
                    <span className="font-medium leading-snug">
                      {lang === 'id' ? 'Babak Kualifikasi Pekan Olahraga Nasional (PON) Cabang Petanque.' : 'National Sports Week (PON) Qualification Round.'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2 border-b-2 border-black/10 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                  <span className="text-black mt-0.5">✦</span>
                  <div className="flex flex-col gap-1">
                    <strong className="text-black text-[13px] leading-tight">
                      {lang === 'id' ? 'Juara 1 Double Man' : '1st Place Double Man'}
                    </strong>
                    <span className="font-medium leading-snug">
                      {lang === 'id' ? 'Exhibition Antar Universitas se-Provinsi Lampung.' : 'Inter-University Exhibition.'}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}