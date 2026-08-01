import React from 'react';
import { FINALE_DATA } from '../data/story';
import { RotateCcw, Sparkles, Cpu } from 'lucide-react';

export const Finale: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="finale"
      aria-label="Experiment Summary and Specs"
      className="relative min-h-screen bg-[#06080d] flex flex-col justify-between py-24 px-4 sm:px-8 lg:px-12 overflow-hidden cyber-grid border-t border-slate-800/80"
    >
      {/* Background glow */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-cyan-600/15 via-purple-600/15 to-transparent rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto w-full text-center pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 mb-8">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          <span>EXPERIMENT COMPLETE</span>
        </div>

        <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Built from data. <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent text-glow-cyan">
            Brought to life with motion.
          </span>
        </h2>

        <p className="mt-6 text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          {FINALE_DATA.description}
        </p>

        <div className="mt-10">
          <button
            onClick={scrollToTop}
            aria-label="Replay experience - return to top of page"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 text-black font-heading font-bold text-sm tracking-wider uppercase hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>{FINALE_DATA.ctaSecondary}</span>
          </button>
        </div>
      </div>

      {/* Stats + Tech */}
      <div className="max-w-5xl mx-auto w-full my-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FINALE_DATA.stats.map((stat, i) => (
            <div key={i} className="glass-panel p-5 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <span className="font-mono text-xs text-slate-500 uppercase">{stat.label}</span>
              <span className="mt-2 block font-heading font-bold text-2xl sm:text-3xl text-cyan-400 text-glow-cyan">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FINALE_DATA.techStack.map((tech, i) => (
            <div key={i} className="glass-panel p-5 rounded-xl border border-slate-800/80 flex items-start gap-3 hover:border-purple-500/40 transition-colors">
              <Cpu className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-200">{tech.name}</h3>
                <p className="mt-1 font-mono text-xs text-slate-400">{tech.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="max-w-5xl mx-auto w-full pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-600">
        <span>© 2026 FROM VERTEX TO REALITY</span>
        <span>SCROLL-DRIVEN CGI EXPERIMENT</span>
      </footer>
    </section>
  );
};
