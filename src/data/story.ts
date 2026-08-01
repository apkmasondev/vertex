export interface StoryStep {
  id: string;
  progressRange: [number, number];
  title: string;
  subtitle?: string;
  hudLabel: string;
  accentColor: 'cyan' | 'violet' | 'emerald' | 'amber';
}

// Chapter 1 steps mapped to [0.00, 0.42] of master timeline
export const CHAPTER_1_STEPS: StoryStep[] = [
  {
    id: "ch1-s1",
    progressRange: [0.00, 0.07],
    title: "Everything starts with points.",
    subtitle: "Raw vertices define spatial boundaries before form exists.",
    hudLabel: "01 — VERTICES",
    accentColor: "cyan",
  },
  {
    id: "ch1-s2",
    progressRange: [0.07, 0.14],
    title: "Vertices become structure.",
    subtitle: "Nodes connect into wireframe meshes and structural polygons.",
    hudLabel: "02 — TOPOLOGY",
    accentColor: "cyan",
  },
  {
    id: "ch1-s3",
    progressRange: [0.14, 0.21],
    title: "Geometry defines the world.",
    subtitle: "Surfaces subdivide into curvature and architectural volume.",
    hudLabel: "03 — GEOMETRY",
    accentColor: "violet",
  },
  {
    id: "ch1-s4",
    progressRange: [0.21, 0.28],
    title: "Materials add identity.",
    subtitle: "PBR shaders bring roughness, reflections and surface detail.",
    hudLabel: "04 — MATERIALS",
    accentColor: "violet",
  },
  {
    id: "ch1-s5",
    progressRange: [0.28, 0.35],
    title: "Light creates atmosphere.",
    subtitle: "Raytraced photons scatter through neon mist and metallic gloss.",
    hudLabel: "05 — LIGHTING",
    accentColor: "emerald",
  },
  {
    id: "ch1-s6",
    progressRange: [0.35, 0.42],
    title: "The scene becomes real.",
    subtitle: "Color grading, bloom and compositing finalize the render.",
    hudLabel: "06 — COMPOSITE",
    accentColor: "emerald",
  },
];

// Bridge [0.42, 0.58]
export const BRIDGE_STEP: StoryStep = {
  id: "bridge",
  progressRange: [0.42, 0.58],
  title: "The world is built.",
  subtitle: "Now enter it.",
  hudLabel: "TRANSITION",
  accentColor: "amber",
};

// Chapter 2 steps mapped to [0.58, 1.00] of master timeline
export const CHAPTER_2_STEPS: StoryStep[] = [
  {
    id: "ch2-s1",
    progressRange: [0.58, 0.65],
    title: "A finished scene is only the beginning.",
    subtitle: "The powertrain ignites. Static geometry becomes kinetic.",
    hudLabel: "01 — IGNITION",
    accentColor: "cyan",
  },
  {
    id: "ch2-s2",
    progressRange: [0.65, 0.72],
    title: "Motion gives it life.",
    subtitle: "Inertia propels the vehicle across wet neon asphalt.",
    hudLabel: "02 — VELOCITY",
    accentColor: "cyan",
  },
  {
    id: "ch2-s3",
    progressRange: [0.72, 0.79],
    title: "Speed sharpens perception.",
    subtitle: "Street lights streak into luminous trails.",
    hudLabel: "03 — MOTION BLUR",
    accentColor: "violet",
  },
  {
    id: "ch2-s4",
    progressRange: [0.79, 0.86],
    title: "Atmosphere takes over.",
    subtitle: "Plunging into a neon tunnel lined with pulsing laser rings.",
    hudLabel: "04 — TUNNEL",
    accentColor: "violet",
  },
  {
    id: "ch2-s5",
    progressRange: [0.86, 0.93],
    title: "You are no longer watching the world.",
    subtitle: "The barrier between observer and environment dissolves.",
    hudLabel: "05 — IMMERSION",
    accentColor: "emerald",
  },
  {
    id: "ch2-s6",
    progressRange: [0.93, 1.00],
    title: "You are inside it.",
    subtitle: "Geometry, light, speed — fused into a single experience.",
    hudLabel: "06 — REALITY",
    accentColor: "emerald",
  },
];

export const ALL_STEPS: StoryStep[] = [
  ...CHAPTER_1_STEPS,
  BRIDGE_STEP,
  ...CHAPTER_2_STEPS,
];

export const FINALE_DATA = {
  headline: "Built from data. Brought to life with motion.",
  description: "A cinematic scroll-driven experiment showing how digital worlds are constructed, rendered and experienced.",
  ctaPrimary: "View the process",
  ctaSecondary: "Replay experience",
  techStack: [
    { name: "React 19 + Vite", role: "Framework & bundler" },
    { name: "GSAP ScrollTrigger", role: "Scroll-driven video scrubbing" },
    { name: "Tailwind CSS v4", role: "Styling & layout system" },
    { name: "H.264 GOP=1", role: "All-keyframe video for instant seeking" },
  ],
  stats: [
    { label: "Scrub Precision", value: "1/24s" },
    { label: "Keyframe Ratio", value: "100%" },
    { label: "Sequences", value: "2" },
    { label: "Duration", value: "20s" },
  ],
};
