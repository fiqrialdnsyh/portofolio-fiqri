"use client";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const projects = [
  {
    title: { id: "Website Triathlon Lampung", en: "Triathlon Lampung Website" },
    role: { id: "Web Developer", en: "Web Developer" },
    desc: {
      id: "Pengembangan website resmi Triathlon Lampung sebagai pusat informasi kegiatan, registrasi peserta, dan publikasi event olahraga daerah.",
      en: "Development of the official Triathlon Lampung website for activity information, participant registration, and regional sports event publication."
    },
    tech: ["Next.js", "Tailwind CSS"],
    url: "https://triathlon-lampung.id/"
  },
  {
    title: { id: "Sistem Penilaian Kinerja Atlet Petanque", en: "Petanque Athlete Performance DSS" },
    role: { id: "Developer (Tugas Akhir)", en: "Developer (Final Thesis)" },
    desc: {
      id: "Sistem Informasi & Pendukung Keputusan (Metode SAW) dengan kriteria spesifik untuk turnamen multi-event & open.",
      en: "Information System & Decision Support (SAW Method) with specific criteria for multi-event & open tournaments."
    },
    tech: ["Laravel", "Next.js", "MySQL"],
    url: "https://fopi-lampung.com/"
  },
  {
    title: { id: "Simoni (Sistem Monitoring)", en: "Simoni (Monitoring System)" },
    role: { id: "Mobile Developer", en: "Mobile Developer" },
    desc: {
      id: "Sistem pemantauan kinerja pegawai terintegrasi untuk Dinas Pangan Provinsi Lampung.",
      en: "An integrated employee performance monitoring mobile app for the Lampung Province Food Security Agency."
    },
    tech: ["Flutter", "Firebase"],
    url: ""
  },
  {
    title: { id: "Odoo ERP System", en: "Odoo ERP System" },
    role: { id: "ERP Developer", en: "ERP Developer" },
    desc: {
      id: "Pengembangan modul rekrutmen SDM & pengeluaran untuk PT Mitra Bali Sukses (Gacoan) menggunakan Odoo.",
      en: "Development of HR recruitment & expenditure modules for PT Mitra Bali Sukses using Odoo."
    },
    tech: ["Odoo", "Python", "PostgreSQL"],
    url: ""
  },
  {
    title: { id: "Super Apps IKN Kini", en: "IKN Kini Super Apps" },
    role: { id: "Project Manager & UI/UX", en: "Project Manager & UI/UX" },
    desc: {
      id: "Prototipe Figma pusat layanan publik IKN (pengaduan, berita, kedaruratan, peta kawasan).",
      en: "Figma prototype for IKN public service center (complaints, news, emergencies, area maps)."
    },
    tech: ["Figma", "Wireframing", "Prototyping"],
    url: ""
  },
  {
    title: { id: "Chatbot SiPa & SiBaru", en: "SiPa & SiBaru Chatbot" },
    role: { id: "Project Manager", en: "Project Manager" },
    desc: {
      id: "Layanan administrasi desa berbasis WhatsApp untuk mendigitalisasi pengurusan surat menyurat masyarakat.",
      en: "WhatsApp-based village administration service to digitize public correspondence management."
    },
    tech: ["WhatsApp API", "Node.js"],
    url: ""
  }
];

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="proyek" className="py-24 bg-[#15151e] bg-grid px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32">

        {/* SESI MAGANG */}
        <div>
  <FadeIn>
    <div className="flex items-center gap-4 mb-12">
      <div className="w-16 h-16 bg-[#FFD700] neo-border flex items-center justify-center shadow-[4px_4px_0px_#000000]">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
        {lang === 'id' ? 'Pengalaman Magang' : 'Internship'}
      </h2>
    </div>
  </FadeIn>

  <FadeIn delay={200}>
    <div className="w-full bg-[#F4F1E1] border-4 border-black shadow-[10px_10px_0px_#FFD700] relative">

      {/* Header dokumen: judul + stempel */}
      <div className="flex items-start justify-between border-b-4 border-black px-8 md:px-10 py-6 bg-[#15151e]">
        <div>
          <span className="inline-block bg-[#FFD700] text-black font-black text-[10px] uppercase tracking-widest px-2 py-1 border-2 border-black mb-3">
            {lang === 'id' ? 'Pengalaman Terverifikasi' : 'Verified Experience'}
          </span>
          <h3 className="text-3xl md:text-4xl font-black uppercase leading-none text-white">
            PT Krakatau Bandar Samudera
          </h3>
          <p className="text-[#FFD700] font-mono font-bold text-sm uppercase tracking-wider mt-2">
            BUMN • Logistics & Port
          </p>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center border-4 border-green-500 text-green-500 rounded-full w-20 h-20 rotate-6 flex-shrink-0">
          <span className="font-black text-[10px] uppercase leading-none text-center">
            {lang === 'id' ? 'Selesai' : 'Done'}
          </span>
        </div>
      </div>

      {/* Baris data seperti formulir HR */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b-4 border-black divide-x-4 divide-black">
        {[
          { label: lang === 'id' ? 'Posisi' : 'Position', value: 'IT Intern' },
          { label: lang === 'id' ? 'Durasi' : 'Duration', value: lang === 'id' ? '2 Bulan' : '2 Months' },
          { label: lang === 'id' ? 'Divisi' : 'Division', value: lang === 'id' ? 'IT & Operasional' : 'IT & Operations' },
          { label: lang === 'id' ? 'Status' : 'Status', value: lang === 'id' ? 'Tuntas' : 'Complete' },
        ].map((field, i) => (
          <div key={i} className="px-5 py-4">
            <p className="font-mono text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">
              {field.label}
            </p>
            <p className="font-black text-base md:text-lg uppercase text-black">
              {field.value}
            </p>
          </div>
        ))}
      </div>

      {/* Daftar tugas bernomor */}
      <div className="px-8 md:px-10 py-8">
        <p className="font-mono text-[10px] font-black uppercase tracking-widest text-gray-500 mb-5">
          {lang === 'id' ? 'Ringkasan Tugas' : 'Task Summary'}
        </p>
        <ol className="divide-y-2 divide-black/10">
          {[
            { id: 'Membantu pemantauan sistem IT dan operasional harian di lingkungan pelabuhan logistik BUMN.', en: 'Assisted in monitoring IT systems and daily operations within a state-owned logistics port environment.' },
            { id: 'Mengelola data proyek, menyusun laporan operasional, dan memastikan kelengkapan dokumentasi.', en: 'Managed project data, compiled operational reports, and ensured documentation completeness.' },
            { id: 'Memberikan dukungan teknis langsung (IT support) untuk menyelesaikan kendala operasional lapangan.', en: 'Provided direct technical support (IT support) to resolve field operational issues.' }
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-5 py-4">
              <span className="font-mono font-black text-2xl text-[#FFD700] [-webkit-text-stroke:1.5px_black] flex-shrink-0 w-8">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-bold text-gray-900 text-base md:text-lg leading-relaxed pt-1">
                {lang === 'id' ? point.id : point.en}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </FadeIn>
</div>

        {/* SESI PROYEK */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-white neo-border flex items-center justify-center shadow-[4px_4px_0px_#FFD700]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#FFD700] uppercase tracking-tighter">
                {lang === 'id' ? 'Sorotan Proyek' : 'Project Highlights'}
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {projects.map((proj, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="flex flex-col h-full">
                  {/* Tab folder — nomor berkas, konsisten dengan tema dossier */}
                  <div className="w-28 bg-[#FFD700] border-4 border-b-0 border-black h-7 rounded-t-md px-3 flex items-center -mb-1 relative z-10">
                    <span className="font-mono font-black text-xs text-black">PRJ-0{idx + 1}</span>
                  </div>

                  <div className="bg-[#15151e] border-4 border-[#FFD700] p-6 hover:bg-[#FFD700] hover:text-black text-white transition-colors duration-200 flex-1 flex flex-col shadow-[6px_6px_0px_#000000] relative rounded-tl-none rounded-md">
                    <span className="text-[#FFD700] group-hover:text-black font-black text-xs uppercase tracking-widest mb-3 block border-b border-[#FFD700]/30 pb-2">
                      {lang === 'id' ? proj.role.id : proj.role.en}
                    </span>

                    <h3 className="text-2xl font-black uppercase mb-4 leading-tight">
                      {lang === 'id' ? proj.title.id : proj.title.en}
                    </h3>

                    <p className="font-medium text-gray-300 hover:text-gray-800 mb-6 text-sm">
                      {lang === 'id' ? proj.desc.id : proj.desc.en}
                    </p>

                    <div className="mt-auto flex flex-col gap-5 pt-4 border-t border-[#FFD700]/30">
                      <div className="flex flex-wrap gap-2">
                        {proj.tech.map((t, i) => (
                          <span key={i} className="text-[10px] font-mono font-black uppercase tracking-wider bg-white/10 px-2 py-1 rounded-sm">
                            {t}
                          </span>
                        ))}
                      </div>

                      {proj.url && (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-black border-2 border-transparent py-2.5 px-4 font-black text-xs uppercase tracking-widest transition-all shadow-[3px_3px_0_#000000] active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
                        >
                          {lang === 'id' ? 'Kunjungi Web' : 'Visit Site'}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}