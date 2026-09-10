export type Project = {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  repo: string;
  live?: string;
};

// Only projects I've written myself. Add new ones here as they're built.
export const projects: Project[] = [
  {
    name: "PolyLens",
    slug: "polylens",
    description:
      "AI-powered prediction market and market intelligence platform for wallet analytics, opportunity discovery, arbitrage detection, and quantitative research.",
    stack: ["TypeScript"],
    repo: "https://github.com/GNL324/polylens",
  },
  {
    name: "SportsEdge",
    slug: "sportsedge",
    description: "Sportsbook arbitrage and edge tracker.",
    stack: ["TypeScript"],
    repo: "https://github.com/GNL324/sportsedge",
  },
  {
    name: "Kettlebell Workout",
    slug: "kettlebell-workout",
    description: "Complete kettlebell workout app with 27 exercises.",
    stack: ["TypeScript"],
    repo: "https://github.com/GNL324/kettlebell-workout",
  },
];
