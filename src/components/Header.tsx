import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { Cpu, Disc } from 'lucide-react';

export const Header: React.FC = () => {
  const { scrollPercent, activeSection } = useScrollProgress();

  const scrollToSection = (id: string, fraction: number = 0) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (fraction > 0) {
      window.scrollTo({ top: el.offsetTop + el.offsetHeight * fraction, behavior: 'smooth' });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navBtn = (label: string, section: typeof activeSection, onClick: () => void) => (
    <button
      onClick={onClick}
      aria-label={`Scroll to ${label}`}
      aria-current={activeSection === section ? 'true' : undefined}
      className={`px-3 py-1.5 rounded-md transition-all cursor-pointer text-xs font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
        activeSection === section
          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold'
          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      <div className="bg-[#06080d]/90 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          aria-label="VERTEX REALITY - Return to top"
          className="flex items-center gap-3 cursor-pointer group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-[#06080d] rounded-[7px] flex items-center justify-center">
              <Disc className="w-4 h-4 text-cyan-400" aria-hidden="true" />
            </div>
          </div>
          <div>
            <span className="font-heading font-bold text-sm tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors block">
              VERTEX <span className="text-cyan-400">///</span> REALITY
            </span>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>SCROLL-DRIVEN EXPERIENCE</span>
            </div>
          </div>
        </button>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navBtn('01 BUILD', 'ch1', () => scrollToSection('cinematic-journey', 0))}
          <span className="text-slate-700 text-xs" aria-hidden="true">/</span>
          {navBtn('TRANSITION', 'transition', () => scrollToSection('cinematic-journey', 0.48))}
          <span className="text-slate-700 text-xs" aria-hidden="true">/</span>
          {navBtn('02 ENTER', 'ch2', () => scrollToSection('cinematic-journey', 0.65))}
          <span className="text-slate-700 text-xs" aria-hidden="true">/</span>
          {navBtn('FINALE', 'finale', () => scrollToSection('finale'))}
        </nav>

        {/* Right badges */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
            <span>GOP=1</span>
          </div>
        </div>
      </div>

      {/* Progress line */}
      <div className="h-[2px] w-full bg-slate-900" role="progressbar" aria-valuenow={Math.round(scrollPercent)} aria-valuemin={0} aria-valuemax={100} aria-label="Page Scroll Progress">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-400 transition-all duration-75"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>
    </header>
  );
};
