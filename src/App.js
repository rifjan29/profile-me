/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import 'remixicon/fonts/remixicon.css';
import Navbar from './Navbar';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';

// ── DATA ─────────────────────────────────────────────────────────────────────

const SECTIONS = ['about', 'experience', 'projects', 'education', 'games', 'contact'];
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
    tags: ['Laravel', 'PostgreSQL', 'ERP', 'API', 'Docker'],
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
    tags: ['Full-Stack', 'Laravel', 'React.js', 'MySQL'],
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
    tags: ['PHP', 'Backend', 'Banking', 'REST API'],
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
    tags: ['Web Dev', 'Internship', 'PHP'],
  },
  {
    role: 'Web Developer',
    company: 'Greensoft',
    period: 'Feb 2022 – Mei 2022 · 4 mo',
    location: 'Bondowoso',
    current: false,
    points: ['Pengembangan web untuk produk dan proyek client.'],
    tags: ['Web Dev', 'HTML/CSS'],
  },
];

const projects = [
  { 
    name: 'ERP Internal System',     
    sub: 'PT Delta Adiguna',  
    desc: 'Sistem ERP untuk manajemen persediaan, pembelian, penjualan, akuntansi dan approval workflow.',  
    tags: ['Laravel', 'PostgreSQL', 'ERP'],
    apiRoute: 'GET /api/v1/erp/inventory',
    httpCode: '200 OK',
    curl: 'curl -H "Authorization: Bearer sanctum_token" https://api.delta.co.id/v1/erp/inventory'
  },
  { 
    name: 'Website Booking Kapal',   
    sub: 'Personal',          
    desc: 'Platform e-booking tiket kapal dengan integrasi payment gateway Midtrans.',                        
    tags: ['Laravel', 'Midtrans', 'MySQL'],
    apiRoute: 'POST /api/v1/booking/charge',
    httpCode: '201 Created',
    curl: 'curl -X POST https://shipbooking.id/api/v1/booking/charge -d \'{"ticket_id": 42}\''
  },
  { 
    name: 'Website Koperasi Madani', 
    sub: 'Company',           
    desc: 'Platform KSP digital untuk layanan simpan pinjam anggota secara online.',                          
    tags: ['Laravel', 'MySQL', 'Bootstrap'],
    apiRoute: 'GET /api/v1/koperasi/loans',
    httpCode: '200 OK',
    curl: 'curl https://koperasi-madani.com/api/v1/koperasi/loans'
  },
  { 
    name: 'Monitoring Lele (IoT)',   
    sub: 'Academic',          
    desc: 'Platform real-time terintegrasi IoT untuk memantau kondisi budidaya lele secara remote.',           
    tags: ['Laravel', 'IoT', 'Real-time'],
    apiRoute: 'GET /api/v1/telemetry/stream',
    httpCode: '200 OK',
    curl: 'curl -N https://iot-lele.net/api/v1/telemetry/stream'
  },
  { 
    name: 'Website Inventaris',      
    sub: 'Personal',          
    desc: 'Sistem manajemen inventaris digital untuk mencatat dan melacak aset organisasi.',                   
    tags: ['Laravel', 'MySQL', 'jQuery'],
    apiRoute: 'GET /api/v1/inventory/items',
    httpCode: '200 OK',
    curl: 'curl https://inventaris.app/api/v1/inventory/items'
  },
  { 
    name: 'Profile Kiddie School',   
    sub: 'Company',           
    desc: 'Website profil sekolah dengan CMS untuk galeri, program, dan berita sekolah.',                     
    tags: ['Laravel', 'CMS', 'Bootstrap'],
    apiRoute: 'GET /api/v1/posts/latest',
    httpCode: '200 OK',
    curl: 'curl https://kiddieschool.sch.id/api/v1/posts/latest'
  },
];

// ── BACKEND TERMINAL COMPONENT ───────────────────────────────────────────────

