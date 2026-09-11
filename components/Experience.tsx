"use client";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const projects = [
  {
    title: { id: "Sistem Timing Real-time Triathlon (IoT)", en: "Real-time Triathlon Timing System (IoT)" },
    role: { id: "Software Engineer (Web & IoT)", en: "Software Engineer (Web & IoT)" },
    desc: {
      id: "Sistem pencatatan waktu lomba triathlon real-time berbasis integrasi sensor RFID. Melakukan optimasi pipeline data berkecepatan tinggi menggunakan Python dan MQTT, backend Laravel, serta stopwatch presisi di sisi klien dengan Alpine.js.",
      en: "Real-time triathlon timing system integrating RFID sensors. Optimized high-speed data pipelines using Python and MQTT, Laravel backend, and a client-side precision stopwatch with Alpine.js."
    },
    tech: ["Python", "MQTT", "Laravel", "Alpine.js", "RFID"],
    url: "https://github.com/fiqrialdnsyh/triathlon-system"
  },
  {
    title: { id: "Website Resmi Triathlon Lampung", en: "Official Triathlon Lampung Website" },
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    desc: {
      id: "Platform manajemen atlet, kepengurusan federasi, dan registrasi event triathlon end-to-end. Teruji tangguh dengan UAT 86%, pengujian blackbox, dan performa GTmetrix grade A.",
      en: "End-to-end triathlon event registration, athlete, and federation management platform. Robustly tested with 86% UAT, blackbox testing, and GTmetrix grade A performance."
    },
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MySQL", "Laravel"],
    url: "https://triathlon-lampung.id/"
  },
  {
    title: { id: "Sistem Penilaian Kinerja Atlet Petanque (FOPI)", en: "Petanque Athlete Performance System (FOPI)" },
    role: { id: "Full-Stack Developer (Tugas Akhir)", en: "Full-Stack Developer (Final Thesis)" },
    desc: {
      id: "Platform evaluasi kinerja atlet menggunakan metode Simple Additive Weighting dengan 12 kriteria terbobot, terintegrasi manajemen data atlet. Teruji secara komprehensif (WebQual 86.85%, GTmetrix A).",
      en: "Athlete performance evaluation platform using the Simple Additive Weighting method with 12 weighted criteria, integrated with athlete data management. Comprehensively tested (WebQual 86.85%, GTmetrix A)."
    },
    tech: ["Laravel", "Next.js", "MySQL"],
    url: "https://fopi-lampung.com/"
  },
  {
    title: { id: "SILABOR ITERA", en: "SILABOR ITERA" },
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    desc: {
      id: "Sistem informasi peminjaman dan reservasi laboratorium untuk Prodi Rekayasa Keolahragaan ITERA. Mencakup manajemen 3 laboratorium dengan sistem approval dan pengecekan jadwal real-time.",
      en: "Laboratory loan and reservation information system for ITERA's Sports Engineering Program. Covers 3 laboratories with an approval system and real-time schedule checking."
    },
    tech: ["Next.js", "Firebase"],
    url: "https://silaborro-itera.vercel.app/layanan/peminjaman-ruangan"
  },
  {
    title: { id: "Perbandingan Vision Transformer", en: "Vision Transformer Comparison" },
    role: { id: "AI/ML Developer", en: "AI/ML Developer" },
    desc: {
      id: "Mengevaluasi dan membandingkan 3 arsitektur Vision Transformer (ViT, Swin, DeiT) pada dataset klasifikasi gambar makanan Indonesia. Swin Transformer mencapai akurasi validasi 100%.",
      en: "Evaluated and compared 3 Vision Transformer architectures (ViT, Swin, DeiT) on an Indonesian food image classification dataset. Swin Transformer achieved 100% validation accuracy."
    },
    tech: ["Python", "PyTorch", "Deep Learning"],
    url: "https://github.com/fiqrialdnsyh/VisionTransformer-Comparison"
  },
  {
    title: { id: "Simoni (Sistem Monitoring)", en: "Simoni (Monitoring System)" },
    role: { id: "Mobile Developer", en: "Mobile Developer" },
    desc: {
      id: "Aplikasi mobile pemantauan kinerja pegawai terintegrasi untuk Dinas Pangan Provinsi Lampung guna meningkatkan efisiensi pelaporan lintas divisi.",
      en: "Integrated employee performance monitoring mobile app for the Lampung Province Food Security Agency to improve cross-divisional reporting efficiency."
    },
    tech: ["Flutter", "Firebase"],
    url: ""
  },
  {
    title: { id: "Smart Trip Planner", en: "Smart Trip Planner" },
    role: { id: "Android Developer", en: "Android Developer" },
    desc: {
      id: "Aplikasi Android pariwisata yang menyajikan informasi destinasi, pencarian penginapan, konversi mata uang, serta fitur simulasi biaya perjalanan.",
      en: "Android tourism application providing destination info, accommodation search, currency conversion, and a travel cost simulation feature."
    },
    tech: ["Kotlin", "Jetpack Compose"],
    url: "https://github.com/fiqrialdnsyh/OkeGas"
  },
  {
    title: { id: "Analisis Data Kemitraan Inti-Plasma", en: "Core-Plasma Partnership Data Analysis" },
    role: { id: "Research Data Support", en: "Research Data Support" },
    desc: {
      id: "Mengelola dataset penelitian berskala besar dari survei lapangan petani singkong. Menerapkan kontrol kualitas yang ketat untuk memastikan integritas dan validitas data akademik.",
      en: "Managed large-scale research datasets from cassava farmer field surveys. Applied strict quality control to ensure academic data integrity and validity."
    },
    tech: ["Data Analysis", "Quality Control"],
    url: ""
  },
  {
    title: { id: "Super Apps IKN Kini", en: "IKN Kini Super Apps" },
    role: { id: "Project Manager & UI/UX", en: "Project Manager & UI/UX" },
    desc: {
      id: "Memimpin riset pengguna dan perancangan prototipe UI/UX Figma untuk pusat layanan publik IKN, mencakup fitur pengaduan, berita, dan kedaruratan.",
      en: "Led user research and UI/UX Figma prototyping for the IKN public service center, covering complaint, news, and emergency features."
    },
    tech: ["Figma", "Wireframing", "Prototyping"],
    url: "https://www.figma.com/design/YbfcRVpkYjMondJOG2532g/Projek-IMK-Kelompok-3?node-id=28-632&p=f"
  },
  {
    title: { id: "Odoo ERP System", en: "Odoo ERP System" },
    role: { id: "ERP Developer", en: "ERP Developer" },
    desc: {
      id: "Merancang dan mengimplementasikan modul rekrutmen SDM serta pelacakan pengeluaran operasional menggunakan platform Odoo untuk PT Mitra Bali Sukses.",
      en: "Designed and implemented HR recruitment and operational expense tracking modules using the Odoo platform for PT Mitra Bali Sukses."
    },
    tech: ["Odoo", "Python", "PostgreSQL"],
    url: "https://drive.google.com/drive/folders/1xc7mTCF9xprq08Vyp8qCMVxAejxSmzON"
  },
  {
    title: { id: "Chatbot SiPa & SiBaru", en: "SiPa & SiBaru Chatbot" },
    role: { id: "Project Manager", en: "Project Manager" },
    desc: {
      id: "Memimpin tim dalam digitalisasi pengurusan surat menyurat masyarakat desa menjadi layanan otomatis berbasis WhatsApp.",
      en: "Led a team in digitizing village public correspondence management into an automated WhatsApp-based service."
    },
    tech: ["WhatsApp API", "Node.js"],
    url: ""
  },
  {
    title: { id: "Modul Pola Hidup Sehat & Kebugaran Fisik", en: "Healthy Lifestyle & Physical Fitness Module" },
    role: { id: "Penyusun/Editor Modul Ajar", en: "Module Compiler/Editor" },
    desc: {
      id: "Menyusun ulang materi ajar menjadi buku modul akademik terstruktur untuk Prodi Rekayasa Keolahragaan ITERA, merapikan struktur dan konsistensi tipografi.",
      en: "Restructured teaching materials into a structured academic module book for ITERA's Sports Engineering Program, refining structure and typographic consistency."
    },
    tech: ["Academic Writing", "Editorial"],
    url: "https://www.overleaf.com/read/jhphbkzcwkpt#800b7a"
  }
];

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="proyek" className="py-24 bg-[#15151e] bg-grid px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32">

        <div>
          <FadeIn>
            <h2 className="text-5xl font-black text-[#FFD700] uppercase tracking-tighter mb-8 border-l-8 border-[#FFD700] pl-6">
              {lang === "id" ? "Pengalaman Magang" : "Internship Experience"}
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-[#F4F1E1] border-4 border-black p-8 md:p-12 neo-shadow flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-black text-black uppercase mb-2">PT Krakatau Bandar Samudera</h3>
                <p className="text-xl font-bold text-gray-700 mb-4 border-b-2 border-black pb-4 inline-block">
                  {lang === "id" ? "IT Intern (Durasi: 2 Bulan)" : "IT Intern (Duration: 2 Months)"}
                </p>
                <ul className="list-disc pl-5 font-bold text-gray-800 space-y-2">
                  <li>
                    {lang === "id"
                      ? "Mengembangkan aplikasi web \"Bring In Bring Out\" berbasis Laravel dan Tailwind CSS untuk mendigitalisasi sistem perizinan akses keluar-masuk operasional di area POSCO, menggantikan pencatatan manual berbasis kertas."
                      : "Developed the \"Bring In Bring Out\" web application using Laravel and Tailwind CSS to digitize the operational entry and exit authorization system at the POSCO site, replacing manual, paper-based record-keeping."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Merancang prototipe UI/UX aplikasi BAPPER (Berita Acara Serah dan Pengembalian Perangkat IT) menggunakan Figma, serta menyusun Software Requirements Specification (SRS) sebagai dasar pengembangan sistem."
                      : "Designed UI/UX prototypes for the BAPPER (Incident Report for IT Equipment Handover and Return) application using Figma, and drafted the Software Requirements Specification (SRS) as the foundation for system development."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Mempelajari praktik technical writing untuk dokumentasi proyek dan mengikuti pelatihan awareness ISO 27001 terkait keamanan informasi."
                      : "Studied technical writing practices for project documentation and attended ISO 27001 information security awareness training."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Menyusun dokumentasi teknis operasional dan laporan rutin harian jaringan IT logistik BUMN untuk mendukung audit dan evaluasi kepatuhan tata kelola TI."
                      : "Compiled technical operational documentation and daily network reports for BUMN's logistics IT to support audits and compliance evaluations."}
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="https://github.com/fiqrialdnsyh/bring-in-bring-out"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-black text-white border-2 border-black py-3 px-6 font-black text-xs uppercase tracking-widest transition-all shadow-[4px_4px_0_#FFD700] hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
                  >
                    {lang === "id" ? "Lihat Dokumentasi" : "View Documentation"}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>

              <div className="w-full md:w-1/3 bg-[#FFD700] border-4 border-black p-6 text-center transform rotate-2 shadow-[8px_8px_0px_#000000]">
                <span className="font-black text-6xl text-black">BUMN</span>
                <p className="font-bold text-black uppercase mt-2">Logistics & Port</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div>
          <FadeIn>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-white neo-border flex items-center justify-center shadow-[4px_4px_0px_#FFD700]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#FFD700] uppercase tracking-tighter">
                {lang === "id" ? "Sorotan Proyek" : "Project Highlights"}
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {projects.map((proj, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="flex flex-col h-full">
                  <div className="w-28 bg-[#FFD700] border-4 border-b-0 border-black h-7 rounded-t-md px-3 flex items-center -mb-1 relative z-10">
                    <span className="font-mono font-black text-xs text-black">PRJ-{(idx + 1).toString().padStart(2, '0')}</span>
                  </div>

                  <div className="bg-[#15151e] border-4 border-[#FFD700] p-6 hover:bg-[#FFD700] hover:text-black text-white transition-colors duration-200 flex-1 flex flex-col shadow-[6px_6px_0px_#000000] relative rounded-tl-none rounded-md group">
                    <span className="text-[#FFD700] group-hover:text-black font-black text-xs uppercase tracking-widest mb-3 block border-b border-[#FFD700]/30 group-hover:border-black/30 pb-2">
                      {lang === "id" ? proj.role.id : proj.role.en}
                    </span>

                    <h3 className="text-2xl font-black uppercase mb-4 leading-tight">
                      {lang === "id" ? proj.title.id : proj.title.en}
                    </h3>

                    <p className="font-medium text-gray-300 group-hover:text-gray-800 mb-6 text-sm">
                      {lang === "id" ? proj.desc.id : proj.desc.en}
                    </p>

                    <div className="mt-auto flex flex-col gap-5 pt-4 border-t border-[#FFD700]/30 group-hover:border-black/30">
                      <div className="flex flex-wrap gap-2">
                        {proj.tech.map((t, i) => (
                          <span key={i} className="text-[10px] font-mono font-black uppercase tracking-wider bg-white/10 group-hover:bg-black/10 px-2 py-1 rounded-sm">
                            {t}
                          </span>
                        ))}
                      </div>

                      {proj.url ? (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#FFD700] group-hover:bg-black group-hover:text-[#FFD700] text-black border-2 border-transparent group-hover:border-black py-2.5 px-4 font-black text-xs uppercase tracking-widest transition-all shadow-[3px_3px_0_#000000] active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
                        >
                          {lang === "id" ? "Kunjungi Web" : "Visit Site"}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                      ) : null}
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