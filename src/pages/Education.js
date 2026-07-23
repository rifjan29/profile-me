const education = [
  {
    id: 1,
    school: 'Politeknik Negeri Jember',
    degree: 'D-IV, Teknik Informatika',
    period: 'Sep 2019 – Agu 2023',
    gpa: 'IPK 3.73',
    location: 'Kabupaten Jember, Jawa Timur',
    highlights: [
      'Tugas Akhir: Pengembangan Sistem Informasi Peramalan Hasil Produksi Tambak Udang menggunakan Metode Regresi Linier Berganda.',
      'Aktif di BSO HMJTI sebagai Kepala Divisi Perhubungan.',
      'Koordinator Lembaga Media PERS di PKPT IPNU-IPPNU Politeknik Negeri Jember.',
    ],
  },
  {
    id: 2,
    school: 'SMKS Nurul Jadid',
    degree: 'Rekayasa Perangkat Lunak',
    period: '2016 – 2019',
    gpa: null,
    location: 'Kab. Probolinggo, Jawa Timur',
    highlights: [
      'Aktif di lembaga jurnalistik sekolah Media Aktualisasi Siswa Aktif (MASA).',
      'Aktif dalam organisasi Forum Komunikasi Osis Pondok Pesantren Nurul Jadid.',
    ],
  },
];

const certifications = [
  {
    id: 1,
    title: 'Full-Stack Developer with Laravel: Web Travel',
    issuer: 'Certification Body',
    icon: 'ri-award-line',
  },
  {
    id: 2,
    title: 'Finalis Lomba UI/UX Competition',
    issuer: 'Honors & Awards',
    icon: 'ri-medal-line',
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-neutral-50 dark:bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white section-heading">
            Education
          </h2>
          <p className="text-neutral-400 dark:text-neutral-500 text-sm mt-4">Academic background & achievements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education cards - 2/3 width */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white dark:bg-neutral-950 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-800 to-black dark:from-neutral-100 dark:to-white flex items-center justify-center text-white dark:text-black text-xl shadow-md shrink-0">
                    <i className="ri-graduation-cap-line"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-900 dark:text-white">{edu.school}</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm font-medium">{edu.degree}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-400 dark:text-neutral-500 mt-1 mb-4">
                      <span className="flex items-center gap-1">
                        <i className="ri-calendar-line"></i> {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-map-pin-line"></i> {edu.location}
                      </span>
                      {edu.gpa && (
                        <span className="flex items-center gap-1 text-neutral-900 dark:text-white font-semibold">
                          <i className="ri-star-line"></i> {edu.gpa}
                        </span>
                      )}
                    </div>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-neutral-500 dark:text-neutral-400 flex gap-2">
                          <span className="text-neutral-400 shrink-0 mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications - 1/3 width */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 text-sm uppercase tracking-wider">
              Certifications & Awards
            </h3>
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-neutral-950 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-800 card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-200 dark:to-neutral-400 flex items-center justify-center text-white dark:text-black text-lg shadow-md mb-3">
                  <i className={cert.icon}></i>
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-white text-sm leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">{cert.issuer}</p>
              </div>
            ))}

            {/* Languages card */}
            <div className="bg-white dark:bg-neutral-950 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-semibold text-neutral-700 dark:text-neutral-300 text-xs uppercase tracking-wider mb-4">
                Languages
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">Bahasa Indonesia</span>
                    <span className="text-xs text-neutral-400">Native</span>
                  </div>
                  <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-neutral-900 dark:bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">English</span>
                    <span className="text-xs text-neutral-400">Limited Working</span>
                  </div>
                  <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full w-2/5 bg-neutral-900 dark:bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};