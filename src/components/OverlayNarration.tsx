import React from 'react';
import { StoryStep } from '../data/story';
import { Crosshair, Sliders, ShieldCheck } from 'lucide-react';

interface OverlayNarrationProps {
  chapterNumber: string;
  chapterTitle: string;
  steps: StoryStep[];
  currentStepIndex: number;
  progress: number;
}

const ACCENT_MAP = {
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500',
    border: 'border-cyan-500/40',
    badge: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50',
    glow: 'shadow-cyan-500/20',
  },
  violet: {
    text: 'text-purple-400',
    bg: 'bg-purple-500',
    border: 'border-purple-500/40',
    badge: 'bg-purple-950/80 text-purple-300 border-purple-500/50',
    glow: 'shadow-purple-500/20',
  },
  emerald: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500',
    border: 'border-emerald-500/40',
    badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50',
    glow: 'shadow-emerald-500/20',
  },
  amber: {
    text: 'text-amber-400',
    bg: 'bg-amber-500',
    border: 'border-amber-500/40',
    badge: 'bg-amber-950/80 text-amber-300 border-amber-500/50',
    glow: 'shadow-amber-500/20',
  },
} as const;

export const OverlayNarration: React.FC<OverlayNarrationProps> = ({
  chapterNumber,
  chapterTitle,
  steps,
  currentStepIndex,
  progress,
}) => {
  const currentStep = steps[currentStepIndex] ?? steps[0];
  const accent = ACCENT_MAP[currentStep.accentColor] ?? ACCENT_MAP.cyan;

  // Jump to specific step by scrolling window
  const scrollToStep = (step: StoryStep) => {
    const journeyEl = document.getElementById('cinematic-journey');
    if (!journeyEl) return;
    const targetProgress = (step.progressRange[0] + step.progressRange[1]) / 2;
    const targetY = journeyEl.offsetTop + journeyEl.offsetHeight * targetProgress;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between px-4 sm:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-10 pt-20 sm:pt-24 lg:pt-24">
      
      {/* Top Viewport HUD Bar */}
      <div className="flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
            <span className="font-semibold tracking-wider">{chapterNumber}</span>
          </div>
          <span className="hidden sm:inline font-heading font-bold text-xs sm:text-sm text-slate-300 tracking-widest uppercase">
            {chapterTitle}
          </span>
        </div>

        {/* Telemetry Reticle & Progress */}
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-md bg-slate-950/90 border border-slate-800/80 text-[11px]">
            <Crosshair className="w-3.5 h-3.5 text-purple-400 animate-[spin_4s_linear_infinite]" aria-hidden="true" />
            <span>RENDER VIEWPORT // 1920x1080</span>
          </div>
          <div className="px-3 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-slate-200 font-semibold shadow-inner">
            SCRUB: <span className="text-cyan-400">{Math.round(progress * 100)}%</span>
          </div>
        </div>
      </div>

      {/* Center 3D Viewport Narrative Card */}
      <div className="my-auto max-w-xl self-start pointer-events-auto">
        <div className={`glass-panel-glow p-6 sm:p-8 rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-300 ${accent.glow} border border-slate-700/60`}>
          
          {/* Futuristic Corner Viewfinder Brackets */}
          <div className="hud-corner hud-corner-tl" aria-hidden="true" />
          <div className="hud-corner hud-corner-tr" aria-hidden="true" />
          <div className="hud-corner hud-corner-bl" aria-hidden="true" />
          <div className="hud-corner hud-corner-br" aria-hidden="true" />

          {/* Scanline Effect */}
          <div className="scanline-effect opacity-20" aria-hidden="true" />

          {/* Header Badge */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-[11px] font-mono tracking-wider uppercase font-bold shadow-sm ${accent.badge}`}>
              <Sliders className="w-3 h-3" aria-hidden="true" />
              <span>{currentStep.hudLabel}</span>
            </div>
            
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
              <span>KEYFRAME VERIFIED</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight leading-snug">
            {currentStep.title}
          </h3>

          {/* Subtitle */}
          {currentStep.subtitle && (
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              {currentStep.subtitle}
            </p>
          )}

          {/* Interactive Step Timeline Dots */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              {steps.map((step, i) => {
                const isActive = i === currentStepIndex;
                return (
                  <button
                    key={step.id}
                    onClick={() => scrollToStep(step)}
                    aria-label={`Jump to stage: ${step.hudLabel}`}
                    title={step.title}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive
                        ? `w-8 ${accent.bg} shadow-lg shadow-cyan-500/40`
                        : i < currentStepIndex
                        ? 'w-3 bg-slate-500 hover:bg-slate-400'
                        : 'w-3 bg-slate-800 hover:bg-slate-700'
                    }`}
                  />
                );
              })}
            </div>

            <span className="font-mono text-xs text-slate-400 font-semibold pl-2 shrink-0">
              {String(currentStepIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar & Telemetry Footer */}
      <div className="flex items-end justify-between pointer-events-auto">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400">
          <span>PIPELINE:</span>
          <span className="text-cyan-400 font-semibold uppercase">{chapterTitle}</span>
        </div>

        <div className="w-full sm:w-64 flex flex-col gap-1.5 font-mono text-[11px] text-slate-400">
          <div className="flex justify-between font-semibold">
            <span>MASTER TIMELINE</span>
            <span className={accent.text}>{Math.round(progress * 100)}%</span>
          </div>
          <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/80 p-0.5">
            <div
              className={`h-full ${accent.bg} rounded-full transition-all duration-75`}
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
