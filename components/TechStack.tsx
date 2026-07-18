"use client";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const skills = [
  {
    code: "FS",
    title: { id: "FULL-STACK DEV", en: "FULL-STACK DEV" },
    desc: { id: "Laravel, Next.js, Tailwind CSS, Node.js", en: "Laravel, Next.js, Tailwind CSS, Node.js" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    )
  },
  {
    code: "UX",
    title: { id: "DESAIN UI/UX", en: "UI/UX DESIGN" },
    desc: { id: "Figma, Canva, Wireframing, Pembuatan Prototipe Resolusi Tinggi", en: "Figma, Canva, Wireframing, High-Fidelity Prototyping" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 7 9.79086 7 12C7 14.2091 9.79086 16 12 16Z"></path></svg>
    )
  },
  {
    code: "AI",
    title: { id: "ALUR KERJA AI", en: "AI WORKFLOW" },
    desc: { id: "Pembuatan Logika Berbantuan AI & Pengawasan Sistem", en: "AI-Assisted Logic Generation & System oversight" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    )
  },
  {
    code: "DB",
    title: { id: "DESAIN BASIS DATA", en: "DATABASE DESIGN" },
    desc: { id: "Platform Firebase, MySQL, Arsitektur Basis Data Relasional", en: "Firebase Platform, MySQL, Relational Database Architecture" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5"></path><path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12"></path></svg>
    )
  },
  {
    code: "IT",
    title: { id: "DUKUNGAN IT", en: "IT SUPPORT" },
    desc: { id: "Pemecahan Masalah Perangkat Keras, Pemantauan Sistem Operasional", en: "Hardware troubleshooting, Operational Systems monitoring" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M12 2a5 5 0 0 1 5 5v3H7V7a5 5 0 0 1 5-5z"></path></svg>
    )
  },
  {
    code: "SP",
    title: { id: "MANAJEMEN OLAHRAGA", en: "SPORTS MGMT" },
    desc: { id: "Penyelenggaraan Acara Daerah, Sistem Penilaian Resmi Federasi", en: "Regional Event Organizing, Official federation scoring systems" },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M6 12A6 6 0 0 1 18 12"></path></svg>
    )
  }
];

export default function TechStack() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 bg-[#15151e] border-b-4 border-black px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-6xl md:text-7xl font-black text-[#FFD700] text-center uppercase tracking-tighter mb-20 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            {lang === 'id' ? 'Keahlian' : 'Tech & Skills'}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <FadeIn key={skill.code} delay={index * 100}>
              <div className="bg-[#F4F1E1] p-7 neo-border flex flex-col h-full shadow-[6px_6px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] hover:-translate-y-1 hover:translate-x-1 transition-all duration-200">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-[#15151e] text-[#FFD700] w-12 h-12 flex items-center justify-center border-2 border-black">
                    {skill.icon}
                  </div>
                  <span className="font-mono font-black text-xs text-black/40 tracking-widest pt-1">
                    SKL/{skill.code}
                  </span>
                </div>

                <h3 className="text-black font-black text-xl uppercase mb-2 leading-tight tracking-tight">
                  {lang === 'id' ? skill.title.id : skill.title.en}
                </h3>

                <div className="w-10 h-1 bg-[#FFD700] border border-black mb-3"></div>

                <p className="text-gray-700 font-bold text-sm leading-relaxed">
                  {lang === 'id' ? skill.desc.id : skill.desc.en}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}