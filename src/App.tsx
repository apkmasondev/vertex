import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MasterCinematicJourney } from './components/MasterCinematicJourney';
import { Finale } from './components/Finale';
import { NoiseOverlay } from './components/NoiseOverlay';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#06080d] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Film Grain Overlay */}
      <NoiseOverlay />

      {/* Fixed Navigation Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Single Master Pinned Cinematic Canvas (Chapter 1 + Match-Cut Bridge + Chapter 2) */}
      <MasterCinematicJourney />

      {/* Finale Section */}
      <Finale />
    </div>
  );
};

export default App;
