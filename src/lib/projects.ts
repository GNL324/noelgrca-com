export type Project = {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  repo: string;
  live?: string;
};

// Only projects I've written myself. Add new ones here as they're built.
export const projects: Project[] = [];
