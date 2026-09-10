import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Noel Garcia",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <p className="muted">
        Everything below is code I wrote myself, warts and all.
      </p>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.slug}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.stack.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                className="underline-link"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
              {project.live && (
                <a
                  className="underline-link"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
