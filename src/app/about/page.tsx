import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Noel Garcia",
};

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>
        I&apos;m Noel Garcia. I&apos;m learning to code and studying computer
        science, and this site is where I&apos;m keeping a running record of
        that — what I&apos;m building, what I&apos;m learning, and how my work
        changes as I get more experience.
      </p>
      <p>
        The <a className="underline-link" href="/projects">projects</a> section
        only ever includes things I&apos;ve written myself. As I pick up new
        skills, this page and that list will keep changing to reflect it.
      </p>

      <h2 style={{ marginTop: "2rem" }}>Currently learning</h2>
      <div className="tag-list">
        <span className="tag">TypeScript</span>
        <span className="tag">React / Next.js</span>
      </div>

      <h2 style={{ marginTop: "1.5rem" }}>Elsewhere</h2>
      <p>
        <a
          className="underline-link"
          href="https://github.com/GNL324"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
