const experiences = [
  {
    id: 1,
    role: 'Back End Developer',
    company: 'PT Delta Adiguna (Delta Group)',
    period: 'Feb 2025 – Present',
    duration: '1 yr 5 mo',
    location: 'Surabaya, Jawa Timur',
    type: 'Full-time',
    current: true,
    description: [
      'Terlibat dalam pengembangan sistem ERP internal perusahaan menggunakan Laravel untuk manajemen persediaan, pembelian, penjualan, dan akuntansi.',
      'Mendesain dan mengimplementasikan RESTful API untuk integrasi antar modul dan kebutuhan frontend dengan keamanan berbasis role.',
      'Mengelola struktur database menggunakan PostgreSQL dengan optimasi query untuk peningkatan performa.',
      'Menerapkan clean code dan arsitektur MVC untuk approval workflow, laporan keuangan, dan modul stok.',
    ],
    tags: ['Laravel', 'PostgreSQL', 'RESTful API', 'ERP', 'MVC'],
  },
  {
    id: 2,
    role: 'Full-Stack Application Developer',
    company: 'DataIns | PT Global Data Inspirasi',
    period: 'Jul 2024 – Jun 2026',
    duration: '2 yr',
    location: 'Yogyakarta',
    type: 'Full-time',
    current: false,
    description: [
      'Membantu pengerjaan development di bidang software development untuk mendukung pengembangan produk dan project Datains.',
      'Bertanggung jawab dalam penyelesaian pekerjaan yang telah ditugaskan dan membuat dokumentasi terstruktur.',
      'Berkolaborasi erat dengan tim dengan semangat teamwork yang baik.',
    ],
    tags: ['Full-Stack', 'Software Development', 'Documentation'],
  },
  {
    id: 3,
    role: 'Back End Developer',
    company: 'PT Barouk Raya Technology',
    period: 'Des 2023 – Apr 2024',
    duration: '5 mo',
    location: 'Bondowoso, Jawa Timur',
    type: 'Full-time',
    current: false,
    description: [
      'Membantu pengembangan perangkat lunak untuk client khususnya Bank BPR Jawa Timur.',
      'Memantau kesehatan sistem secara berkala, mengidentifikasi masalah, dan merespons untuk memperbaikinya.',
      'Melakukan pembaruan dan penyempurnaan pada sistem manajemen layanan sesuai feedback pengguna.',
    ],
    tags: ['PHP', 'Backend', 'System Monitoring', 'Banking'],
  },
  {
    id: 4,
    role: 'Web Developer / WebApps Engineer',
    company: 'DataIns | PT Global Data Inspirasi',
    period: 'Sep 2022 – Jan 2023',
    duration: '5 mo',
    location: 'Yogyakarta',
    type: 'Internship',
    current: false,
    description: [
      'Membantu pengerjaan development di bidang software development untuk mendukung pengembangan produk Datains.',
      'Membuat dokumentasi terstruktur dan laporan berkala sesuai standar perusahaan.',
    ],
    tags: ['Web Development', 'Internship'],
  },
  {
    id: 5,
    role: 'Web Developer',
    company: 'Greensoft',
    period: 'Feb 2022 – Mei 2022',
    duration: '4 mo',
    location: 'Bondowoso, Jawa Timur',
    type: 'Internship',
    current: false,
    description: [
      'Membantu pengembangan perangkat lunak untuk mendukung pengembangan produk dan proyek client.',
    ],
    tags: ['Web Development', 'Internship'],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white section-heading">
            Experience
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-4">My professional journey so far</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full border-2 transform -translate-x-1/2 mt-1.5 z-10
                  border-white dark:border-gray-950
                  transition-all duration-300
                  cursor-default
                  "
                  style={{
                    background: exp.current
                      ? 'linear-gradient(135deg, #10b981, #06b6d4)'
                      : '#d1d5db',
                  }}
                >
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 card-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-base leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="text-xs bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-medium shrink-0 ml-2">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400 dark:text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <i className="ri-calendar-line"></i>
                        {exp.period} · {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-map-pin-line"></i>
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-briefcase-line"></i>
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.description.map((d, j) => (
                        <li key={j} className="text-sm text-gray-500 dark:text-gray-400 flex gap-2">
                          <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map(t => (
                        <span key={t} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-md font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};