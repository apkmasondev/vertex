import React from 'react';
import { useMasterScrollVideo } from '../hooks/useMasterScrollVideo';
import { OverlayNarration } from './OverlayNarration';
import { ALL_STEPS } from '../data/story';
import { Loader2 } from 'lucide-react';

export const MasterCinematicJourney: React.FC = () => {
  const {
    containerRef,
    video1Ref,
    video2Ref,
    progress,
    activeStepIndex,
    isBridgeActive,
    isLoaded,
  } = useMasterScrollVideo();

  // Current chapter label
  let chapterNum = "01 · BUILD";
  let chapterTitle = "BUILD THE WORLD";

  if (progress >= 0.42 && progress <= 0.58) {
    chapterNum = "TRANSITION";
    chapterTitle = "GATEWAY";
  } else if (progress > 0.58) {
    chapterNum = "02 · ENTER";
    chapterTitle = "ENTER THE WORLD";
  }

  return (
    <div
      id="cinematic-journey"
      ref={containerRef}
      style={{ height: '800vh' }}
      className="relative w-full"
      aria-label="3D CGI Cinematic Scroll Sequence"
    >
      {/* Sticky viewport — CSS sticky handles pinning */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#06080d]">

        {/* Video 1 */}
        <video
          ref={video1Ref}
          src={`${import.meta.env.BASE_URL}videos/build-the-world-gop1.mp4`}
          preload="auto"
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-75"
          style={{ opacity: isLoaded ? 1 : 0.15 }}
        />

        {/* Video 2 */}
        <video
          ref={video2Ref}
          src={`${import.meta.env.BASE_URL}videos/enter-the-world-gop1.mp4`}
          preload="auto"
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-75"
          style={{ opacity: 0 }}
        />

        {/* Loading state */}
        {!isLoaded && (
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#06080d]/90 z-30"
            role="status"
            aria-live="polite"
          >
            <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" aria-hidden="true" />
            <span className="font-mono text-xs text-slate-400">Loading sequences…</span>
          </div>
        )}

        {/* Bridge overlay */}
        {isBridgeActive && (
          <div 
            className="absolute inset-0 z-[25] flex items-center justify-center pointer-events-none"
            aria-live="polite"
          >
            <div className="absolute inset-0 bg-[#06080d]/30" aria-hidden="true" />
            <div className="glass-panel-glow p-8 sm:p-10 rounded-2xl text-center max-w-lg relative z-10">
              <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
                The world is built.
              </h2>
              <p className="mt-3 font-heading font-bold text-xl sm:text-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Now enter it.
              </p>
            </div>
          </div>
        )}

        {/* Readability vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-[#06080d]/50 pointer-events-none z-10" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080d]/70 via-transparent to-transparent pointer-events-none z-10" aria-hidden="true" />

        {/* Narrative overlay */}
        <OverlayNarration
          chapterNumber={chapterNum}
          chapterTitle={chapterTitle}
          steps={ALL_STEPS}
          currentStepIndex={activeStepIndex}
          progress={progress}
        />
      </div>
    </div>
  );
};
