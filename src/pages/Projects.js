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
  Enterprise: 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black',
  Company:    'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100',
  Personal:   'bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700',
};

export const Project = () => {
  return (
    <section id="project" className="py-24 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white section-heading">
            Projects
          </h2>
          <p className="text-neutral-400 dark:text-neutral-500 text-sm mt-4">Things I've built over the years</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-neutral-50 dark:bg-neutral-950 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 card-hover flex flex-col"
            >
              {/* Icon placeholder + type badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-800 to-black dark:from-neutral-200 dark:to-white flex items-center justify-center text-white dark:text-black shadow-md">
                  <i className="ri-code-s-slash-line text-lg"></i>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${typeColor[p.type]}`}>
                  {p.type}
                </span>
              </div>

              <h3 className="font-semibold text-neutral-900 dark:text-white text-sm mb-2 leading-snug flex-grow-0">
                {p.name}
              </h3>

              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-grow mb-4">
                {p.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tags.map(t => (
                  <span key={t} className="text-xs bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded-md font-medium">
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