function TerminalShell() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'rj.dev interactive backend terminal v2.4 [x86_64-linux]' },
    { type: 'system', text: 'Type "help" or click quick commands below to explore.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr) => {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${rawCmd}` }];
    const cmd = rawCmd.toLowerCase();

    if (cmd === 'help') {
      newHistory.push({
        type: 'output',
        text: `Available CLI Commands:
  • help           - List available shell commands
  • cat skills.json- Inspect backend technology stack
  • curl profile   - Execute mock HTTP request for developer bio
  • php artisan    - Show backend REST API routes
  • docker ps      - List running container services
  • status         - View live server health & response metrics
  • clear          - Clear terminal buffer`
      });
    } else if (cmd === 'cat skills.json' || cmd === 'skills') {
      newHistory.push({
        type: 'output',
        text: JSON.stringify({
          name: "Rifjan Jundila",
          role: "Back End Developer",
          languages: ["PHP (Laravel)", "SQL (PostgreSQL/MySQL)", "JavaScript (Node/React)"],
          core_tools: ["Docker", "Git", "Sanctum Auth", "RESTful API", "ERP System"],
          database_skills: ["Query Optimization", "Indexing", "Role-based Security"]
        }, null, 2)
      });
    } else if (cmd.includes('curl') || cmd === 'about') {
      newHistory.push({
        type: 'output',
        text: `HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Cache-Control: max-age=0, private, must-revalidate

{
  "status": 200,
  "developer": "Rifjan Jundila",
  "location": "Probolinggo / Surabaya, Indonesia",
  "experience": "4+ years in Fullstack & Backend Development",
  "specialties": ["ERP Systems", "RESTful APIs", "PostgreSQL", "Laravel"],
  "contact": "rjndla@gmail.com"
}`
      });
    } else if (cmd.includes('artisan') || cmd === 'routes') {
      newHistory.push({
        type: 'output',
        text: `+--------+----------+----------------------------+-----------------------+
| Method | URI      | Name                       | Middleware            |
+--------+----------+----------------------------+-----------------------+
| GET    | api/v1   | api.v1.index               | api,auth:sanctum     |
| POST   | api/auth | api.auth.login             | api,guest            |
| GET    | api/erp  | api.erp.inventory.index    | api,auth:sanctum,role |
| POST   | api/erp  | api.erp.inventory.store    | api,auth:sanctum,role |
| GET    | api/ping | api.healthcheck            | api                  |
+--------+----------+----------------------------+-----------------------+`
      });
    } else if (cmd.includes('docker') || cmd === 'docker ps') {
      newHistory.push({
        type: 'output',
        text: `CONTAINER ID   IMAGE                 STATUS          PORTS
80b13c430b15   node:20-alpine        Up (healthy)    0.0.0.0:3001->3000/tcp  [portfolio_frontend]
982290d54477   postgres:16-alpine    Up 48 hours     0.0.0.0:5432->5432/tcp  [postgres_db_1]
41a29f8c1221   redis:7-alpine        Up 48 hours     0.0.0.0:6379->6379/tcp  [redis_cache_1]
69d123a49102   laravel-api:8.2       Up 48 hours     0.0.0.0:8000->8000/tcp  [laravel_api_node]`
      });
    } else if (cmd === 'status' || cmd === 'metrics') {
      newHistory.push({
        type: 'output',
        text: `Server Health Monitor:
  • Uptime        : 99.99% (342 days, 14 hrs)
  • DB Latency    : 8ms (PostgreSQL)
  • Cache Hit     : 98.5% (Redis)
  • Memory Usage  : 142MB / 1024MB
  • System Status : 🟢 OPERATIONAL (All systems nominal)`
      });
    } else if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      newHistory.push({
        type: 'output',
        text: `zsh: command not found: ${rawCmd}. Type "help" for a list of available commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div className="terminal-window my-3 w-full text-xs">
      {/* Top Bar */}
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <span className="terminal-dot bg-red-500"></span>
          <span className="terminal-dot bg-yellow-500"></span>
          <span className="terminal-dot bg-green-500"></span>
          <span className="ml-2 font-mono text-[11px] text-gray-400">bash - rifjan@dev-server:~</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block pulse-green"></span>
          REST API 200 OK
        </div>
      </div>

      {/* Terminal Content */}
      <div ref={terminalBodyRef} className="p-3 h-36 overflow-y-auto font-mono text-gray-200 dark:text-gray-300 space-y-1 leading-relaxed bg-gray-950/90 dark:bg-gray-950">
        {history.map((h, i) => (
          <div key={i} className={h.type === 'user' ? 'text-emerald-400 font-semibold' : h.type === 'system' ? 'text-cyan-400' : 'text-gray-300 whitespace-pre-wrap'}>
            {h.text}
          </div>
        ))}
      </div>

      {/* Quick Buttons & Input Form */}
      <div className="border-t border-gray-800 p-2 bg-gray-900/90 flex flex-col gap-1.5">
        <div className="flex flex-wrap gap-1.5 text-[10px]">
          {['help', 'cat skills.json', 'curl profile', 'php artisan', 'docker ps', 'status', 'clear'].map(c => (
            <button
              key={c}
              type="button"
              onClick={() => handleCommand(c)}
              className="px-2 py-0.5 bg-gray-800 hover:bg-emerald-950 hover:text-emerald-400 text-gray-300 rounded border border-gray-700 transition-colors font-mono"
            >
              {c}
            </button>
          ))}
        </div>
        <form onSubmit={onSubmit} className="flex items-center gap-2 font-mono text-xs">
          <span className="text-emerald-400 font-bold">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.stopPropagation()} // Stop scroll triggering while typing
            placeholder="Type command (e.g. help, status, curl profile)..."
            className="flex-1 bg-transparent text-gray-100 focus:outline-none placeholder-gray-500 font-mono"
          />
          <button type="submit" className="text-xs px-2.5 py-0.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-semibold transition-colors">
            Run
          </button>
        </form>
      </div>
    </div>
  );
}

// ── BACKEND SERVER METRICS WIDGET ───────────────────────────────────────────

function ServerMetricsWidget() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-3">
      <div className="card p-2.5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-0.5">
          <span>Uptime</span>
          <i className="ri-pulse-line text-emerald-400"></i>
        </div>
        <div className="text-sm font-mono font-bold text-emerald-500">99.99%</div>
        <div className="text-[10px] text-gray-400 mt-0.5">High Availability</div>
      </div>
      <div className="card p-2.5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-0.5">
          <span>DB Latency</span>
          <i className="ri-database-2-line text-cyan-400"></i>
        </div>
        <div className="text-sm font-mono font-bold text-cyan-400">8 ms</div>
        <div className="text-[10px] text-gray-400 mt-0.5">PostgreSQL Optimized</div>
      </div>
      <div className="card p-2.5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-0.5">
          <span>Cache Hit</span>
          <i className="ri-flashlight-line text-amber-400"></i>
        </div>
        <div className="text-sm font-mono font-bold text-amber-400">98.5%</div>
        <div className="text-[10px] text-gray-400 mt-0.5">Redis Buffer</div>
      </div>
      <div className="card p-2.5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-0.5">
          <span>Containers</span>
          <i className="ri-server-line text-purple-400"></i>
        </div>
        <div className="text-sm font-mono font-bold text-purple-400">4 Active</div>
        <div className="text-[10px] text-gray-400 mt-0.5">Docker Managed</div>
      </div>
    </div>
  );
}

// ── MINI GAME 1: SERVER LOAD BALANCER ARCADE ────────────────────────────────

function LoadBalancerGame() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cpuLoad, setCpuLoad] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [incomingReq, setIncomingReq] = useState(null);
  const [logs, setLogs] = useState([]);
  const timerRef = useRef(null);

  const NODES = [
    { id: 'laravel', name: 'Laravel API Node', icon: 'ri-code-s-slash-line', color: 'border-red-500 text-red-400' },
    { id: 'postgres', name: 'PostgreSQL DB Node', icon: 'ri-database-2-line', color: 'border-cyan-500 text-cyan-400' },
    { id: 'redis', name: 'Redis Cache Node', icon: 'ri-flashlight-line', color: 'border-amber-500 text-amber-400' },
  ];

  const spawnNextRequest = useCallback(() => {
    const REQ_TYPES_LIST = [
      { type: 'GET /api/v1/users', target: 'laravel', desc: 'REST API Request' },
      { type: 'SELECT * FROM erp_orders', target: 'postgres', desc: 'SQL Query Request' },
      { type: 'GET cache:session_key', target: 'redis', desc: 'In-Memory Cache Request' },
      { type: 'POST /api/v1/auth/login', target: 'laravel', desc: 'Auth Sanctum Request' },
      { type: 'INSERT INTO audit_logs', target: 'postgres', desc: 'DB Write Request' },
      { type: 'SET cache:token_expire', target: 'redis', desc: 'Redis TTL Store' },
    ];
    const randomReq = REQ_TYPES_LIST[Math.floor(Math.random() * REQ_TYPES_LIST.length)];
    setIncomingReq(randomReq);
  }, []);

  const startGame = () => {
    setScore(0);
    setCpuLoad(20);
    setGameActive(true);
    setLogs([{ id: 1, msg: 'Load Balancer Cluster Online. Dispatch incoming requests!', type: 'info' }]);
    spawnNextRequest();
  };

  useEffect(() => {
    if (!gameActive) return;
    timerRef.current = setInterval(() => {
      setCpuLoad(prev => {
        const next = prev + 4;
        if (next >= 100) {
          setGameActive(false);
          clearInterval(timerRef.current);
          setLogs(l => [{ id: Date.now(), msg: 'CRITICAL: CPU Overload 100%! System rebooted.', type: 'danger' }, ...l]);
          return 100;
        }
        return next;
      });
    }, 1200);

    return () => clearInterval(timerRef.current);
  }, [gameActive]);

  const handleRoute = (nodeId) => {
    if (!gameActive || !incomingReq) return;

    if (nodeId === incomingReq.target) {
      const added = 100;
      const newScore = score + added;
      setScore(newScore);
      if (newScore > highScore) setHighScore(newScore);
      setCpuLoad(prev => Math.max(10, prev - 12));
      setLogs(l => [{ id: Date.now(), msg: `✓ Routed "${incomingReq.type}" to ${nodeId.toUpperCase()} (200 OK)`, type: 'success' }, ...l.slice(0, 4)]);
      spawnNextRequest();
    } else {
      setCpuLoad(prev => Math.min(100, prev + 18));
      setLogs(l => [{ id: Date.now(), msg: `❌ Wrong target for "${incomingReq.type}". CPU load spiked!`, type: 'danger' }, ...l.slice(0, 4)]);
    }
  };

  return (
    <div className="game-card p-4 sm:p-5 relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-gray-700/50 pb-3">
        <div>
          <span className="mono text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Mini-Game 1</span>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <i className="ri-server-line text-emerald-400"></i> Server Load Balancer Arcade
          </h3>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs">
          <div>
            <span className="text-gray-400">Score:</span>{' '}
            <span className="text-emerald-400 font-bold text-base">{score}</span>
          </div>
          <div>
            <span className="text-gray-400">High Score:</span>{' '}
            <span className="text-amber-400 font-bold text-base">{highScore}</span>
          </div>
        </div>
      </div>

      {/* CPU Load Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs font-mono mb-1">
          <span className="text-gray-300">Cluster CPU Load</span>
          <span className={cpuLoad > 75 ? 'text-red-400 font-bold animate-pulse' : 'text-emerald-400 font-bold'}>{cpuLoad}%</span>
        </div>
        <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
          <div
            className={`h-full transition-all duration-300 ${
              cpuLoad > 85 ? 'bg-red-500' : cpuLoad > 60 ? 'bg-amber-500' : 'bg-emerald-500'
            }`}
            style={{ width: `${cpuLoad}%` }}
          />
        </div>
      </div>

      {/* Game Play Area */}
      {!gameActive ? (
        <div className="text-center py-6 sm:py-8 border-2 border-dashed border-gray-700/60 rounded-xl bg-gray-900/40">
          <i className="ri-gamepad-line text-4xl text-emerald-400 mb-2 inline-block float-subtle"></i>
          <h4 className="text-base font-bold text-white">Route Incoming Web Requests</h4>
          <p className="text-xs text-gray-400 max-w-md mx-auto mt-1 mb-4">
            Click the matching server node (Laravel API, PostgreSQL DB, or Redis Cache) to route incoming traffic before CPU load reaches 100%!
          </p>
          <button
            type="button"
            onClick={startGame}
            className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-900/30 transition-all"
          >
            Start Load Balancer
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Incoming Request Box */}
          <div className="bg-gray-900 border-2 border-emerald-500/40 rounded-xl p-3 text-center shadow-lg shadow-emerald-950/40">
            <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase">INCOMING REQUEST</span>
            <div className="text-base font-mono font-bold text-cyan-300 my-0.5">{incomingReq?.type}</div>
            <span className="text-xs text-gray-400">{incomingReq?.desc}</span>
          </div>

          {/* Target Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {NODES.map(node => (
              <button
                key={node.id}
                type="button"
                onClick={() => handleRoute(node.id)}
                className={`p-3 bg-gray-900/80 hover:bg-gray-800 border-2 ${node.color} rounded-xl flex flex-col items-center gap-1 transition-all transform hover:-translate-y-1`}
              >
                <i className={`${node.icon} text-xl`}></i>
                <span className="font-mono text-xs font-bold">{node.name}</span>
                <span className="text-[10px] text-gray-400">Route Here</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Terminal Log Output */}
      <div className="mt-4 p-2.5 bg-gray-950 rounded-lg border border-gray-800 font-mono text-[10px] h-16 overflow-y-auto space-y-0.5">
        {logs.map(l => (
          <div key={l.id} className={l.type === 'success' ? 'text-emerald-400' : l.type === 'danger' ? 'text-red-400' : 'text-cyan-400'}>
            {l.msg}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MINI GAME 2: BUG SMASHER & HTTP CODE TRIVIA ──────────────────────────────

function BugSmasherGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [currentBug, setCurrentBug] = useState(null);
  const [message, setMessage] = useState('');
  const timerRef = useRef(null);

  const spawnBug = useCallback(() => {
    const BUGS_LIST = [
      { title: '500 Internal Server Error', fix: 'Fix Exception Handler', options: ['Fix Exception Handler', 'Ignore Log', 'Drop Database', 'Restart Client'] },
      { title: 'N+1 Query Performance Leak', fix: 'Add Eager Loading (with)', options: ['Add Eager Loading (with)', 'Add Sleep()', 'Duplicate Query', 'Close Browser'] },
      { title: '401 Unauthorized Bearer Token', fix: 'Refresh Sanctum Token', options: ['Refresh Sanctum Token', 'Bypass Middleware', 'Hardcode Password', 'Delete User'] },
      { title: 'PostgreSQL Connection Timeout', fix: 'Increase DB Connection Pool', options: ['Increase DB Connection Pool', 'Kill Server', 'Clear LocalStorage', 'Use Flat File'] },
      { title: 'Redis Cache Memory Full', fix: 'Flush Expired Keys (TTL)', options: ['Flush Expired Keys (TTL)', 'Restart Router', 'Disable Cache', 'Format Disk'] },
    ];
    const randomBug = BUGS_LIST[Math.floor(Math.random() * BUGS_LIST.length)];
    setCurrentBug(randomBug);
  }, []);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setMessage('Game Started! Select the correct backend fix.');
    spawnBug();
  };

  useEffect(() => {
    if (!gameActive) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setGameActive(false);
          setMessage(`Game Over! Final Score: ${score}`);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [gameActive, score]);

  const handleFix = (option) => {
    if (!gameActive || !currentBug) return;

    if (option === currentBug.fix) {
      setScore(s => s + 150);
      setMessage(`✓ Bug Fixed! (+150 pts)`);
      spawnBug();
    } else {
      setScore(s => Math.max(0, s - 50));
      setMessage(`❌ Incorrect fix! (-50 pts)`);
    }
  };

  return (
    <div className="game-card p-6 relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-gray-700/50 pb-4">
        <div>
          <span className="mono text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Mini-Game 2</span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <i className="ri-bug-2-line text-cyan-400"></i> Backend Bug Smasher & HTTP Trivia
          </h3>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs">
          <div>
            <span className="text-gray-400">Time Left:</span>{' '}
            <span className={timeLeft < 10 ? 'text-red-400 font-bold text-base animate-pulse' : 'text-cyan-400 font-bold text-base'}>{timeLeft}s</span>
          </div>
          <div>
            <span className="text-gray-400">Score:</span>{' '}
            <span className="text-emerald-400 font-bold text-base">{score}</span>
          </div>
        </div>
      </div>

      {!gameActive ? (
        <div className="text-center py-10 border-2 border-dashed border-gray-700/60 rounded-xl bg-gray-900/40">
          <i className="ri-bug-line text-5xl text-cyan-400 mb-3 inline-block float-subtle"></i>
          <h4 className="text-lg font-bold text-white">Fix Backend Bugs Under 30 Seconds</h4>
          <p className="text-xs text-gray-400 max-w-md mx-auto mt-1 mb-5">
            Identify the correct architectural fix for database queries, Sanctum auth tokens, and server exceptions!
          </p>
          <button
            type="button"
            onClick={startGame}
            className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/30 transition-all"
          >
            Start Bug Smasher
          </button>
          {message && <div className="mt-4 text-xs font-mono text-amber-400">{message}</div>}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-gray-900 border-2 border-red-500/50 rounded-xl p-4 text-center">
            <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider">ACTIVE BACKEND BUG</span>
            <div className="text-lg font-mono font-bold text-red-300 my-1">{currentBug?.title}</div>
            <span className="text-xs text-gray-400">Select the correct solution to patch:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentBug?.options.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleFix(opt)}
                className="p-3 bg-gray-900 hover:bg-emerald-950 hover:border-emerald-500 border border-gray-700 rounded-xl font-mono text-xs text-gray-200 hover:text-emerald-400 transition-all text-left flex items-center justify-between"
              >
                <span>{opt}</span>
                <i className="ri-arrow-right-s-line text-gray-500"></i>
              </button>
            ))}
          </div>

          <div className="text-center font-mono text-xs text-emerald-400 font-semibold">{message}</div>
        </div>
      )}
    </div>
  );
}

// ── MAIN APP ENGINE ──────────────────────────────────────────────────────────

function App() {
  const { isDarkMode } = useDarkMode();

  const activeRef    = useRef(0);
  const lockRef      = useRef(false);
  const touchStartY  = useRef(null);
  const sectionRefs  = useRef([]);

  const [active, setActive] = useState(0);
  const [activeGameTab, setActiveGameTab] = useState('loadbalancer');

  const goTo = useCallback((idx) => {
    if (lockRef.current || idx < 0 || idx >= TOTAL) return;
    const prev = activeRef.current;
    if (idx === prev) return;

    lockRef.current = true;
    activeRef.current = idx;
    setActive(idx);

    const el = sectionRefs.current[idx];
    if (el) el.scrollTop = 0;

    setTimeout(() => { lockRef.current = false; }, 800);
  }, []);

  // Wheel handler
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

  // Touch handler
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

  // Keyboard handler
  useEffect(() => {
    const onKey = (e) => {
      // Don't trigger page transition if user is typing inside input or textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goTo(activeRef.current + 1); }
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); goTo(activeRef.current - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo]);

  const sectionStyle = (i) => ({
    transform: `translateY(${(i - active) * 100}%)`,
    opacity: i === active ? 1 : 0,
    visibility: i === active ? 'visible' : 'hidden',
    pointerEvents: i === active ? 'auto' : 'none',
    zIndex: i === active ? 10 : i > active ? 5 : 2,
    transition: 'transform 0.75s cubic-bezier(0.86, 0, 0.07, 1), opacity 0.4s ease, visibility 0.4s ease',
  });

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-slate-50 dark:bg-[#090d16] text-slate-800 dark:text-white transition-colors duration-300">

        {/* Top progress bar */}
        <div id="page-progress" style={{ width: `${((active + 1) / TOTAL) * 100}%` }} />

        {/* Background blobs */}
        <div id="parallax-bg" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>

        {/* Navbar */}
        <Navbar active={active} goTo={goTo} />

        {/* Right dot navigation */}
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

        {/* Page Container */}
        <div id="page-root">

          {/* ════════════ PAGE 0: ABOUT ════════════ */}
          <div
            className="page-section"
            ref={el => sectionRefs.current[0] = el}
            style={sectionStyle(0)}
          >
            <div className="min-h-screen flex flex-col justify-start pt-20 pb-20 max-w-4xl mx-auto px-6">
              <span className="section-label fade-up">Back End Developer & System Architect —</span>

              <h1 className="fade-up-2 mt-4 text-5xl md:text-7xl font-black tracking-tight leading-none">
                Rifjan<br/>
                <span className="g-text">Jundila</span>
                <span className="cursor text-emerald-400">_</span>
              </h1>

              <p className="fade-up-3 mt-5 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed font-light">
                Specialized in <span className="text-emerald-500 font-semibold dark:text-emerald-400">Laravel, PostgreSQL, RESTful APIs, & ERP Systems</span> ·{' '}
                <span className="text-gray-700 dark:text-gray-200 font-medium">4+ tahun</span> pengalaman · Probolinggo / Surabaya
              </p>

              {/* Skills Tags */}
              <div className="fade-up-3 mt-4 flex flex-wrap gap-2">
                {skills.map(s => <span key={s} className="tag font-mono">{s}</span>)}
              </div>

              {/* Live Server Metrics Widget */}
              <div className="fade-up-3">
                <ServerMetricsWidget />
              </div>

              {/* Interactive Terminal CLI */}
              <div className="fade-up-4">
                <TerminalShell />
              </div>

              {/* Hero Action Buttons */}
              <div className="fade-up-4 flex flex-wrap items-center gap-3 mt-2">
                <a id="hero-email" href="mailto:rjndla@gmail.com"
                   className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-emerald-900/30">
                  <i className="ri-mail-send-line"></i> Contact Developer
                </a>
                {[
                  { id: 'lk', icon: 'ri-linkedin-box-line', href: 'https://www.linkedin.com/in/rifjan-jundila/', label: 'LinkedIn' },
                  { id: 'gh', icon: 'ri-github-line',        href: 'https://github.com/rifjan29',                label: 'GitHub' },
                  { id: 'wb', icon: 'ri-global-line',        href: 'https://framecode.web.id/',                  label: 'framecode.web.id' },
                ].map(l => (
                  <a key={l.id} id={`hero-${l.id}`} href={l.href} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors">
                    <i className={`${l.icon} text-base`}></i> {l.label}
                  </a>
                ))}
              </div>

              {/* Scroll hint */}
              <div className="fade-up-4 mt-8 flex items-center gap-3 text-gray-400 dark:text-gray-600">
                <div className="w-px h-8 bg-current"></div>
                <span className="mono text-[11px] tracking-widest uppercase">Scroll or use arrow keys to navigate</span>
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
              <div className="flex items-baseline gap-4 mb-10 sticky top-0 bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md py-3 -mx-6 px-6 z-10">
                <span className="mono text-4xl font-black text-gray-200 dark:text-gray-800 select-none">01</span>
                <div>
                  <span className="section-label">Work History</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="tl-line" />
                <div className="space-y-5">
                  {experiences.map((exp, i) => (
                    <div key={i} className="relative">
                      <div className={`absolute -left-6 top-5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-gray-950
                        ${exp.current ? 'bg-emerald-400' : 'bg-gray-400 dark:bg-gray-700'}`} />

                      <div className="card p-5">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{exp.role}</h3>
                            <p className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">{exp.company}</p>
                          </div>
                          {exp.current && (
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium">
                              Current Role
                            </span>
                          )}
                        </div>
                        <p className="mono text-xs text-gray-400 mb-3">
                          <i className="ri-calendar-line mr-1"></i>{exp.period}
                          <span className="mx-2">·</span>
                          <i className="ri-map-pin-line mr-1"></i>{exp.location}
                        </p>
                        <ul className="space-y-1 mb-3">
                          {exp.points.map((p, j) => (
                            <li key={j} className="text-xs text-gray-600 dark:text-gray-300 flex gap-2">
                              <span className="text-emerald-400 shrink-0">›</span>{p}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map(t => <span key={t} className="tag font-mono">{t}</span>)}
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
              <div className="flex items-baseline gap-4 mb-10 sticky top-0 bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md py-3 -mx-6 px-6 z-10">
                <span className="mono text-4xl font-black text-gray-200 dark:text-gray-800 select-none">02</span>
                <div>
                  <span className="section-label">System Architecture & Code</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((p, i) => (
                  <div key={i} className="card p-5 flex flex-col justify-between gap-3 group">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white shadow-sm">
                          <i className="ri-code-s-slash-line text-sm"></i>
                        </div>
                        <span className="mono text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                          {p.httpCode}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-tight group-hover:text-emerald-400 transition-colors">{p.name}</h3>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mb-1.5">{p.sub}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{p.desc}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-gray-950 p-2 rounded border border-gray-800 font-mono text-[10px] text-cyan-300 truncate">
                        {p.apiRoute}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {p.tags.map(t => <span key={t} className="tag font-mono">{t}</span>)}
                      </div>
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
              <div className="flex items-baseline gap-4 mb-10 sticky top-0 bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md py-3 -mx-6 px-6 z-10">
                <span className="mono text-4xl font-black text-gray-200 dark:text-gray-800 select-none">03</span>
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
                    <p className="mono text-xs text-gray-400 mt-1 mb-3">
                      <i className="ri-calendar-line mr-1"></i>{e.period}
                      {e.gpa && <span className="ml-3 text-emerald-500 font-semibold">{e.gpa}</span>}
                    </p>
                    <ul className="space-y-1.5">
                      {e.notes.map((n, j) => (
                        <li key={j} className="text-xs text-gray-500 dark:text-gray-300 flex gap-2">
                          <span className="text-emerald-400 shrink-0">›</span>{n}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card p-5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-500 mb-3"><i className="ri-award-line"></i></div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">Full-Stack Developer with Laravel: Web Travel</p>
                  <p className="text-xs text-gray-400 mt-1">Certification</p>
                </div>
                <div className="card p-5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-500 mb-3"><i className="ri-medal-line"></i></div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">Finalis Lomba UI/UX Competition</p>
                  <p className="text-xs text-gray-400 mt-1">Honor & Award</p>
                </div>
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

          {/* ════════════ PAGE 4: MINI GAMES ════════════ */}
          <div
            className="page-section"
            ref={el => sectionRefs.current[4] = el}
            style={sectionStyle(4)}
          >
            <div className="min-h-screen pt-20 pb-20 max-w-4xl mx-auto px-6">
              <div className="flex items-baseline gap-4 mb-6 sticky top-0 bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md py-3 -mx-6 px-6 z-10">
                <span className="mono text-4xl font-black text-gray-200 dark:text-gray-800 select-none">04</span>
                <div>
                  <span className="section-label">Interactive Playground</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Backend Mini Games</h2>
                </div>
              </div>

              {/* Game Tabs */}
              <div className="flex gap-3 mb-5 border-b border-gray-800 pb-3">
                <button
                  type="button"
                  onClick={() => setActiveGameTab('loadbalancer')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                    activeGameTab === 'loadbalancer'
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-950'
                      : 'bg-gray-800/60 text-gray-400 hover:text-white'
                  }`}
                >
                  <i className="ri-server-line"></i> Server Load Balancer
                </button>
                <button
                  type="button"
                  onClick={() => setActiveGameTab('bugsmasher')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                    activeGameTab === 'bugsmasher'
                      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-950'
                      : 'bg-gray-800/60 text-gray-400 hover:text-white'
                  }`}
                >
                  <i className="ri-bug-2-line"></i> Bug Smasher & HTTP Trivia
                </button>
              </div>

              {/* Active Game Display */}
              {activeGameTab === 'loadbalancer' ? <LoadBalancerGame /> : <BugSmasherGame />}
            </div>
          </div>

          {/* ════════════ PAGE 5: CONTACT ════════════ */}
          <div
            className="page-section"
            ref={el => sectionRefs.current[5] = el}
            style={sectionStyle(5)}
          >
            <div className="min-h-screen flex flex-col justify-start pt-20 pb-20 max-w-4xl mx-auto px-6">
              <div className="flex items-baseline gap-4 mb-12">
                <span className="mono text-4xl font-black text-gray-200 dark:text-gray-800 select-none">05</span>
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
                Saya siap berkolaborasi untuk arsitektur backend, RESTful API, & pengembangan ERP. Feel free to reach out anytime.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-16">
                {[
                  { id: 'c-email', icon: 'ri-mail-line',   label: 'rjndla@gmail.com',    href: 'mailto:rjndla@gmail.com',           primary: true },
                  { id: 'c-phone', icon: 'ri-whatsapp-line', label: '0895-1632-5685',    href: 'https://wa.me/6289516325685',      primary: false },
                  { id: 'c-web',   icon: 'ri-global-line', label: 'framecode.web.id',      href: 'https://framecode.web.id/',         primary: false },
                  { id: 'c-li',    icon: 'ri-linkedin-box-line', label: 'LinkedIn',        href: 'https://www.linkedin.com/in/rifjan-jundila/', primary: false },
                ].map(c => (
                  <a key={c.id} id={c.id} href={c.href}
                     target={c.href.startsWith('http') ? '_blank' : undefined}
                     rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                     className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                       c.primary
                         ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-900/30'
                         : 'card text-gray-400 hover:text-emerald-400'
                     }`}>
                    <i className={`${c.icon} text-base`}></i>
                    {c.label}
                  </a>
                ))}
              </div>

              {/* Footer inline */}
              <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="mono text-sm g-text font-semibold">rj.dev</span>
                <p className="text-xs text-gray-400 dark:text-gray-500">© 2026 Rifjan Jundila · Probolinggo / Surabaya, Jawa Timur</p>
                <div className="flex gap-4">
                  {[
                    { id: 'f-li', icon: 'ri-linkedin-box-line', href: 'https://www.linkedin.com/in/rifjan-jundila/' },
                    { id: 'f-gh', icon: 'ri-github-line',        href: 'https://github.com/rifjan29' },
                    { id: 'f-ig', icon: 'ri-instagram-line',     href: 'https://www.instagram.com/designrj29/' },
                  ].map(s => (
                    <a key={s.id} id={s.id} href={s.href} target="_blank" rel="noreferrer"
                       className="text-gray-400 hover:text-emerald-400 transition-colors text-lg">
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