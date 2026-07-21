import React, { useState } from 'react';
import { useDarkMode } from './DarkModeContext';

const LINKS = [
  { name: 'About',      idx: 0 },
  { name: 'Experience', idx: 1 },
  { name: 'Projects',   idx: 2 },
  { name: 'Education',  idx: 3 },
  { name: 'Games',      idx: 4 },
  { name: 'Contact',    idx: 5 },
];

export default function Navbar({ active, goTo }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNav = (idx) => {
    goTo(idx);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/90 dark:bg-[#090d16]/90 backdrop-blur-xl border-b border-slate-200/70 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleMobileNav(0)} className="mono text-sm font-medium text-gray-900 dark:text-white">
          rj<span className="g-text">.</span>dev
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <button
              key={l.name}
              onClick={() => goTo(l.idx)}
              className={`nav-link ${active === l.idx ? 'active' : ''}`}
            >
              {l.name}
            </button>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            id="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all"
          >
            {isDarkMode
              ? <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
                </svg>
              : <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
            }
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-emerald-500 transition-colors"
          >
            <i className={isOpen ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-slate-200/80 dark:border-white/10 bg-slate-50/95 dark:bg-[#090d16]/95 px-6 py-4 flex flex-col gap-3 shadow-xl">
          {LINKS.map(l => (
            <button
              key={l.name}
              onClick={() => handleMobileNav(l.idx)}
              className={`text-left text-sm font-medium py-1.5 transition-colors font-mono flex items-center justify-between ${
                active === l.idx ? 'text-emerald-500 font-bold' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              <span>{l.name}</span>
              {active === l.idx && <span className="text-xs text-emerald-500">●</span>}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
