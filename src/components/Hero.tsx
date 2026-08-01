import React from 'react';
import { ChevronDown, Layers, Activity, ArrowDownRight, Sparkles, Cpu, Eye, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToJourney = () => {
    const el = document.getElementById('cinematic-journey');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-between px-4 sm:px-12 py-20 overflow-hidden bg-[#06080d]"
    >
      {/* 3D Perspective Grid */}
      <div className="perspective-grid" aria-hidden="true" />

      {/* Background Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-600/20 via-purple-600/20 to-pink-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" aria-hidden="true" />
      
      {/* HUD Borders / Technical Framing */}
      <div className="absolute inset-6 border border-slate-800/40 pointer-events-none z-0 hidden lg:block">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/50" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50" />
      </div>

      {/* Top Left Corner HUD */}
      <div className="absolute top-24 left-6 sm:left-12 hidden lg:flex flex-col gap-1 text-[10px] font-mono text-slate-500 border-l-2 border-cyan-500/40 pl-3 z-10" aria-hidden="true">
        <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
          <Cpu className="w-3 h-3" />
          <span>24 FPS · GOP=1</span>
        </div>
        <span>1920×1080 · H.264 KEYFRAMES</span>
        <span>SCROLL-DRIVEN VIEWPORT</span>
      </div>

      {/* Top Right Corner HUD */}
      <div className="absolute top-24 right-6 sm:right-12 hidden lg:flex flex-col items-end gap-1 text-[10px] font-mono text-slate-500 border-r-2 border-purple-500/40 pr-3 z-10" aria-hidden="true">
        <div className="flex items-center gap-1.5 text-purple-400 font-semibold">
          <Eye className="w-3 h-3" />
          <span>CINEMATIC PIPELINE</span>
        </div>
        <span>REACT 19 + GSAP ENGINE</span>
        <span>100% FLUID MATCH-CUT</span>
      </div>

      {/* Main Left-Aligned Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center flex-1 mt-16 lg:mt-0">
        
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-cyan-300 mb-6 w-fit shadow-xl shadow-cyan-950/30">
          <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" aria-hidden="true" />
          <span>SYS.INIT // CINEMATIC SCROLL EXPERIENCE</span>
        </div>

        {/* Main Title with Glitch */}
        <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tighter uppercase leading-[0.85] text-white flex flex-col items-start gap-1">
          <div className="flex items-end gap-4">
            <span className="font-mono text-xl sm:text-3xl text-slate-500 font-medium tracking-widest pb-2 sm:pb-4">FROM</span>
            <span className="text-glitch drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]" data-text="VERTEX">
              VERTEX
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2 lg:mt-4 pl-0 sm:pl-12 lg:pl-32">
            <span className="font-mono text-xl sm:text-3xl text-slate-500 font-medium tracking-widest">TO</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent text-glow-violet">
              REALITY
            </span>
          </div>
        </h1>

        {/* Subtitle & Specs Container */}
        <div className="mt-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pl-0 sm:pl-12 lg:pl-32">
          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light tracking-wide leading-relaxed border-l border-slate-700 pl-4">
            See how a digital world comes alive through keyframed motion, lighting, and spatial geometry. No templates, just raw rendering power.
          </p>

          {/* Tech Spec Cards */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start lg:items-end gap-3 font-mono text-[10px] sm:text-xs text-slate-400">
            <div className="flex items-center gap-2 px-3 py-1.5 glass-panel border border-slate-800 hover:border-cyan-500/50 hover:text-slate-200 transition-all">
              <Layers className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
              <span>2 SCRUBBABLE CHAPTERS</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 glass-panel border border-slate-800 hover:border-purple-500/50 hover:text-slate-200 transition-all">
              <Activity className="w-3.5 h-3.5 text-purple-400" aria-hidden="true" />
              <span>GSAP SCROLLTRIGGER</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 glass-panel border border-slate-800 hover:border-emerald-500/50 hover:text-slate-200 transition-all">
              <ArrowDownRight className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>GOP=1 KEYFRAME SCRUB</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 glass-panel border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 transition-all shadow-lg shadow-cyan-950/40">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
              <span>CREATED BY // APKMASON</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint button */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-center pb-8">
        <button
          onClick={scrollToJourney}
          aria-label="Scroll to begin cinematic experience"
          className="group flex flex-col items-center gap-2 text-[10px] font-mono text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <span className="tracking-widest uppercase font-semibold group-hover:text-cyan-300 transition-colors">
            INITIATE SEQUENCE
          </span>
          <div className="w-6 h-10 rounded-full border border-slate-700 group-hover:border-cyan-500/60 flex justify-center p-1.5 transition-all shadow-lg group-hover:shadow-cyan-500/20">
            <ChevronDown className="w-3 h-3 text-cyan-400 animate-bounce" aria-hidden="true" />
          </div>
        </button>
      </div>
    </section>
  );
};
