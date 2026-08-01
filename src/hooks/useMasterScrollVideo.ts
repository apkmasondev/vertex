import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ALL_STEPS } from '../data/story';

gsap.registerPlugin(ScrollTrigger);

export function useMasterScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const [progress, setProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isBridgeActive, setIsBridgeActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Refs for tracking active state without triggering excessive re-renders
  const prevStepIdxRef = useRef(-1);
  const prevBridgeRef = useRef(false);
  const prevProgressRef = useRef(-1);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  const updateFromProgress = useCallback((p: number, v1: HTMLVideoElement, v2: HTMLVideoElement, dur1: number, dur2: number) => {
    // 1. Video 1 scrub: progress [0, 0.45] -> full video 1
    if (p <= 0.48) {
      const t1 = Math.min(1, p / 0.45) * dur1;
      if (Math.abs(v1.currentTime - t1) > 0.02) {
        v1.currentTime = t1;
      }
    } else {
      if (v1.currentTime < dur1 - 0.1) {
        v1.currentTime = dur1;
      }
    }

    // 2. Video 2 scrub: progress [0.55, 1.0] -> full video 2
    if (p >= 0.52) {
      const t2 = Math.min(1, Math.max(0, (p - 0.55) / 0.45)) * dur2;
      if (Math.abs(v2.currentTime - t2) > 0.02) {
        v2.currentTime = t2;
      }
    } else {
      if (v2.currentTime > 0.1) {
        v2.currentTime = 0;
      }
    }

    // 3. Direct DOM Opacity manipulation (avoids 60fps React state re-renders)
    let v1Op = 0;
    let v2Op = 0;
    let bridgeActive = false;

    if (p < 0.42) {
      v1Op = 1;
      v2Op = 0;
      bridgeActive = false;
    } else if (p <= 0.58) {
      const fade = (p - 0.42) / 0.16;
      v1Op = 1 - fade;
      v2Op = fade;
      bridgeActive = true;
    } else {
      v1Op = 0;
      v2Op = 1;
      bridgeActive = false;
    }

    v1.style.opacity = String(v1Op);
    v2.style.opacity = String(v2Op);

    // 4. Deduplicated React state updates
    if (bridgeActive !== prevBridgeRef.current) {
      prevBridgeRef.current = bridgeActive;
      setIsBridgeActive(bridgeActive);
    }

    const roundedProgress = Math.round(p * 100) / 100;
    if (roundedProgress !== prevProgressRef.current) {
      prevProgressRef.current = roundedProgress;
      setProgress(p);
    }

    // 5. Active step index state update (only when changed)
    const idx = ALL_STEPS.findIndex(
      (s) => p >= s.progressRange[0] && p < s.progressRange[1]
    );
    const newIdx = idx !== -1 ? idx : p >= 1 ? ALL_STEPS.length - 1 : 0;
    if (newIdx !== prevStepIdxRef.current) {
      prevStepIdxRef.current = newIdx;
      setActiveStepIndex(newIdx);
    }
  }, []);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    const container = containerRef.current;
    if (!v1 || !v2 || !container) return;

    v1.pause();
    v2.pause();
    v1.muted = true;
    v2.muted = true;

    let isUnmounted = false;

    const setup = () => {
      if (isUnmounted) return;
      const dur1 = v1.duration;
      const dur2 = v2.duration;
      if (!dur1 || !dur2 || isNaN(dur1) || isNaN(dur2)) return;

      setIsLoaded(true);

      // Kill any previous ScrollTrigger instance before creating a new one
      if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }

      triggerRef.current = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: (self) => {
          updateFromProgress(self.progress, v1, v2, dur1, dur2);
        },
      });

      ScrollTrigger.refresh();
    };

    let loadedCount = 0;
    const onMeta = () => {
      loadedCount++;
      if (loadedCount >= 2) setup();
    };

    if (v1.readyState >= 1 && v2.readyState >= 1) {
      setup();
    } else {
      if (v1.readyState >= 1) loadedCount++;
      if (v2.readyState >= 1) loadedCount++;
      v1.addEventListener('loadedmetadata', onMeta);
      v2.addEventListener('loadedmetadata', onMeta);
    }

    // Window resize handler with debounce for responsive ScrollTrigger refreshes
    let resizeTimer: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      isUnmounted = true;
      v1.removeEventListener('loadedmetadata', onMeta);
      v2.removeEventListener('loadedmetadata', onMeta);
      window.removeEventListener('resize', handleResize);
      if (resizeTimer) clearTimeout(resizeTimer);
      if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }
    };
  }, [updateFromProgress]);

  return {
    containerRef,
    video1Ref,
    video2Ref,
    progress,
    activeStepIndex,
    isBridgeActive,
    isLoaded,
  };
}
