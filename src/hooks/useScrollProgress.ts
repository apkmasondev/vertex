import { useState, useEffect, useRef } from 'react';

export function useScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState<'hero' | 'ch1' | 'transition' | 'ch2' | 'finale'>('hero');

  const prevPercentRef = useRef(-1);
  const prevSectionRef = useRef<string>('');

  useEffect(() => {
    const updateProgress = () => {
      const winScroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      const scrolled = height > 0 ? Math.min(100, Math.max(0, (winScroll / height) * 100)) : 0;
      const currentPercent = Math.round(scrolled);

      if (currentPercent !== prevPercentRef.current) {
        prevPercentRef.current = currentPercent;
        setScrollPercent(currentPercent);
      }

      const journeyEl = document.getElementById('cinematic-journey');
      const finaleEl = document.getElementById('finale');

      let nextSection: 'hero' | 'ch1' | 'transition' | 'ch2' | 'finale' = 'hero';

      if (finaleEl && winScroll >= finaleEl.offsetTop - 400) {
        nextSection = 'finale';
      } else if (journeyEl) {
        const journeyTop = journeyEl.offsetTop;
        const journeyHeight = journeyEl.offsetHeight;
        const scrollableDist = journeyHeight - window.innerHeight;
        const relProgress = scrollableDist > 0 ? (winScroll - journeyTop) / scrollableDist : 0;

        if (relProgress < 0) {
          nextSection = 'hero';
        } else if (relProgress < 0.42) {
          nextSection = 'ch1';
        } else if (relProgress < 0.58) {
          nextSection = 'transition';
        } else {
          nextSection = 'ch2';
        }
      }

      if (nextSection !== prevSectionRef.current) {
        prevSectionRef.current = nextSection;
        setActiveSection(nextSection);
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return { scrollPercent, activeSection };
}

