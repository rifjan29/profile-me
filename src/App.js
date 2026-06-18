/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import 'remixicon/fonts/remixicon.css';
import Navbar from './Navbar';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';

// ── DATA ─────────────────────────────────────────────────────────────────────

const SECTIONS = ['about', 'experience', 'projects', 'education', 'contact'];
const TOTAL = SECTIONS.length;

const skills = [
  'Laravel', 'PHP', 'React.js', 'Next.js', 'PostgreSQL',
  'MySQL', 'RESTful API', 'Docker', 'Git', 'TailwindCSS',
];

const experiences = [
  {
    role: 'Back End Developer',
    company: 'PT Delta Adiguna (Delta Group)',
    period: 'Feb 2025 – Present · 1 yr 5 mo',
    location: 'Surabaya',
    current: true,
    points: [
      'Pengembangan sistem ERP internal: persediaan, pembelian, penjualan, akuntansi.',
      'Desain RESTful API & keamanan berbasis role dengan Laravel Sanctum.',
      'Optimasi query PostgreSQL dan approval workflow.',
    ],
    tags: ['Laravel', 'PostgreSQL', 'ERP', 'API'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'DataIns | PT Global Data Inspirasi',
    period: 'Jul 2024 – Jun 2026 · 2 yr',
    location: 'Yogyakarta',
    current: false,
    points: [
      'Software development untuk produk dan project Datains.',
      'Dokumentasi teknis dan laporan berkala sesuai standar perusahaan.',
    ],
    tags: ['Full-Stack', 'Laravel', 'React.js'],
  },
  {
    role: 'Back End Developer',
    company: 'PT Barouk Raya Technology',
    period: 'Des 2023 – Apr 2024 · 5 mo',
    location: 'Bondowoso',
    current: false,
    points: [
      'Pengembangan software untuk Bank BPR Jawa Timur.',
      'Monitoring sistem, analisis log, dan perbaikan bug.',
    ],
    tags: ['PHP', 'Backend', 'Banking'],
  },
  {
    role: 'WebApps Engineer',
    company: 'DataIns | PT Global Data Inspirasi',
    period: 'Sep 2022 – Jan 2023 · 5 mo',
    location: 'Yogyakarta',
    current: false,
    points: [
      'Membantu pengembangan produk Datains.',
      'Dokumentasi dan laporan teknis.',
    ],
    tags: ['Web Dev', 'Internship'],
  },
  {
    role: 'Web Developer',
    company: 'Greensoft',
    period: 'Feb 2022 – Mei 2022 · 4 mo',
    location: 'Bondowoso',
    current: false,
    points: ['Pengembangan web untuk produk dan proyek client.'],
    tags: ['Web Dev'],
  },
];

const projects = [
  { name: 'ERP Internal System',     sub: 'PT Delta Adiguna',  desc: 'Sistem ERP untuk manajemen persediaan, pembelian, penjualan, akuntansi dan approval workflow.',  tags: ['Laravel', 'PostgreSQL', 'ERP'] },
  { name: 'Website Booking Kapal',   sub: 'Personal',          desc: 'Platform e-booking tiket kapal dengan integrasi payment gateway Midtrans.',                        tags: ['Laravel', 'Midtrans', 'MySQL'] },
  { name: 'Website Koperasi Madani', sub: 'Company',           desc: 'Platform KSP digital untuk layanan simpan pinjam anggota secara online.',                          tags: ['Laravel', 'MySQL', 'Bootstrap'] },
  { name: 'Monitoring Lele (IoT)',   sub: 'Academic',          desc: 'Platform real-time terintegrasi IoT untuk memantau kondisi budidaya lele secara remote.',           tags: ['Laravel', 'IoT', 'Real-time'] },
  { name: 'Website Inventaris',      sub: 'Personal',          desc: 'Sistem manajemen inventaris digital untuk mencatat dan melacak aset organisasi.',                   tags: ['Laravel', 'MySQL', 'jQuery'] },
  { name: 'Profile Kiddie School',   sub: 'Company',           desc: 'Website profil sekolah dengan CMS untuk galeri, program, dan berita sekolah.',                     tags: ['Laravel', 'CMS', 'Bootstrap'] },
];

// ── SCROLL ENGINE ─────────────────────────────────────────────────────────────

function App() {
  const { isDarkMode } = useDarkMode();

  // Use refs for scroll engine so event handlers never go stale
  const activeRef    = useRef(0);
  const lockRef      = useRef(false); // prevents rapid fire
  const touchStartY  = useRef(null);
  const sectionRefs  = useRef([]);

  // State only for React rendering
  const [active, setActive] = useState(0);

  // Navigate to page idx
  const goTo = useCallback((idx) => {
    if (lockRef.current || idx < 0 || idx >= TOTAL) return;
    const prev = activeRef.current;
    if (idx === prev) return;

    lockRef.current = true;
    activeRef.current = idx;
    setActive(idx);

    // Reset scroll position of the newly entering section
    const el = sectionRefs.current[idx];
    if (el) el.scrollTop = 0;

    // Release lock after transition completes
    setTimeout(() => { lockRef.current = false; }, 800);
  }, []);

  // ── Wheel handler ─────────────────────────────────────────────────────────
  useEffect(() => {
    const onWheel = (e) => {
      if (lockRef.current) { e.preventDefault(); return; }

      const el = sectionRefs.current[activeRef.current];
      if (!el) return;

      const { scrollTop, scrollHeight, clientHeight } = el;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 8;
      const atTop    = scrollTop <= 8;
      const noScroll = scrollHeight <= clientHeight + 2;

      if (e.deltaY > 0 && (atBottom || noScroll)) {
        e.preventDefault();
        goTo(activeRef.current + 1);
      } else if (e.deltaY < 0 && atTop) {
        e.preventDefault();
        goTo(activeRef.current - 1);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [goTo]);

  // ── Touch handler ─────────────────────────────────────────────────────────
  useEffect(() => {
    const onStart = (e) => { touchStartY.current = e.touches[0].clientY; };
    const onEnd   = (e) => {
      if (lockRef.current || touchStartY.current === null) return;
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      touchStartY.current = null;
      if (Math.abs(dy) < 60) return;

      const el = sectionRefs.current[activeRef.current];
      const atBottom = el ? el.scrollTop + el.clientHeight >= el.scrollHeight - 8 : true;
      const atTop    = el ? el.scrollTop <= 8 : true;

      if (dy > 0 && atBottom)  goTo(activeRef.current + 1);
      if (dy < 0 && atTop)     goTo(activeRef.current - 1);
    };

    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend',   onEnd,   { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, [goTo]);

  // ── Keyboard handler ──────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goTo(activeRef.current + 1); }
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); goTo(activeRef.current - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo]);

  // Section position helper
  const sectionStyle = (i) => ({
    transform: `translateY(${(i - active) * 100}%)`,
    zIndex: i === active ? 10 : i > active ? 5 : 2,
  });

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

        {/* ── Top progress bar ── */}
        <div id="page-progress" style={{ width: `${((active + 1) / TOTAL) * 100}%` }} />

        {/* ── Floating background blobs ── */}
        <div id="parallax-bg" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>

        {/* ── Navbar ── */}
        <Navbar active={active} goTo={goTo} />

        {/* ── Right dot navigation ── */}
        <nav className="dot-nav" aria-label="Page navigation">
          {SECTIONS.map((s, i) => (
            <button
              key={s}
              aria-label={`Go to ${s}`}
              id={`dot-${s}`}
              className={`dot ${i === active ? 'active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </nav>

        {/* ── Page container ── */}
        <div id="page-root">

          {/* ════════════ PAGE 0: ABOUT ════════════ */}
          <div
            className="page-section"
            ref={el => sectionRefs.current[0] = el}
            style={sectionStyle(0)}
          >
            <div className="min-h-screen flex flex-col justify-center pt-14 pb-10 max-w-4xl mx-auto px-6">
              <span className="section-label fade-up">Hello, world —</span>

              <h1 className="fade-up-2 mt-5 text-6xl md:text-8xl font-black tracking-tight leading-none">
                Rifjan<br/>
                <span className="g-text">Jundila</span>
                <span className="cursor text-emerald-400">_</span>
              </h1>

              <p className="fade-up-3 mt-7 text-lg text-gray-400 dark:text-gray-500 max-w-lg leading-relaxed font-light">
                Fullstack Developer ·{' '}
                <span className="text-gray-600 dark:text-gray-300 font-medium">4+ tahun</span> pengalaman ·
                Probolinggo, Jawa Timur
              </p>

              <div className="fade-up-3 mt-5 flex flex-wrap gap-2">
                {skills.map(s => <span key={s} className="tag">{s}</span>)}
              </div>

              <div className="fade-up-4 mt-8 flex flex-wrap items-center gap-3">
                <a id="hero-email" href="mailto:rjndla@gmail.com"
                   className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-emerald-200/40 dark:shadow-emerald-900/30">
                  <i className="ri-mail-send-line"></i> Hire Me
                </a>
                {[
                  { id: 'lk', icon: 'ri-linkedin-box-line', href: 'https://www.linkedin.com/in/rifjan-jundila/', label: 'LinkedIn' },
                  { id: 'gh', icon: 'ri-github-line',        href: 'https://github.com/rifjan29',                label: 'GitHub' },
                  { id: 'wb', icon: 'ri-global-line',        href: 'https://framecode.web.id/',                  label: 'framecode.web.id' },
                ].map(l => (
                  <a key={l.id} id={`hero-${l.id}`} href={l.href} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-emerald-500 transition-colors">
                    <i className={`${l.icon} text-base`}></i> {l.label}
                  </a>
                ))}
              </div>

              {/* Scroll hint */}
              <div className="fade-up-4 mt-14 flex items-center gap-3 text-gray-200 dark:text-gray-800">
                <div className="w-px h-10 bg-current"></div>
                <span className="mono text-xs tracking-widest">scroll or use arrow keys</span>
              </div>
            </div>
          </div>

          {/* ════════════ PAGE 1: EXPERIENCE ════════════ */}
          <div
            className="page-section"
            ref={el => sectionRefs.current[1] = el}
            style={sectionStyle(1)}
          >
            <div className="min-h-screen pt-20 pb-12 max-w-4xl mx-auto px-6">
              {/* Section header */}
              <div className="flex items-baseline gap-4 mb-10 sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md py-3 -mx-6 px-6 z-10">
                <span className="mono text-4xl font-black text-gray-100 dark:text-gray-900 select-none">01</span>
                <div>
                  <span className="section-label">Work History</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-6">
                <div className="tl-line" />
                <div className="space-y-5">
                  {experiences.map((exp, i) => (
                    <div key={i} className="relative">
                      {/* dot */}
                      <div className={`absolute -left-6 top-5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-gray-950
                        ${exp.current ? 'bg-emerald-400' : 'bg-gray-300 dark:bg-gray-700'}`} />

                      <div className="card p-5">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{exp.role}</h3>
                            <p className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">{exp.company}</p>
                          </div>
                          {exp.current && (
                            <span className="text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mono text-xs text-gray-400 dark:text-gray-500 mb-3">
                          <i className="ri-calendar-line mr-1"></i>{exp.period}
                          <span className="mx-2">·</span>
                          <i className="ri-map-pin-line mr-1"></i>{exp.location}
                        </p>
                        <ul className="space-y-1 mb-3">
                          {exp.points.map((p, j) => (
                            <li key={j} className="text-xs text-gray-500 dark:text-gray-400 flex gap-2">
                              <span className="text-emerald-400 shrink-0">›</span>{p}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ════════════ PAGE 2: PROJECTS ════════════ */}
          <div
            className="page-section"
            ref={el => sectionRefs.current[2] = el}
            style={sectionStyle(2)}
          >
            <div className="min-h-screen pt-20 pb-12 max-w-4xl mx-auto px-6">
              <div className="flex items-baseline gap-4 mb-10 sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md py-3 -mx-6 px-6 z-10">
                <span className="mono text-4xl font-black text-gray-100 dark:text-gray-900 select-none">02</span>
                <div>
                  <span className="section-label">What I've Built</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((p, i) => (
                  <div key={i} className="card p-5 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-white shadow-sm">
                        <i className="ri-code-s-slash-line text-sm"></i>
                      </div>
                      <span className="mono text-xs text-gray-200 dark:text-gray-800">{String(i+1).padStart(2,'0')}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">{p.name}</h3>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mb-1.5">{p.sub}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ════════════ PAGE 3: EDUCATION ════════════ */}
          <div
            className="page-section"
            ref={el => sectionRefs.current[3] = el}
            style={sectionStyle(3)}
          >
            <div className="min-h-screen pt-20 pb-12 max-w-4xl mx-auto px-6">
              <div className="flex items-baseline gap-4 mb-10 sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md py-3 -mx-6 px-6 z-10">
                <span className="mono text-4xl font-black text-gray-100 dark:text-gray-900 select-none">03</span>
                <div>
                  <span className="section-label">Academic Background</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                {[
                  { school: 'Politeknik Negeri Jember', degree: 'D-IV Teknik Informatika', period: 'Sep 2019 – Agu 2023', gpa: 'IPK 3.73',
                    notes: ['TA: Sistem Peramalan Produksi Tambak Udang (Regresi Linier Berganda)', 'Kepala Divisi Perhubungan – BSO HMJTI', 'Koordinator Media PERS – PKPT IPNU-IPPNU Polije'] },
                  { school: 'SMKS Nurul Jadid', degree: 'Rekayasa Perangkat Lunak', period: '2016 – 2019', gpa: null,
                    notes: ['Anggota Lembaga Jurnalistik MASA', 'Aktif di Forum Komunikasi Osis PP Nurul Jadid'] },
                ].map((e, i) => (
                  <div key={i} className="card p-5">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{e.school}</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">{e.degree}</p>
                    <p className="mono text-xs text-gray-400 dark:text-gray-500 mt-1 mb-3">
                      <i className="ri-calendar-line mr-1"></i>{e.period}
                      {e.gpa && <span className="ml-3 text-emerald-500 font-semibold">{e.gpa}</span>}
                    </p>
                    <ul className="space-y-1.5">
                      {e.notes.map((n, j) => (
                        <li key={j} className="text-xs text-gray-500 dark:text-gray-400 flex gap-2">
                          <span className="text-emerald-400 shrink-0">›</span>{n}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Cert */}
                <div className="card p-5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-500 mb-3"><i className="ri-award-line"></i></div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">Full-Stack Developer with Laravel: Web Travel</p>
                  <p className="text-xs text-gray-400 mt-1">Certification</p>
                </div>
                {/* Award */}
                <div className="card p-5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-500 mb-3"><i className="ri-medal-line"></i></div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">Finalis Lomba UI/UX Competition</p>
                  <p className="text-xs text-gray-400 mt-1">Honor & Award</p>
                </div>
                {/* Languages */}
                <div className="card p-5">
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Languages</p>
                  {[{ l: 'Bahasa Indonesia', note: 'Native', pct: 100 }, { l: 'English', note: 'Limited', pct: 40 }].map(x => (
                    <div key={x.l} className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{x.l}</span>
                        <span className="text-gray-400">{x.note}</span>
                      </div>
                      <div className="h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: `${x.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ════════════ PAGE 4: CONTACT ════════════ */}
          <div
            className="page-section"
            ref={el => sectionRefs.current[4] = el}
            style={sectionStyle(4)}
          >
            <div className="min-h-screen flex flex-col justify-center pt-14 max-w-4xl mx-auto px-6">
              <div className="flex items-baseline gap-4 mb-12">
                <span className="mono text-4xl font-black text-gray-100 dark:text-gray-900 select-none">04</span>
                <div>
                  <span className="section-label">Let's Talk</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact</h2>
                </div>
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-4">
                Punya project<br/>
                <span className="g-text">menarik?</span>
              </h3>
              <p className="text-gray-400 dark:text-gray-500 font-light text-lg mb-10 max-w-md">
                Saya siap berkolaborasi. Feel free to reach out anytime.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-16">
                {[
                  { id: 'c-email', icon: 'ri-mail-line',   label: 'rjndla@gmail.com',    href: 'mailto:rjndla@gmail.com',           primary: true },
                  { id: 'c-phone', icon: 'ri-phone-line',  label: '0895-1632-5685',        href: 'tel:089516325685',                  primary: false },
                  { id: 'c-web',   icon: 'ri-global-line', label: 'framecode.web.id',      href: 'https://framecode.web.id/',         primary: false },
                  { id: 'c-li',    icon: 'ri-linkedin-box-line', label: 'LinkedIn',        href: 'https://www.linkedin.com/in/rifjan-jundila/', primary: false },
                ].map(c => (
                  <a key={c.id} id={c.id} href={c.href}
                     target={c.href.startsWith('http') ? '_blank' : undefined}
                     rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                     className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                       c.primary
                         ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-200/40 dark:shadow-emerald-900/20'
                         : 'card text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400'
                     }`}>
                    <i className={`${c.icon} text-base`}></i>
                    {c.label}
                  </a>
                ))}
              </div>

              {/* Footer inline */}
              <div className="border-t border-gray-100 dark:border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="mono text-sm g-text font-semibold">rj.dev</span>
                <p className="text-xs text-gray-400 dark:text-gray-600">© 2025 Rifjan Jundila · Probolinggo, Jawa Timur</p>
                <div className="flex gap-4">
                  {[
                    { id: 'f-li', icon: 'ri-linkedin-box-line', href: 'https://www.linkedin.com/in/rifjan-jundila/' },
                    { id: 'f-gh', icon: 'ri-github-line',        href: 'https://github.com/rifjan29' },
                    { id: 'f-ig', icon: 'ri-instagram-line',     href: 'https://www.instagram.com/designrj29/' },
                  ].map(s => (
                    <a key={s.id} id={s.id} href={s.href} target="_blank" rel="noreferrer"
                       className="text-gray-400 dark:text-gray-600 hover:text-emerald-500 transition-colors text-lg">
                      <i className={s.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>{/* /page-root */}

      </div>
    </div>
  );
}

function RootApp() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}

export default RootApp;