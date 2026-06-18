const projects = [
  {
    id: 1,
    name: 'ERP Internal System – Delta Group',
    description: 'Sistem ERP internal perusahaan untuk manajemen persediaan, pembelian, penjualan, dan akuntansi. Dibangun dengan Laravel dan clean architecture Service-Repository Pattern.',
    tags: ['Laravel', 'PostgreSQL', 'RESTful API', 'ERP'],
    type: 'Enterprise',
  },
  {
    id: 2,
    name: 'Website Profile Kiddie Bright School',
    description: 'Website profil sekolah dengan tampilan visual yang menarik dan CMS yang mudah dikelola oleh staf sekolah, dilengkapi halaman galeri dan informasi program belajar.',
    tags: ['Laravel', 'JavaScript', 'MySQL', 'Bootstrap'],
    type: 'Company',
  },
  {
    id: 3,
    name: 'Website Koperasi Madani (KSP)',
    description: 'Platform digital untuk Koperasi Simpan Pinjam yang memungkinkan anggota mengakses layanan secara online dengan transparansi dan efisiensi yang lebih tinggi.',
    tags: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
    type: 'Company',
  },
  {
    id: 4,
    name: 'Website Booking Kapal',
    description: 'Platform e-booking kapal dengan integrasi payment gateway Midtrans untuk mempermudah pembelian tiket secara online dengan proses pembayaran yang aman.',
    tags: ['Laravel', 'Midtrans', 'MySQL', 'JavaScript'],
    type: 'Personal',
  },
  {
    id: 5,
    name: 'Website Inventaris Barang',
    description: 'Sistem manajemen inventaris berbasis web untuk mencatat, melacak, dan mengelola aset organisasi secara digital dengan laporan yang terstruktur.',
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
    type: 'Personal',
  },
  {
    id: 6,
    name: 'Website Monitoring Lele (IoT)',
    description: 'Platform digital yang terintegrasi dengan IoT untuk memantau kondisi lingkungan budidaya lele secara real-time guna meningkatkan produktivitas.',
    tags: ['Laravel', 'IoT', 'MySQL', 'Real-time'],
    type: 'Personal',
  },
];

const typeColor = {
  Enterprise: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
  Company:    'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
  Personal:   'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
};

export const Project = () => {
  return (
    <section id="project" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white section-heading">
            Projects
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-4">Things I've built over the years</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 card-hover flex flex-col"
            >
              {/* Icon placeholder + type badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-white shadow-md">
                  <i className="ri-code-s-slash-line text-lg"></i>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColor[p.type]}`}>
                  {p.type}
                </span>
              </div>

              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 leading-snug flex-grow-0">
                {p.name}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-grow mb-4">
                {p.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tags.map(t => (
                  <span key={t} className="text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-md font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};