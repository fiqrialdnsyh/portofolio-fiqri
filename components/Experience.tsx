"use client";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const projects = [
  {
    title: { id: "Sistem Penilaian Kinerja Atlet Petanque", en: "Petanque Athlete Performance DSS" },
    role: { id: "Developer (Tugas Akhir)", en: "Developer (Final Thesis)" },
    desc: { 
      id: "Sistem Informasi & Pendukung Keputusan (Metode SAW) dengan kriteria spesifik untuk turnamen multi-event & open. Full-stack Laravel & Next.js.", 
      en: "Information System & Decision Support (SAW Method) with specific criteria for multi-event & open tournaments. Full-stack Laravel & Next.js." 
    }
  },
  {
    title: { id: "Simoni (Sistem Monitoring)", en: "Simoni (Monitoring System)" },
    role: { id: "Developer", en: "Developer" },
    desc: { 
      id: "Sistem pemantauan kinerja pegawai terintegrasi untuk Dinas Pangan Provinsi Lampung Apps Mobile menggunakan framework flutter dan backend berbasis Firebase.", 
      en: "An integrated employee performance monitoring mobile app for the Lampung Province Food Security Agency, built with the Flutter framework and a Firebase backend." 
    }
  },
  {
    title: { id: "Odoo ERP System", en: "Odoo ERP System" },
    role: { id: "Developer", en: "Developer" },
    desc: { 
      id: "Pengembangan modul rekrutmen SDM & pengeluaran untuk PT Mitra Bali Sukses (Gacoan) menggunakan Odoo.", 
      en: "Development of HR recruitment & expenditure modules for PT Mitra Bali Sukses using Odoo." 
    }
  },
  {
    title: { id: "Super Apps IKN Kini", en: "IKN Kini Super Apps" },
    role: { id: "Project Manager & UI/UX", en: "Project Manager & UI/UX" },
    desc: { 
      id: "Prototipe Figma pusat layanan publik IKN (pengaduan, berita, kedaruratan, peta kawasan).", 
      en: "Figma prototype for IKN public service center (complaints, news, emergencies, area maps)." 
    }
  },
  {
    title: { id: "Chatbot SiPa & SiBaru", en: "SiPa & SiBaru Chatbot" },
    role: { id: "Project Manager", en: "Project Manager" },
    desc: { 
      id: "Layanan administrasi desa berbasis WhatsApp untuk mendigitalisasi pengurusan surat menyurat masyarakat.", 
      en: "WhatsApp-based village administration service to digitize public correspondence management." 
    }
  }
];

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="proyek" className="py-24 bg-[#15151e] bg-grid px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* SESI MAGANG */}
        <div>
          <FadeIn>
            <h2 className="text-5xl font-black text-[#FFD700] uppercase tracking-tighter mb-8 border-l-8 border-[#FFD700] pl-6">
              {lang === 'id' ? 'Pengalaman Magang' : 'Internship Experience'}
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="bg-[#F4F1E1] border-4 border-black p-8 md:p-12 neo-shadow flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-black text-black uppercase mb-2">PT Krakatau Bandar Samudera</h3>
                <p className="text-xl font-bold text-gray-700 mb-4 border-b-2 border-black pb-4 inline-block">
                  {lang === 'id' ? 'IT Intern (Durasi: 2 Bulan)' : 'IT Intern (Duration: 2 Months)'}
                </p>
                <ul className="list-disc pl-5 font-bold text-gray-800 space-y-2">
                  <li>
                    {lang === 'id' 
                      ? 'Membantu pemantauan sistem IT dan operasional harian di lingkungan pelabuhan logistik BUMN.' 
                      : 'Assisted in monitoring IT systems and daily operations within a state-owned logistics port environment.'}
                  </li>
                  <li>
                    {lang === 'id' 
                      ? 'Mengelola data proyek, menyusun laporan operasional, dan memastikan kelengkapan dokumentasi.' 
                      : 'Managed project data, compiled operational reports, and ensured documentation completeness.'}
                  </li>
                  <li>
                    {lang === 'id' 
                      ? 'Memberikan dukungan teknis langsung (IT support) untuk menyelesaikan kendala operasional lapangan.' 
                      : 'Provided direct technical support (IT support) to resolve field operational issues.'}
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 bg-[#FFD700] border-4 border-black p-6 text-center transform rotate-2 shadow-[8px_8px_0px_#000000]">
                <span className="font-black text-6xl text-black">BUMN</span>
                <p className="font-bold text-black uppercase mt-2">Logistics & Port</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* SESI PROYEK */}
        <div>
          <FadeIn>
            <h2 className="text-5xl font-black text-[#FFD700] uppercase tracking-tighter mb-8 border-l-8 border-[#FFD700] pl-6">
              {lang === 'id' ? 'Sorotan Proyek' : 'Project Highlights'}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="bg-[#15151e] border-4 border-[#FFD700] p-6 hover:bg-[#FFD700] hover:text-black text-white transition-colors group h-full flex flex-col shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  <span className="text-[#FFD700] group-hover:text-black font-black text-sm uppercase tracking-widest mb-2 block">
                    {lang === 'id' ? proj.role.id : proj.role.en}
                  </span>
                  <h3 className="text-2xl font-black uppercase mb-4 leading-tight">
                    {lang === 'id' ? proj.title.id : proj.title.en}
                  </h3>
                  <p className="font-medium text-gray-300 group-hover:text-gray-900 mt-auto">
                    {lang === 'id' ? proj.desc.id : proj.desc.en}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}