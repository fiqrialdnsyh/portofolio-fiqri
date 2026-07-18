"use client";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#FFD700] border-b-4 border-black overflow-hidden relative">
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">

        {/* KOLOM KIRI: Lanyard / ID Card */}
        <div className="flex-1 flex justify-center w-full mt-[-100px] md:mt-[-120px]">
          <div className="animate-lanyard flex flex-col items-center drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <div className="w-8 h-40 bg-[#15151e] border-x-4 border-black relative">
              <div className="absolute inset-y-0 left-1/2 w-1 border-l-2 border-dashed border-[#FFD700] -translate-x-1/2"></div>
            </div>
            <div className="w-12 h-8 bg-gray-400 border-4 border-black -mt-2 rounded-full z-20 relative flex items-center justify-center">
              <div className="w-4 h-4 bg-[#15151e] rounded-full"></div>
            </div>
            <div className="w-4 h-6 bg-gray-300 border-x-4 border-b-4 border-black -mt-1 z-20"></div>

            <div className="w-72 bg-[#F4F1E1] border-4 border-black rounded-xl -mt-1 flex flex-col overflow-hidden relative z-10">
              <div className="w-full bg-gray-200 border-b-4 border-black py-3 flex justify-center">
                <div className="w-12 h-3 bg-[#15151e] rounded-full border-2 border-black"></div>
              </div>

              <div className="bg-[#15151e] text-white px-4 py-2 flex justify-between items-center border-b-4 border-black">
                <span className="font-black text-xs tracking-widest text-[#FFD700]">FIQRI ALDIANSYAH</span>
                <span className="text-[10px] font-mono bg-[#FFD700] text-black px-1.5 py-0.5 font-black rounded-sm">2026</span>
              </div>

              <div className="p-4 flex flex-col items-center">
                <div className="w-full h-56 border-4 border-black overflow-hidden bg-black relative neo-shadow">
                  <img src="/FIQRI.png" alt="FIQRI" className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-green-500 text-white border-2 border-black text-[10px] font-black px-2 py-0.5 uppercase tracking-wider">
                    Verified
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4 flex flex-col text-black">
                <div className="border-t-2 border-black pt-2 flex justify-between items-start">
                  <div>
                    <h4 className="font-black text-lg uppercase leading-tight tracking-tight">SOFTWARE ENG.</h4>
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">IF - ITERA ALUMNI</p>
                  </div>
                  <div className="bg-black text-[#FFD700] font-black text-[10px] px-2 py-1 uppercase tracking-tight border-2 border-black rotate-3">
                    GRADUATED
                  </div>
                </div>

                {/* ID stripe — pengganti visualizer audio, lebih nyambung ke tema kartu identitas */}
                <div className="mt-4 flex items-center justify-between gap-2 border-t border-black/20 pt-2">
                  <div className="flex gap-[2px] h-5 items-stretch">
                    {[3,1,2,4,1,2,1,3,2,1,4,2,1,3,1,2].map((w, i) => (
                      <div key={i} className="bg-black" style={{ width: `${w}px` }}></div>
                    ))}
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-tighter text-gray-600 whitespace-nowrap">
                    NO. ID/2026-FA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: Teks */}
        <div className="flex-1">
          <FadeIn>
            <div className="bg-[#15151e] text-white inline-block px-4 py-2 mb-6 neo-border">
              <h2 className="text-3xl font-black uppercase tracking-widest">
                {lang === 'id' ? 'Tentang Saya' : 'About Me'}
              </h2>
            </div>

            {lang === 'id' ? (
              <>
                <p className="text-black text-xl font-medium leading-relaxed mb-6">
                  Saya adalah seorang lulusan baru (<strong>Fresh Graduate</strong>) Teknik Informatika dari Institut Teknologi Sumatera (ITERA). Memiliki fokus mendalam pada pengembangan arsitektur sistem <strong>Full-Stack</strong> serta pemanfaatan <strong>AI-assisted development workflow</strong> untuk efisiensi koding.
                </p>
                <p className="text-black text-xl font-medium leading-relaxed mb-10">
                  Selain berkutat di dunia teknologi, saya aktif sebagai atlet berskala provinsi dan ofisial federasi olahraga Petanque. Pengalaman ganda ini membekali saya dengan kapasitas kepemimpinan yang tangguh, ketahanan mental kompetitif, serta manajemen proyek yang teruji secara nyata.
                </p>
              </>
            ) : (
              <>
                <p className="text-black text-xl font-medium leading-relaxed mb-6">
                  I am a recent <strong>Fresh Graduate</strong> in Informatics Engineering from the Sumatra Institute of Technology (ITERA). I have a deep focus on developing <strong>Full-Stack</strong> system architectures and utilizing <strong>AI-assisted development workflows</strong> for coding efficiency.
                </p>
                <p className="text-black text-xl font-medium leading-relaxed mb-10">
                  Beyond the tech world, I am active as a provincial-level athlete and official for the Petanque sports federation. This dual experience has equipped me with strong leadership capabilities, competitive mental resilience, and proven project management skills.
                </p>
              </>
            )}

            
            <a  href="/CV_FIQRI-ALDIANSYAH.pdf"
              download
              className="inline-flex items-center gap-3 bg-[#15151e] text-white px-8 py-4 font-bold text-lg neo-border neo-shadow hover:bg-white hover:text-black transition-all active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-black"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              {lang === 'id' ? 'UNDUH CV' : 'DOWNLOAD CV'}
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}